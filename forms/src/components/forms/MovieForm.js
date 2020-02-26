import React, { Component } from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddMovie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: {
                title: '',
                director: '',
                hasOscars: false,
                IMDbRating: ''
            },
            errorMessage: ''
        }
    }

    // handleDirectorhange = e => this.setState({ director: e.target.value })
    // handleOscarsChange = e => this.setState({ hasOscars: e.target.checked })
    // handleRatingChange = e => this.setState({ IMDbRating: e.target.value })
    // handleTitleChange = e => this.setState({ title: e.target.value })

    handleChange = e => {

        let { name, value, checked } = e.target
        if (name === 'hasOscars') value = checked

        this.setState({
            movie: {
                ...this.state.movie,
                [name]: value
            }
        })
    }


    handleSubmit = e => {
        e.preventDefault()

        if (this.state.movie.title.length < 3) {
            this.setState({ errorMessage: 'RELLENA LOS CAMPOS' })
            return
        }

        this.props.addNewMovie(this.state.movie)
        this.setState({
            movie: {
                title: '',
                director: '',
                hasOscars: false,
                IMDbRating: ''
            },
            errorMessage: ''
        })
    }

    render() {
        return (


            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.movie.title} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Director</Form.Label>
                    <Form.Control type="text" name="director" value={this.state.movie.director} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Check type="checkbox" label="Tiene Oscars" name="hasOscars" checked={this.state.movie.hasOscars} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Puntuación</Form.Label>
                    <Form.Control type="text" name="IMDbRating" value={this.state.movie.IMDbRating} onChange={this.handleChange} />
                </Form.Group>

                <p style={{
                    display: this.state.errorMessage ? 'block' : 'none',
                    color: 'white',
                    backgroundColor: 'red',
                    padding: '10px',
                    fontWeight: 'bold'
                }}>{this.state.errorMessage}</p>

                <Button variant="dark" type="submit">Enviar</Button>
            </Form>

        )
    }
}

export default AddMovie;