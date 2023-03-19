import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
  return(
    <header className="app__header">
      <h1 className="app__title">
        <Link to='/Marvel-IP'>
          <span>Marvel</span> information portal
        </Link>
      </h1>

      <nav className="app__menu">
        <ul>
          <li><NavLink exact activeStyle={{'color': '#9f0013'}} to='/Marvel-IP'>Characters</NavLink></li>
          /
          <li><NavLink exact activeStyle={{'color': '#9f0013'}} to='/Marvel-IP/comics'>Comics</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;
