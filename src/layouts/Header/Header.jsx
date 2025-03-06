import { ItemNavBar } from '../../components/ItemNavBar/ItemNavBar'
import { NavBar } from '../NavBar/NavBar'

import './Header.css'

export const Header = () => {
  return (
    <header>
        <h1 id='header-text'>Portfolio</h1>  
        <NavBar>
          <ItemNavBar content='Home' route={'/Home'} />
          <ItemNavBar content='Technical Skills' route={'/Home'} />
          <ItemNavBar content='Social Skills' route={'/Home'} />
          <ItemNavBar content='Professional Experience' route={'/Home'} />
          <ItemNavBar content='Studies' route={'/Home'} />
        </NavBar>
    </header>
  )
}
