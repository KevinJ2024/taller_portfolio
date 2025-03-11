import { ItemNavBar } from '../../components/ItemNavBar/ItemNavBar'
import { NavBar } from '../NavBar/NavBar'

import './Header.css'

export const Header = () => {
  return (
    <header>
        <h1 id='header-text'>Portfolio</h1>  
        <NavBar>
          <ItemNavBar content='Home' route={'/taller_portfolio/Home'} />
          <ItemNavBar content='Technical Skills' route={'/taller_portfolio/TechnicalSkills'} />
          <ItemNavBar content='Social Skills' route={'/taller_portfolio/SocialSkills'} />
          <ItemNavBar content='Professional Experience' route={'/taller_portfolio/ProfessionalExperience'} />
          <ItemNavBar content='Studies' route={'/taller_portfolio/Studies'} />
        </NavBar>
    </header>
  )
}