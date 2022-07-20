import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ActionCreator } from '../../store/action';

import Pagination from "../pagination/pagination";
import Filter from "../filter/filter";
import Sort from "../sort/sort";

import Guitars from "../../const/guitars.json";
import IconStar from "../../img/icon-star.svg";

const Catalog = ({ setPopup }) => {
  const SlicedGuitars = Guitars.slice(0, 9);

  return (
    <main className="catalog"> 
      <div className="catalog__wrapper container">
        <header className="catalog__header">
          <h1 className="catalog__heading">Каталог гитар</h1>
          <ul className="catalog__breadcrumbs list-reset">
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
          </ul>
        </header>
        <aside className="catalog__filter">
          <Filter />
        </aside>
        <div className="catalog__sort">
          <Sort />
        </div>
        <div className="catalog__list">
          {SlicedGuitars.map((guitar) => 
            <article className="catalog__item catalog-item" key={guitar.id}>
              <picture className="catalog-item__picture">
                <source srcSet={`/img/${guitar.image ? guitar.image : `default-${guitar.type}`}.avif 1x, /img/${guitar.image ? guitar.image : `default-${guitar.type}`}@2x.avif 2x`} type="image/avif" />
                <source srcSet={`/img/${guitar.image ? guitar.image : `default-${guitar.type}`}.webp 1x, /img/${guitar.image ? guitar.image : `default-${guitar.type}`}@2x.webp 2x`} type="image/webp" />
                <img src={`/img/${guitar.image ? guitar.image : `default-${guitar.type}`}.png`} srcSet={`/img/${guitar.image ? guitar.image : `default-${guitar.type}`}.png 1x, /img/${guitar.image ? guitar.image : `default-${guitar.type}`}@2x.png 2x`} alt={guitar.description} width="68" height="190" />
              </picture>
              <div className="catalog-item__rating">
                <img className="catalog-item__rating-star" src={IconStar} width="12" height="12" alt="" />
                <img className="catalog-item__rating-star" src={IconStar} width="12" height="12" alt="" />
                <img className="catalog-item__rating-star" src={IconStar} width="12" height="12" alt="" />
                <img className="catalog-item__rating-star" src={IconStar} width="12" height="12" alt="" />
                <img className="catalog-item__rating-star" src={IconStar} width="12" height="12" alt="" />
                <div className="catalog-item__rating-number">
                  {guitar.rating} {guitar.reviews}
                </div>
              </div>
              <h3 className="catalog-item__name">{guitar.name}</h3>
              <div className="catalog-item__price">{guitar.price} ₽</div>
              <button className="catalog-item__button">Подробнее</button>
              <button className="catalog-item__button catalog-item__button--hero" onClick={() => {setPopup({isOpened: true, type: `add`, id: guitar.id})}}>Купить</button>
            </article>
          )}
        </div>
        <footer className="catalog__footer pagination">
          <Pagination />
        </footer>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => ({
  setPopup(value) {
    dispatch(ActionCreator.setPopup(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
