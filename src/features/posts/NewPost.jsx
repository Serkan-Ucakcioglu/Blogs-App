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
    <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            {...register("title", { required: "required" })}
            id="title"
            className="border-2 border-black rounded"
          />
          <div className="text-left text-red-500">{errors?.title?.message}</div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">date</label>
          <input
            type="date"
            {...register("date", { required: "required!" })}
            id="date"
            className="border-2 border-black rounded"
          />
          <div className="text-left text-red-500">{errors?.date?.message}</div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="body">Title</label>
          <textarea
            type="text"
            {...register("body", { required: "required!" })}
            id="body"
            className="border-2 border-black rounded"
          />
          <div className="text-left text-red-500">{errors?.body?.message}</div>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewPost;
