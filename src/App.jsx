import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import toast, { Toaster } from 'react-hot-toast';
function App() {

  return (
    <div className='App'>
      <div><Toaster
        toastOptions={{
          className: '',
          style: {
            padding: '16px',
            color: '#111111',
            backgroundColor: 'rgb(229, 223, 243)'
          },
        }}
      /></div>
      <Header></Header>
      <Blogs></Blogs>
    </div>
  )
}

export default App
