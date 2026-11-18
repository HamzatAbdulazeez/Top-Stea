import { lazy } from 'react'
import LandingLayout from '../layouts/LandingLayout'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const Construction = lazy(() => import('../pages/Construction'))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'))
const Maintenance = lazy(() => import('../pages/Maintenance'))
const MaintenanceDetail = lazy(() => import('../pages/MaintenanceDetail'))
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

      // Services -> Construction / Maintenance
      { path: 'services', element: <Services /> },
      { path: 'services/construction', element: <Construction /> },
      { path: 'services/construction/:slug', element: <ServiceDetail /> },
      { path: 'services/maintenance', element: <Maintenance /> },
      { path: 'services/maintenance/:slug', element: <MaintenanceDetail /> },

      { path: 'methodology', element: <Methodology /> },
      { path: 'engagement', element: <Engagement /> },
      { path: 'quality-hse', element: <QualityHse /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
