import React, { useState, useEffect } from 'react'
import MatchList from './MatchList'
import Pagination from './Pagination'
import getApi from "../DotaAPI/FetchFunction"

function MatchAPI() {

    const [matches, setMatches] = useState([])
    const [heros, setHeros] = useState([])

    const [clusters, setCluster] = useState([])
    const [regions, setRegions] = useState({})

    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [matchesPerPage] = useState(15)

    useEffect(() => {
        const fetchMatchs = async () => {
            setMatches(await getApi('https://api.opendota.com/api/publicMatches'))
            setHeros(await getApi('https://api.opendota.com/api/heroStats'))
            setCluster(await getApi('https://api.opendota.com/api/constants/cluster'))
            setLoading(false)
        }
        fetchMatchs()
    }, [])


    const indexOfLastMatch = currentPage * matchesPerPage
    const indexOfFirstMatch = indexOfLastMatch - matchesPerPage
    const currentMatch = matches.slice(indexOfFirstMatch, indexOfLastMatch)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    useEffect(() => {
        const fetchRegions = async () => {
            const region = await getApi('https://api.opendota.com/api/constants/region')
            setRegions({
                ...region,
                5: "SE Asia", 8: "RUSSIA", 12: "CHINA", 13: "CHINA",
                17: "CHINA", 18: "CHINA", 20: "CHINA", 25: "CHINA"
            })
        }
        fetchRegions()
    }, []);

    if (loading) {
        return <h2>Loading...</h2>
    }

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
                    match={match} heros={heros} clusters={clusters} regions={regions} />)
            )}
            <Pagination matchesPerPage={matchesPerPage} totalMatches={matches.length} paginate={paginate} />
        </div>
    )
}

export default MatchAPI
