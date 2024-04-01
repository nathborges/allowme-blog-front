import { ReactElement, useState } from 'react';
import './style.css';
import { Option } from '../common';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface DropdownParams {
  defaultLabel: string;
  options: Option[];
  onDropdownSelected: (value: string) => null;
}

export default function Dropdown({
  defaultLabel,
  options,
  onDropdownSelected,
}: DropdownParams): ReactElement {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handler = (option: Option) => {
    toggleDropdown();
    setSelectedOption(option);
    onDropdownSelected(option);
  };

  return (
    <div className="dropdown-container ">
      <button
        className="dropdown-default-label dropdown-common"
        onClick={toggleDropdown}
      >
        <span>{selectedOption.label}</span>
        {isOpen ? (
          <IoIosArrowUp className="icon" />
        ) : (
          <IoIosArrowDown className="icon" />
        )}
      </button>

      {isOpen ? (
        <div className="dropdown-menu">
          {options.map((option) => (
            <button
              key={option.value}
              className="dropdown-item dropdown-common"
              onClick={() => handler(option)}
            >
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
