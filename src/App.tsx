import React from 'react';
import SelectLanguage from './features/language/SelectLanguage';

const App:React.FC = ():JSX.Element => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <SelectLanguage />
    </div>
  );
}

export default App;
