import './App.css'
import Navbar from './components/navbar'
import Carousel from './components/carousel';
import Gallery from './components/gallery';
import Catalog from './components/catalog';
import 'flowbite';
import 'flowbite/dist/flowbite.css';
import Unggulan from './components/unggulan';

function App() {
  return (
     <div class="container text-center items-center m-auto w-full">
      <Navbar/>
      <Carousel class="w-screen"/>
      <Gallery/>
      <Catalog/>
      <Unggulan/>
     </div>
  )
}

export default App
