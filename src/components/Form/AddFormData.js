import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_covid_provinsi } from "../../features/dataSlice";
import Button from "../ui/Button";
import poster from "./../../image/undraw_form_re_pkrt.png"
import StyledForm from "./StyledForm";

function AddFormData(){
    const provinces =  useSelector((store)=> store.covid_data_reducers.covid_provinsi)
    // console.log(provinces);
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        province: provinces[0].kota,
        status: "Positif",
        jumlah: 0
    })
    const {province, status, jumlah} = formData
    function updateProvince(e){
        setFormData({
            ...formData,
            province: e.target.value
        })
    }
    function updateStatus(e){
        setFormData({
            ...formData,
            status: e.target.value
        })

    }
    function updateTotal(e){
        setFormData({
            ...formData,
            jumlah: e.target.value
        })
        
    }
    
    function handleSubmit(e){
        e.preventDefault()
        const nameindex = provinces.findIndex((item) => item.kota === province)
        const provinsiData = provinces.find((item) => item.kota === province)
        const dataInput = [...provinces]
        if(status === 'Positif'){
            dataInput[nameindex] = {
                ...provinsiData,
                kasus: parseInt(provinsiData.kasus)+parseInt(jumlah)
            }
        }else if(status === 'Sembuh'){
            dataInput[nameindex] = {
                ...provinsiData,
                sembuh: parseInt(provinsiData.sembuh)+parseInt(jumlah)

            }
        }else if(status === 'Dirawat'){
            dataInput[nameindex] = {
                ...provinsiData,
                dirawat: parseInt(provinsiData.dirawat)+parseInt(jumlah)

            }
        }else if(status === 'Meninggal'){
            dataInput[nameindex] = {
                ...provinsiData,
                meninggal: parseInt(provinsiData.meninggal)+parseInt(jumlah)

            }
        }
        dispatch(update_covid_provinsi(dataInput))
        setFormData({
            ...formData,
            jumlah: 0
        })
        // console.log(province, status, jumlah)
    }

    return(
        <StyledForm>
            <section className="addformdata">
                <div className="addformdata__left">
                    <img className="addformdata__image"
                     src={poster} alt="placeholder"></img>
                </div>
                <div className="addformdata__right">
                    <h2 className="addformdata__title_form">Form Data Covid</h2>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label className="addformdata__add_form">Provinsi</label>
                                <select value={province} onChange={updateProvince} className="addformdata__select">
                                {provinces.map((item, idx) => {
                                    return ( 
                                    <option key={idx} value={item.kota}>{item.kota}</option>
                                    )
                                })}
                                </select>
                                <label className="addformdata__add_form_status">Status</label>
                                <div>
                                    <select onChange={updateStatus} value={status} className="addformdata__select">
                                        <option value="Positif">Positif</option>
                                        <option value="Sembuh">Sembuh</option>
                                        <option value="Dirawat">Dirawat</option>
                                        <option value="Meninggal">Meninggal</option>
                                    </select>
                                </div>
                            <label className="addformdata__add_form_jumlah">Jumlah</label>
                            <input type="text" id="title" onChange={updateTotal} value={jumlah} name="title" className="addformdata__isian"></input>
                            <Button variant="secondary" full>Add Data</Button>
                        </form>
                    </div>
                </div>
            </section>
        </StyledForm>
    );
}

export default AddFormData;