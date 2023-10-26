import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HistoryBooks from '../data/history.json'

function HistoryComponent (){
    return ( 
        <Container className='mb-5'>
            <h2>History Books</h2>
            <Row className='justify-content-center'>
                {
                    HistoryBooks.map((bookHistory, index) => {
                        if (index<6){

                            return (
                                <Col sm={12} md={4} lg={2} key={bookHistory.asin} className='mt-2'>
                                <Card className='h-100'>
                                    <Card.Img variant="top" src={bookHistory.img} className='w-100'/>
                                    <Card.Body className='d-flex flex-column justify-content-around'>
                                        <Card.Title>{bookHistory.title}</Card.Title>
                                        <Card.Text>
                                        Price {bookHistory.price}€
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

export default HistoryComponent