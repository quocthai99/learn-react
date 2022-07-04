import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from './reducer/action'
import { useSelector, useDispatch } from 'react-redux'

export default function DetailMovie() {

    // const loading = useSelector((state) => state.detailedMovieReducer.loading)
    // const data = useSelector((state) => state.detailedMovieReducer.data)
    // const dispatch = useDispatch()

    const loading = useSelector((state) => state.detailMovieReducer.loading);
    const data = useSelector((state) => state.detailMovieReducer.data);
    const dispatch = useDispatch();


    const params = useParams()

    useEffect(() => {
        // lay ID tu URL
        dispatch(fetchData(params.id))
    }, [])

    if (loading) return <div>Loading...</div>

    return (
        <div>
            <h1>DetailMovie</h1>
            <h3>{data && data.tenPhim}</h3>
        </div>
    )
}
