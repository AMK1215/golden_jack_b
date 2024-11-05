
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AdsBanner = () => {
    const MySwal = withReactContent(Swal)

    const adsFire=()=>{
        MySwal.fire({
             imageUrl:"https://spiderman-2-react.vercel.app/assets/p3-D8z2ql8D.png",
            imageHeight:150,
             text:"🙏🏻မင်္ဂလာရှိသော နေ့ခင်းလေးပါ👦🏻 သူငယ်ချင်းမိတ်ဆက် 10%💰 🏠အိမ်မှာနေရင်း 🎰 Betting King မှာပူးပေါင်းပြီး🤝 အလွယ်တကူ ဝင်ငွေရှာလိုက်ပါ သူငယ်ချင်းမိတ်ဆက်ပေးပြီး ဘယ်မှာမှ မရနှိင်တဲ့ 🏆ဆုလက်ဆောင် 10% များရယူပါနော်  Betting King 🙏🙏🙏🤝🙏🙏🙏"
           })
    }
    useEffect(()=>{
        adsFire()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default AdsBanner
