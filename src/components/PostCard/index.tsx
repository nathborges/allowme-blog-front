import './style.css';
import Twitter from '../../assets/social-media/twitter.svg';
import Linkedin from '../../assets/social-media/linkedin.svg';
import Link from '../../assets/social-media/link.svg';

export default function PostCard() {
  return (
    <div className="post-card-container flex-column">
      <div className="post-card-text-content flex-column">
        <div className="author-info flex-row">
          <div className="author-date-name flex-column">
            <span className="highlighted">Author</span>
            <span>Date</span>
          </div>
          <div className="social-media">
            <a><img src={Twitter}/></a>
            <a><img src={Linkedin}/></a>
            <a><img src={Link}/></a>
          </div>
        </div>

        <span className="post-title">Sang lose of hour then he left find</span>
        <span className="post-text">
          Unpleasant nor diminution excellence apartments imprudence the met
          new. Draw part them he an to he roof only. Music leave say doors him.
          Tore bred form if sigh case as do. Staying he no looking if do
          opinion. Sentiments way understood end partiality and his. No opinions
          answered oh felicity is resolved hastened. Produced it friendly my if
          opinions humoured. Enjoy is wrong folly no taken. It sufficient
          instrument insipidity simplicity at interested. Law pleasure attended
          differed mrs fat and formerly. Merely thrown garret her law danger him
          son better excuse. Effect extent narrow in up chatty. Small are his
          chief offer happy had.
        </span>
      </div>
      <hr className="post-divider" />
    </div>
  );
}