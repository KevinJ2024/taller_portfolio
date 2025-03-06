import { ItemNavBar } from '../../components/ItemNavBar/ItemNavBar'
import { NavBar } from '../NavBar/NavBar'
import { FaFacebook,FaWhatsapp,FaInstagram } from 'react-icons/fa'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <h1 id='footer-text'>Developed by <strong>Kevin Julian Alvarez Ramirez</strong></h1>
      <NavBar>
        <ItemNavBar content={<FaFacebook />} />
        <ItemNavBar content={<FaWhatsapp />} />
        <ItemNavBar content={<FaInstagram />} />
      </NavBar>
    </footer>
  )
}
