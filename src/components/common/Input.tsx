import '../../styles/components/common/_input.scss';
import { IoSearch } from 'react-icons/io5';
type Props = {
  variant?: 'outline-green3' | 'outline-gray' | 'underline';
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // 수정
  value?: string;
  placeholder?: string;
};

export const Input = ({ variant, onChange, value, placeholder }: Props) => {
  const inputClass = variant ? `input ${variant}` : `input`;
  return (
    <div>
      <input className={inputClass} onChange={onChange} value={value} placeholder={placeholder}></input>
    </div>
  );
};

type searchProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // 수정
  value?: string;
  placeholder?: string;
};
export const SearchInput = ({ onChange, value, placeholder }: searchProps) => {
  return (
    <div className="search-input-container">
      <IoSearch className="search-icon" />
      <input className="search-input" onChange={onChange} value={value} placeholder={placeholder}></input>
    </div>
  );
};
