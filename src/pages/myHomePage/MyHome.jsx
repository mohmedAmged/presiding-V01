import React from 'react'
import './myHome.css'
import MyHomeSlider from '../../components/myHomeSliderSec/MyHomeSlider'
import MyHomeTextInfo from '../../components/myHomeTextInfoSec/MyHomeTextInfo'
import MyHomeOverview from '../../components/myHomeOverviewSec/MyHomeOverview'
import MyHomeServices from '../../components/myHomeServicesSec/MyHomeServices'
import MyHomePodacast from '../../components/myHomePodatcastSec/MyHomePodacast'
import MyHomeOurMission from '../../components/myHomeOurMissionSec/MyHomeOurMission'
export default function MyHome() {
    return (
        <>
            <MyHomeSlider />
            <MyHomeTextInfo />
            <MyHomeOverview />
            <MyHomeServices />
            <MyHomePodacast />
            <MyHomeOurMission />
        </>
    )
}
