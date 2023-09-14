import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './assets/img1.JPG'
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];



function App() {
  return (
    <div className="App">


      <h1 className='name'>Asheda</h1>

      {/* <img src={img1} alt="image" className='photo' /> */}

      <div>
      <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default App;
