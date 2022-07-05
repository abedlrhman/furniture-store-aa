import React, { ReactNode } from 'react'
import Header from './Header'

type Props = {
    children?: ReactNode;

}

function MainLayout({children}: Props) {
  return (
      <div>
          
          <Header />
      
          { children }

          <footer>
              main layout footer
          </footer>
          
      </div>
  )
}

export default MainLayout