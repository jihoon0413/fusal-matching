import React, { useContext } from 'react'
import { StadiumInfoContext } from '../context/StadiumInfoContext'
import ImgSwiper from '../components/ImgSwiper'
import '../css/pages/InfoPage.css'
import img from '../img/사장님.jpg'
import Review from '../components/Review'
import { useLocation } from 'react-router-dom'

import noresting from '../img/Group 100.png'
// import rest from '../'
import yesparking from '../img/Group 101.png'
import noparking from '../img/Group 102.png'
import yesshower from '../img/Group 103.png'
import noshower from '../img/Group 105.png'


const InfoPage = () => {

  // const {value} = useContext(StadiumInfoContext)
  const location = useLocation()
  const name = location.state.name
  const images = location.state.images
  const norest = location.state.norest
  const parking = location.state.parking
  const shower = location.state.shower
  const time = location.state.time
  const phone = location.state.phone
  const address = location.state.address
  return (
    <div>
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className='center'>
        <ImgSwiper width={1300} height={400} images={images}/>
        <hr/>
        <div className='infos'>
          <div className='infos_stadium'>
            <div className="description">
                <div className='name' style={{marginBottom:'20px', fontSize:'40px'}}>{name}</div>
                <div className='address' style={{marginBottom:'10px', fontSize:'20px'}}>{address}</div>
                <div className='time'><span style={{fontSize:"20px"}} className="material-symbols-outlined">history</span> 이용시간대 {time}</div>
                <div className='phone'><span style={{fontSize:"20px"}} className="material-symbols-outlined">phone_in_talk</span> {phone}</div>
              </div>
              <div style={{marginRight:'50px'}} >
                <img className='master_img' src={img} alt='사장님'/>
                <div className='' style={{marginLeft:"160px"}}>신사장님</div>
                <div className='round_sticker' style={{display:'flex', gap:'20px'}}>
                  {norest
                  ?<img src={noresting} alt='연중무휴'/>
                  :<img src={noresting} alt='휴무'/>
                  }
                  {parking
                  ?<img src={yesparking} alt='주차가능'/>
                  :<img src={noparking} alt='주차불가능'/>
                  }
                  {shower
                  ?<img src={yesshower} alt='샤워가능'/>
                  :<img src={noshower} alt='샤워불가능'/>
                  }
              </div>
            </div>
          </div>
          <div className='infos_review'>
            <div className='review_head'>
              <div className='review_count' style={{width:"50px", height:"50px"}}></div>
              <div style={{fontSize:"20px", fontWeight:"700"}}>풋살장 리뷰</div>
              <div style={{marginLeft:"5px"}}>+50</div>
            </div>
            <div className='reviews'>
              <Review/>
              <Review/>
              <Review/>
              <Review/>
              <Review/>
              <Review/>
              <Review/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
