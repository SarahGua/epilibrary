import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';

class SingleBook extends Component {
    state = {
        selected: false,
    }

    toggleSelected = () => {
        this.setState({
            selected: !this.state.selected,
        })
    }

    render (){
        return (
            <Card className={this.state.selected && 'red-border'} key={this.props.book.asin}>
                <Card.Img variant="top" src={this.props.book.img} className='w-100' onClick={this.toggleSelected}/>
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                    Price {this.props.book.price}€
                    </Card.Text>
                    <Button variant="primary">Add</Button>
                </Card.Body>
                {this.state.selected && <CommentArea bookId={this.props.book.asin}/>}
            </Card>
        )
    }
}


export default SingleBook