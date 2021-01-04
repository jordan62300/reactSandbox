import React , {useState , useContext} from 'react';
import ThemeContext from './ThemeContext'


function ThemeChoice() {

    const contextValue = useContext(ThemeContext)
    const {theme , updateTheme} = useContext(ThemeContext)
    const handleChange = event => {
      const value = event.currentTarget.value;
      contextValue.updateTheme(value);
    };
  
    return (
    
      <select name="theme" defaultValue={contextValue.theme} onChange={handleChange}>
        <option value="dark">Sombre</option>
        <option value="light">Clair</option>
      </select>
      
  
    );
  }

export default ThemeChoice