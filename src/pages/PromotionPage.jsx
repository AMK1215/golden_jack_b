import React from 'react'
import b1 from '../assets/images/b1.png';
import b2 from '../assets/images/b2.png';
import b3 from '../assets/images/b3.png';
import money from '../assets/images/money.png'
import { Button } from 'react-bootstrap';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const showPromo=(title,text)=>{
  MySwal.fire({
    title: <p>{title}</p>,
    text:text
   })
}
const PromotionPage = () => {
    const data=[
       { img:b1,title:' သူငယ်ချင်းမိတ်ဆက် 10%',
        text:'🙏🏻မင်္ဂလာရှိသော နေ့ခင်းလေးပါ👦🏻 ဘယ်မှာမှ မရနှိင်တဲ့ မြန်မာနိုင်ငံ ပထမဂိမ်းဆိုဒ် 🎮 သူငယ်ချင်းမိတ်ဆက် 10%💰 🏠အိမ်မှာနေရင်း 🎰 Lucky Win 17888 မှာပူးပေါင်းပြီး🤝 အလွယ်တကူ ဝင်ငွေရှာလိုက်ပါ သူငယ်ချင်းမိတ်ဆက်ပေးပြီး ဘယ်မှာမှ မရနှိင်တဲ့ 🏆ဆုလက်ဆောင် 10% များရယူပါနော် အရင်းမလို💸 အချိန်လဲမလို ကျွန်တော်တို့စီစဉ်ပေးပြီးပါပြီနော်🛠 နေ့စဉ်ဝင်ငွေ 10% ကော်မရှင်တွင် ည ၁၂နာရီ⏰ ရှင်းပေးပြီး 2X ကစားမှတ် ပြည့်အောင်ကစားပြီးမှ🎰 ဆု‌ငွေများ ထုတ်ပေးမည်။🏆 📬အမှန်အကန်ဝဘ်ဆိုဒ်ဆက်သွယ်ရန်⤵️ 💎 Official Website - luckywin17888.com 💎 Telegram Custom Service 24hr - @luckywin17888_bot 💎 Telegram Channel - @luckywin17888a အကြံပြုချက်များ နှင့် တိုင်ကြားချက်များရှိပါက 📱Telegram ဒိုင်ခံ အကောင့် တိုက်ရိုက်ဆက်သွယ်နှိင်ရန် - @luckywin17888 🙏🙏🙏🤝🙏🙏🙏'},
        { img:b2,title:' သူငယ်ချင်းမိတ်ဆက် 10%',
            text:'🙏🏻မင်္ဂလာရှိသော နေ့ခင်းလေးပါ👦🏻 ဘယ်မှာမှ မရနှိင်တဲ့ မြန်မာနိုင်ငံ ပထမဂိမ်းဆိုဒ် 🎮 သူငယ်ချင်းမိတ်ဆက် 10%💰 🏠အိမ်မှာနေရင်း 🎰 Lucky Win 17888 မှာပူးပေါင်းပြီး🤝 အလွယ်တကူ ဝင်ငွေရှာလိုက်ပါ သူငယ်ချင်းမိတ်ဆက်ပေးပြီး ဘယ်မှာမှ မရနှိင်တဲ့ 🏆ဆုလက်ဆောင် 10% များရယူပါနော် အရင်းမလို💸 အချိန်လဲမလို ကျွန်တော်တို့စီစဉ်ပေးပြီးပါပြီနော်🛠 နေ့စဉ်ဝင်ငွေ 10% ကော်မရှင်တွင် ည ၁၂နာရီ⏰ ရှင်းပေးပြီး 2X ကစားမှတ် ပြည့်အောင်ကစားပြီးမှ🎰 ဆု‌ငွေများ ထုတ်ပေးမည်။🏆 📬အမှန်အကန်ဝဘ်ဆိုဒ်ဆက်သွယ်ရန်⤵️ 💎 Official Website - luckywin17888.com 💎 Telegram Custom Service 24hr - @luckywin17888_bot 💎 Telegram Channel - @luckywin17888a အကြံပြုချက်များ နှင့် တိုင်ကြားချက်များရှိပါက 📱Telegram ဒိုင်ခံ အကောင့် တိုက်ရိုက်ဆက်သွယ်နှိင်ရန် - @luckywin17888 🙏🙏🙏🤝🙏🙏🙏'},
            { img:b3,title:' သူငယ်ချင်းမိတ်ဆက် 10%',
                text:'🙏🏻မင်္ဂလာရှိသော နေ့ခင်းလေးပါ👦🏻 ဘယ်မှာမှ မရနှိင်တဲ့ မြန်မာနိုင်ငံ ပထမဂိမ်းဆိုဒ် 🎮 သူငယ်ချင်းမိတ်ဆက် 10%💰 🏠အိမ်မှာနေရင်း 🎰 Lucky Win 17888 မှာပူးပေါင်းပြီး🤝 အလွယ်တကူ ဝင်ငွေရှာလိုက်ပါ သူငယ်ချင်းမိတ်ဆက်ပေးပြီး ဘယ်မှာမှ မရနှိင်တဲ့ 🏆ဆုလက်ဆောင် 10% များရယူပါနော် အရင်းမလို💸 အချိန်လဲမလို ကျွန်တော်တို့စီစဉ်ပေးပြီးပါပြီနော်🛠 နေ့စဉ်ဝင်ငွေ 10% ကော်မရှင်တွင် ည ၁၂နာရီ⏰ ရှင်းပေးပြီး 2X ကစားမှတ် ပြည့်အောင်ကစားပြီးမှ🎰 ဆု‌ငွေများ ထုတ်ပေးမည်။🏆 📬အမှန်အကန်ဝဘ်ဆိုဒ်ဆက်သွယ်ရန်⤵️ 💎 Official Website - luckywin17888.com 💎 Telegram Custom Service 24hr - @luckywin17888_bot 💎 Telegram Channel - @luckywin17888a အကြံပြုချက်များ နှင့် တိုင်ကြားချက်များရှိပါက 📱Telegram ဒိုင်ခံ အကောင့် တိုက်ရိုက်ဆက်သွယ်နှိင်ရန် - @luckywin17888 🙏🙏🙏🤝🙏🙏🙏'}
    ]
  return (
    <div className='px-2 py-4 mb-5'>
      {data.map((item,index)=>{
       return <div key={index} className='promoCard rounded-3 mb-4'>
            <img src={item.img} className='bannerImg  rounded-3' />
            <div className="d-flex align-items-center justify-content-between px-2">
                <div className="d-flex align-items-center gap-3">
                <img src={money} className='money' />
                <p className='mt-2 fw-semibold animateText'>{item.title}</p>
                <img src={money}  className='money' />
                </div>
                <Button onClick={()=>showPromo(item.title,item.text)} variant="outline-danger" className='rounded-5 px-4 py-1'>Details</Button>
            </div>
        </div>
      })}
    </div>
  )
}

export default PromotionPage
