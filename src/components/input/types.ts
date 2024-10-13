import {UseFormRegister, FieldValues, FieldErrors} from "react-hook-form"

export interface IProps {
    label: string,
    showLabel?: boolean,
    inputType?: InputEnum,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
    name: string,
    type?: string ,
    placeholder?:string,
    validation?:Object,
    height?: string

}

export enum InputEnum {
    input = "input",
    textarea = "textarea"
}

export interface ISelectProps extends IProps {
    options:any[]
}

export interface IRadioProps extends IProps{
    value: string
}