"use client";
import { useState } from "react";

export const InteractionTest = ({ id }: { id: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        id={"interaction-button-" + id}
        disabled={show}
        onClickCapture={(e) => {
          "detail" in e &&
            typeof e.detail === "function" &&
            (e as any).detail();
          setShow(true);
        }}
      >
        Show {id}
      </button>
      {show && (
        <span id={"interaction-rendering-" + id}>Client rendered {id}</span>
      )}
    </div>
  );
};
