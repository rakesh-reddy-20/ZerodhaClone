import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalcurrValue, setTotalcurrValue] = useState(0);
  const [totalPnL, setTotalPnL] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/allholdings").then((res) => {
      setAllHoldings(res.data);

      // Calculate total investment
      const investment = res.data.reduce(
        (acc, stock) => acc + stock.qty * stock.avg,
        0
      );
      setTotalInvestment(investment);

      // Calculate total current value
      const totalValue = res.data.reduce(
        (acc, stock) => acc + stock.price * stock.qty,
        0
      );
      setTotalcurrValue(totalValue);

      // Calculate total P&L
      const totalProfitLoss = res.data.reduce(
        (acc, stock) => acc + stock.price * stock.qty - stock.avg * stock.qty,
        0
      );
      setTotalPnL(totalProfitLoss);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const profitLoss = currValue - stock.avg * stock.qty;
              const isProfit = profitLoss >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>{profitLoss.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>&#8377; {totalInvestment.toFixed(2)}/-</h5>
          <p>Total Investment</p>
        </div>
        <div className="col">
          <h5>&#8377; {totalcurrValue.toFixed(2)}/-</h5>
          <p>Current Value</p>
        </div>
        <div className="col">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
            &#8377; {totalPnL.toFixed(2)}/-
          </h5>
          <p>Total P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
