import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FantasyBooks from '../data/fantasy.json'

function FantasyComponent (){
    return ( 
        <Container className='mb-5'>
            <h2>Fantasy Books</h2>
            <Row className='justify-content-center'>
                {
                    FantasyBooks.map((bookFantasy, index) => {
                        if (index<6){

                            return (
                                <Col md={2}>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={bookFantasy.img} className='w-100'/>
                                    <Card.Body className='d-flex flex-column justify-content-around'>
                                        <Card.Title>{bookFantasy.title}</Card.Title>
                                        <Card.Text>
                                        Price {bookFantasy.price}€
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

export default FantasyComponent