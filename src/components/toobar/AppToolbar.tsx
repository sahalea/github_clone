import './appToolbarStyle.css';
import Dropdown from '../ux/Dropdown';
import { appMenus } from '../../config/appConfig';
import { NavLink, useLocation } from 'react-router-dom';

/**
 * appToolbar component
 * @param {selectedItem, setSelectedItem}
 * @returns AppToolbar Component
 */

const AppToolbar = () => {
  const location = useLocation();

  return (
    <div className="p-3 bg-gray-900 toolbar-border-style flex">
      <div className="flex flex-1 pl-1">
        <div className="switcher-container-style">
          <ul>
            {appMenus.map((e, index) => {
              const isActive = e.to === location.pathname ? 'active' : '';
              return (
                <li className={isActive}>
                  <NavLink to={e.to}>{e.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        {location.pathname === '/' && <Dropdown name="Spoken Language" />}
        <Dropdown name="Language" />
        <Dropdown name="Date Range" />
      </div>
    </div>
  );
};

export default AppToolbar;
