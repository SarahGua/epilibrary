import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, FormControl, FormGroup, Row } from "react-bootstrap";

class BookList extends Component {
    state = {
        searchValue: ''
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <FormGroup className="mb-3">
                            <FormControl type="text" placeholder="Cerca un libro..." value={this.state.searchValue} onChange={e => {
                                this.setState({
                                    searchValue: e.target.value,
                                })
                            }}></FormControl>
                        </FormGroup>
                    </Col>
                </Row> 
                <Row>
                    {
                        this.props.manyBooks.filter(oneBook => oneBook.title.toLowerCase().includes(this.state.searchValue.toLowerCase())).map((oneBook) => {
                            return (
                            <Col md={3} key={oneBook.asin} className="mt-3">
                                <SingleBook book={oneBook}/>
                            </Col>
                            )
                        })
                    }
                </Row>     
            </Container>
        )
    }
} 

export default BookList