import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ScifyBooks from '../data/fantasy.json'

function ScifiComponent (){
    return ( 
        <Container className='mb-5'>
            <h2>Scifi Books</h2>
            <Row className='justify-content-center'>
                {
                    ScifyBooks.map((bookScifi, index) => {
                        if (index<6){

                            return (
                                <Col md={2}>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={bookScifi.img} className='w-100'/>
                                    <Card.Body className='d-flex flex-column justify-content-around'>
                                        <Card.Title>{bookScifi.title}</Card.Title>
                                        <Card.Text>
                                        Price {bookScifi.price}€
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        } 
                    })
                }

            </Row>
        </Container>

    )
}

export default ScifiComponent