import { GetServerSidePropsContext } from "next";
import { pinyin } from "pinyin-pro";

export const zip = <T,U>(ts: T[]|string, us: U[]|string) => {
  const newlist: [T|string,U|string][] = [];
  [...ts].forEach((t,i)=>{
    const u = us.at(i)
    if (u) {
      newlist.push([t, u])
    } else return newlist
  })
  return newlist
}

export const concatBy = (delemeter: string) => (strings: string[]) => strings.reduce((s, k) => s + delemeter + k, "").slice(delemeter.length)
export const concatLines = concatBy("\n")

export const ifelse = <T>(t: T) => (fn: (t: T)=>boolean) => <U>(fif: (t: T) => U) => (felse: (t: T) => U): U => fn(t) ? fif(t) : felse(t)

export const anywayAt = <T>(failedReturn: T) => (list: T[]) => (index: number) =>
list.at(index) ?? list.at(0) ?? failedReturn

export const anywayFind = <T>(lastChoise: T) => <U>(finder: (list: U[]) => T|undefined) => (list: U[]) =>
  finder(list)??lastChoise
export const urlAddQuery = (url: string) => (rec: Record<string, string>): string => url + "?" + (Object.entries(rec).reduce((pre, [k, v]) => pre+"&"+ k+ "="+ v, "").slice(1))
export const idf = <T>(t: T) => t
export const gate = <T>(filter: (t: T) => boolean) => (failcase: T) => (target: T): T => filter(target) ? target : failcase

export const filetoMap = (splitter: string) => (buf: Buffer): Map<string, string> => new Map(
  buf.toString().split("\n").map(line => {
    const i = line.indexOf(splitter)
    return [line.slice(0,i), line.slice(i + splitter.length)].map(e => e.trim()) as [string, string]
  })
)
export const filetoMapRegExp = (splitter: string|RegExp) => (buf: Buffer): Map<string, string[]> => {
  const str = buf.toString()
  return new Map(
    str.split("\n").map(line => {
      // const i = line.search(splitter)
      const s = line.split(splitter).map(e => e.trim())
      return [s[0], s.slice(1)] as [string, string[]]
    })
  )
}

export const takeWhileSplit = (text: string) => (stopIf: (s: string) => boolean): [string, string] => {
  let took = "";
  [...text].forEach(s => {
    if (stopIf(s)) return [took, text.slice(took.length)]
    else took += s;
  })
  return [text, ""]
}

const REGEXconst = {
  hanzi: /\p{sc=Han}/u
}

export const nextUrlPrefix = (context: GetServerSidePropsContext) => {
  const host = context.req.headers.host ?? 'localhost:3000'
  const protocol = /^localhost/.test(host) ? 'http' : 'https'
  return `${protocol}://${host}/`
}

export const hanziPinyinPair = (hanzis: string) => {
  const py = pinyin(hanzis, {
    nonZh: "spaced",
    type: "array"
  })
  return zip(hanzis, py)
}

export const sublistByLength = (length: number) => <T>(list: T[]): T[][] => {
  // list.reduce(([subs, sub], e, i) => i < length
  //   ? [subs, [...sub, e]]
    // : [[...subs, sub]])
  return [list.slice(0,length), ...sublistByLength(length)(list.slice(length))]
}


// export const pathValue = <T>(object: T) => (path: string[]) => {
//   path.reduce((obj, prop)=>
//     typeof obj == "object"
//     ? obj[prop as keyof T]
//     : typeof obj
//     , object)
// }

