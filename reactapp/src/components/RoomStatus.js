import React,{useContext,useEffect,useState} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {PatientContext} from '../context/PatientContext'

function RoomStatus() {
  const{id}=useParams();
  const history=useHistory();
  const {patients,updateRoomStatus}=useContext(PatientContext);

  const patient=patients.find(p=>p.id===id)
  const [status,setStatus]=useState('Available');
  useEffect(()=>{
    if(patient){
      setStatus(patient.roomStatus)
    }
  },[patient]);

  if(!patient)return <p>Loading...</p>;

  const handleUpdate=()=>{
    updateRoomStatus(id,status);
    history.push(`/patient/${id}`);
  }
  
  return (
    <div>
      <h2>{patient.name}</h2>
      <label>Room Status</label>
      <select value={status} onChange={e=>setStatus(e.target.value)}>
        <option value='Available'>Available</option>
        <option value='Occupied'>Occupied</option>
      </select>
      <button onClick={handleUpdate}>Update Status</button>
    </div>
  )
}

export default RoomStatus