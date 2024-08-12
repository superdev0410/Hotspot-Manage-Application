import { createContext } from "react";

import { Hotspot } from "../utils/type";

interface HotspotContextValue {
  hotspots: Hotspot[];
  addHotspot: (
    x: number,
    y: number,
    title: string,
    description: string,
    link: string
  ) => void;
  deleteHotspot: (id: string) => void;
}

const HotspotContext = createContext<HotspotContextValue>(
  {} as HotspotContextValue
);

export default HotspotContext;
