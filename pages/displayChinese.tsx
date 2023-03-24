import { atomLangSpecifiConfig, LangSpecifiConfig } from "@/ts/jotai";
import { concatBy, hanziPinyinPair, nextUrlPrefix } from "@/ts/util";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Segment from "novel-segment/lib/Segment";
import { pinyin } from "pinyin-pro";
import { FC } from "react";
import { chineseSegmentPinyinPair } from "./api/chinese/[text]";
import useSWR from "swr"
import fetcher from "./api/fetcher";
import { PinyinPairs } from "@/ts/k";
import { useAtom } from "jotai";

type PropsServerSide = {
  pairs: [string, string][]
  config: LangSpecifiConfig
  text: string
}
// export const getServerSideProps: GetServerSideProps<{data: Props}> = async (context) => {
//   const pairs = await fetch(`${nextUrlPrefix(context)}api/chinese/`)
//     .then(d => d.json())
//   // const chinese = context.query.chinese
//   // const segment = new Segment()
//   // segment.useDefault()
//   // const segs = segment.doSegment(chinese as string).map(k => k.w)
//   // const pairs = segs.map(seg => [seg, pinyin(seg, {
//   //   nonZh: "consecutive"
//   // })])

//   // return cut(chinese).map(seg => [seg, pinyinDense(seg)])
//   return {
//     props: {
//       {pairs}
//     }
//   }
// }

const HanziPairOutput: FC<{text: string}> = ({text}) => {
  const [config] = useAtom(atomLangSpecifiConfig)
  return(
    <>{
      hanziPinyinPair(text)
      .map(([han, py])=>
      <div key={han as string} className='ziyin'>
        {config.zh.pinyin_position == "below"
        ?
        <>
          <div className='hanzi'>{han as string}</div>
          <div className='pinyin'>{py as string}</div>
        </>
        :<>
          <div className='pinyin'>{py as string}</div>
          <div className='hanzi'>{han as string}</div>
        </>
      }
      </div>)
    }</>
  )
}


type PropsClientOnly = {
  text: string
}
const DisplayWithPinyin: FC<PropsClientOnly> = ({text}) => {
  const [config] = useAtom(atomLangSpecifiConfig)
  const {data, error, isLoading} = useSWR<PinyinPairs>("/api/chinese/"+text, fetcher)
  if (error) {
    console.error(error)
    return <>load failed</>
  }
  if (isLoading) return(
    config.zh.pinyin
    ? config.zh.pinyin_display == "line"
      ?
      <>
        {config.zh.pinyin_position == "below"
        ?
        <>
        <div className='line'>{text}</div>
        <div className="pinyin">{pinyin(text, {nonZh: "consecutive"})}</div>
        </>
        :
        <>
        <div className="pinyin">{pinyin(text, {nonZh: "consecutive"})}</div>
        <div className='line'>{text}</div>
        </>
        }
      </>
      :
      <div className={"flex"}>
        <HanziPairOutput text={text}/>
      </div>
    : <>{text}</>
  )

  console.log("data", data)
  const {
    py: pinyinsSegmented,
    han: hansSegmented
  } = data?.pairs.reduce((ls, [han, py]) => ({
    py: [...ls.py, py],
    han: [...ls.han, han]
  }), {
    py: [] as string[],
    han: [] as string[]
  }) ?? {
    py: [],
    han: []
  }
  const hanSegmented = concatBy(" ")(hansSegmented)
  const pinyinSegmented = concatBy(" ")(pinyinsSegmented)
  console.log("hanSegmented", hanSegmented)
  console.log("pinyinSegmented", pinyinSegmented)
  const displayHan = config.zh.segment? hanSegmented: text
  return(
    config.zh.pinyin
    ? config.zh.pinyin_display == "line"
      ?
      <>
        {config.zh.pinyin_position == "below"
        ?
        <>
        <div className='line'>{displayHan}</div>
        <div className="pinyin">{pinyinSegmented}</div>
        </>
        :
        <>
        <div className="pinyin">{pinyinSegmented}</div>
        <div className='line'>{displayHan}</div>
        </>
        }
      </>
      :
      <div className={"flex"}>
        {/* <DisplayWithPinyin text={line}/>
        // chineseSegmentPinyinPair(line)
        // .map(([han, py])=> <div key={han as string} className='ziyin'>
        //   {config.zh.pinyin_position == "below"
        //   ?
        //   <>
        //     <div className='hanzi'>{han as string}</div>
        //     <div className='pinyin'>{py}</div>
        //   </>
        //   :<>
        //     <div className='pinyin'>{py}</div>
        //     <div className='hanzi'>{han as string}</div>
        //   </> */}
        {config.zh.segment
        ?
        <>{
              data?.pairs
              .map(([han, py])=> <div key={han as string} className='ziyin'>
                {config.zh.pinyin_position == "below"
                ?
                <>
                  <div className='hanzi'>{han as string}</div>
                  <div className='pinyin'>{py}</div>
                </>
                :<>
                  <div className='pinyin'>{py}</div>
                  <div className='hanzi'>{han as string}</div>
                </>
              }
              </div>)
        }</>
        : <HanziPairOutput text={text} />
        }
      </div>
    : <>{displayHan}</>
  )
}

export default DisplayWithPinyin