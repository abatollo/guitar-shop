import { Link } from "react-router-dom";
import GuitarShopLogoFooter from "../../img/guitar-shop-logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <section className="footer__section">
          <h2 className="visually-hidden">Социальные сети</h2>
          <Link className="footer__logo-link" to="/">
            <img className="footer__logo-image" src={GuitarShopLogoFooter} width="67" height="70" alt="Логотип Guitar Shop" />
          </Link>
          <ul className="footer__social-menu social-menu list-reset">
            <li className="social-menu__item">
              <a className="social-menu__link" href="https://www.facebook.com/">
                Facebook
              </a>
            </li>
            <li className="social-menu__item">
              <a className="social-menu__link social-menu__link--instagram" href="https://www.instagram.com/">
                Instagram
              </a>
            </li>
            <li className="social-menu__item">
              <a className="social-menu__link social-menu__link--twitter" href="https://twitter.com/">
                Twitter
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__section footer__section--about">
          <h2 className="footer__heading">О нас</h2>
          <div>
            <p>
              Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.
            </p>
            <p>
              Все инструменты проверены, отстроены и доведены до идеала! 
            </p>
          </div>
        </section>
        <section className="footer__section footer__section--catalog">
          <h2 className="footer__heading">Каталог</h2>
          <ul className="footer__menu list-reset">
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/acoustic">
                Акустические гитары
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/classic">
                Классические гитары
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/electric">
                Электрогитары
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/bas">
                Бас-гитары
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/ukulele">
                Укулеле
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__section footer__section--information">
          <h2 className="footer__heading">Информация</h2>
          <ul className="footer__menu list-reset">
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/stores">
                Где купить?
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/blog">
                Блог
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/faq">
                Вопрос - ответ
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/refunds">
                Возврат
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="/service">
                Сервис-центры
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__section footer__section--contacts">
          <h2 className="footer__heading">Контакты</h2>
          <div>
            <p>
              г. Санкт-Петербург,
              м. Невский проспект,
              ул. Казанская 6. 
              <a className="footer__phone" href="tel:88125005050">8-812-500-50-50</a>
            </p>
            <p>
              Режим работы:
              <span className="footer__workinghours">с 11:00 до 20:00,</span>
              без выходных.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
