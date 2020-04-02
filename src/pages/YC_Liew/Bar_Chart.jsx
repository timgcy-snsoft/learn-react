import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = ({ currentMatch, heros }) => {

    const [heroName, setHeroName] = useState()
    const [usage, setUsage] = useState([])
    const [Radiant, setRadiant] = useState([])
    const [Dire, setDire] = useState([])
    let chartData

    useEffect(() => {
        let totalArray = []
        let radiantArray = []
        let direArray = []
        let objRadiant = []
        let objDire = []

        for (const property in currentMatch) {
            totalArray = [
                ...totalArray,
                ...currentMatch[property].radiant_team.split(",").map(x => x)
            ];
            totalArray = [
                ...totalArray,
                ...currentMatch[property].dire_team.split(",").map(x => x)
            ];
            radiantArray = [
                ...radiantArray,
                ...currentMatch[property].radiant_team.split(",").map(x => x)
            ];
            direArray = [
                ...direArray,
                ...currentMatch[property].dire_team.split(",").map(x => x)
            ]
        }

        let counts = {}
        let countsDire = {}
        let countsRadiant = {}

        for (let i = 0; i < totalArray.length; i++) {
            let num = totalArray[i]
            counts[num] = counts[num] ? counts[num] + 1 : 1
        }

        for (let i = 0; i < radiantArray.length; i++) {
            let num = radiantArray[i]
            countsRadiant[num] = countsRadiant[num] ? countsRadiant[num] + 1 : 1
        }

        for (let i = 0; i < direArray.length; i++) {
            let num = direArray[i]
            countsDire[num] = countsDire[num] ? countsDire[num] + 1 : 1
        }

        for (const property in countsDire) {
            objDire = [
                ...objDire,
                {
                    id: `${property}`,
                    usage: `${countsDire[property]}`
                }
            ]
        }

        for (const property in countsRadiant) {
            objRadiant = [
                ...objRadiant,
                {
                    id: `${property}`,
                    usage: `${countsRadiant[property]}`
                }
            ]
        }

        let sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a])
        let top10 = sorted.slice(0, 15)

        console.log(radiantArray,'radiant')
        console.log(objRadiant,'OBJ')
        console.log(top10,'top')
        console.log(countsRadiant,'a')
        console.log(countsDire,'b')
        console.log(counts,'c')

        // for(let i = 0;i < 10;i++)
        // {
        //     setRadiant(preRadiant => {
        //         let num = top10[i]
        //         return [
        //             ...preRadiant,
        //             objRadiant.map(item => filter)
        //         ]
        //     })
        // }

        // console.log(counts,'counts')
        // console.log(sorted,'sorted')
        // console.log(top10,'top10')
        // console.log(objRadiant.filter(item => top10.includes(item.id.toString())),'radiant')
        // console.log(objDire.filter(item => top10.includes(item.id.toString())),'dire')
        // console.log(objRadiant,'obj')
        // console.log(objDire,'obj2')

        setRadiant(objRadiant.filter(item => top10.includes(item.id.toString())))
        setDire(objDire.filter(item => top10.includes(item.id.toString())))
        setUsage(
            Object.values(counts)
                .sort()
                .reverse()
        )

        setHeroName(heros.filter(hero => top10.includes(hero.id.toString())))

    }, [])

    if (heroName !== undefined) {
        let datasetsRadiant = {
            label: 'Radiant',
            data: [
                Radiant[0].usage,
                Radiant[1].usage,
                Radiant[2].usage,
                Radiant[3].usage,
                Radiant[4].usage,
                Radiant[5].usage,
                Radiant[6].usage,
                Radiant[7].usage,
                Radiant[8].usage,
                Radiant[9].usage,
            ],
            backgroundColor: 'red',
            borderWidth: 0,
        }

        let datasetsDie = {
            label: 'Die',
            data: [
                Dire[0].usage,
                Dire[1].usage,
                Dire[2].usage,
                Dire[3].usage,
                Dire[4].usage,
                Dire[5].usage,
                Dire[6].usage,
                Dire[7].usage,
                Dire[8].usage,
                Dire[9].usage,
            ],
            backgroundColor: 'green',
            borderWidth: 0,
        }

        chartData = {
            labels: [
                heroName[0].localized_name,
                heroName[1].localized_name,
                heroName[2].localized_name,
                heroName[3].localized_name,
                heroName[4].localized_name,
                heroName[5].localized_name,
                heroName[6].localized_name,
                heroName[7].localized_name,
                heroName[8].localized_name,
                heroName[9].localized_name,
            ],
            datasets: [datasetsDie, datasetsRadiant]
        }
    }

    return (
        <div className="chart">
            <Bar
                data={chartData}
                options={{
                    scales: {
                        xAxes: [{
                            barPercentage: 1,
                            categoryPercentage: 0.6
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default BarChart;