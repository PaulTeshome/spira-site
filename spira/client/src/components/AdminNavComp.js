import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'


function AdminNavComp({link,name}) {
  return (
    <div className='nav-comp'>
        <Link to={link}>{name}</Link>
    </div>
  )
}

export default AdminNavComp