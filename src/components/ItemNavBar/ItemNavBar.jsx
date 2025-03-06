import './ItemNavBar.css'
import { NavLink } from 'react-router-dom'


export const ItemNavBar = ({content, route}) => {
  return (
    <NavLink id="text" to={route}>{content}</NavLink>
  )
}
