import { useForm } from "react-hook-form";

function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="border-2 border-black rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">date</label>
          <input
            type="date"
            id="date"
            className="border-2 border-black rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="body">Title</label>
          <textarea
            type="text"
            id="body"
            className="border-2 border-black rounded"
          />
        </div>
      </form>
    </div>
  );
}

export default NewPost;
