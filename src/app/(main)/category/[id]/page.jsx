import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";

const allcetagory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data;
};
const getNewsByCetagoryId = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
};
const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const cetagory = await allcetagory();
  const cetagories = cetagory.data.news_category;
  const allNews = await getNewsByCetagoryId(id);

  return (
    <div className="container grid grid-cols-12 gap-4 mx-auto my-15">
      <LeftSidebar cetagories={cetagories} activeId={id}></LeftSidebar>
      <div className="font-bold text-3xl bg-blue-100 col-span-6">
        {allNews.length > 0 ? (
          allNews.map((news) => (
            <NewsCard key={news._id} news={news}></NewsCard>
          ))
        ) : (
          <h2>Nothing in there Please back to home </h2>
        )}
      </div>
      <div className="font-bold text-3xl bg-yellow-100 col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
