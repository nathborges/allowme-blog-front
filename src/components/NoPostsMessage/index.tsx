import './style.css';
import { FaSadTear } from 'react-icons/fa';

export default function NoPostsMessage() {
  return (
    <div className="no-posts-container flex-row">
      <span>
        Oh não! Não foi possível encontrar nenhum post. Tente novamente mais
        tarde.
      </span>
      <FaSadTear className="sad-icon" />
    </div>
  );
}
