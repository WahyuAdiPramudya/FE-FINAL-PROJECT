
import Hero from "../components/Hero/Hero.js";
import Content from "../components/Content/Content.js";
import Dashboard from "../components/Dashboard/Dashboard.js";
import { useDispatch } from "react-redux/es/exports.js";
import { useEffect } from "react";

import axios from "axios";
import { update_global_covid } from "../features/dataSlice.js";
import { update_dashboard_url } from "../features/dataSlice.js";

function Main() {
  const dispacth = useDispatch();
  useEffect(async() => {
    const res = await axios("https://covid19.mathdro.id/api");
    const dataCovid = [
      {
        status:"Positif",
        ...res.data.confirmed
      },
      {
        status:"Meninggal",
        ...res.data.deaths
      },
      {
        status:"Sembuh",
        ...res.data.recovered
      },
    ]
    dispacth(update_global_covid(dataCovid))
    dispacth(update_dashboard_url(res.data.image))
  }, []);
  return (
    <main>
      <Hero />
      <Content title="Global"/>
      <Dashboard title="Global"/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
