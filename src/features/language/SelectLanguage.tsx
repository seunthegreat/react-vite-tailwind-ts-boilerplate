import React from 'react';
import Selector from './components/Selector';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import type { RootState } from '../../app/store';
import { OptionType } from './types';
import { setLanguage } from '.';

const languageOption: OptionType[] = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
];

const SelectLanguage:React.FC = () => {
  const language = useAppSelector((state: RootState ) => state.languageReducer.language);
  const dispatch = useAppDispatch()

  return (
    <div className='w-full flex items-center flex-center min-h-screen justify-center'>
      <Selector 
        value={language}
        options={languageOption} 
        placeholder='Select your language' 
        onChange={(value) => dispatch(setLanguage(value))}
      />
    </div>
  );
};

export default SelectLanguage;