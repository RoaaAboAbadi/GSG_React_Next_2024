import { useState } from "react";
import "./App.css";
import Numbers from "./componants/numbers.componants";
import NumbersList from "./componants/NumbersList.componants";
import Display from "./componants/Display.componants";

function App() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleNumberClick = (value: number | string) => {
    // setInput((prev) => prev + num.toString)
    if (value === "=") {
      // const token = input.split(/[+-]/);
      const token = input.split(/([+-])/);

      console.log(token);
      let calculatedResult = 0;
      

      if (token.length > 0) {
        calculatedResult = parseFloat(token[0])  

      for(let i=1; i<token.length; i+=2){
        const operator = token[i]
        const nextNumber = parseFloat(token[i + 1])

        if(operator === "+"){
          calculatedResult += nextNumber;
        }else if (operator === "-"){
          calculatedResult -=nextNumber
        }
      }
    }

    setResult(calculatedResult.toString());
  } else {
    setInput((prev) => prev + value.toString());
  }
  };

  return (
    <>
      {/* style={{
        maxWidth: "300px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }} */}
      <Display input={input} result={result}></Display>
      <NumbersList onClick={handleNumberClick}></NumbersList>
    </>
  );
}

export default App;
