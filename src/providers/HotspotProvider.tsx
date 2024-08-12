import { useState, useCallback, ReactNode } from "react";
import { v4 as uuid } from "uuid";

import { Hotspot } from "../utils/type";
import HotspotContext from "../contexts/HotspotContext";

const HotspotProvider = ({ children }: { children: ReactNode }) => {
  const [hotspots, setHotspots] = useState<Hotspot[]>([]);

  const addHotspot = useCallback(
    (
      x: number,
      y: number,
      title: string,
      description: string,
      link: string
    ) => {
      setHotspots((prev) => [
        ...prev,
        {
          id: uuid(),
          x: x,
          y: y,
          title: title,
          description: description,
          link: link,
        },
      ]);
    },
    []
  );

  const deleteHotspot = useCallback((id: string) => {
    setHotspots((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <HotspotContext.Provider value={{ hotspots, addHotspot, deleteHotspot }}>
      {children}
    </HotspotContext.Provider>
  );
};

export default HotspotProvider;
