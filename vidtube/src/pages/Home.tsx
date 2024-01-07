import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="max-h-screen overflow-high">
      <div style={{height: "7.5vh"}}>
      <Navbar />
      </div>

      <div className='flex'  style={{height: "92.5vh", marginTop: "11px"}}>
        <Sidebar/>
      </div>
    </div>
  )
}
