import React, { useState } from 'react'
import { Badge, Button, Table } from 'react-bootstrap'

const TransactionsPage = () => {
  const [activeTab,setActiveTab]=useState(1);
  return (
    <div className='p-3'>
      <p className="d-block fw-semibold">Transactions</p>
      <div className="d-flex align-items-center gap-2 cursor-pointer">
      <p onClick={()=>setActiveTab(1)} className={`${activeTab==1 ? 'tableActive' :''} fw-semibold px-3`}  >All</p>
      <p onClick={()=>setActiveTab(2)}  className={`${activeTab==2 ? 'tableActive' :''} fw-semibold px-3`} >With Draw</p>
      <p onClick={()=>setActiveTab(3)}  className={`${activeTab==3 ? 'tableActive' :''} fw-semibold px-3`} >Deposit</p>
       </div>
       <div className="my-3 d-flex align-items-center gap-2">
       <input type="date" name="" id="" />
       <Button variant="warning">Search</Button>
       </div>
       <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
           <th>Balance</th>
          <th>Type</th>
          <th>Status</th>
           <th>Bet Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>1</td>
           <td>3000</td>
          <td>With Draw</td>
          <td>
          <Badge bg="success">Success</Badge>
          </td>
           <td>{new Date().toLocaleDateString()}
          </td>
        </tr>
       </tbody>
    </Table>
    </div>
  )
}

export default TransactionsPage
