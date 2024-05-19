import { Controller, useFormContext } from "react-hook-form";

type TInputField = {
  type: string;
  name: string;
  label: string;
};

export default function InputSelect({ type, name, label }: TInputField) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <div className=" w-full">
          <label htmlFor={name} className=" block">
            {label}
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>

          {errors[name] && (
            <p className="text-error">{errors[name]?.message as string}</p>
          )}
        </div>
      )}
    />
  );
}
