import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HorrorBooks from '../data/horror.json'

function HorrorComponent (){
    return ( 
        <Container className='mb-5'>
            <h2>Horror Books</h2>
            <Row className='justify-content-center'>
                {
                    HorrorBooks.map((bookHorror, index) => {
                        if (index<6){

                            return (
                                <Col md={2}>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={bookHorror.img} className='w-100'/>
                                    <Card.Body className='d-flex flex-column justify-content-around'>
                                        <Card.Title>{bookHorror.title}</Card.Title>
                                        <Card.Text>
                                        Price {bookHorror.price}€
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

export default HorrorComponent