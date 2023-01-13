import { useNavigate } from "react-router-dom";
import { postRaces } from "../api";
import Field from "../components/Field";

export default function RaceNew() {
  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await postRaces({
            レースID: event.target.elements.raceId.value,
            日付: event.target.elements.date.value,
            会場: event.target.elements.course.value,
            レース番号: event.target.elements.raceNum.value,
            レース名: event.target.elements.raceName.value,
            種別: event.target.elements.kinds.value,
            距離: event.target.elements.dist.value,
          });
          navigate("/races/list");
        }}
      >
        <Field label="レースID">
          <input name="raceId" className="input is-primary" placeholder="例)東京5レース1回目⇒「TK12010501」" required />
          <div className="notification is-primary is-light">
            <button className="delete"></button>
            会場コードの詳細  東京:TK 中山:NY 阪神:HS 京都:KT 中京:CK 新潟:NG 小倉:KK函館:HD 札幌:SP
          </div>
        </Field>
        <Field label="日付">
          <input name="date" className="input is-primary" type="date" required />
        </Field>       
        <Field label="会場">
          <input name="course" className="input is-primary" required />
        </Field>
        <Field label="レース番号">
          <input name="raceNum" className="input is-primary" type="number" min={1} max={12} required />
        </Field>
        <Field label="レース名">
          <input name="raceName" className="input is-primary" required />
        </Field>
        <Field label="種別">
          <div className="select is-primary">
            <select name="kinds">
              <option>芝</option>
              <option>ダート</option>
              <option>障害</option>
            </select>
          </div>
        </Field>
        <Field label="距離">
          <input name="dist" className="input is-primary" required />
        </Field>
        <Field>
          <button className="button is-primary" type="submit">
            登録
          </button>
        </Field>
      </form>
    </>
  );
}
