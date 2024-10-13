import { Button } from "@/components/button";
import { ButtonTypeEnum } from "@/components/button/types";
import { Checkbox, Input, Radio, Select } from "@/components/input";
import { InputEnum } from "@/components/input/types";
import { emailRegex } from "@/constants";
import { useForm } from "react-hook-form"

export const ReactHookFormPage = () => {

    return (
        <div className="p-10">
            <p className="font-semibold text-xl mb-5">Page Title</p>

            <div className="">
                <div  className="grid grid-cols-2 gap-2">
                    <Form />
                    <AuthForm />

                </div>
            </div>

        </div>
    )
}


export const Form = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
        console.log(errors)
    }

    return (
        <div className="border w-[25rem] p-2 rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                    <Input label="Fullname:" name="fullname" register={register} errors={errors} inputType={InputEnum.input} validation={{ required: "This field is required" }} />
                </div>

                <div className="mb-2">
                    <Input label="Age:" name="age" type="number" register={register} errors={errors} inputType={InputEnum.input} validation={{ max: { value: 10, message: "Should me less than 10" } }} />
                </div>

                <div className="mb-2">
                    <Input label="Description:" name="description" inputType={InputEnum.textarea} register={register} errors={errors} />
                </div>

                <div className="mb-6">
                    <Select register={register} placeholder="Choose country" errors={errors} name="country" label="Country" options={["Ghana", "Brazil"]} />
                </div>

                <div className="mb-4">
                    <p className="text-xs mb-2">Gender:</p>

                    <div className="flex gap-3">
                        <Radio label="Male" value="male" name="gender" register={register} errors={errors} />
                        <Radio label="Female" value="female" name="gender" register={register} errors={errors} />
                    </div>
                </div>

                <div className="mb-4">
                    <Checkbox label="Accept terms" name="agree" register={register} errors={errors} validation={{ required: true }} />
                </div>



                <Button content="Add" />

            </form>
        </div>
    )
}



export const AuthForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
        console.log(errors)
    }

    return (
        <div className="border w-[25rem] p-2 rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <Input label="Email:" height="3" showLabel={false} placeholder="Email" name="email" register={register} errors={errors} inputType={InputEnum.input} validation={{ required: "This field is required", pattern:{value: emailRegex, message:"Enter valid email"} }} />
                </div>

                <div className="">
                    <Input type="password" height="3" label="Password:" showLabel={false} placeholder="Password" name="password" register={register} errors={errors} inputType={InputEnum.input} validation={{ required: "This field is required", minLength:{value:8, message:"Password should be at least 8 characters"} }} />
                </div>
              
                <Button height={3} type={ButtonTypeEnum.auth} content="Login" />

            </form>
        </div>
    )
}


