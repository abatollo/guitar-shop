const Pagination = () => {
  return (
    <ul className="pagination__list list-reset">
      <li className="pagination__item">
        <a className="pagination__link pagination__link--step" href="?page=prev">Ранее</a>
      </li>
      <li className="pagination__item">
        <a className="pagination__link pagination__link--active" href="?page=1">1</a>
      </li>
      <li className="pagination__item">
        <a className="pagination__link" href="?page=2">2</a>
      </li>
      <li className="pagination__item">
        <span className="pagination__link">…</span>
      </li>
      <li className="pagination__item">
        <a className="pagination__link" href="?page=7">7</a>
      </li>
      <li className="pagination__item">
        <a className="pagination__link pagination__link--step" href="?page=next">Далее</a>
      </li>
    </ul>
  );
};

export default Pagination;
