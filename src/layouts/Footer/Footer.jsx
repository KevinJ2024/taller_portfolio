import { ItemNavBar } from '../../components/ItemNavBar/ItemNavBar'
import { NavBar } from '../NavBar/NavBar'
import { FaFacebook,FaWhatsapp,FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <h1 id='footer-text'>Developed by &nbsp;<strong>Kevin Julian Alvarez Ramirez</strong></h1>
      <NavBar>
        <ItemNavBar content={<FaFacebook />} style={{ fontSize:"1.5rem" }} route={'https://web.facebook.com/profile.php?id=100089128839753'}/>
        <ItemNavBar content={<FaGithub />} style={{ fontSize:"1.5rem" }} route={'https://github.com/KevinJ2024'}/>
      </NavBar>
    </footer>
  )
}
