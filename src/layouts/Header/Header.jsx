import { ItemNavBar } from '../../components/ItemNavBar/ItemNavBar'
import { NavBar } from '../NavBar/NavBar'

import './Header.css'

export const Header = () => {
  return (
    <header>
        <h1>Portfolio</h1>  
        <NavBar>
          <ItemNavBar />
      
        </NavBar>
    </header>
  )
}
