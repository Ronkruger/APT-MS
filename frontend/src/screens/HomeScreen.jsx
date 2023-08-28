
import { Row, Col } from "react-bootstrap"
import Tenant from "../components/Tenant"
import { useGetTenantsQuery } from "../slices/tenantsApiSlice.js"
import Loader from "../components/Loader.jsx"
import Message from "../components/Message.jsx"
const HomeScreen = () => {

const { data: tenants, isLoading, error } = useGetTenantsQuery();

  return (

    <>
    { isLoading ? (
    <Loader />
    ) : error ? (
     <Message variant='danger'>{error?.data?.message || error.error }</Message>
    ) : (
      <>
      <h1>List of tenants</h1>
      <Row>
         {tenants.map((tenant) => (
             <Col sm={12} md={6} lg={4} xl={3}>
              <Tenant tenant={tenant} />
 
             </Col>
         ))}
      </Row>
      </>
    ) }
   
    </>
  )
}

export default HomeScreen