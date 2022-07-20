import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ActionCreator } from '../../store/action';

import Promo from '../promo/promo';

import Guitars from "../../const/guitars.json";
import { GuitarTypes } from "../../const/guitar-types";

const Cart = ({ cartAddedIds, cartQuantityById, setPopup, increaseQuantity, decreaseQuantity }) => {
  const FilteredGuitars = Guitars.filter((guitar) => cartAddedIds.includes(guitar.id));

  const handleDecreaseQuantityClick = (guitar) => {
    if (cartQuantityById[guitar.id] === 1) {
      setPopup({isOpened: true, type: `remove`, id: guitar.id});
    } else {
      decreaseQuantity({id: guitar.id, price: guitar.price});
    }
  };

  const handleIncreaseQuantityClick = (guitar) => {
    increaseQuantity({id: guitar.id, price: guitar.price});
  };

  const handleRemoveButtonClick = (guitar) => {
    setPopup({isOpened: true, type: `remove`, id: guitar.id});
  };

  return (
    <main className="catalog"> 
      <div className="catalog__wrapper catalog__wrapper--cart container">
        <header className="catalog__header catalog__header--cart">
          <h1 className="catalog__heading">Корзина</h1>
          <ul className="catalog__breadcrumbs catalog__breadcrumbs--cart list-reset">
            <li className="catalog__breadcrumbs-item">
              <Link className="catalog__breadcrumbs-link" to="/">
                Главная
              </Link>
            </li>
            <li className="catalog__breadcrumbs-item">
              <Link className="catalog__breadcrumbs-link" to="/">
                Каталог
              </Link>
            </li>
            <li className="catalog__breadcrumbs-item">
              <Link className="catalog__breadcrumbs-link" to="/">
                Оформляем
              </Link>
            </li>
          </ul>
        </header>
        <div className="cart">
          {FilteredGuitars.map((guitar) => 
            <article className="cart-item" key={guitar.id}>
              <picture className="cart-item__picture">
                <source srcSet={`/img/${guitar.image ? guitar.image : `default-${guitar.type}`}.avif 1x, /img/${guitar.image ? guitar.image : `default-${guitar.type}`}@2x.avif 2x`} type="image/avif" />
                <source srcSet={`/img/${guitar.image ? guitar.image : `default-${guitar.type}`}.webp 1x, /img/${guitar.image ? guitar.image : `default-${guitar.type}`}@2x.webp 2x`} type="image/webp" />
                <img src={`/img/${guitar.image ? guitar.image : `default-${guitar.type}`}.png`} srcSet={`/img/${guitar.image ? guitar.image : `default-${guitar.type}`}.png 1x, /img/${guitar.image ? guitar.image : `default-${guitar.type}`}@2x.png 2x`} alt={guitar.description} width="48" height="124" />
              </picture>
              <div className="cart-item__description">
                <h2 className="cart-item__name">{GuitarTypes[guitar.type]} {guitar.name}</h2>
                <p className="cart-item__sku">Артикул: {guitar.sku}</p>
                <p className="cart-item__properties">{GuitarTypes[guitar.type]}, {guitar.strings} струнная</p>
              </div>
              <p className="cart-item__price">{guitar.price} ₽</p>
              <div className="cart-item__quantity">
                <button className="cart-item__quantity-button" onClick={() => {handleDecreaseQuantityClick(guitar)}}>-</button>
                <input className="cart-item__quantity-input" type="text" name={`quantity-input-item-${guitar.id}`} id={`quantity-input-item-${guitar.id}`} value={cartQuantityById[guitar.id]} readOnly />
                <button className="cart-item__quantity-button" onClick={() => {handleIncreaseQuantityClick(guitar)}}>+</button>
              </div>
              <p className="cart-item__total-price">{guitar.price * cartQuantityById[guitar.id]} ₽</p>
              <button className="cart-item__remove" onClick={() => {handleRemoveButtonClick(guitar)}}>Удалить</button>
            </article>
          )}
        </div>
        <Promo />
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    cartAddedIds: state.cartAddedIds,
    cartQuantityById: state.cartQuantityById,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setPopup(value) {
    dispatch(ActionCreator.setPopup(value));
  },
  increaseQuantity(value) {
    dispatch(ActionCreator.increaseQuantity(value));
  },
  decreaseQuantity(value) {
    dispatch(ActionCreator.decreaseQuantity(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
