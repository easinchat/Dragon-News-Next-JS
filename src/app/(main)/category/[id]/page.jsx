import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { allcetagory, getNewsByCetagoryId } from "@/lib/data";



const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const cetagory = await allcetagory();
  const cetagories = cetagory.data.news_category;
  const allNews = await getNewsByCetagoryId(id);

  return (
    <div className="container grid grid-cols-12 gap-4 mx-auto my-15">
      <LeftSidebar cetagories={cetagories} activeId={id}></LeftSidebar>
      <div className="font-bold text-3xl  col-span-6 space-y-5">
        <h2 className="font-bold text-4xl pb-3">News by categorie</h2>
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
