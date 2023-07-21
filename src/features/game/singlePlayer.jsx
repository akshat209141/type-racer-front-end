import { React, useEffect,useMemo ,useState } from "react";

import { getRandomQuoteAsync, selectQuote } from "./playerSlice";
import { useDispatch, useSelector } from "react-redux";

const quotes= require("./quotes.json");
const randomQuote = ()=>quotes[Math.floor(quotes.length*Math.random())];
const inputId = "typeracer-input";

export default function TyperacerPage() {
   
  const [quote, setQuote] = useState();
  const [text, setText] = useState("");
  const [currentWord, setCurrentWord] = useState();
  const quotesSplit = useMemo(() => quote?.quote.split(" ") ?? [], [quote]);
  const [wordIdx, setWordIdx] = useState(0);

  return (
    <>
    <div className="px-20">
      <h1 >Typeracer</h1>
    
    </div>
    </>
  );
}