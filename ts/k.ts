import fetcher from "@/pages/api/fetcher";
// import fetcher from "@/app/api/fetcher";
import { TranslateConfig } from "./jotai";
import { concatBy, nextUrlPrefix, urlAddQuery } from "./util";
import Segment from "novel-segment"
import { IWord } from "novel-segment/lib/Segment";
import { pinyin } from "pinyin-pro";
import { cut, cutAll } from "@node-rs/jieba";
import { LanguageCode } from "iso-639-1";

export const APIURL = process.env.NEXT_PUBLIC_APIURL??""

export const fetchTranslation = (transAtom: TranslateMulti) => (target: string) => {
  // if (transAtom.text.match(/^\s*$/)) {
  //   return new Promise<AppScriptResponse>(()=>{return {
  //     code: 200,
  //     text: transAtom.text
  //   }})
  // }
  const url = urlAddQuery(APIURL)(
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
}

export const AppScriptResponseToString = (res: AppScriptResponse): string =>
  res.code == 200 ? res.text : `error(${res.code})`

export const translatePerLine = (transAtom: TranslateMulti) => (target: string) => {
  const emptyLines: [number, string][] = []
  const nonemptyLines: [number, string][] = []
  transAtom.text.split("\n").forEach((line, i) => {
    (line.match(/^\s*$/) ? emptyLines : nonemptyLines).push([i, line])
  })

  return Promise.all(
    // transAtom.text.split("\n")
    nonemptyLines.map(([i, line])=>
      // line.match(/^\s*$/)
      // ? new Promise<AppScriptResponse>(() => ({
      //   code: 200,
      //   text: line
      // }))
      // :
      fetchTranslation({...transAtom, text: line})(target)
    )
  ).then(ps => concatBy("\n")(ps.map(line => AppScriptResponseToString(line)))
  )
}

export const translateIntoArray = (multiEntity: TranslateMulti) => (target: string) => {
  return multiEntity.text.split("\n").map(line =>
    line.match(/^\s*$/) ? line
    : fetchTranslation({...multiEntity, text: line})(target).then(res => AppScriptResponseToString(res))
  )
}

export const emptyInput: TranslateConfig = {
  from: "en",
  text: "",
  to: "ja",
}
export const targetLangs = ["ja", "en"] as const
export type TargetLang = typeof targetLangs[number]
const languageObj = {
  ja: "Japanese",
  en: "English",

}
export type TranslateMulti = {
  from: string
  to: string[]
  text: string
}
export const TranslateMultiDefault: TranslateMulti = {
  from: "en"
  ,to: ["ja"]
  ,text: ""
}
export type AppScriptResponse = {
  code: number
  text: string
}

export const pinyinDense = (chinese: string) => pinyin(chinese).split(" ").reduce((d,f)=>d+f, "")

export type PinyinPairs = {
  pairs: [string, string][]
}

export type GoogleTranslateLanguageCode = LanguageCode
| "zh-CN"
| "zh-TW"