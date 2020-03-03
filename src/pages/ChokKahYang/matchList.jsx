import React, { useState, useEffect } from 'react'

function MatchList({ match }) {


    console.log(match)
    const { match_id, match_seq_num, start_time, duration } = match
    console.log(match_id)
    return (
        //start time UNIX TIMESTAMP
        //duration /60
        <div>{match_id} - {start_time} - {duration}</div>
    )
}

export default MatchList
