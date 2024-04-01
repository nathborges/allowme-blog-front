import './style.css';
import Logo from '../../assets/logos/logo-allowme-news.svg';

export default function Header() {
  return (
    <div className="header-container">
      <img src={Logo} alt="Logo" />
    </div>
  );
}
