import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);
  //   const [colorsheme, setColorSheme] = useState(dark);

  return (
    <button
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ModeCtrl;
