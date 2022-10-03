import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AdminDashBoardProperties() {
 const values = ["abc","def","ghi","jkl","mno","pqr","stu"]
  return (
    <Row xs={1} md={5} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            <Card.Body>
              <Card.Title style={{fontSize:"15px"}}>Card title</Card.Title>
              <Card.Text style={{fontSize:"12px"}}>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. {values[2]}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AdminDashBoardProperties;