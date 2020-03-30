import React from 'react'

const Main = ({confirm,death,recover}) => {
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <div className="card bg-secondary py-2">
                    <h4 className="card-title text-center">CONFIRM CASES</h4>
                    <h4 className="card-text text-center">{confirm}</h4>
                </div>
            </div>
            <div className="col-4">
                <div className="card bg-danger py-2">
                    <h4 className="card-title text-center">TOTAL DEATHS</h4>
                    <h4 className="card-text text-center">{death}</h4>
                </div>
            </div>
            <div className="col-4">
                <div className="card bg-success py-2">
                    <h4 className="card-title text-center">TOTAL RECOVERED</h4>
                    <h4 className="card-text text-center">{recover}</h4>
                </div>
            </div>
        </div>
        )
}

export default Main