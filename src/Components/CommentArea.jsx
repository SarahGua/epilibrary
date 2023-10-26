import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ListGroup } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
    state = {
        comments: []
    }

    componentDidMount = () => {
        this.getComments()
    }

    getComments = async() => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.bookId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmEwNmY2ZTNkZDAwMTQ5NWU0NjYiLCJpYXQiOjE2OTgzMzg5MzIsImV4cCI6MTY5OTU0ODUzMn0.0X-e2eYq6tq0v4HSaMxeKosiTTV6CLW4XBUh17v65VY",
                    }
                }
            )
            if(response.ok){
                const arrayOfComments = await response.json()
                console.log(arrayOfComments)
                this.setState({
                    comments: arrayOfComments
                })
            } else {
                throw new Error('Errore')
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    render (){
        return (
            <div>
                <CommentList reviews={this.state.comments}/>
                <AddComment bookId={this.props.bookId}/>
            </div>
        )
    }
}
export default CommentArea