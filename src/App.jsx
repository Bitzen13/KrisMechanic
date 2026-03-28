import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BookOnline from './pages/BookOnline'
import VehicleAppraisal from './pages/VehicleAppraisal'

function getPage(path) {
  if (path === '/book-online') return 'book'
  if (path === '/vehicle-appraisal') return 'appraisal'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(() => getPage(window.location.pathname))

  useEffect(() => {
    const handler = () => setPage(getPage(window.location.pathname))
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]')
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href.startsWith('/')) {
        e.preventDefault()
        window.history.pushState(null, '', href)
        setPage(getPage(href))
        window.scrollTo(0, 0)
      }
    }
    links.forEach(l => l.addEventListener('click', handleClick))
    return () => links.forEach(l => l.removeEventListener('click', handleClick))
  })

  return (
    <>
      <Navbar />
      {page === 'home' && <Home />}
      {page === 'book' && <BookOnline />}
      {page === 'appraisal' && <VehicleAppraisal />}
    </>
  )
}
