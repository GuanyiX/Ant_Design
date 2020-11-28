import './style/App.css';
import DropDown from './components/DropDown';
import CollapseSec from './components/Collapse';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <ul>
        <li><DropDown /></li>
        <li><CollapseSec /></li>
        <li><SideBar /></li>
      </ul>
    </div>
  );
}

export default App; 
