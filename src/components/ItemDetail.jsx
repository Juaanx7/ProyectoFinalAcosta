import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

function ItemDetail({ detail }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="my-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={detail?.images[0]} alt="imagen de producto" />
        <Card.Body>
          <Card.Title>{detail?.title}</Card.Title>
          <Card.Text>{detail?.description}</Card.Text>
          <ItemCount/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
