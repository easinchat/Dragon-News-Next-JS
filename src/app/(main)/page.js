const allcetagory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const cetagory = await allcetagory();
  const cetagorys = cetagory.data.news_category;

  return (
    <div className="container grid grid-cols-12 gap-4 mx-auto my-15">
      <div className="font-bold text-3xl  col-span-3">
        <h2 className="font-bold text-4xl">All categories</h2>
        <ul className="flex flex-col gap-3 p-5">
          {cetagorys.map((category) => (
            <li
              className="rounded-xl font-bold text-center bg-gray-100 text-lg  p-4 "
              key={category.id}
            >
              {category.category_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="font-bold text-3xl bg-blue-100 col-span-6">
        All cetagory
      </div>
      <div className="font-bold text-3xl bg-yellow-100 col-span-3">
        All cetagory
      </div>
    </div>
  );
}
