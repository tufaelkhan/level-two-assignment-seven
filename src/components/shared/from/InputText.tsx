/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, useFormContext } from "react-hook-form";
type TInputField = {
  type?: string;
  name: string;
  label: string;
};

export default function InputText({ type = "text", name, label }: TInputField) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field: { onChange, onBlur, value, ref } }) => (
      <div className="w-full">
        <label htmlFor={name} className="block">
          {label}
        </label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          id={name}
          placeholder={label}
          type={type}
          className="input input-bordered w-full mt-2"
        />

        {errors[name] && (
          <p className="text-error">{errors[name]?.message as string}</p>
        )}
      </div>
    )}
  />
  );
}
