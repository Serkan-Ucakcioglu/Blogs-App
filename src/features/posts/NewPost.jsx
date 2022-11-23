import { useForm } from "react-hook-form";
import { useAddPostMutation } from "./postSlice";

function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addPost] = useAddPostMutation();
  const onSubmit = (data) => {
    addPost(data);
  };
  return (
    <div className="w-full flex justify-center mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            {...register("title", {
              required: "required",
              minLength: { value: 4, message: "Minimum Length 4!" },
              maxLength: { value: 12, message: "Maximum length 12!" },
            })}
            placeholder="title..."
            id="title"
            className="border-2 pl-3 border-black rounded p-2"
          />
          <div className="text-left text-red-500">{errors?.title?.message}</div>
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="date">date</label>
          <input
            type="date"
            {...register("date", { required: "required!" })}
            id="date"
            className="border-2 pl-3 border-black rounded p-2"
          />
          <div className="text-left text-red-500">{errors?.date?.message}</div>
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="body">Title</label>
          <textarea
            type="text"
            {...register("body", {
              required: "required!",
              minLength: { value: 10, message: "Minimum Length 10!" },
              maxLength: { value: 35, message: "Maximum length 35!" },
            })}
            id="body"
            placeholder="body..."
            className="border-2 pl-3 border-black rounded p-2"
          />
          <div className="text-left text-red-500">{errors?.body?.message}</div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 mt-3 w-full rounded text-white p-2"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default NewPost;
