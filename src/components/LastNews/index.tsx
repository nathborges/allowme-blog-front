import './style.css';
import LastNewsItem from './LastNewsItem';

export default function LastNews() {
  return (
    <div className="last-news-main flex-column">
      <span>Últimas notícias</span>
      <div className="last-news-items flex-column">
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
        <LastNewsItem />
      </div>
    </div>
  );
}
