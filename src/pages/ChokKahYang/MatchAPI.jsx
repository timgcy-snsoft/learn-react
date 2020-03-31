import React, { useState, useEffect } from 'react'
import MatchList from './MatchList'
import Pagination from './Pagination'
import callApi from "../DotaAPI/FetchFunction"

function MatchAPI({ publicMatches, heros, clusters, itemsID, items }) {


    const [regions, setRegions] = useState({})

    const [currentPage, setCurrentPage] = useState(1)
    const [matchesPerPage] = useState(15)



    const indexOfLastMatch = currentPage * matchesPerPage
    const indexOfFirstMatch = indexOfLastMatch - matchesPerPage
    const currentMatch = publicMatches.slice(indexOfFirstMatch, indexOfLastMatch)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        const fetchRegions = async () => {
            const region = await callApi('/constants/region')
            setRegions({
                ...region,
                5: "SE Asia", 8: "RUSSIA", 12: "CHINA", 13: "CHINA",
                17: "CHINA", 18: "CHINA", 20: "CHINA", 25: "CHINA"
            })
        }
        fetchRegions()
    }, []);

    return (
        <div className="m-3 clearfix">
            <div className="flex font-weight-bold text-light text-center">
                <div className="m-2 w-25">Match ID</div>
                <div className="m-2 w-25">Start Time</div>
                <div className="m-2 w-25">Duration</div>
                <div className="m-2 w-25">Result</div>
                <div className="m-2 w-50">Radiant</div>
                <div className="m-2 w-50">Dire</div>
            </div>
            {currentMatch.map(match =>
                (<MatchList key={match.match_id}
                    match={match} heros={heros} clusters={clusters} regions={regions}
                    itemsID={itemsID} items={items} />)
            )}
            <Pagination matchesPerPage={matchesPerPage} totalMatches={publicMatches.length} paginate={paginate} />
        </div>
    )
}

export default MatchAPI
