import React from 'react'

function TableRow({ReqId,fname,lname,email,compName,phone,service,specify,status}) {
    const stat= status?'new':'seen'
  return (
    <tr>
        <td>{ReqId}</td>
        <td>{fname}</td>
        <td>{lname}</td>
        <td>{email}</td>
        <td>{compName}</td>
        <td>{phone}</td>
        <td>{service}</td>
        <td>{specify}</td>
        <td className={stat}>{stat}</td>
        <td>Button</td>
    </tr>
  )
}

export default TableRow