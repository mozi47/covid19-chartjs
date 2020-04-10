import React from 'react'
import CountUp from 'react-countup'
import {Bar,Line} from "react-chartjs-2"

const Main = ({country,confirm,death,recover}) => {
    //daily_c.map(c=>{ console.log(c)})
    return (
        <>
        <div className="container my-5">
        <Bar
                data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [confirm, recover, death],
                    },
                ],
                }}
                options={{
                responsive: true,
                legend: { display: false },
                title: { display: true, fontColor:"white",text: `COVID-19 REPORT OF ${country}` },
                scales: {
                    yAxes: [{ticks: {fontColor: "white"}}],
                    xAxes: [{ticks: {fontColor: "white"}}]
                }
                }}
            />
            <hr className="bg-light my-4"/>
        </div>
        </>
        )
}

export default Main