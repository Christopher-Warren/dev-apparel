import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="mt-5">
      <h1>Post: {}</h1>
      <h1>Comment: {category}</h1>
    </div>
  );
};

export default Category;
