import React, { Component, Fragment,useState,useEffect } from 'react';
import './App.css';
import Axio from "axios"
import Navbar from "./component/Navbar"
import Main from "./component/Main"
import Spinner from "./component/Spinner"
import CountUp from 'react-countup'
import Daily from './component/Daily';
import Map from "./component/Map";

const App=()=>{
  
  useEffect(() => {
    getData()  
  }, [])

  const[Confirm,setConfirm]=useState(0)
  const[Death,setDeath]=useState(0)
  const[Recover,setRecover]=useState(0)
  const[Loading,setLoading]=useState(false)
  const[Countries,setCountries]=useState([])
  const[Countryname,setCountryname]=useState("WorldWide")
  const[date,setDate]=useState("")
  const[dailyinfec,setDailyinfec]=useState([])
  const[dailydeath,setDailydeath]=useState([])

  const getData= async()=>{
    setLoading(true)
    const result=await Axio.get("https://covid19.mathdro.id/api")
    const world=await Axio.get("https://covid19.mathdro.id/api/countries")
    const daily=await Axio.get("https://covid19.mathdro.id/api/daily")
    //console.log(daily.data)
    const Countries=[]
    const confirm_report=[]
    const death_report=[]
    const daily_date=[]
    const getdailydata=daily.data
    const getcountry=world.data.countries
    for (let i in getdailydata){
      //console.log(getdailydata[i].deaths)
      confirm_report.push(getdailydata[i].confirmed)
      death_report.push(getdailydata[i].deaths)
      daily_date.push(getdailydata[i].reportDate)
    }
    for (let i in getcountry){
      Countries.push(getcountry[i].name)
      //console.log(Countries[i])
      //console.log(getcountry[i].name)
    }

    setConfirm(result.data.confirmed.value)
    setDeath(result.data.deaths.value)
    setRecover(result.data.recovered.value)
    setLoading(false)
    setCountries(Countries)
    setDate(daily_date)
    setDailyinfec(confirm_report)
    setDailydeath(death_report)
  }

  const renderCountries=()=>{
    return Countries.map((country, i)=>{
      return <option key={i}>{country}</option>
    })
  }

  const getCountryData=async(e)=>{
    //this.setState({Loading:true})
    if(e.target.value==="WorldWide"){
      return getData();
    }
    try{
    const c_name=e.target.value
    const cres= await Axio.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`)
    //console.log(cres)
    setConfirm(cres.data.confirmed.value)
    setDeath(cres.data.deaths.value)
    setRecover(cres.data.recovered.value)
    setCountryname(c_name)
  }catch(err){
    if(err.response.status===404){
      setConfirm("No Data Available")
      setDeath("No Data Available")
      setRecover("No Data Available")
    }
  }
  }
  //console.log(getCountryData())
  if(Loading===true){
      return <Spinner/>
    }else{
    return (
    <Fragment>
      <Navbar confirm={Confirm} deaths={Death} recovered={Recover}/>
      <Daily dates={date} daily_c={dailyinfec} daily_d={dailydeath} />
      <div className="container bg-dark">
        <div className="container">
          <h1 className="display-3 text-white font-weight-bold text-center my-4">COUNTRY WISE REPORT</h1>
          <select className="form-control" onChange={getCountryData}>
            <option>WorldWide</option>
            {renderCountries()}
          </select>
          <Main country={Countryname} confirm={Confirm} death={Death} recover={Recover} />
        </div>
          
      </div>
      <Map/>
    </Fragment>
  );}
}
export default App;
