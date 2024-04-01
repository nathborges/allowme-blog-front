import './style.css';

export default function PostCard() {
  return (
    <div className="post-card flex-column">
      <hr className="divider" />
      <div className="post-card-text-content flex-column">
        <div className="about-author flex-row">
          <div className="name-date flex-column">
            <span className="highlighted">Author</span>
            <span>Date</span>
          </div>
          <div className="social-media">
            <p>oi</p>
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
      <hr className="divider" />
    </div>
  );
}
