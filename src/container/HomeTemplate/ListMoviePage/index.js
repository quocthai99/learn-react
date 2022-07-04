import React, { Component } from 'react'
import Movie from './Movies'
import { connect } from 'react-redux'
import { actFetchData } from './reducer/actions'

class ListMoviePage extends Component {

  componentDidMount() {
    this.props.fetchData()
  }

  renderListMovie = () => {
    const { loading, data } = this.props
    if (loading) return <div>Loading...</div>
    return data?.map((movie) => <Movie key={movie.maPhim} movie={movie} />)
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.renderListMovie()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  }
}

const mapDishpatchToProps = (dispatch) => {
  return {
    // listMovieRequest: () => dispatch(actListMovieRequest()),
    // listMovieSuccess: (data) => dispatch(actListMovieSuccess(data)),
    // listMovieError: (error) => dispatch(actListMovieError(error))
    fetchData: () => dispatch(actFetchData())
  }
}

export default connect(mapStateToProps, mapDishpatchToProps)(ListMoviePage)