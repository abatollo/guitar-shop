import {connect} from 'react-redux';

import Header from '../header/header';
import Cart from '../cart/cart';
import Footer from '../footer/footer';
import Popup from '../popup/popup';

const CartPage = ({ popup }) => {
  return (
    <>
      <Header />
      <Cart />
      <Footer />
      {popup.isOpened && <Popup />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    popup: state.popup
  };
};

export default connect(mapStateToProps, null)(CartPage);
