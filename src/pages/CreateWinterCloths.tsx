import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import From from "../components/shared/from/From";
import FromSubmit from "../components/shared/from/FromSubmitButton";
import InputFile from "../components/shared/from/InputFile";
import InputText from "../components/shared/from/InputText";
import InputTextArea from "../components/shared/from/InputTextArea";
import { useCreateWinterClothMutation } from "../redux/features/winter-cloths/create-winter-cloth.api";
import { uploadImage } from "../utils/uploadImage/uploadImage";
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const CreateWinterClothsSchema = z.object({
  title: z.string().min(10, "Title is required."),
  description: z.string().min(50, { message: "Description is required." }),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  size: z.enum(["S", "L", "XL", "XXL", "XXXL"], {
    message: "Size must be 's','L','XL','XXL','XXXL'",
  }),
  category: z.string().min(5, { message: "Category is required." }),
});

export default function CreateWinterCloths() {
  const [CreateWinterCloths, { isLoading }] = useCreateWinterClothMutation();
  const handleCreateWinterCloth = async (data: FieldValues) => {
    const imageURL = await uploadImage(data.image);
    const winterClothData = {
      image: imageURL,
      title: data.title,
      description: data.description,
      category: data.category,
      available_sizes: data.size,
    };
    const res = await CreateWinterCloths(winterClothData).unwrap();

    Swal.fire(res.message);
  };
  return (
    <div className="w-1/2 mx-auto p-7 shadow-2xl bg-base-200 rounded-lg">
      <div>
      <h1 className=" text-center text-3xl lg:text-4xl mb-5 font-semibold">
        Create Winter Cloths
      </h1>
      <div className="justify-center items-center">
        <From
          handler={handleCreateWinterCloth}
          schema={CreateWinterClothsSchema}
        >
          <InputText type="text" label="Title" name="title" />
          <InputFile label="Image" name="image" />
          <InputText type=" text" label="Category" name="category" />
          <InputText type="text" label="Size" name="size" />
          <InputTextArea name="description" label="Description" />
          <FromSubmit loading={isLoading}>Create Now</FromSubmit>
        </From>
      </div>
    </div>
    </div>
  );
}
