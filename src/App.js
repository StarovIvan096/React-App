import logo from './logo.svg';
import bodyImg from './images/home.jpg'
import './App.css';
import Header from './modules/Header';
import WrappContentSite from './modules/Wrapper';
const App = ()=> {
  return (
    <div className="all-write">
      <Header/>
      <WrappContentSite/>
    </div>
  );
}

export default App;
