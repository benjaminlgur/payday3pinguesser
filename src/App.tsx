import { useState, useEffect } from "react";
import Checklist from "./components/Checklist/Checklist";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { generatePins } from "./utils/premutationHelper";
import { getTimeToCompleteGuessInMilliseconds } from "./utils/timeHelper";
import TotalTime from "./components/TotalTime/TotalTime";

function App() {
  const [checklistItems, setChecklistItems] = useState<string[]>(() => {
    const storedValue = localStorage.getItem("checklistItems");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const [inputVisible, setInputVisible] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("inputVisible");
    return storedValue ? JSON.parse(storedValue) : true;
  });

  const [errorVisable, setErrorVisable] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("inputVisible", inputVisible.toString());
  }, [inputVisible]);

  useEffect(() => {
    localStorage.setItem("checklistItems", JSON.stringify(checklistItems));
  }, [checklistItems]);

  const handleFormSubmit = (value: string) => {
    try {
      setChecklistItems(generatePins(value));
      setInputVisible(false);
      setErrorVisable(false);
    } catch (error) {
      setErrorVisable(true);
      console.log(error);
    }
  };

  const handleReset = () => {
    setInputVisible(true);
    setErrorVisable(false);
    localStorage.removeItem("checkedItems");
  };

  return (
    <>
      <h1>Payday 3 Vault Code Generator</h1>
      {inputVisible ? (
        <div className="centered-container">
          <Input onFormSubmit={handleFormSubmit} />
        </div>
      ) : (
        <>
          <Checklist checklist={checklistItems} />
          <div className="centered-container">
            <Button onClick={handleReset}>Reset</Button>
          </div>
          <TotalTime
            miliseconds={getTimeToCompleteGuessInMilliseconds(checklistItems)}
          />
        </>
      )}
      {errorVisable ? (
        <div className="centered-container">
          <p>Enter only 3 or 4 non repeating digits from vault fingerprints</p>
        </div>
      ) : null}
      <div className="centered-container">
        <img
          src=".\public\genseccardnorm.svg"
          alt="SVG Image"
          />
      </div>
    </>
  );
}

export default App;
