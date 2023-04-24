import React  from 'react';
import Select  from 'react-select';
import { OptionType } from '../types';

type SelectorTypes = {
  value? : OptionType | null;
  options: OptionType[];
  onChange: (selectedOption: OptionType | null) => void;
  placeholder: string;
}

const Selector:React.FC<SelectorTypes> = ({placeholder, value, onChange, options}):JSX.Element => {
  return(
    <div className='w-[50%]'>
      <p className='text-xs mb-2'>Language</p>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
};

export default Selector