import {pinyin} from "pinyin-pro"
import { cssconst, propconst } from '@/ts/css';
import { appConfigAtom, atomLangSpecifiConfig, LangSpecifiConfig } from "@/ts/jotai"
import { useAtom } from "jotai"
import { FC } from "react"
import DisplayWithPinyin from "./displayChinese";

type MLTs = {
  text: string
  lang: string
}
const MultiLineTranslation: React.FC<MLTs> = ({text, lang}) => {
  const [appconfig] = useAtom(appConfigAtom)
  const TranslateUnit: FC<{line: string}> = ({line}) =>
    <div className='unit'>
      {
      // line.match(/^\s*$/)
      // ? line
      // :
      <SpecificOutput lang={lang} line={line} />}
    </div>
  return appconfig.result.multiline
  ? <>
    {text.split("\n").map((line,i) => <TranslateUnit line={line} key={i}/> )}
  </>
  : <TranslateUnit line={text}/>
}



type SpecificProps = {
  lang: string
  line: string
}
const SpecificOutput: FC<SpecificProps> = ({lang, line}) => {
  const [specificonfig] = useAtom(atomLangSpecifiConfig)
  const config = specificonfig
  return (
    ["zh", "zh-CN", "zh-TW"].includes(lang)
    ? <DisplayWithPinyin text={line} />
    : <>{line}</>
  )
}

export default MultiLineTranslation