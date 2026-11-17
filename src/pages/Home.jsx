import HeroSlider from '../sections/HeroSlider'
import Ticker from '../sections/Ticker'
import WhoWeAre from '../sections/WhoWeAre'
import ServiceModel from '../sections/ServiceModel'
import CoreServices from '../sections/CoreServices'
import WorkforceStats from '../sections/WorkforceStats'
import FastTrack from '../sections/FastTrack'
import Mobilisation from '../sections/Mobilisation'
import Benefits from '../sections/Benefits'
import CtaBand from '../sections/CtaBand'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Ticker />
      <WhoWeAre />
      <ServiceModel />
      <CoreServices />
      <WorkforceStats />
      <FastTrack />
      <Mobilisation />
      <Benefits />
      <CtaBand />
    </>
  )
}
