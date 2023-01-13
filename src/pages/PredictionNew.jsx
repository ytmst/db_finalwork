import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {getRaces, postPredict } from "../api";
import Field from "../components/Field";

export default function PredictionNew() {
  const navigate = useNavigate();
  const [races, setRaces] = useState([]);


  useEffect(() => {
    (async () => {
      const races = await getRaces();
      setRaces(races);
    })();
  }, []);
  

  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await postPredict({
            予想番号: event.target.elements.preNum.value,
            レースID: event.target.elements.raceId.value,
            本命馬番: event.target.elements.honmeiNum.value,
            対抗馬番: event.target.elements.taikouNum.value,
            単穴馬番: event.target.elements.tannanaNum.value,
            投稿日付: event.target.elements.postDate.value,
          });
          navigate("/predict/list");
        }}
      >
        <Field label="予想番号">
          <input name="preNum" className="input is-primary" type="number" required />
        </Field>
        <Field label="レースID">
          <div className="select is-fullwidth">
            <select name="raceId">
              {races.map((race) => {
                return (
                  <option key={race.レースID} value={race.レースID}>
                    {race.レースID}
                  </option>
                );
              })}
            </select>
          </div>
        </Field>
        
        <Field label="本命馬番">
          <input name="honmeiNum" className="input is-primary" type="number" min={1} max={18} required />
        </Field>
        <Field label="対抗馬番">
          <input name="taikouNum" className="input is-primary" type="number" min={1} max={18} required />
        </Field>
        <Field label="単穴馬番">
          <input name="tannanaNum" className="input is-primary" type="number" min={1} max={18} required />
        </Field>
        <Field label="投稿日付">
          <input name="postDate" className="input is-primary" type="date" required />
        </Field>
        <Field>
          <button className="button is-primary" type="submit">
            投稿
          </button>
        </Field>
      </form>
    </>
  );
}
