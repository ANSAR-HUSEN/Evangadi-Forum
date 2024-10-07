import React from 'react'

import Footer from '../../components/footer/Footer'
import Header from '../../Components/Header/Header'


function LayOut({children}) {
    return (
      <div>
          <Header/>
          {children}
          <Footer/>
      </div>
    )
  }
  
  export default LayOut