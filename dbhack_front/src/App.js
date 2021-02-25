import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div id="parent">  
        <iframe src="https://www.db.com/careers/index_e.html" width="100%" height="800px" allowFullScreen title="db careers"></iframe>
      </div>
      <div class = "bot">      
          <iframe
              allow="microphone;"
              width="350"
              height="430"
              title="dialog flow"
              src="https://console.dialogflow.com/api-client/demo/embedded/f7264838-e58e-4512-937e-dc34db785ba8">
          </iframe>
        </div>
      </div>
  );
}

export default App;
