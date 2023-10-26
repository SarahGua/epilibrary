import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
    state = {
        commentBook: {
            comment: '',
            rate: 1, 
            elementId: this.props.bookAsin,
        },
    }

    sendComment = (e) => {
        e.preventDefault()
        console.log('inviamo commento')
        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: 'POST',
            body: JSON.stringify(this.state.commentBook),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmEwNmY2ZTNkZDAwMTQ5NWU0NjYiLCJpYXQiOjE2OTgzMjcwNDYsImV4cCI6MTY5OTUzNjY0Nn0.lzznR5CBTnQC0y6e1cQvgFj8baobHW8japnSsHe44jQ"
            },
        })
        .then((res) => {
            console.log('RESPONSE', res)
            if(res.ok){
                alert('Commento Salvato!')
                this.setState({
                    commentBook: {
                        comment: '',
                    }
                })
            } else {
                throw new Error ('Errore nel salvataggio del commento')
            }
        })
        .catch((err) => {
            console.log('ERRORE', err)
        })
    }

    render (){
        return (
            <>
            <Form className="mx-2 my-3 text-center" onSubmit={this.sendComment}>        
                <Form.Group className="mb-3">
                    <Form.Label>Il tuo commento:</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci il tuo commento" value={this.state.commentBook.comment} onChange={
                        (e) => {
                            this.setState({
                                commentBook:{
                                    ...this.state.commentBook,
                                    comment: e.target.value
                                } 
                            })
                        }
                    }/>
                </Form.Group>
                <Form.Select className="mb-3" value={this.state.commentBook.rate} onChange={
                    (e) => {
                    this.setState({
                        commentBook: {
                            ...this.state.commentBook,
                            rate: e.target.value
                        }
                    })
                }}
                required>
                    <option>Dagli un voto!</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
            <Button variant="success" type="submit">
                Invia!
            </Button>
            </Form>
            <ListGroup className="mx-2 my-3">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
            </ListGroup>
            </>
        )
    }
}

export default CommentArea