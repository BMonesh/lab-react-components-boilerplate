import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter.jsx';
import Header from './components/Header.jsx'
import Data from './components/data.jsx';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <Header/>
      <Data imageData={imageData}/>
      <GallaryFooter/>
    </div>
  )
}

export default App;
