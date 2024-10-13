import { InputEnum, IProps, IRadioProps, ISelectProps } from "./types"

const inputStyle = (height:string)=>`border w-full focus:outline-none rounded mb-1 text-xs px-1 py-${height? height: "1.5"}`
const error_style = `${inputStyle} border-red-500 text-red-400`;

const ErrorMessage = ({ content }: { content: any }) => {
    return <p className="text-[0.6rem] text-red-500">{content}</p>
}



export const Input = ({ label, placeholder, showLabel = true, inputType, register, errors, name, type, validation, height }: IProps) => {

    return (
        <div>
            {showLabel && <label className="text-[0.7rem] font-semibold text-gray-600">{label}</label>}

            {
                inputType === InputEnum.input ?
                    <div>
                        <input placeholder={placeholder} {...register(name, validation)} type={type ? type : "text"} className={errors[`${name}`] ? error_style : `${inputStyle(height as string)}`} />
                        {errors[`${name}`] && <ErrorMessage content={errors[`${name}`]?.message} />}
                    </div>
                    :
                    <div>
                        <textarea placeholder={placeholder} {...register(name, validation)} className={errors[`${name}`] ? error_style : inputStyle("")} rows={5} />
                        {errors[`${name}`] && <ErrorMessage content={errors[`${name}`]?.message} />}
                    </div>

            }
        </div>
    )
}


export const Select = ({ label, placeholder, register, errors, name, options, validation }: ISelectProps) => {
    return (
        <div>
            <label className="text-[0.7rem] font-semibold text-gray-600">{label} </label>


            <div>
                <select {...register(name)} className={inputStyle("")}>
                    <option disabled>{placeholder}</option>
                    {
                        options.map((item, index) => <option key={index} value={item}>{item}</option>)
                    }
                </select>
                {errors[`${name}`] && <ErrorMessage content={errors[`${name}`]?.message} />}
            </div>

        </div>
    )
}


export const Radio = ({ label, register, errors, name, value, validation }: IRadioProps) => {
    return (
        <div className="flex gap-1 items-center">
            <input value={value} type="radio" {...register(name, validation)} />

            <label className="text-[0.7rem] font-semibold text-gray-600">{label} </label>
            {errors[`${name}`] && <ErrorMessage content={errors[`${name}`]?.message} />}
        </div>
    )
}


export const Checkbox = ({ label, register, errors, name, validation }: IProps) => {
    return (
        <div className="flex gap-1 items-center">
            <input type="checkbox" {...register(name, validation)} />

            <label className="text-[0.7rem] font-semibold text-gray-600">{label} </label>
            {errors[`${name}`] && <ErrorMessage content={errors[`${name}`]?.message} />}
        </div>
    )
}
