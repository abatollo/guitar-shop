import {connect} from 'react-redux';

import Header from '../header/header';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import Popup from '../popup/popup';

const MainPage = ({ popup }) => {
  return (
    <>
      <Header />
      <Catalog />
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

export default connect(mapStateToProps, null)(MainPage);
