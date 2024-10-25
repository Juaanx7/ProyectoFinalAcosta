import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Item from './Item'

function ItemList ({ items}) {
    return(
        <Container className = 'mt-3 mb-3'>
            <Row xs={1} md={4} className='g-4 align-items-stretch'>
                {items.map(item => (
                    <Item item={item} key={item.id} />
                ))}
            </Row>
        </Container>
    )
}

export default ItemList