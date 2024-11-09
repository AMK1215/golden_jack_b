import React from 'react'
import { useSearchParams } from 'react-router-dom'
import g1 from '../assets/images/g1.png'
import g2 from '../assets/images/g2.png'
import g3 from '../assets/images/g3.png'
import g4 from '../assets/images/g4.png'
import g5 from '../assets/images/g5.png'
import g6 from '../assets/images/g6.png'
import g8 from '../assets/images/g8.png'
import g9 from '../assets/images/g9.png'
import g10 from '../assets/images/g10.png'
import g11 from '../assets/images/g11.png'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'
import launchGame from '../hooks/LaunchGame'


const GamesPage = () => {
    const [searchParams]=useSearchParams();
    let provider_id = searchParams.get('provider');
    let type_id = searchParams.get('type');
    const {data: games} = useFetch(BASE_URL + "/gamelist/" + provider_id + "/" + type_id);
    const {data} = useFetch(BASE_URL + "/gameTypeProducts/" + type_id);
    let providers = data?.products;
    let provider = providers?.find((item)=>item.id == provider_id).provider_name;

  return (
    <div className='p-3'>
      <div className="mb-4 d-flex align-items-center justify-content-between">
        <p className='fw-semibold pt-2'>{provider && provider}</p>
        <input type="text" className='inputRed rounded-3 px-2 py-1' placeholder='Search Games...' />
      </div>
      <div className="row mb-5">
      {games && games.map((item, index)=>{
        return <div key={index} className='col-4  col-md-3 col-lg-4 px-2 px-md-3 px-lg-2 text-center cursor-pointer mb-2' onClick={launchGame(item.game_code)}>
          <img src={item.image_url} className='gameImg' />
          <small className="gameName fw-semibold ">{item.game_name}</small>
          <p className="gameProvider fw-bold">{provider && provider}</p>
        </div>
      })}
      </div>
    </div>
  )
}

export default GamesPage
