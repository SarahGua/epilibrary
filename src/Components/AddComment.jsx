import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
    state = {
        commentObject: {
            comment: '',
            rate: 1,
            elementId: this.props.bookId,
        }
    }

    sendNewReview = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch ('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify(this.state.commentObject),
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmEwNmY2ZTNkZDAwMTQ5NWU0NjYiLCJpYXQiOjE2OTgzMzg5MzIsImV4cCI6MTY5OTU0ODUzMn0.0X-e2eYq6tq0v4HSaMxeKosiTTV6CLW4XBUh17v65VY",
                    'Content-type': 'application/json'    
                }
            })
            if(response.ok){
                alert('SALVATO!')
            } else {
                throw new Error ('Errore nel salvataggio')
            }
        } catch (error) {
            
        }
    }

    render(){
        return (
            <Form onSubmit={this.sendNewReview}>
                <Form.Group className="mb-1 mt-4">
                    <Form.Label>Recensione</Form.Label>
                    <Form.Control type="text" value={this.state.commentObject.comment} onChange={
                        (e) => {
                            this.setState({
                                commentObject:{
                                    ...this.state.commentObject,
                                    comment: e.target.value,
                                } 
                            })
                        }
                    }
                    required/>
                </Form.Group>
                <Form.Select value={this.state.commentObject.rate} onChange={
                        (e) => {
                            this.setState({
                                commentObject:{
                                    ...this.state.commentObject,
                                    rate: e.target.value,
                                } 
                            })
                        }
                    }>
                    <option>Open this select menu</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Form.Select>
                <Button variant="success" type="submit" className="my-2" >
                Submit
                </Button>
            </Form>
        )
    }
}

export default AddComment