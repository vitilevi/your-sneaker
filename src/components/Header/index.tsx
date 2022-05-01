import { useState } from 'react';
import NikeLogo from '../../assets/nike-logo.png';
import IconProfile from '../../assets/icon-profile.png';
import IconSearch from '../../assets/icon-search.png';
import IconShop from '../../assets/icon-shop.png';
import './styles.scss';

export default function Header() {
  const [selected, setSelected] = useState<string>('ALL');

  return (
    <header className="header">
      <div className="left-side-container">
        <nav className="list-menu">
          <ul>
            <li className={selected === 'WOMAN'? 'selected' : ''} onClick={() => setSelected('WOMAN')}>
              WOMAN
            </li>
            <li className={selected === 'MENU'? 'selected' : ''} onClick={() => setSelected('MENU')}>
              MEN
            </li>
            <li className={selected === 'ALL'? 'selected' : ''} onClick={() => setSelected('ALL')}>
              ALL
            </li>
          </ul>
        </nav>
      </div>
      <div className="center-container">
        <h2><span>YOUR</span>SNEAKER</h2>
        <img src={NikeLogo} alt="Nike logo" />
      </div>
      <div className="right-side-container">
        <img className="icon-profile" src={IconProfile} alt="Icon profile" />
        <img className="icon-search" src={IconSearch} alt="Icon search" />
        <img className="icon-shop" src={IconShop} alt="Icon shop" />
      </div>
    </header>
  )
}
