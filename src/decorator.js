import { connect } from 'react-redux';
import toggleMenu from './action';

const reduxBurgerMenu = (ComposedComponent) => {
  const mapStateToProps = (state) => {
    return {
      isOpen: state.get('burgerMenu').isOpen
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      onStateChange: (newState) => {
        dispatch(toggleMenu(newState.isOpen));
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComposedComponent);
};

export default reduxBurgerMenu;
