import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Series from "./components/Series/Series";
import Odd from "./components/Odd/Odd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Theater from "./components/Theater/Theater";

export const PhimHotContext = createContext();

function App() {
  const [allPhim, setAllPhim] = useState([]);
  const [phimBo, setPhimBo] = useState([]);
  const [phimChieuRap, setPhimChieuRap] = useState([]);
  const [phimHot, setPhimHot] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = axios.get(
        "https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR22czovNsKxovVohL0PMmqLnnoRwG-cRJGoBuAKD0588SxeBM9Rp3xu7zg"
      );
      return res;
    }
    getData().then((res) => {
      setAllPhim(res.data.phim);
      setPhimBo(res.data.phim.phimbo);
      setPhimChieuRap(res.data.phim.phimchieurap);
      const result = res.data.phim.phimchieurap.filter(
        (item) => item.category === "Phim hành động"
      );
      setPhimHot(result);
    });
  }, []);

  return (
    <Router>
      <Header />
      <div className="page-container">
        <PhimHotContext.Provider value={phimHot}>
          <Routes>
            <Route path="/" element={<Home allPhim={allPhim} />} />
            <Route path="/phim-bo" element={<Series phimBo={phimBo} />} />
            <Route path="/phim-le" element={<Odd />} />
            <Route
              path="/phim-chieu-rap"
              element={<Theater phimChieuRap={phimChieuRap} />}
            />
          </Routes>
        </PhimHotContext.Provider>
      </div>
    </Router>
  );
}

export default App;
