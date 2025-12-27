import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { PatientContext } from '../context/PatientContext'

function PatientList(){
    const {patients}=useContext(PatientContext)
  return (
    <div>
        <h1>Patient List</h1>
        {patients.length===0 ?(
            <p>No Patients Yet</p>
        ):(
        <ul>
        {patients.map(patient=>(
            <li key={patient.id}>
                <Link to ={`/patient/${patient.id}`}>
                    {patient.name}
                </Link>
            </li>
        ))}
        </ul>
        )}
    </div>
  )
}
export default PatientList