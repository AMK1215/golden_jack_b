import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WithDrawPage = () => {
  return (
    <div  className='p-3 pb-5 mb-5 '>
        <p className='fw-semibold'>Withdraw Form </p>
        <div className="selectedBank fw-semibold text-white rounded-4 p-3 text-center">
            <p className='py-1 my-0'>KBZ Pay</p>
            <p className='py-1 my-0'>User account</p>
            <p className='py-1 my-0'>******123456</p>
            <Link to={'/banking'}> 
            <Button variant="outline-warning">Update Banking</Button>
            </Link>
        </div>
        <small className="fw-semibold my-2 d-block">Current Turn Over - 0
        </small>
        <small className="fw-semibold  my-2 d-block">Available Withdrawal Amount - 0
        </small>
        <small>စုစုပေါင်း Turn Over ( ကစားအား ) သည် ထုတ်လိုသောငွေ၏ အနည်းဆုံး တစ်ဆ အထက်ရှိရမည်။ ဥပမာ - ငွေ တစ်သိန်း ထုတ်လိုပါက Turn Over ( ကစားအား ) တစ်သိန်းအထက်ရှိရမည် ဖြစ်သည်။
        </small>
        <div className="mb-3">
      <small className="d-block fw-semibold my-2">Amount
       </small>
      <input type="text" className='customInput p-2 ' />
       </div>
       <div className="mb-3">
      <small className="d-block fw-semibold mb-2">Remark
       </small>
      <textarea type="text" rows={5} className='customInput p-2 ' />
       </div>
       <button className="btn bg-white w-full mt-3 text-black rounded-5">Submit</button>
    
 
    </div>
  )
}

export default WithDrawPage
