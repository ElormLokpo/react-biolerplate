import { ReactElement } from "react";

export interface IProps{
    content: string, 
    icon?: ReactElement,
    handler? : ()=>void,
    height?: number, 
    width?: string ,
    outline?:boolean,
    type?: ButtonTypeEnum
}

export const enum ButtonTypeEnum{
    def = "default",
    auth = "auth",
    submit = "submit"
}