import { useState } from 'react';
import { connect } from 'react-redux';

import { ActionCreator } from '../../store/action';

const Promo = ({ sum, changePromocode, changeTotalSum, totalSum }) => {
  const [promoCode, setPromoCode] = useState(`GITARAHIT`);
  const [isPromocodeInvalid, setIsPromocodeInvalid] = useState(false);

  const promoCodeApplyHandler = () => {
    changePromocode(promoCode);

    switch (promoCode) {
      case `GITARAHIT`: {
        changeTotalSum(0.9 * sum);
        setIsPromocodeInvalid(false);
        break;
      }
      case `SUPERGITARA`: {
        changeTotalSum(sum - 700);
        setIsPromocodeInvalid(false);
        break;
      }
      case `GITARA2020`: {
        if (sum - 3000 >= sum * 0.3) {
          changeTotalSum(sum - 3000);

        } else {
          changeTotalSum(sum * 0.7);
        }
        setIsPromocodeInvalid(false);
        break;
      }
      default: {
        changeTotalSum(sum);
        setIsPromocodeInvalid(true);
        break;
      }
    }
  };

  return (
    <div className="promo">
      <h3 className="promo__heading">Промокод на скидку</h3>
      <p className="promo__hint">
        Введите свой промокод, если он у вас есть. 
        {isPromocodeInvalid && <span className="promo__hint--error"> Введённый промокод недействителен.</span>}
      </p>
      <input className="promo__input" type="text" name="promo-input" id="promo-input" value={promoCode} onChange={(evt) => {setPromoCode(evt.target.value)}} />
      <button className="promo__button" onClick={promoCodeApplyHandler}>Применить купон</button>
      <p className="promo__total">Всего: {totalSum > 0 ? totalSum : sum} ₽</p>
      <button className="promo__button promo__button--accent">Оформить заказ</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartAddedIds: state.cartAddedIds,
    cartQuantityById: state.cartQuantityById,
    sum: state.sum,
    totalSum: state.totalSum
  };
};

const mapDispatchToProps = (dispatch) => ({
  changePromocode(value) {
    dispatch(ActionCreator.changePromocode(value));
  },
  changeTotalSum(value) {
    dispatch(ActionCreator.changeTotalSum(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Promo);
