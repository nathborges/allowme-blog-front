import './style.css';
import { FaSadTear } from 'react-icons/fa'; 

export default function NoPostsMessage () {
    return (
        <div className="no-posts-container flex-row">
            <FaSadTear className="sad-icon" />
            <span>Oh não! Este blog não tem nenhuma postagem ainda.</span>
        </div>
    );
}
