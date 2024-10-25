import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Item ({item}) {
    return (
        <Col>
            <Card className = 'h-100'>
                <Card.Img variant="top" src={item.thumbnail} className=""></Card.Img>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.category}
                        </Card.Text>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="outline-dark">Ver mas</Button>                
            </Card>
        </Col>
    )
}

export default Item