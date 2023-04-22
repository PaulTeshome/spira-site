import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard-holder'>
        <h2 className='dashboard-title'>Dashboard</h2>
        <p>This is the list of customers that have sent a request for hire ordered from latest to earliest</p>

    <table className='customer-request-table'>
        <th>
            <td>Request ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Company Name</td>
            <td>Phone</td>
            <td>Service</td>
            <td>Service Spec</td>
            <td>Status</td>
            <td>Button</td>
        </th>

    </table>
    </div>
  )
}

export default Dashboard