import { Button } from "@/components/button";
import { Checkbox, Input, Radio, Select } from "@/components/input";
import { InputEnum } from "@/components/input/types";
import { useForm } from "react-hook-form"

export const ReactHookFormPage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div className="p-10">
            <p className="font-semibold text-xl mb-5">Page Title</p>

            <div className="">
                <div className="border w-[25rem] p-2 rounded">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-2">
                            <Input label="Fullname:" name="fullname" register={register} errors={errors} inputType={InputEnum.input} />
                        </div>

                        <div className="mb-2">
                            <Input label="Age:" name="age" type="number" register={register} errors={errors} inputType={InputEnum.input} />
                        </div>

                        <div className="mb-2">
                            <Input label="Description:" name="description" inputType={InputEnum.textarea} register={register} errors={errors} />
                        </div>

                        <div className="mb-6">
                            <Select register={register} errors={errors} name="country" label="Country" options={["Ghana", "Brazil"]} />
                        </div>

                        <div className="mb-4">
                            <p className="text-xs mb-2">Gender:</p>

                            <div className="flex gap-3">
                                <Radio label="Male" value="male" name="gender" register={register} errors={errors}/>
                                <Radio label="Female" value="female" name="gender" register={register} errors={errors}/>
                            </div>
                        </div>

                        <div className="mb-4">
                            <Checkbox label="Accept terms" name="agree" register={register} errors={errors} />
                        </div>



                        <Button content="Add" />

                    </form>
                </div>
            </div>

        </div>
    )
}