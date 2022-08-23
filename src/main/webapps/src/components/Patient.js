import axios from "axios";
import React, {useState} from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {  useParams } from "react-router-dom";

export default function Student() {

    const [patientId, setPatientId] = useState(null);
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [address, setAddress] = useState();

    const { pId } = useParams();
    const navigate = useNavigate();


    let patient = {
        patientId: patientId,
        name: name,
        age: age,
        address: address,
    };

    let textChanged = (event) => {
        if(event.target.name==="patientId"){

            setPatientId(event.target.value);
        } else if(event.target.name==="name"){
            setName(event.target.value);
            patient.name = name;
        } else if(event.target.name==="age"){
            setAge(event.target.value);
            patient.age = age;
        }
        else if(event.target.name==="address"){
            setAddress(event.target.value);
            patient.address = address;
        }
    }

    let saveStudent = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/patient", patient)
            .then(response => {
                if(response.data != null){
                    alert('Record added successfully');
                }
            })
            .catch(error => alert(error));
    }

    let updatePatient = (event) => {
        event.preventDefault();
        axios.put("http://localhost:8080/patient/" + patientId, patient).then((response) => {
            if (response.data != null) {
                alert("Record updated successfully");
                navigate("/listPatient"); // Navigate to Students List Components
            }
        });
    };

    return (
        <div  className="my-3">
            <Container>
                <Card>
                    <Form onSubmit={pId != null ? updatePatient : saveStudent}>
                        <Card.Header>
                            <strong>{pId!=null? "Update Patient Information":"Add Patient Information"}</strong>
                        </Card.Header>

                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Id</Form.Label>
                                <Form.Control name="patientId" value={patientId} type="text" placeholder="Enter id" onChange={textChanged}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" value={name} type="text" placeholder="Enter name" onChange={textChanged} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Age</Form.Label>
                                <Form.Control name="age" value={age} type="text" placeholder="Enter age" onChange={textChanged} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control name="address" value={address} type="text" placeholder="Enter address" onChange={textChanged} />
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}