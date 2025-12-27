import React ,{useContext} from 'react'
import{useParams,Link} from 'react-router-dom'
import { PatientContext } from '../context/PatientContext'

function PatientDetails(){
    const {id}=useParams()
    const {patients}=useContext(PatientContext);

    const patient=patients.find(p=>p.id===id);
    if(!patient)return <h1>Patient List</h1>;

  return (
    <div>
      <h2>Patient Details</h2>
      <div>
        <h3>{patient.name}</h3>
        <p>Id:{patient.id}</p>
        <p>Age: {patient.age}</p>
        <p>Room Status: {patient.roomStatus}</p>

        <Link to={`/room/${patient.id}`}>
            <button>Update Room Status</button>
        </Link>
        <Link to={"/"}>
            <button>Back to Patient</button>
        </Link>
        </div>
    </div>
  )
}

export default PatientDetails