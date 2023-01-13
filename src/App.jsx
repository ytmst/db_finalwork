import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RaceList from "./pages/RaceList";
import RaceNew from "./pages/RaceNew";
import PredictionList from "./pages/PredictionList";
import PredictionNew from "./pages/predictionNew";

export default function App() {
  return (
    <BrowserRouter>
    
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-2">
              <aside className="menu">
                <p className="menu-label">予想</p>
                <ul className="menu-list">
                  
                  <li>
                    <Link to="/predict/new">予想投稿</Link>
                  </li>
                  <li>
                    <Link to="/predict/list">予想一覧</Link>
                  </li>
                </ul>
                <p className="menu-label">レース</p>
                <ul className="menu-list">
                  <li>
                    <Link to="/races/new">レース登録</Link>
                  </li>
                  <li>
                    <Link to="/races/list">レース一覧</Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="column is-10">
              <Routes>
                <Route path="/races/new" element={<RaceNew />} />
                <Route path="/races/list" element={<RaceList />} />
                <Route path="/predict/new" element={<PredictionNew />} />
                <Route path="/predict/list" element={<PredictionList />} />
                
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
}
