import { getNewsDetailsById } from "@/lib/data";
import Link from "next/link";

export const generateMetadata=async ({params}) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);

console.log('params' , params)
console.log('news' , news)

   return {
    title: news.title,
    description: news.details,
  }
};

const NewsDetails = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  
   const { title, thumbnail_url, details, author, rating, total_view } = news;

  return <div className="border border-gray-200 rounded-lg shadow-sm p-3 bg-white container mx-auto">
      {/* Author Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            {/* <p className="text-xs text-gray-500">
              {author.published_date.split(" ")[0]}
            </p> */}
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <span>🔖</span>
          <span>↗</span>
        </div>
      </div>

      {/* News Title */}
      <h2 className="font-bold text-base leading-6 mb-3">{title}</h2>

      {/* News Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-[auto] h-auto object-cover rounded-lg"
      />

      {/* News Details */}
      <div className="border-b-2 border-dotted border-blue-300 py-3">
        <p className="text-sm text-gray-500 ">{details}</p>

        <Link href={`/category/${news.category_id}`}>
          <button className="text-white text-sm font-semibold mt-1 btn bg-purple-500">
          See other news for this category 
          </button>
        </Link>
      </div>

      {/* Rating and Views */}
      <div className="flex items-center justify-between pt-3">
        <div className="flex items-center gap-2">
          <div className="text-orange-400 text-lg">★★★★★</div>
          <span className="text-xs text-gray-600">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <span>◉</span>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
};

export default NewsDetails;
