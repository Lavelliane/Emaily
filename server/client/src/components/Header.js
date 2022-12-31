import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header = (props) => {
    function renderContent() {
        switch(props.auth){
            case null:
                return;
            case false:
                return (
                    <li><a href='/auth/google'>Login with Google</a></li>
                )
            default:
                return (
                  <>
                    <li><Payments /></li>
                    <li style={{margin: '0 10px'}}>Credits: {props.auth.credits}</li>
                    <li><a href='/api/logout'>Logout</a></li>
                  </>
                )
        }
    }
  return (
    <nav>
    <div className="nav-wrapper">
      <Link to={props.auth ? '/surveys' : '/'} className='left brand-logo'>Emaily</Link>
      <ul className="right hide-on-med-and-down">
        {renderContent()}
      </ul>
    </div>
  </nav>
  )
}
function mapStateToProps({auth}){
    return {auth}
}

export default connect(mapStateToProps)(Header)