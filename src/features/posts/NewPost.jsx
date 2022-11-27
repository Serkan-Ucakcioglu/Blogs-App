import { useForm } from "react-hook-form";
import { useGetUsersQuery } from "../users/usersSlice";
import { useAddPostMutation } from "./postSlice";

function NewPost() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addPost] = useAddPostMutation();
  const { data: users } = useGetUsersQuery();

  const onSubmit = (data) => {
    const date = new Date();
    const dates = date.toLocaleDateString();
    const req = {
      ...data,
      date: dates,
    };
    addPost(req);
    reset();
  };

  const selectContent = users?.map((user) => {
    return <option value={user?.id}>{user?.name}</option>;
  });

  return (
    <div className="w-full flex justify-center mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96">
        <div className="flex flex-col">
          {/*Title  İnput */}
          <label htmlFor="title">Title</label>
          <input
            type="text"
            {...register("title", {
              required: "required",
              minLength: { value: 4, message: "Minimum Length 4!" },
              maxLength: { value: 15, message: "Maximum length 12!" },
            })}
            placeholder="title..."
            id="title"
            className="border-2 pl-3 border-black rounded p-2"
          />
          <div className="text-left text-red-500">{errors?.title?.message}</div>
        </div>

        {/*Users Select  */}
        <div className="flex flex-col mt-3">
          <label htmlFor="Users">Users</label>
          <select
            {...register("userid", { required: "required" })}
            id="Users"
            className="border-black border-2 p-2 rounded mt-2"
          >
            <option value="">Choose</option>
            {selectContent}
          </select>
          <div className="text-left text-red-500">
            {errors?.userid?.message}
          </div>
        </div>

        {/*Body İnput */}
        <div className="flex flex-col mt-3">
          <label htmlFor="body">Body</label>
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

        {/*Submit  Button */}
        <button
          type="submit"
          className="bg-blue-500 mt-5 w-full rounded text-white p-2"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default NewPost;
