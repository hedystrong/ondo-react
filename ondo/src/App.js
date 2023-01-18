import './App.css';
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import Header from './components/Header';
import Main1 from "./components/Main1"
import Main2 from './components/Main2';


const imgList = {
  img1: require("./images/logo.png"),
  img2: require("./images/mmm.png"),
  img3: require("./images/Group.png"),
}
const itemList = [
  { id: 1, title: "Our Story" },
  { id: 2, title: "Membership" },
  { id: 3, title: "Write" },
  { id: 4, title: "Sign In" },
];



function App() {

  return (
    <div className="container-fluid p-0">

      <Navbar logo={imgList.img1} tses={itemList} />
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/header' element={<Header />} />
        <Route path='/main1' element={<Main1 />} />
        <Route path='/main2' element={<Main2 />} />
        <Route />
      </Routes>
      {/* <Header logo2={imgList.img2} />
        <Main1 icon={imgList.img3} card1={main1Items} />
        <Main2 card={main2Items} aside={asideList} /> */}

    </div>
  );
}

export default App;
