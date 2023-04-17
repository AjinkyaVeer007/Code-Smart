import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Hero({ state, setState }) {
  const handleClick = (item, id) => {
    if (item.showCode === "hidden") {
      setState(
        [...state],
        ((state[id - 1].showCode = ""), (state[id - 1].text = "Preview"))
      );
    } else {
      setState(
        [...state],
        ((state[id - 1].showCode = "hidden"), (state[id - 1].text = "</>"))
      );
    }
    if (item.showPreview === "block") {
      setState([...state], (state[id - 1].showPreview = "hidden"));
    } else {
      setState([...state], (state[id - 1].showPreview = "block"));
    }
  };

  const handleCopy = (item, id) => {
    //Desktop
    navigator.clipboard.writeText(item.code);

    const handleCopyText = () => {
      setState([...state], (state[id - 1].copyText = "Copied..!"));
      setTimeout(() => {
        setState([...state], (state[id - 1].copyText = "Copy Code"));
      }, 2000);
    };

    handleCopyText();
  };

  return (
    <div className="overflow-y-scroll scrollbar-hide flex flex-col justify-center items-center mb-4">
      {/* Components Mapping */}
      {state.map((item) => {
        return (
          <div key={`${item.id}${item.common}`} className="flex flex-col">
            <div className="flex items-center justify-end gap-4 bg-gray-500 w-[90vw] lg:w-[80vw] h-[6vh] mt-8 mx-auto rounded-t text-white font-[Poppins]">
              <button
                id={item.id}
                onClick={() => handleCopy(item, item.id)}
                className={`${item.showCode} border border-gray-500 hover hover:border hover:border-gray-100 px-2 rounded`}
              >
                {item.copyText}
              </button>
              <button
                id={item.id}
                className="border border-gray-500 hover hover:border hover:border-gray-100 px-2 rounded mr-6 font-[Poppins]"
                onClick={() => handleClick(item, item.id)}
              >
                {item.text}
              </button>
            </div>

            <div
              className={`${item.showPreview} w-[90vw] lg:w-[80vw] py-6 rounded-b flex justify-center items-center border border-slate-600`}
            >
              {/* Preview */}
              <div
                className="overflow-y-scroll scrollbar-hide"
                dangerouslySetInnerHTML={{ __html: item.code }}
              />
            </div>

            {/* Code */}
            <div
              id={item.id}
              className={`${item.showCode} bg-[#282c34] w-[90vw] lg:w-[80vw] mx-auto rounded-b py-4`}
            >
              <SyntaxHighlighter className="rounded-b" style={atomOneDark}>
                {item.code}
              </SyntaxHighlighter>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Hero;
