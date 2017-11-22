import Login from '../components/Login'
import { connect } from 'react-redux'
import { login, logout, refreshLogin } from "../actions/actions";

const mapDispatchToProps = {
    login, refreshLogin
};

const mapStateTopProps = state => ({
    user: state.authentication
});



export default connect(mapStateTopProps, mapDispatchToProps)(Login)