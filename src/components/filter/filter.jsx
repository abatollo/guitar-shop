import { formatPrice } from "../../utils/format-price";

const Filter = () => {
  return (
    <form className="filter" action="http://echo.htmlacademy.ru" method="GET">
      <h2 className="filter__heading">Фильтр</h2>
      <fieldset className="filter__fieldset filter__fieldset--price-range">
        <legend className="filter__legend">Цена, ₽</legend>
        <input className="filter__price filter__price--from" type="text" name="filter-by-price-from" id="filter-by-price-from" value={formatPrice(1000)} readOnly /> 
        <input className="filter__price filter__price--to" type="text" name="filter-by-price-to" id="filter-by-price-to" value={formatPrice(30000)} readOnly /> 
      </fieldset>
      <fieldset className="filter__fieldset">
        <legend className="filter__legend">Тип гитар</legend>
        <ul className="filter__list list-reset">
          <li>
            <input className="filter__checkbox visually-hidden" type="checkbox" name="filter-by-type-acoustic" id="filter-by-type-acoustic" /> 
            <label className="filter__label" htmlFor="filter-by-type-acoustic">Акустические гитары</label>
          </li>
          <li>
            <input className="filter__checkbox visually-hidden" type="checkbox" name="filter-by-type-electric" id="filter-by-type-electric" defaultChecked />
            <label className="filter__label" htmlFor="filter-by-type-electric">Электрогитары</label>
          </li>
          <li>
            <input className="filter__checkbox visually-hidden" type="checkbox" name="filter-by-type-ukulele" id="filter-by-type-ukulele" defaultChecked />
            <label className="filter__label" htmlFor="filter-by-type-ukulele">Укулеле</label>
          </li>
        </ul>
      </fieldset>
      <fieldset className="filter__fieldset">
        <legend className="filter__legend">Количество струн</legend>
        <ul className="filter__list list-reset">
          <li className="filter__item">
            <input className="filter__checkbox visually-hidden" type="checkbox" name="filter-by-strings-4" id="filter-by-strings-4" defaultChecked />
            <label className="filter__label" htmlFor="filter-by-strings-4">4</label>
          </li>
          <li className="filter__item">
            <input className="filter__checkbox visually-hidden" type="checkbox" name="filter-by-strings-6" id="filter-by-strings-6" defaultChecked />
            <label className="filter__label" htmlFor="filter-by-strings-6">6</label>
          </li>
          <li className="filter__item">
            <input className="filter__checkbox visually-hidden" type="checkbox" name="filter-by-strings-7" id="filter-by-strings-7" />
            <label className="filter__label" htmlFor="filter-by-strings-7">7</label>
          </li>
          <li className="filter__item">
            <input className="filter__checkbox visually-hidden" type="checkbox" name="filter-by-strings-12" id="filter-by-strings-12" /> 
            <label className="filter__label" htmlFor="filter-by-strings-12">12</label>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

export default Filter;
