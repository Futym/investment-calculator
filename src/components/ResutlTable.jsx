import { formatter, calculateInvestmentResults } from "../util/investment";

export const ResultTable = ({ investmentInfo }) => {
    console.log(investmentInfo)
  const investmentResults = calculateInvestmentResults(investmentInfo);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((yearResult) => (
          <tr key={yearResult.year}>
            <td>{yearResult.year}</td>
            <td>{formatter.format(yearResult.valueEndOfYear)}</td>
            <td>{formatter.format(yearResult.interest)}</td>
            <td>
              {formatter.format(
                yearResult.valueEndOfYear -
                  (investmentInfo.initialInvestment +
                  yearResult.year * yearResult.annualInvestment)
              )}
            </td>
            <td>
              {investmentInfo.initialInvestment +
                yearResult.year * yearResult.annualInvestment}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
