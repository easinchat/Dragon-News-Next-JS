import Link from "next/link";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details, author, rating, total_view } = news;

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-3 bg-white">
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
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* News Details */}
      <div className="border-b-2 border-dotted border-blue-300 py-3">
        <p className="text-sm text-gray-500 line-clamp-3">{details}</p>

        <Link href={`/news/${news._id}`}>
          <button className="text-orange-500 text-sm font-semibold mt-1">
            Read More
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
  );
};

export default NewsCard;
