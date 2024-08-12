import Popup from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";

import { Hotspot } from "../utils/type";
import useHotspot from "../hooks/useHotspot";
import { useCallback, useRef } from "react";

interface HotspotPointProps {
  hotspot: Hotspot;
}

const HotspotPoint = ({ hotspot }: HotspotPointProps) => {
  const ref = useRef<PopupActions>(null);
  const { deleteHotspot } = useHotspot();

  const onClose = useCallback(() => ref.current?.close(), []);

  return (
    <Popup
      ref={ref}
      trigger={
        <button
          className="absolute rounded-full w-5 h-5 bg-red-600"
          style={{
            top: `${hotspot.y}%`,
            left: `${hotspot.x}%`,
          }}
        />
      }
      keepTooltipInside=".content"
    >
      <div className="flex flex-col gap-3">
        <div>Title: {hotspot.title}</div>
        <div>Description: {hotspot.description}</div>
        <div className="flex gap-2">
          <button onClick={() => deleteHotspot(hotspot.id)}>Delete</button>
          <button>
            <a href={hotspot.link} target="_blank">
              Visit
            </a>
          </button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Popup>
  );
};

export default HotspotPoint;
