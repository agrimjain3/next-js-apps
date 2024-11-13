import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  return (
    <>
      <h2>INTERSEPTED</h2>
      <div className="fullscreen-image">
        <header>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
          ></img>
        </header>
      </div>
    </>
  );
}
