import React, { useEffect, useState } from "react";
import { Card, Container, Table, ButtonGroup, Form, Button } from "react-bootstrap";
import axios from "axios";



import { FerrisWheelSpinnerOverlay } from 'react-spinner-overlay';
import { Link } from 'react-router-dom'

export default function PatientList(props) {
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);

  const [editFlag, setEditFlag] = useState();

  useEffect(() => {
    getPatients();
  }, [;



  let getPatients = () => {
    setLoading(true);
    axios
      .get("https://8080-mayurhere-patient-vxkyz1w2z2e.ws-us65.gitpod.io/listPatient")
      .then((response) => {
        setPatients(response.data);


        setEditFlag(Array(response.data.length).fill(false))

        setLoading(false);
      })
      .catch((error) => alert(e);
  }
    ;


  let deletePatient = (patientId) => {
    setLoading(true);
    axios.delete("https://8080-mayurhere-patient-vxkyz1w2z2e.ws-us65.gitpod.io/patient/" + patientId)
      .then(response => {
        if (response.data !== null) {
          setLoading(false)
          props.showAlert("success", "Record deleted successfully");
          //alert("Record deleted successfully")
          setPatients(patients.filter(student => student.patientId !== patientId));
        }
       }
      )
  }

  let updatePatient = (index) => {

    if (editFlag[index]) {
      setLoading(true);
      axios.put("https://8080-mayurhere-patient-vxkyz1w2z2e.ws-us65.gitpod.io/patient/" + patients[index].patientId, patients[index])
        .then(response => {
          if (response.data !== null) {
            setLoading(false)
            props.showAlert("success", "Record updated successfully");
            //alert("Record deleted successfully")
            setPatients(response.data);
          }
        })
    }


    let newArr = [...editFlag];
    newArr[index] = !newArr[index];
    setEditFlag(newArr)




    //console.log(patients[index])


  }

  let textChanged = (index, event) => {

    if (event.target.name === "name") {
      let newArr = [...patients];
      newArr[index].name = event.target.value;
      setPatients(newArr)


      //setPatientId(event.target.value);
    } else if (event.target.name === "age") {
      let newArr = [...patients];
      newArr[index].age = event.target.value;
      setPatients(newArr)
    }
    else if (event.target.name === "address") {
      let newArr = [...patients];
      newArr[index].address = event.target.value;
      setPatients(newA
  rr)
    }
  }

  return (
    <div className="my-3">
      <FerrisWheelSpinnerOverlay
        loading={loading}

        overlayColor="rgba(255,255,255,0.8)"
      />
      <Container>
        <Card.Header>
          <h3>Patient List</h3>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>Patient Name</th>
                <th>Patient Age</th>
                <th>Patient Address</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {patients.length === 0 ? (
                <tr>
                  <td colSpan={5}>{patients.length} Patients Available!!!</td>
                </tr>
              ) : (
                patients.map((patient, index) =>
                  <tr key={patient.patientId}>

                    <td>{patient.patientId}</td>
                    <td>{editFlag[index] ? (<Form.Control name="name" type="text" value={patients[index].name} onChange={(e) => textChanged(index, e)} />) : (patients[index].name)}</td>
                    <td>{editFlag[index] ? (<Form.Control name="age" type="text" value={patients[index].age} onChange={(e) => textChanged(index, e)} />) : (patients[index].age)}</td>
                    <td>{editFlag[index] ? (<Form.Control name="address" type="text" value={patients[index].address} onChange={(e) => textChanged(index, e)} />) : (patients[index].address)}</td>
                    <td>

                      <ButtonGroup>
                        <Button size="sm" variant="outline-primary" onClick={updatePatient.bind(this, index)}><div> {editFlag[index] ? ("Save") : ("Edit")} </div></Button>
                        <Button size="sm" variant="outline-danger" onClick={deletePatient.bind(this, patient.patientId)}><div> Delete </div></Button>
                        {/* <Button size="sm" variant="outline-danger" onClick={()=>deleteStudent(student.id)}><FontAwesomeIcon icon={faTrash}> Delete </FontAwesomeIcon></Button> */}
                      </ButtonGroup>
                    </td>

                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Container>
    </div>
  );
}