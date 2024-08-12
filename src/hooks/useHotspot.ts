import { useContext } from "react";

import HotspotContext from "../contexts/HotspotContext";

const useHotspot = () => useContext(HotspotContext);

export default useHotspot;
