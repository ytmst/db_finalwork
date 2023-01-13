import { useEffect, useState } from "react";
import { getRaces } from "../api";

export default function RaceList() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    (async () => {
      const races = await getRaces();
      setRaces(races);
    })();
  }, []);

  return (
    <>
      <table className="table is-fullwidth is-bordered">
        <thead>
          <tr>
            <th>レースID</th>
            <th>日付</th>
            <th>会場</th>
            <th>レース番号</th>
            <th>レース名</th>
            <th>種別</th>
            <th>距離</th>
          </tr>
        </thead>
        <tbody>
          {races.map((race) => {
            return (
              <tr key={race.レースID}>
                <td>{race.レースID}</td>
                <td>{race.日付}</td>
                <td>{race.会場}</td>
                <td>{race.レース番号}</td>
                <td>{race.レース名}</td>
                <td>{race.種別}</td>
                <td>{race.距離}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
