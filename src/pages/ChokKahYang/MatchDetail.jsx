import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BasePage from '../basePage/basePage'


const MatchDetail = (props) => {
    const { id } = props.match.params
    const { regions } = props.location.state

    const [matchDetails, setMatchDetails] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDetails = async () => {
            const matchDetail = await axios.get(`https://api.opendota.com/api/matches/${id}`)
            setMatchDetails(matchDetail.data)
            setLoading(false)
        }
        fetchDetails()
    }, [])



    const { radiant_win, radiant_score, dire_score, duration, players } = matchDetails

    const minutes = Math.floor(duration / 60)
    const seconds = duration - minutes * 60
    const formattedSeconds = ("0" + seconds).slice(-2)

    if (players !== undefined)
        console.log(players[1])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <BasePage title={`Match ${id}`}>
            <div>
                <div className="text-center mt-3">
                    <div className="font-weight-bold h1"
                        style={{ color: radiant_win ? 'green' : 'red' }}>
                        {radiant_win ? "Radiant Victory" : "Dire Victory"}
                    </div>
                    <div className="score">
                        <span className="text-success h2 m-3">{radiant_score}</span>
                        <span className="h4">{minutes}:{formattedSeconds}</span>
                        <span className="text-danger h2 m-3">{dire_score}</span>
                    </div>
                </div>

                <div>
                    THE RADIANT
                    <div className="flex">
                        <div className="w-25">Heros</div>
                        <div className="w-25">Players</div>
                        <div className="w-25">Kills</div>
                        <div className="w-25">Deaths</div>
                        <div className="w-25">Assists</div>
                        <div className="w-25">GPM</div>
                        <div className="w-25">XPM</div>
                        <div className="w-75 text-center">Items</div>
                    </div>


                </div>
                <div>
                    THE DIRE
                    <div className="flex">
                        <div className="w-25">Heros</div>
                        <div className="w-25">Players</div>
                        <div className="w-25">Kills</div>
                        <div className="w-25">Deaths</div>
                        <div className="w-25">Assists</div>
                        <div className="w-25">GPM</div>
                        <div className="w-25">XPM</div>
                        <div className="w-75 text-center">Items</div>
                    </div>
                </div>
            </div>
        </BasePage>
    );
}

export default MatchDetail;
