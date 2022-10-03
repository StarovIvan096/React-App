import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import HomePage from './Component/HomePage/HomePage';
import SectionMessages from './Component/SectionMessage/SectionMessage';
import SectionsSite from './Component/Sections/ProfileSections';
import WrapPost from './Wrapper';

const App = ()=> {
  return (
    <div className="all-write">
      <Header/>
      <SectionsSite/>
      <Routes>
        <Route path="*" element={<HomePage/>}></Route>
        <Route path="/ribbon" element={<WrapPost/>}></Route>
        <Route path="/message" element={<SectionMessages/>}></Route>
        <Route path="/profile" element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
