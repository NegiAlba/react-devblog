
import { NavLink } from 'react-router-dom'

const navLinks = [
    {
      title: 'Home',
      path:'/'
    },
    {
      title: 'Blog',
      path:'/blog'
    },
    {
      title: 'Contact',
      path:'/contact'
    },
    {
      title: 'Login',
      path:'/login'
    },
  ];

const Navigation = () => {
    return (
        <nav className="site-navigation">
            <span>A React Blog : 0 to MERN</span>
            <ul>
                {
                    navLinks.map((link,index)=>{
                        return (
                        <li className= "navigation-item"  key={index}>
                            <NavLink to={link.path} activeClassName="selected">
                                {link.title}
                            </NavLink>
                        </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation
