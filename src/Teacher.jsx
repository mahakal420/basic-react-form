import React,{Component}from "react";
import {Form,Button} from 'react-bootstrap';

class Teacher extends Component {


render() {
  return (



    <Form>
    <Form.Group controlId="formBasictext">
      <Form.Label> Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name"
       />

    </Form.Group>
    <Form.Group controlId="formBasicnumber">
      <Form.Label> ID</Form.Label>
      <Form.Control type="text" placeholder="Enter your Id"
        />

    </Form.Group>
    <Form.Group controlId="formBasicclass">
      <Form.Label> Class</Form.Label>
      <Form.Control type="text" placeholder="Enter Class"
       />

    </Form.Group>
    <Form.Group controlId="formBasisection">
      <Form.Label> Section</Form.Label>
      <Form.Control type="text" placeholder="Enter your section from  A-F"
       />
      </Form.Group>
      <Button variant="primary" type="submit">
   Submit
 </Button>
</Form>
);
}
}






export default Teacher;
