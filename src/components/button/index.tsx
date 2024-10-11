import { IProps } from "./types"


export const Button = ({icon, content, handler}:IProps)=>{
    let mnd_style = "text-xs flex gap-1 items-center text-white rounded px-2"
    let def_style =`bg-blue-500 font-semibold hover:bg-blue-600 py-2 hover:py-[0.45rem] transition-all ${mnd_style}`
    return <button onClick={handler} className={`${def_style}`}>{icon} {content}</button>
}