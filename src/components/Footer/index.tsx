import './style.css';
import LogoGrey from '../../assets/logos/logo-grey.svg';

export default function Footer() {
  return (
    <div className="footer-container flex-row">
      <div className="footer-img-container">
        <img src={LogoGrey} alt="Logo em cinza" />
      </div>
      <span>Copyright © 2023 AllowMe News. Todos os direitos reservados</span>
    </div>
  );
}
