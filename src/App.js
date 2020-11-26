import './style/App.css';
import DropDown from './components/DropDown';
import CollapseSec from './components/Collapse';

function App() {
  return (
    <div className="App">
      <ul>
        <li><DropDown /></li>
        <li><CollapseSec /></li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
