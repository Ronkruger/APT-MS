import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
const Tenant = ({tenant}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/tenant/${tenant._id}`}>
            <Card.Img src={tenant.image} variant="top" />
        </Link>
        <Card.Body>
            <Link to={`/tenant/${tenant._id}`}>
                <Card.Title as='div'>
                    <strong>{tenant.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='h3'>
                {tenant.address}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Tenant