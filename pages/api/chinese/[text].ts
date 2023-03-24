import { pinyinDense } from "@/ts/k"
import { NextApiRequest, NextApiResponse } from "next"
import Segment, { IWord } from "novel-segment/lib/Segment"
import { pinyin } from "pinyin-pro"

export type SegmentType = IWord
export const chineseSegmentPinyinPair = async (chinese: string): Promise<[string, string][]> => {
  const segment = new Segment()
  segment.useDefault()
  const segs = segment.doSegment(chinese).map(k => k.w)
  return segs.map(seg => [seg,
    // pinyin(seg, {nonZh: "consecutive"})
    pinyinDense(seg)
  ])
  // return cut(chinese).map(seg => [seg, pinyinDense(seg)])
}

const handler = async(
  req: NextApiRequest,
  res: NextApiResponse<{pairs: [string, string][]}>

) => {
  const pairs = await chineseSegmentPinyinPair(req.query.text as string)
  res.status(200).json({pairs})
}
export default handler