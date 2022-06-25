
import Content from "../components/Content/Content";
import Dashboard from "../components/Dashboard/Dashboard";
import Hero from "../components/Hero/Hero";
import { useDispatch } from "react-redux/es/exports.js";
import { useEffect } from "react";

import axios from "axios";
import { update_global_covid } from "../features/dataSlice.js";
import { update_dashboard_url } from "../features/dataSlice.js";
function Indonesia(){
  const disfecth = useDispatch();
  useEffect(async() => {
    const res = await axios("https://covid19.mathdro.id/api/countries/indonesia");
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
    disfecth(update_global_covid(dataCovid))
    disfecth(update_dashboard_url("https://covid19.mathdro.id/api/countries/indonesia/og"))
  }, []);
  return (
    <>
      <Hero />
      <Content title="Indonesia"/>
      <Dashboard title="Indonesia"/>
    </>
  )
}

export default Indonesia;