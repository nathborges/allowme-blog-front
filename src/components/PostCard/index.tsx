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
            <a
              href="https://imgb.ifunny.co/images/37dc265d1e7031d4c21f01d2e9bede93dd8725e1700230edd684eed5d33ba138_1.webp"
              target="_blank"
            >
              <img src={Twitter} />
            </a>
            <a
              href="https://www.linkedin.com/in/nathaliafborges/"
              target="_blank"
            >
              <img src={Linkedin} />
            </a>
            <a
              href="https://i.pinimg.com/564x/9a/7c/28/9a7c28903b049b40af2dfe13c9934f41.jpg"
              target="_blank"
            >
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
