// "use client";

import * as React from 'react';
import { GetServerSideProps } from 'next';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { FC } from "react";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material"
import { Controller, useForm, useWatch } from "react-hook-form"
import { appConfigAtom, atomHistory, atomLangSpecifiConfig, availableLanguagesAtom, codeToJpnameAtom, defaultInput, getLanguageName, LangSpecifiConfig, nonAlphabeticalLanguageMenuItem, outputWindowAtom, TranslateConfig, translateCurrentAtom, TranslateLanguages } from "@/ts/jotai";
import cld from "cld";
import { APIURL, AppScriptResponse, emptyInput, translateIntoArray, TranslateMulti, translatePerLine } from "@/ts/k";
import { translateUI } from "@/ts/tagengo";
import { atom, useAtom } from "jotai";
import SelectInput from "@mui/material/Select/SelectInput";
import ISO6391 from "iso-639-1"
import fetcher from './api/fetcher';
import { concatBy, concatLines, gate, urlAddQuery, zip } from '@/ts/util';
import styles from "../styles/translate.module.css"
import MultiLineTranslation from './multiTranslation';
import { propconst } from '@/ts/css';

export default function Translate() {
  return(
    <div className="translate-main">
      <InputWindow />
      <OutputWindowParallel />
    </div>
  )
}



const InputWindow: FC = () => {
  const {getValues, formState: {isValid, errors}, control, handleSubmit} = useForm<TranslateMulti>({
    defaultValues: defaultInput
  })
  const useWatchValue = useWatch({control})
  const [appconfig] = useAtom(appConfigAtom)
  const translator = translateUI(appconfig.lang)
  const [transAtom, setTransAtom] = useAtom(translateCurrentAtom)
  const [langName, setLangName] = React.useState<string[]>([]);
  const [availableLanguages] = useAtom(availableLanguagesAtom)
  const [codeToJpname] = useAtom(codeToJpnameAtom)
  const getLangName = getLanguageName
  // (codeToJpname)
  const nonAlphaLang = nonAlphabeticalLanguageMenuItem
  (getLangName)



  const handleChange = (event: SelectChangeEvent<typeof langName>) => {
    const {
      target: { value },
    } = event;
    setLangName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const submit = (config: TranslateMulti) => {
    const realconfig = {...config, to: gate((k: typeof config.to) => k.length > 0)(defaultInput.to)(langName)}
    console.log("translateMulti:", realconfig)
    setTransAtom(realconfig)
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // cmd + Enter もしくは ctrl + Enter
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      console.log('key down cmd + Enter')
      submit(getValues())
    }
  }
  const handleKeyDownMenuItem: React.KeyboardEventHandler<HTMLAnchorElement> = event => {
    // cmd + Enter もしくは ctrl + Enter
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      console.log('key down cmd + Enter')
      submit(getValues())
    }
  }
  return(<>
    <Box
      component="form"
      onSubmit={handleSubmit(submit)}
      className="input-window"
    >
      <Controller
        control={control}
        name="from"
        render={({
          field
        })=>(
          <FormControl sx={{minWidth: 110}}>
            <InputLabel id="source-select-label">{translator("form.select.from.label")}</InputLabel>
            <Select {...field}
              // label={translator("form.select.from.label")}
              id="source-select"
              labelId='source-select-label'
              onKeyDown={handleKeyDown}
              MenuProps={{
                PaperProps: propconst.PaperProps
              }}
            >
              <MenuItem
                value=""
                key="auto"
              >auto</MenuItem>
              {availableLanguages.map(code => {
                const name = ISO6391.getName(code)
                return <MenuItem
                  value={code}
                  key={code}
                  sx={{whiteSpace: "normal"}}
                  >{nonAlphaLang(code)(appconfig.lang)}</MenuItem>
              }
              )}
            </Select>
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="text"
        rules={{
          required: translator("controller.required")
          ,maxLength: {
            message: translator("form length limit")
            ,value: appconfig.form.limit
          }
        }}
        render={({
          field, formState
        }) => (
          <TextField
            {...field}
            multiline
            sx={{
              width: "50%"
            }}
            fullWidth
            className={styles.textinput + " textfield"}
            onKeyDown={handleKeyDown}
            label={translator("input-label")}
            error={!!errors.text}
            helperText={errors.text && errors.text.message
              || !formState.isValid && "umm... invalid"
            }
          />
        )}
      />
      <Controller
        control={control}
        name="to"
        // rules={{
        //   required: translator("form.select.multi.required")
        // }}
        render={({
          field
        })=>(
          // <Select
          //   label={translateUI("target.lang.label")(appconfig.lang)}
          //   value={"targetLang"}
          // >
          //   {ISO6391.getAllNames().map(name => <MenuItem value={ISO6391.getCode(name)}>{name}</MenuItem>)}
          // </Select>
          <FormControl sx={{
            minWidth: "7em",
            maxWidth: "260px"
            }}>
            <InputLabel id="target-label">{translator("target.lang.label")}</InputLabel>
            <Select
              {...field}
              labelId="target-label"
              id="target-select"
              multiple
              value={langName}
              defaultValue={defaultInput.to}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              MenuProps={{
                PaperProps: propconst.PaperProps
              }}
              // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}

              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {availableLanguages.map((code) => (
                <MenuItem
                  key={code}
                  value={code}
                  sx={{whiteSpace: "normal"}}
                  // onKeyDown={handleKeyDownMenuItem}
                >
                  {nonAlphaLang(code)(appconfig.lang)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <Button type='submit' disabled={!isValid} >{translator("translate")}</Button>
    </Box>
    <InputPopout form={useWatchValue} />
  </>)
}

const InputPopout: FC<{form: Partial<TranslateMulti>}> = ({form}) => {
  const [showMe, setShowMe] = React.useState(true)
  return(<>
    {showMe
    ?<>
      <div className='src text'>{form.text??""}</div>
    </>
    :<></>}
  </>)
}

const OutputWindow: React.FC = () => {
  const [transAtom, setTransAtom] = useAtom(translateCurrentAtom)
  const [translations, setTranslations] = React.useState<Map<string, string>>(new Map())
  React.useEffect(()=>{
    const starttime = performance.now()
    Promise.all(
      transAtom.to.map(target => {
        const url = urlAddQuery("https://script.google.com/macros/s/AKfycbx23Gy7UiDJEfHi7--3cjgyVoAzlM2YRV8zEmiqjrZxNNW11ZbI7m_b7rnW1e02BrfJ-g/exec")(
        transAtom.from.length === 0
        ? {
          target,
          text: transAtom.text
        }
        : {
          source: transAtom.from, //指定しない場合自動で検知してくれる
          target,
          text: transAtom.text,
        })
        console.log(url)
        return fetcher<AppScriptResponse>(url)
      })
    ).then(ress => {
      const mapsrc: [string, string][] = ress.map((res, i) => {
        console.log(res)
        return [transAtom.to[i],
          res.code == 200 ? res.text : "error"]
      })
      setTranslations(new Map(mapsrc))
    })
    const endtime = performance.now()
    console.log("performance time", endtime-starttime)
  }, [transAtom])
  return(
    <Box className="output-window">
      output
      <Box>
        {Array.from(translations).map(([lang, trans])=> {
          const displayName = ISO6391.getName(lang)
          return(
            <Box sx={{display: 'flex'}} key={lang}>
              <Box className={styles.targetLang}>{displayName}</Box>
              <Box className="translation">{trans}</Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

const OutputWindowParallel: React.FC = () => {
  const [windowConfig, setWindowConfig] = useAtom(outputWindowAtom)
  const [transAtom, setTransAtom] = useAtom(translateCurrentAtom)
  const [translations, setTranslations] = React.useState<Map<string, string>>(new Map())
  const [appconfig] = useAtom(appConfigAtom)
  const [codeToJpname] = useAtom(codeToJpnameAtom)
  const [availableLanguages] = useAtom(availableLanguagesAtom)
  const [langSpecifiConfig] = useAtom(atomLangSpecifiConfig)
  const [history, setHistory] = useAtom(atomHistory)
  console.log("transAtom", transAtom)
  console.log("translations", translations)
  // const [translations, setTranslations] = React.useState<Map<string, {result: string, hasFinished: boolean}>>(new Map(transAtom.to.map(lang =>
  //   [lang, {result: "", hasFinished: false}])))
  const getLangName = getLanguageName
  // (codeToJpname)

  React.useEffect(()=>{
    if (transAtom.text.length === 0) return
    const starttime = performance.now()

    //not have to filter
    transAtom.to.filter(code => availableLanguages.includes(code)).forEach((target, i) => {
      // translatePerLine(transAtom)(target).then(res => {
      //   console.log("translatePerLine return", res)
      //   translations.set(target, res)
      //   setTranslations(new Map([...translations]))
      // })
      Promise.all(translateIntoArray(transAtom)(target)).then(res => {
        console.log("translateIntoArray return", res)
        translations.set(target, concatLines(res))
        history.set(transAtom.text,
          {
            srclang: transAtom.from.length==0? undefined: transAtom.from,
            trans: new Map([
            ...history.get(transAtom.text)?.trans??[],
            ...translations,
          ])
          })
        setTranslations(new Map([...translations]))
        setHistory(new Map([...history]))
      })
    })
    const endtime = performance.now()
    console.log("performance time", endtime-starttime)
  }, [transAtom])

  const get_translation = (target: string) => {
    const memo = translations??new Map().get(target)
    if (memo) return
    const url = urlAddQuery(APIURL)(
    transAtom.from.length === 0
    ? {
      target,
      text: transAtom.text
    }
    : {
      source: ISO6391.getCode(transAtom.from), //指定しない場合自動で検知してくれる
      target,
      text: transAtom.text,
    })
    console.log(url)
    const res = fetcher<AppScriptResponse>(url).then(r =>
      r.code == 200
      ?
        r.text
      : "error")
    res.then(d => {
      translations.set(target, d)
      setTranslations(new Map([...translations]))
    })
  }
  const display = (lang: string, translations: Map<string, string>) => {
    const fjyi = translations.get(lang)
    return fjyi===undefined
    ? "loading..."
    : fjyi
  }
  return transAtom.text.length === 0
  ? <></>
  : (
    <div className="output-window">
      <h1>{translateUI(appconfig.lang)("output")}</h1>
      <div className={styles.resultbox+" resultbox"}>
        {Array.from(transAtom.to).map(lang => {
          const displayName = getLangName(lang)(appconfig.lang)+` (${lang})`
          // get_translation(lang)
          return(
            <>
            {/* <div className="target-and-result" key={lang}>*/}
              <div className={styles.targetLang+" targetLang"}>{displayName}</div>
              <div className="units">
                <MultiLineTranslation
                  lang={lang}
                  text={translations.get(lang) ?? "loading..."}
                />
              </div>
              {/* <TranslationListItem
                translations={translations}
                lang={lang}
              /> */}
            </>
          )
        })}
      </div>
    </div>
  )
}

// type MLTs = {
//   text: string
//   lang: string
// }
// const MultiLineTranslation: React.FC<MLTs> = ({text, lang}) => {
//   const [specificonfig] = useAtom(atomLangSpecifiConfig)
//   const [appconfig] = useAtom(appConfigAtom)
//   const TranslateUnit: FC<{line: string}> = ({line}) =>
//     <div className='unit'>
//       {
//       // line.match(/^\s*$/)
//       // ? line
//       // :
//       SpecificOutput(specificonfig)(lang, line)}
//     </div>
//   return appconfig.result.multiline
//   ? <>
//     {text.split("\n").map((line,i) => <TranslateUnit line={line} key={i}/> )}
//   </>
//   : <TranslateUnit line={text}/>
// }



// import {pinyin} from "pinyin-pro"
// import { cssconst, propconst } from '@/ts/css';
// import { chineseSegmentPinyinPair } from './api/chinese';
// const SpecificOutput = (config1: LangSpecifiConfig) => function NamedSpecificOutput(lang: string, line: string) {
//   const [specificonfig] = useAtom(atomLangSpecifiConfig)
//   const config = specificonfig
//   return (
//     ["zh", "zh-CN", "zh-TW"].includes(lang)
//     ? (config.zh.pinyin
//       ? config.zh.pinyin_display == "line"
//         ?
//         <>
//           {config.zh.pinyin_position == "below"
//           ?
//           <>
//           <div className='line'>{line}</div>
//           <div className="pinyin">{pinyin(line, {nonZh: "consecutive"})}</div>
//           </>
//           :
//           <>
//           <div className="pinyin">{pinyin(line, {nonZh: "consecutive"})}</div>
//           <div className='line'>{line}</div>
//           </>
//           }
//         </>
//         :<div className={styles.flex}>{
//           chineseSegmentPinyinPair(line)
//           .map(([han, py])=> <div key={han as string} className='ziyin'>
//             {config.zh.pinyin_position == "below"
//             ?
//             <>
//               <div className='hanzi'>{han as string}</div>
//               <div className='pinyin'>{py}</div>
//             </>
//             :<>
//               <div className='pinyin'>{py}</div>
//               <div className='hanzi'>{han as string}</div>
//             </>
//           }
//           </div>)
//         }</div>
//       : <>{line}</>
//     )
//     : <>{line}</>
//   )
// }

// type TranslationListItemProps = {
//   translations: Map<string, string>
//   lang: string
// }
// const TranslationListItem: FC<TranslationListItemProps> = ({translations, lang}) => {
//   return(
//     <Box className="translation">{
//       translations??new Map().get(lang) ?? "loading..."
//     }</Box>
//   )
// }