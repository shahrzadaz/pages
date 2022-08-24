import { Fragment } from 'react';

import classes from './Header.module.css';
import logoImage from '../../assets/logo.jpeg'
const Header =()=>{
    return ( 
       
        <header className={classes.header}>
        <div className={classes['header__logo']} > <img className={classes.logoImage} src={logoImage}></img></div> 
       
        <div className={classes["header__menu"]}>
          <nav className={classes["header__nav collapse"]}>
            <ul className={classes["header__elenco" ]}>
              <li className={classes["header__el"]}><a href="#" className={classes["header__link"]}>Home</a></li>
              <li className={classes["header__el"]}><a href="#" className={classes["header__link"]}>Pricing</a></li>
              <li className={classes["header__el"]}><a href="#" className={classes["header__link"]}>Success stories</a></li>
               <li className={classes["header__el"]}><a href="#" className={classes["header__link"]}>Contact Us</a></li>
               <li className={[classes["header__el"],classes["header__el--blue"]].join(' ')}><a href="login.html" className={[classes["btn"],classes["btn--white"]].join(' ')}>App →</a></li>
            </ul>
          </nav>
        </div>
        </header>
       
  );

};
export default Header;