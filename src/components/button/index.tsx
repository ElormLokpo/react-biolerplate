import { ButtonTypeEnum, IProps } from "./types"


export const Button = ({ icon, content, handler, height, outline, type, width }: IProps) => {
    let mnd_style = `text-xs flex gap-1 items-center rounded px-2 w-${width? width : "full"} justify-center`
    let def_style = `${outline ? `border-blue-500 border text-blue-500 hover:bg-gray-50` : "bg-blue-500 text-white hover:bg-blue-600"} font-semibold  py-${height ? height : "2"} hover:py-[0.45rem] transition-all ${mnd_style}`
    return <button type={type == ButtonTypeEnum.submit ? "submit" : undefined} onClick={handler} className={`${def_style}`}>{icon} {content}</button>
}