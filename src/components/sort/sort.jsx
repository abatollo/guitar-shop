const Sort = () => {
  return (
    <form className="sort" action="http://echo.htmlacademy.ru" method="GET">
      <h2 className="sort__heading">Сортировать:</h2>
      <fieldset className="sort__fieldset">
        <legend className="sort__legend visually-hidden">Критерии сортировки</legend>
        <ul className="sort__list list-reset">
          <li className="sort__item">
            <input className="sort__radio visually-hidden" type="radio" id="sort-by-price" name="sort-criteria" value="price" />
            <label className="sort__label" htmlFor="sort-by-price">
              По цене
            </label>
          </li>
          <li className="sort__item">
            <input className="sort__radio visually-hidden" type="radio" id="sort-by-popularity" name="sort-criteria" value="populatity" />
            <label className="sort__label" htmlFor="sort-by-popularity">
              По популярности
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset className="sort__fieldset sort__fieldset--by-order">
        <legend className="sort__legend visually-hidden">Порядок сортировки</legend>
        <ul className="sort__list sort__list--order list-reset">
          <li className="sort__item">
            <input className="sort__radio visually-hidden" type="radio" id="sort-asc" name="sort-order" value="asc" />
            <label className="sort__label sort__label--asc" htmlFor="sort-asc">
              Вверх
              {/* От большего к меньшему */}
            </label>
          </li>
          <li className="sort__item">
            <input className="sort__radio visually-hidden" type="radio" id="sort-desc" name="sort-order" value="desc" />
            <label className="sort__label sort__label--desc" htmlFor="sort-desc">
              Вниз
              {/* От меньшего к большему */}
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

export default Sort;
