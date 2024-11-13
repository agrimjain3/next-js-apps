import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({params}){
const newsItemSlug = params.slug;
const newsItem = DUMMY_NEWS.find((newsItem)=> newsItem.slug === newsItemSlug);

return (
    <div className="fullscreen-image">
        <header>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
        </header>
    </div>
);
}