import axios from 'axios'
import React,{useState} from 'react'


function TableRow({ReqId,fname,lname,email,compName,phone,service,specify,status}) {
    const [stat,setStat]=useState(status)
    const statTxt= stat?'new':'seen'
    const placeholder= stat?'make seen':'make new'
    const classNm =stat?'table-btn2':'table-btn'


    const changeStat= ()=>{
      setStat(stat=> !stat)

      axios.post('/hire/updateStatus',{status:stat, request_id: ReqId})
      .then(res=>{

      })
      .catch(err=>{
        console.log(err)
      });
    }

  return (
    <tbody>
        <tr>
            <td>{ReqId}</td>
            <td>{fname}</td>
            <td>{lname}</td>
            <td><a href={`mailto:${email}`}>{email}</a></td>
            <td>{compName}</td>
            <td>{phone}</td>
            <td>{service}</td>
            <td>{specify}</td>
            <td className={statTxt}>{statTxt}</td>
            <td>
                <button type="button" className={classNm} onClick={changeStat}>{placeholder}</button>
            </td>
        </tr>
    </tbody>
   
  )
}

export default TableRow