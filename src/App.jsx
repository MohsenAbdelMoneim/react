import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BallTriangle } from 'react-loader-spinner'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Projectss from './Projectss'
import Skills from './Skills'
import Contact from './Contact'
const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className='bg-gray-950 text-white'>
      <BrowserRouter>
        {
          loading ?
            <div className='flex justify-center items-center h-[100vh]'>
              <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="rgb(128, 74, 110)"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />  
              </div>
            :
           
            <>
           <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<h1>About</h1>} />
              <Route path='/projects' element={<h1>Project</h1>} />

            </Routes>
              
             <About />
<Projectss  />
<Skills />
<Contact />
  </>
            
        }



      </BrowserRouter>

    </div>
  )
}

export default App