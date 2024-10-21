import { NavLink } from 'react-router-dom'

export const ActiveLink = ({to,children, ...props}) => {
  return (
    <NavLink
      {...props}
      className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
      to={to}>
        {children}
    </NavLink>
  )
}
