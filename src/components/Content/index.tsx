import './style.css';
import Logo from '../../assets/logos/logo.svg';
import { Option } from '../common';
import Dropdown from '../Dropdown';
import LastNews from '../LastNews';
import PostCard from '../PostCard';

const dropdownAuthorFilterOptions: Option[] = [
  {
    label: 'Filtrar por autor',
    value: '',
  },
  {
    label: 'Todos os autores',
    value: 'allAuthors',
  },
];

const dropdownDateFilterOptions: Option[] = [
  {
    label: 'Mais Recentes',
    value: 'desc',
  },
  {
    label: 'Mais antigos',
    value: 'asc',
  },
];

export default function Content() {
  const handleSelect = (value: string) => {
    console.log('Opção selecionada:', value);
  };
  return (
    <div className="content-main-container flex-column">
      <div className="content-dropdown-container">
        <Dropdown
          options={dropdownAuthorFilterOptions}
          onDropdownSelected={handleSelect}
        />
        <Dropdown
          options={dropdownDateFilterOptions}
          onDropdownSelected={handleSelect}
        />
      </div>
      <div className="content-content-container">
        <div className="posts-content-container">
        <hr className="post-divider" />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="last-news-content-container">
          <LastNews />
        </div>
      </div>
    </div>
  );
}
