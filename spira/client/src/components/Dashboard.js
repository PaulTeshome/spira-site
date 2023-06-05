import React, { useEffect, useState } from 'react'
import './styles/Dashboard.css'
import TableRow from './TableRow'
import axios from 'axios';

function Dashboard() {

  const [rows,setRows] = useState([]);

  useEffect(() =>{
    axios.get('/hire/getRequests')
    .then(res=>{
      setRows(res.data);
    })
    .catch(err=>{
      console.log(err)
    });
  },[])
  return (
    <div className='dashboard-holder' id='dashtop'>
        <span className='dashboard-title'>Dashboard</span>
        <span className='dashboard-intro'>This is the list of customers that have sent a request for hire, ordered from latest to earliest.</span>
        <div className='table-holder'>
        <table className='request-table'>
           
            <thead>
                <tr>
                    <th>Request ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Service Spec</th>
                    <th>Status</th>
                    <th>Edit Status</th>
                </tr>                
            </thead>
            {
              rows.map(row =>{
                return(
                  <TableRow key={row.request_id} ReqId={row.request_id} fname={row.first_name} lname={row.last_name} email={row.email} compName={row.comp_name} phone={row.phone} service={row.chosen_service} specify={row.specify} status={row.status}/>
                )
              })
            }
        </table>
        </div>
    </div>
  )
}

export default Dashboard