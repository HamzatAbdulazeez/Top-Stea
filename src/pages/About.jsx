import PageHero from '../components/PageHero'
import WhoWeAre from '../sections/WhoWeAre'
import ServiceModel from '../sections/ServiceModel'
import WorkforceStats from '../sections/WorkforceStats'
import Benefits from '../sections/Benefits'
import CtaBand from '../sections/CtaBand'
import { company } from '../data/site'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Who We Are"
        text={company.tagline}
        image="about"
        crumbs={[['About']]}
      />
      <WhoWeAre extended />
      <ServiceModel />
      <WorkforceStats />
      <Benefits />
      <CtaBand />
    </>
  )
}
