import React from 'react'
import { AiOutlineSound } from 'react-icons/ai'

const Marquee = () => {
  return (
    <div className='my-2 py-1 px-2 rounded-4 bg-secondary d-flex align-items-center gap-2'>
        <AiOutlineSound size={20} />
        <marquee className='marqueeText' direction="left">
        🙏🏻မင်္ဂလာရှိသော နေ့ခင်းလေးပါ👦🏻 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorem eius dolore illum dolor nostrum ipsa. Ex cupiditate reprehenderit corporis nemo, exercitationem iure iste. Numquam labore eveniet dicta autem nisi?
         </marquee>
    </div>
  )
}

export default Marquee
