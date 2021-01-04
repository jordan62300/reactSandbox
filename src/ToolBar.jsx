import React , {useState , useContext} from 'react';
import ThemeChoice from './ThemeChoice'


function ToolBar(props) {
    return (
      <div>
        <button>Zoomer</button>
        <button>Dezoomer</button>
        <ThemeChoice  />
      </div>
    );
  }
  export default ToolBar