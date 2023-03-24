import { appConfigAtom, atomHistory, atomLangSpecifiConfig, getLanguageName, TranslateHistory } from "@/ts/jotai";
import { GoogleTranslateLanguageCode } from "@/ts/k";
import { atom, useAtom } from "jotai";
import { pinyin } from "pinyin-pro";
import React, { FC, useEffect } from "react";
import MultiLineTranslation from "./multiTranslation";
import { useWatch, useForm, Controller, Path } from "react-hook-form";
import { Box, Checkbox, FormControl, FormControlLabel } from "@mui/material";

type Props = {
  listsrc: TranslateHistory
  limit: number
}
const showAtom = atom<Map<string, boolean>>(new Map())

const TransListByLang: FC<Props> = ({listsrc, limit}) => {

  return(
    <div className="sessions">
      {[...listsrc].slice(Math.max(0, listsrc.size - limit)).reverse().map(([srctext, {srclang, trans}], isession) =>
        <div key={isession}>
        <EachEntity
          srclang={srclang} srctext={srctext} trans={trans}/>
        </div>
      )}
    </div>
  )
}

type EachProps = {
  srclang?: string
  srctext: string
  trans: Map<string, string>
}
const EachEntity: FC<EachProps> = ({srclang, srctext, trans}) => {
  const [appconfig] = useAtom(appConfigAtom)
  const [showState, setShowState] = React.useState(true)
  const displayLangName = (lang: string) => getLanguageName(lang)(appconfig.lang) + ` (${lang})`
  type Form = {
    show: boolean
  }
  const {control} = useForm<Form>({
    defaultValues: {
      show: true
    }
  })
  const useWatchValue = useWatch({control})
  useEffect(()=>{
    console.log("useWatchValue", useWatchValue)
    setShowState(useWatchValue.show??showState)
  }, [useWatchValue])

  const MUIcheckbox: FC<{name: Path<Form>, checked: boolean}> = function NamedMUIcheckbox({name, checked}) {return (
    <Controller
      control={control}
      name={name}
      render={({field})=>(
          <FormControlLabel {...field}
            control={<Checkbox
              checked={checked}
              />} label="" />
      )}
    />
  )}
  return(
    <div className="session">
      <Box
        component={"form"}
      >
        <MUIcheckbox name="show" checked={showState} />
      </Box>
      <div className="src flex">
        {srclang? <div className="srclang">{
          displayLangName(srclang)
        }</div> : ""}
        <div className="text">{srctext}</div>
      </div>
      {showState
      ?
        <div className="resultbox">
          {[...trans].map(([lang, text]) => {
            const displayName = displayLangName(lang)
          // get_translation(lang)
          return(
            <>
            {/* <div className="target-and-result" key={lang}>*/}
              <div className={"targetLang"}>{displayName}</div>
              <div className="units">
                <MultiLineTranslation
                  lang={lang}
                  text={text}
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
      : ""
      }
    </div>
  )
}

export default TransListByLang