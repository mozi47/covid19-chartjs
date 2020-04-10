import React from 'react'
import CountUp from "react-countup"

const Navbar = ({confirm,deaths,recovered}) => {
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
            <div className="container">
                <a to="/" className="navbar-brand"><i className="fas fa-bug"></i>&nbsp;COVID-19</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="navbar1">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar1">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-link">
                            <a className="nav-item">HOME</a>
                        </li>
                        <li className="nav-link">
                            <a className="nav-item">UPDATES</a>
                        </li>
                        <li className="nav-link">
                            <a className="nav-item">INDIVIDUAAL</a>
                        </li>
                        <li className="nav-link">
                            <a className="nav-item">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="hero">
            <div className="overlay">
            <div className="container">
            <h1 className="text-center font-weight-bold display-4 py-5">COVID-19 WORLD WIDE REPORT</h1>
                    <div className="row mt-5">
                        <div className="col-4">
                            <h1 className="text-center">
                                    <CountUp
                                        start={0}
                                        end={confirm}
                                        duration={2.5}
                                        separator=","
                                    />
                            </h1>
                            <h1 className="text-center">INFECTED</h1>
                        </div>
                        <div className="col-4">
                            <h1 className="text-center">
                                    <CountUp
                                        start={0}
                                        end={deaths}
                                        duration={2.5}
                                        separator=","
                                    />
                            </h1>
                            <h1 className="text-center">DEATHS</h1>
                        </div>
                    <div className="col-4">
                        <h1 className="text-center">
                                <CountUp
                                    start={0}
                                    end={recovered}
                                    duration={2.5}
                                    separator=","
                                />
                        </h1>
                        <h1 className="text-center ">RECOVERED</h1>    
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
