import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Movie extends Component {
    render() {
        const { movie } = this.props
        return (
            <div className='col-md-3 mt-5'>
                <div className="card">
                    <img className="card-img-top" src={movie.hinhAnh} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{movie.tenPhim}</h4>
                        <p className="card-text">Text Movie</p>
                        <Link to={`/detail/${movie.maPhim}`} className="btn btn-primary">Detail</Link>
                    </div>
                </div>
            </div>
        )
    }
}


