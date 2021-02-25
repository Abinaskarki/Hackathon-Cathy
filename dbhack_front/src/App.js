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
        <div id= "bot">      
          { open && <iframe
              allow="microphone;"
              width="350"
              height="430"
              title="dialog flow"
              src="https://console.dialogflow.com/api-client/demo/embedded/f7264838-e58e-4512-937e-dc34db785ba8">
          </iframe>}
          <button style={{opacity: '1'}} onClick={handleOpen}> Hello </button>
        </div>
      </div>
      

      </div>
  );
}

export default App;
