import { lazy } from 'react'
import LandingLayout from '../layouts/LandingLayout'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'))
const Methodology = lazy(() => import('../pages/Methodology'))
const Engagement = lazy(() => import('../pages/Engagement'))
const QualityHse = lazy(() => import('../pages/QualityHse'))
const Contact = lazy(() => import('../pages/Contact'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const landingRoutes = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <ServiceDetail /> },
      { path: 'methodology', element: <Methodology /> },
      { path: 'engagement', element: <Engagement /> },
      { path: 'quality-hse', element: <QualityHse /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
