import { ItemNavBar } from '../../components/ItemNavBar/ItemNavBar'
import { NavBar } from '../NavBar/NavBar'

import './Header.css'

export const Header = () => {
  return (
    <header>
        <h1 id='header-text'>Portfolio</h1>  
        <NavBar>
          <ItemNavBar content='Home' route={'/'} />
          <ItemNavBar content='Technical Skills' route={'/TechnicalSkills'} />
          <ItemNavBar content='Social Skills' route={'/SocialSkills'} />
          <ItemNavBar content='Professional Experience' route={'/ProfessionalExperience'} />
          <ItemNavBar content='Studies' route={'/Studies'} />
        </NavBar>
    </header>
  )
}
