import { useEffect, useState } from "react";
import { getPredict } from "../api";

export default function PredictionList() {
  const [prediction, setPrediction] = useState([]);

  useEffect(() => {
    (async () => {
      const prediction = await getPredict();
      setPrediction(prediction);
    })();
  }, []);

  return (
    <>
      <table className="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>予想番号</th>
            <th>レースID</th>
            <th>本命馬番(◎)</th>
            <th>対抗馬番(〇)</th>
            <th>単穴馬番(▲)</th>
            <th>投稿日付</th>
          </tr>
        </thead>
        <tbody>
          {prediction.map((predict) => {
            return (
              <tr key={predict.予想番号}>
                <td>{predict.予想番号}</td>
                <td>{predict.レースID}</td>
                <td>{predict.本命馬番}</td>
                <td>{predict.対抗馬番}</td>
                <td>{predict.単穴馬番}</td>
                <td>{predict.投稿日付}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
