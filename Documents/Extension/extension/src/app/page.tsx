import { MapProvider } from "./providers/map-provider";
import { MapComponent } from "./components/map";
import { Header } from "./components/header";

export default function Home() {

  return (
    <MapProvider>
      <Header/>
      <MapComponent/>
    </MapProvider>
  );
}
