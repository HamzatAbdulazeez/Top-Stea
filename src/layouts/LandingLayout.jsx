import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import WhatsAppButton from '../components/WhatsAppButton'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Loader() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <span className="h-12 w-12 animate-spin rounded-full border-4 border-gold-100 border-t-gold" />
    </div>
  )
}

export default function LandingLayout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Suspense fallback={<Loader />}>
          {/* keyed by path so every page change replays the entrance animation */}
          <div key={pathname} className="animate-pageIn">
            <Outlet />
          </div>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  )
}
