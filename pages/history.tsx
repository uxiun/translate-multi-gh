import { appConfigAtom, atomHistory } from "@/ts/jotai";
import { translateUI } from "@/ts/tagengo";
import { atom, useAtom } from "jotai";
import { FC } from "react";
import TransListByLang from "./transListByLang";

const showAtom = atom<Map<string, boolean>>(new Map())

const HistoryCompo: FC = () => {
  const [historyAtom] = useAtom(atomHistory)
  const [showSetting, setShowSetting] = useAtom(showAtom)
  const [appconfig] = useAtom(appConfigAtom)
  const listsrc = [...historyAtom]
  listsrc.pop()
  return(
    <div className="history">
      <h1>{translateUI(appconfig.lang)("history")}</h1>
      <TransListByLang listsrc={listsrc} limit={appconfig.history.displayLimit} />
    </div>
  )
}

export default HistoryCompo