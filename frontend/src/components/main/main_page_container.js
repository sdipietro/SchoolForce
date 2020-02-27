import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import MainPage from './main_page.jsx';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);