import './ItemNavBar.css'
import { NavLink } from 'react-router-dom'


export const ItemNavBar = ({content, route,style}) => {
  return (
    <NavLink className='NavLink' to={route} style={style}>{content}</NavLink>
  )
}
