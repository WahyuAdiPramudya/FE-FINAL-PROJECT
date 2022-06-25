// import style from "./Table.module.css";
import {useSelector} from "react-redux";
import StyledTable from "./StyledTable";
function Table(){
    const provinces = useSelector((store)=>store.covid_data_reducers.covid_provinsi)
    return (
        <StyledTable>
            <div className="container">
            <section className="contents">
                <h2 className="table__title">Provinsi</h2>
                <h4 className="table__description">Data COVID Berdasarkan Provinsi</h4>
                <div className="table__container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nomor</th>
                                <th>Provinsi</th>
                                <th>Positif</th>
                                <th>Sembuh</th>
                                <th>Dirawat</th>
                                <th>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {provinces.map((data,idx) => {
                                // console.log(data);
                                return (
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{data.kota}</td>
                                        <td>{data.kasus}</td>
                                        <td>{data.sembuh}</td>
                                        <td>{data.dirawat}</td>
                                        <td>{data.meninggal}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
            </div>
        </StyledTable>
    );
}

export default Table;