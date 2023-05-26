import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
  return(
    <header className="app__header">
      <h1 className="app__title">
        <Link to='/Marvel-IP/'>
          <span>Marvel</span> information portal
        </Link>
      </h1>

      <nav className="app__menu">
        <ul>
          <li><NavLink
            end
            style={({isActive}) => ({'color': isActive ? '#c02d1d' : 'inherit'})}
            to='/Marvel-IP/'>Characters</NavLink></li>
          /
          <li><NavLink
            style={({isActive}) => ({'color': isActive ? '#c02d1d' : 'inherit'})}
            to='/Marvel-IP/comics'>Comics</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader;
