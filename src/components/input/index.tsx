import { InputEnum, IProps, IRadioProps, ISelectProps } from "./types"

const input_style = `border w-full focus:outline-none rounded text-xs px-1 py-1.5`


export const Input = ({ label, showLabel = true, inputType, register, errors, name, type }: IProps) => {
    return (
        <div>
            {showLabel && <label className="text-[0.7rem] font-semibold text-gray-600">{label}</label>}

            {
                inputType === InputEnum.input ?
                    <div>
                        <input {...register(name)} type={type ? type : "text"} className={input_style} />
                    </div>
                    :
                    <div>
                        <textarea {...register(name)} className={input_style} rows={5} />
                    </div>

            }
        </div>
    )
}


export const Select = ({ label, register, errors, name, options }: ISelectProps) => {
    return (
        <div>
            <label className="text-[0.7rem] font-semibold text-gray-600">{label} </label>


            <div>
                <select {...register(name)} className={input_style}>
                    {
                        options.map((item, index) => <option key={index} value={item}>{item}</option>)
                    }
                </select>
            </div>

        </div>
    )
}


export const Radio = ({ label, register, errors, name, value }: IRadioProps) => {
    return (
        <div className="flex gap-1 items-center">
            <input value={value} type="radio" {...register(name)} />

            <label className="text-[0.7rem] font-semibold text-gray-600">{label} </label>
        </div>
    )
}


export const Checkbox = ({ label, register, errors, name }: IProps) => {
    return (
        <div className="flex gap-1 items-center">
            <input type="checkbox" {...register(name)} />

            <label className="text-[0.7rem] font-semibold text-gray-600">{label} </label>
        </div>
    )
}
