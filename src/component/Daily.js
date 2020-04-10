import React from 'react'
import {Line} from "react-chartjs-2"

function Daily({dates,daily_d,daily_c}) {
    return (
        <div className="daily">
            <div className="container">
                <h1 className="text-center text-white display-3 py-3 font-weight-bold">DAILY UPDATES</h1>
                <Line
                    data={{
                        labels: dates,
                        datasets: [{
                        data: daily_c.map(c=>(c.total)),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                        }, {
                        data: daily_d.map(c=>(c.total)),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                        }
                        ]
                        }}
                    options={{
                        responsive: true,
                        title:{display:true,fontColor:"white",text: "COVID-19 Daily Report of Infected and Deaths Cases"},
                        legend: {labels:{fontColor: "white"}},
                        scales: {
                            yAxes: [{ticks: {fontColor: "white"}}],
                            xAxes: [{ticks: {fontColor: "white"}}]
                        }
                    }}
                />
                <hr className="bg-light my-4"/>
            </div>
        </div>
    )
}

export default Daily
