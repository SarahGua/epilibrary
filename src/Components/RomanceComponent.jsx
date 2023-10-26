import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import RomanceBooks from '../data/romance.json'

function RomanceComponent (){
    return ( 
        <Container className='mb-5'>
            <h2>Romance Books</h2>
            <Row className='justify-content-center'>
                {
                    RomanceBooks.map((bookRomance, index) => {
                        if (index<6){

                            return (
                                <Col sm={12} md={4} lg={2} key={bookRomance.asin} className='mt-2'>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={bookRomance.img} className='w-100'/>
                                    <Card.Body className='d-flex flex-column justify-content-around'>
                                        <Card.Title>{bookRomance.title}</Card.Title>
                                        <Card.Text>
                                        Price {bookRomance.price}€
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

export default RomanceComponent