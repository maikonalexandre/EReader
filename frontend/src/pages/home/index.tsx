import EPUBJS from "epubjs";
import rendition from "epubjs/types/rendition";
import { useEffect, useRef, useState } from "react";

export function Home() {
  const bookRef = useRef<any>(null);

  const initializeEpub = async (arrayBuffer: ArrayBuffer) => {
    if (arrayBuffer) {
      const book = EPUBJS(arrayBuffer);

      const rendition = book.renderTo("book-area", {
        width: "100%",
        height: "100%",
        flow: "paginated",
        minSpreadWidth: Infinity,
      });

      bookRef.current = rendition;

      rendition.display();
    }
  };

  async function onHandleChange(event: any) {
    const file = event?.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = async function () {
      const arrayBuffer = fileReader.result as ArrayBuffer;
      initializeEpub(arrayBuffer);
    };

    fileReader.readAsArrayBuffer(file);
  }

  const next = () => {
    if (bookRef) {
      bookRef.current.next();
    }
  };

  const prev = () => {
    if (bookRef) {
      bookRef.current.prev();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      console.log("Tecla pressionada:", event.key);

      if (event.key == "ArrowDown" || event.key == "ArrowRight") {
        next();
        return;
      }

      if (event.key == "ArrowUp" || event.key == "ArrowLeft") {
        prev();
        return;
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="w-full h-full bg-zinc-50">
      <div className="flex gap-2">
        <label htmlFor="file" className="bg-zinc-700 rounded-sm p-2">
          File
        </label>
        <input
          id="file"
          className="decoration-red-500 hidden"
          type="file"
          onChange={(e) => onHandleChange(e)}
        />
      </div>

      <div id="book-area" className="h-full bg-zinc-50" />
    </div>
  );
}
