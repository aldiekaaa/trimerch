import './App.css'
import Navbar from './components/navbar'
import Carousel from './components/carousel';
import Gallery from './components/gallery';
import 'flowbite';
import 'flowbite/dist/flowbite.css';

function App() {
  return (
     <div>
      <Navbar/>
      <Carousel class="w-screen"/>
      <Gallery/>
     </div>
  )
}

export default App
