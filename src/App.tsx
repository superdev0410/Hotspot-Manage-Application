import "reactjs-popup/dist/index.css";

import Modal from "./components/Modal";
import HotspotPoint from "./components/HotspotPoint";
import useHotspot from "./hooks/useHotspot";

function App() {
  const { hotspots } = useHotspot();

  return (
    <div className="flex flex-col gap-5 items-center p-10">
      <Modal />
      <div className="content">
        {hotspots.map((hotspot) => (
          <HotspotPoint key={hotspot.id} hotspot={hotspot} />
        ))}
      </div>
    </div>
  );
}

export default App;
