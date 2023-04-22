import React from 'react'
import InputComponent from './InputComponent'

function TableRow({ReqId,fname,lname,email,compName,phone,service,specify,status}) {
    const stat= status?'new':'seen'
    const placeholder= status?'mark as seen':'mark as new'
    const classNm =status?'table-btn2':'table-btn'
  return (
    <tbody>
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
            <td>
                <InputComponent type="submit"  value={placeholder} classNm={classNm}/>
            </td>
        </tr>
    </tbody>
   
  )
}

export default TableRow