// Import the necessary components and provider
import { MapProvider } from './providers/map-provider'; 
import  Map  from './components/map';               
import { Header } from './components/header';  
import { Main } from './components/main';
import { Footer} from './components/footer';
import './globals.css';       

// Define the Home component
export default function Home() {
  return (
    <MapProvider>
      <Header />
      <Main />
      <Footer />
      <Map />
    </MapProvider>
  );
}

