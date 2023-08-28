import { useParams} from "react-router-dom"
// import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from "../components/Loader";
import { useGetTenantDetailsQuery } from "../slices/tenantsApiSlice.js";
const TenantScreen = () => {
    const {id:tenantId} = useParams();

    const {data: tenant, isLoading, error} = useGetTenantDetailsQuery(tenantId);
    
    
  return ( 
    <>
       <Link to='/' className="btn btn-light my-3">
        Go Back
       </Link>
       {isLoading ? (
       <Loader />
       ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error }</Message>
       ) : (
        <Row>
        <Col md={5}>
        <Image src={tenant.image} alt={tenant.name} width={250} height={250} fluid />
        </Col>
        <Col md={8}>
           <ListGroup variant="flush">
               <ListGroup.Item>
                   <h4>TENANT NAME: {tenant.name}</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h4>AGE: {tenant.age}</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h4>GENDER: {tenant.gender}</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h4>ADDRESS: {tenant.address}</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h4>CONTACT: {tenant.contact}</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h4>APARTMENT #: {tenant.apartmentNumber}</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h4>MOVED IN: {tenant.moveIn}</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h4>DUE DATE: {tenant.dueDate}</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                   <h4>USER EMAIL: {tenant.userEmail}</h4>
               </ListGroup.Item>
           </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
           <ListGroup variant="flush">
               <ListGroup.Item>
                   <Row>
                       <Col><h4>STATUS:</h4></Col>
                       <Col>
                       {tenant.isPaid === true ? (
                          <Message variant='success'><strong>PAID</strong></Message>
                       ) : (
                           <Message variant='danger'><strong>NOT PAID</strong></Message>
                       ) }
                       </Col>
                   </Row>
               </ListGroup.Item>
               <ListGroup.Item>
               {!tenant.isPaid && 
               <Button 
               className="btn-block"
               type="button"
               >Pay Now
               </Button>}
               </ListGroup.Item>
           </ListGroup>
          </Card>
        </Col>
      </Row>
       )}
      
    </>
  )
}

export default TenantScreen