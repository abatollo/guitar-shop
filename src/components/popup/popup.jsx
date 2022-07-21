import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ActionCreator } from '../../store/action';

import Guitars from "../../const/guitars.json";
import { GuitarTypes } from "../../const/guitar-types";
import { keyCodes } from '../../const/key-codes';
import { formatPrice } from '../../utils/format-price';

const Popup = ({ addToCart, removeFromCart, setPopup, popup }) => {
  const popupGuitar = Guitars.find((guitar) => guitar.id === popup.itemId);
  const { type } = popup;

  const refPopup = useRef(null);

  const handlePopupTabOrShiftAndTabKeydown = (evt) => {
    if (evt.keyCode === keyCodes.TAB) {
      const focusablePopupElements = refPopup.current.querySelectorAll(`a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select`);

      const firstElement = focusablePopupElements[0];
      const lastElement = focusablePopupElements[focusablePopupElements.length - 1];

      if (document.activeElement === firstElement && evt.shiftKey) {
        evt.preventDefault();
        lastElement.focus();
      } else if (document.activeElement === lastElement && !evt.shiftKey) {
        evt.preventDefault();
        firstElement.focus();
      }
    }
  };

  const handlePopupEscapeKeydown = () => {
    setPopup({isOpened: false, type: `add`, id: popupGuitar.id});
  };

  const keydownHandlers = new Map([
    [keyCodes.ESCAPE, handlePopupEscapeKeydown], 
    [keyCodes.TAB, handlePopupTabOrShiftAndTabKeydown]
  ]);

  const handlePopupKeydown = (evt) => {
    const handlePopupKeydownProper = keydownHandlers.get(evt.keyCode);

    if (handlePopupKeydownProper) {
      handlePopupKeydownProper(evt);
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, handlePopupKeydown);
    return () => { document.removeEventListener(`keydown`, handlePopupKeydown) };
  });

  useEffect(() => {
    if (refPopup.current) {
      const focusablePopupElement = refPopup.current.querySelector(`a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select`);
      focusablePopupElement.focus();
    }
  });

  return (
    <section className="popup" ref={refPopup} onClick={(evt) => {
      if (evt.target === refPopup.current) {
        setPopup({isOpened: false, type: `add`, id: popupGuitar.id});
      }
    }}>
      <div className="popup__wrapper">
        {type === `add` && 
        <>
          <h2 className="popup__heading">Добавить товар в корзину</h2>
          <picture className="popup__image">
            <source srcSet={`/img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}.avif 1x, /img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}@2x.avif 2x`} type="image/avif" />
            <source srcSet={`/img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}.webp 1x, /img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}@2x.webp 2x`} type="image/webp" />
            <img src={`/img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}.png`} srcSet={`/img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}.png 1x, /img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}@2x.png 2x`} alt={popupGuitar.description} width="68" height="190" />
          </picture>
          <div className="popup__description">
            <h3 className="popup__subheading">{popupGuitar.name}</h3>
            <p className="popup__sku">Артикул: {popupGuitar.sku}</p>
            <p className="popup__properties">{GuitarTypes[popupGuitar.type]}, {popupGuitar.strings} струнная</p>
            <p className="popup__price">Цена: {formatPrice(popupGuitar.price)} ₽</p>
          </div>
          <div className="popup__button-group">
            <button className="popup__button" onClick={() => {
              addToCart({id: popup.itemId, price: popupGuitar.price});
            }}>
              Добавить в корзину
            </button>
          </div>
        </>}
        {type === `remove` &&
        <>
          <h2 className="popup__heading">Удалить этот товар?</h2>
          <picture className="popup__image">
            <source srcSet={`/img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}.avif 1x, /img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}@2x.avif 2x`} type="image/avif" />
            <source srcSet={`/img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}.webp 1x, /img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}@2x.webp 2x`} type="image/webp" />
            <img src={`/img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}.png`} srcSet={`/img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}.png 1x, /img/${popupGuitar.image ? popupGuitar.image : `default-${popupGuitar.type}`}@2x.png 2x`} alt={popupGuitar.description} width="68" height="190" />
          </picture>
          <div className="popup__description">
            <h3 className="popup__subheading">{popupGuitar.name}</h3>
            <p className="popup__sku">Артикул: {popupGuitar.sku}</p>
            <p className="popup__properties">{GuitarTypes[popupGuitar.type]}, {popupGuitar.strings} струнная</p>
            <p className="popup__price">Цена: {formatPrice(popupGuitar.price)} ₽</p>
          </div>
          <div className="popup__button-group">
            <button className="popup__button" onClick={() => {
              removeFromCart({id: popupGuitar.id, price: popupGuitar.price});
              setPopup({isOpened: false, type: `remove`, id: popupGuitar.id});
            }}>
              Удалить товар
            </button>
            <button className="popup__button popup__button--secondary" onClick={() => {
              setPopup({isOpened: false, type: `remove`, id: popupGuitar.id})
            }}>
              Продолжить покупки
            </button>
          </div>
        </>}
        {type === `confirm` &&
        <>
          <h2 className="popup__heading">Товар успешно добавлен в корзину</h2>
          <div className="popup__button-group popup__button-group--alt">
            <Link className="popup__button" to="/cart"  onClick={() => {
              setPopup({isOpened: false, type: `confirm`, id: popupGuitar.id})
            }}>
              Перейти в корзину
            </Link>
            <button className="popup__button popup__button--secondary" onClick={() => {
              setPopup({isOpened: false, type: `confirm`, id: popupGuitar.id})
            }}>
              Продолжить покупки
            </button>
          </div>
        </>}
        <button className="popup__close" onClick={() => {
          setPopup({isOpened: false, type: `add`, id: popupGuitar.id})
        }}>
          Закрыть
        </button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    popup: state.popup,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart(value) {
    dispatch(ActionCreator.addToCart(value));
  },
  setPopup(value) {
    dispatch(ActionCreator.setPopup(value));
  },
  removeFromCart(value) {
    dispatch(ActionCreator.removeFromCart(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
