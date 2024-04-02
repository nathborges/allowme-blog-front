import moment from 'moment';
import './style.css';

interface LastNewsItemParams {
  title: string;
  date: Date;
}

export default function LastNewsItem({ title, date }: LastNewsItemParams) {
  const formattedDate = moment(date).format('DD/MM/YYYY');
  return (
    <div className="last-news-item flex-column">
      <span>{title}</span>
      <span className="highlighted">{formattedDate}</span>
    </div>
  );
}
