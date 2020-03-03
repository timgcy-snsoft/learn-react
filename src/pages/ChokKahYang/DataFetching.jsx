import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MatchList from './matchList'

function DataFetching() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        axios.get('https://api.opendota.com/api/publicMatches')
            .then(res => {
                console.log(res)
                setMatches(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {matches.map(match => (<MatchList key={match.match_id} match={match} />))}
        </div>
    )
}

export default DataFetching
