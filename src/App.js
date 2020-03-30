import React, { Component, Fragment } from 'react';
import './App.css';
import Axio from "axios"
import Navbar from "./component/Navbar"
import Main from "./component/Main"
import Spinner from "./component/Spinner"

class App extends Component {
  constructor(props){
    super(props);
    this.getCountryData = this.getCountryData.bind(this)
  }

  state={
    Confirm:0,
    Death:0,
    Recover:0,
    Loading:false,
    Countries:[]
  }

  componentDidMount(){
    this.getData()
  }

  getData= async()=>{
    this.setState({Loading:true})
    const result=await Axio.get("https://covid19.mathdro.id/api")
    const world=await Axio.get("https://covid19.mathdro.id/api/countries")
    const Countries=[]
    const getcountry=world.data.countries
    for (let i in getcountry){
      Countries.push(getcountry[i].name)
      //console.log(Countries[i])
      //console.log(getcountry[i].name)
    }

    this.setState({
      Confirm:result.data.confirmed.value,
      Death:result.data.deaths.value,
      Recover:result.data.recovered.value,
      Loading:false,
      Countries
    })
  }

  renderCountries=()=>{
    return this.state.Countries.map((country, i)=>{
      return <option key={i}>{country}</option>
    })
  }

  getCountryData=async(e)=>{
    //this.setState({Loading:true})
    if(e.target.value==="WorldWide"){
      return this.getData();
    }
    try{
    const cres= await Axio.get(`https://covid19.mathdro.id/api/countries/${e.target.value}`)
    //console.log(cres)
    this.setState({
      Confirm:cres.data.confirmed.value,
      Death:cres.data.deaths.value,
      Recover:cres.data.recovered.value,
      //Loading:false
    })
  }catch(err){
    if(err.response.status===404){
      this.setState({
        Confirm:"No Data Available",
        Death:"No Data Available",
        Recover:"No Data Available"
        //Loading:false
      })
    }
  }
  }

  render(){
    if(this.state.Loading===true){
      return <Spinner/>
    }else{
    return (
    <Fragment>
      <Navbar/>
      <div className="container">
        <div className="container">
          <h1 className="display-5 font-weight-bold text-center my-4">CORONOVIRUS RECORDS</h1>
          <select className="form-control" onChange={this.getCountryData}>
            <option>WorldWide</option>
            {this.renderCountries()}
          </select>
        </div>
        <Main confirm={this.state.Confirm} death={this.state.Death} recover={this.state.Recover}/>  
      </div>
    </Fragment>
  );}
}
}
export default App;
