import { useState } from "react";
import { UserInput } from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
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
      <ResultTable investmentInfo={investmentInfo} />
    </div>
  );
}

export default App;
