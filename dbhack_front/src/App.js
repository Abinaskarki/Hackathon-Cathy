import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [open, setOpen] = useState(false)
  
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div>
      <div id="parent">  
        <iframe src="https://www.db.com/careers/index_e.html" width="100%" height="800px" allowFullScreen title="db careers"></iframe>
      </div>
      </div>
  );
}

export default App;
