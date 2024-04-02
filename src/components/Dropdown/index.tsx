import { useState } from 'react';
import './style.css';
import { Option } from '../common';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface DropdownParams {
  defaultLabel: string;
  options: Option[];
  onDropdownSelected: (value: string) => void;
}

export default function Dropdown({
  defaultLabel,
  options,
  onDropdownSelected,
}: DropdownParams) {
  const [selectedOption, setSelectedOption] = useState({
    label: defaultLabel,
    value: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handler = (option: Option) => {
    toggleDropdown();
    setSelectedOption(option);
    onDropdownSelected(option.value);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle dropdown-common"
        onClick={toggleDropdown}
      >
        <span>{selectedOption.label}</span>
        {isOpen ? (
          <IoIosArrowUp className="icon" />
        ) : (
          <IoIosArrowDown className="icon" />
        )}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li>
              <button
                key={index}
                className="dropdown-item dropdown-common"
                onClick={() => handler(option)}
              >
                <span>{option.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
