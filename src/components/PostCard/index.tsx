import './style.css';
import Twitter from '../../assets/social-media/twitter.svg';
import Linkedin from '../../assets/social-media/linkedin.svg';
import Link from '../../assets/social-media/link.svg';
import moment from 'moment';

interface PostCardParam {
  title: string;
  content: string;
  name: string;
  date: Date;
}

export default function PostCard({
  title,
  content,
  name,
  date,
}: PostCardParam) {
  const formattedDate = moment(date).format('DD/MM/YYYY');

  return (
    <div className="post-card-container flex-column">
      <div className="post-card-text-content flex-column">
        <div className="author-info flex-row">
          <div className="author-date-name flex-column">
            <span className="highlighted">{name}</span>
            <span>{formattedDate}</span>
          </div>
          <div className="social-media">
            <a>
              <img src={Twitter} />
            </a>
            <a>
              <img src={Linkedin} />
            </a>
            <a>
              <img src={Link} />
            </a>
          </div>
        </div>

        <span className="post-title">{title}</span>
        <span className="post-text">{content}</span>
      </div>
      <hr className="post-divider" />
    </div>
  );
}
