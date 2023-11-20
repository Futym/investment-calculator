import { useState } from "react";
import { UserInput } from "./components/UserInput";
import { ResultTable } from "./components/ResutlTable";

function App() {
  const [investmentInfo, setInvestmentInfo] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleInvestmentChange = (parameter, value) => {
    setInvestmentInfo((prevInvestmentInfo) => {
      return { ...prevInvestmentInfo, [parameter]: value };
    });
  };

  const isInputValid = investmentInfo.duration > 0

  return (
    <div>
      <div id="user-input">
        <div className="input-group">

        <UserInput
          labelText="Initial Investment"
          onChangeInput={(value) =>
            handleInvestmentChange("initialInvestment", value)
          }
          />
        <UserInput
          labelText="Annual Investment"
          onChangeInput={(value) =>
            handleInvestmentChange("annualInvestment", value)
          }
          />
          </div>
          <div className="input-group">
        <UserInput
          labelText="Expected Return"
          onChangeInput={(value) =>
            handleInvestmentChange("expectedReturn", value)
          }
        />
        <UserInput
          labelText="Duration (years)"
          onChangeInput={(value) => handleInvestmentChange("duration", value)}
        />
        </div>
      </div>
      {isInputValid ? <ResultTable investmentInfo={investmentInfo} /> : <p className="center">Please input duration greater than zero.</p>}
    </div>
  );
}

export default App;
