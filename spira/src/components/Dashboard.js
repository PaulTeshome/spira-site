import React from 'react'
import './Dashboard.css'
import TableRow from './TableRow'

function Dashboard() {
  return (
    <div className='dashboard-holder' id='dashtop'>
        <h2 className='dashboard-title'>Dashboard</h2>
        <p>This is the list of customers that have sent a request for hire ordered from latest to earliest</p>
        <div className='table-holder'>
        <table className='request-table'>
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
                <th>Button</th>
            </tr>
            <TableRow ReqId="1" fname="paul" lname="teshe" email="aaa@gmail.com" compName="pied piper" phone="107232801" service="marketing management" specify="null" status={true}/>
            <TableRow ReqId="1" fname="paul" lname="teshe" email="aaa@gmail.com" compName="pied piper" phone="107232801" service="marketing management" specify="null" status={false}/>
            <TableRow ReqId="1" fname="paul" lname="teshe" email="aaa@gmail.com" compName="pied piper" phone="107232801" service="marketing management" specify="null" status={true}/>
            <TableRow ReqId="1" fname="paul" lname="teshe" email="aaa@gmail.com" compName="pied piper" phone="107232801" service="marketing management" specify="null" status={true}/>
        </table>
        </div>
    </div>
  )
}

export default Dashboard