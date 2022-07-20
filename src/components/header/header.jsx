import {connect} from 'react-redux';

import GuitarShopLogo from "../../img/guitar-shop-logo.svg";

import { Link } from "react-router-dom";

const HeaderMain = ({ cartAddedIds }) => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Link className="header__logo-link" to="/">
          <img className="header__logo-image" src={GuitarShopLogo} alt="" width="67" height="70" />
        </Link>
        <nav className="header__navigation">
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/">
                Каталог
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/stores">
                Где купить?
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/about">
                О компании
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/service">
                Сервис-центры
              </Link>
            </li>
          </ul>
          <ul className="header__menu header__menu--icons">
            <li className="header__menu-item">
              <Link className="header__menu-link header__menu-link--locations" to="/locations">
                Адреса
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link header__menu-link--search" to="/search">
                Поиск
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className="header__menu-link header__menu-link--cart" to="/cart" data-cart={cartAddedIds?.length}>
                Корзина
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cartAddedIds: state.cartAddedIds
  };
};

export default connect(mapStateToProps, null)(HeaderMain);
