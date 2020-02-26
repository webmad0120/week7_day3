import React, { Component } from 'react'
import CardImproved from '../cards/ImprovedCard'
import MovieForm from '../forms/MovieForm'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DynamicMoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: false, IMDbRating: 7 },
                { title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 9.2 },
                { title: "Titanic", director: "James Cameron", hasOscars: true, IMDbRating: 5 },
                { title: "Batman returns", director: "Nolan", hasOscars: true, IMDbRating: 9.2 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 6.3 }
            ]
        }
    }


    addNewMovie = theMovie => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(theMovie)
        this.setState({ movies: moviesCopy })
    }


    render() {

        return (
            <Row>
                <Col md={{ span: 3, offset: 1 }}>
                    <h3>Nueva película:</h3>
                    <MovieForm addNewMovie={this.addNewMovie} />
                </Col>
                <Col md={{ span: 6, offset: 1 }}>
                    <h3>Lista de películas:</h3>
                    <Row>
                        {this.state.movies.map((elm, idx) => <Col md={6}><CardImproved key={idx} {...elm} deleteOneMovie={() => this.deleteMovie(idx)} /></Col>)}
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default DynamicMoviesList