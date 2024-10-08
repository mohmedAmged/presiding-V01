import React from 'react'
import './myHomePodacast.css'
import videoCover from '../../assets/home-podacast/brooke-cagle-JBwcenOuRCg-unsplash.png'
import videoInfo from '../../assets/home-podacast/Mask group (5).png'
export default function MyHomePodacast() {
  return (
    <div className='myHomePodacast__handler'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8 col-md-8 p-0 m-0">
                    <div className="podacastVideo__handler">
                        <img src={videoCover} alt="video-cover" />
                        <div className="videoIcon_container">
                            <div className="viedo_icon">
                                <i class="bi bi-play-fill"></i>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 p-0 m-0">
                    <div className="podacastInfo">
                        <img src={videoInfo} alt="video-cover" />
                        <div className="overflow"></div>
                        <div className="podaInfo_text">
                            <h3>
                                Podcast 01 <i class="bi bi-arrow-bar-right"></i>
                            </h3>
                            <h3>
                                Lorem ipsum dolor sit amet
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
