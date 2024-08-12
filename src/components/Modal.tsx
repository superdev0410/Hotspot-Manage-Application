import { useCallback, useRef } from "react";
import Popup from "reactjs-popup";
import { PopupActions } from "reactjs-popup/dist/types";

import useHotspot from "../hooks/useHotspot";

const Modal = () => {
  const ref = useRef<PopupActions>(null);
  const xRef = useRef<HTMLInputElement>(null);
  const yRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const { addHotspot } = useHotspot();

  const onClickAdd = useCallback(() => {
    addHotspot(
      Number(xRef.current?.value),
      Number(yRef.current?.value),
      titleRef.current?.value ?? "",
      descriptionRef.current?.value ?? "",
      linkRef.current?.value ?? ""
    );
    ref.current?.close();
  }, [addHotspot]);

  return (
    <>
      <Popup ref={ref} trigger={<button> Add New </button>} modal>
        <div className="flex flex-col gap-4 p-3">
          <div className="flex gap-2">
            <label>X:</label>
            <input ref={xRef} type="number" />
          </div>
          <div className="flex gap-2">
            <label>Y:</label>
            <input ref={yRef} type="number" />
          </div>
          <div className="flex gap-2">
            <label>Title:</label>
            <input ref={titleRef} />
          </div>
          <div className="flex gap-2">
            <label>Description:</label>
            <input ref={descriptionRef} />
          </div>
          <div className="flex gap-2">
            <label>Link:</label>
            <input ref={linkRef} />
          </div>
          <button onClick={onClickAdd}>Add</button>
        </div>
      </Popup>
    </>
  );
};

export default Modal;
