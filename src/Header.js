import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingKart from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{cart,user},dispatch] = useStateValue();

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
               <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"></img>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text"></input>
            <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link className="link" to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_option_1">Hello Guest</span>
                    <span className="header_option_2">{user? 'sign out': 'sign i'}</span>
                </div>
                </Link>
                 <div className="header_option">
                    <span className="header_option_1">return</span>
                    <span className="header_option_2">& Order</span>
                </div>
                 <div className="header_option">
                    <span className="header_option_1">Your</span>
                    <span className="header_option_2">Prime</span>
                </div>
                <Link className="link" to="/checkout">
                <div className="header_kart">
                    <ShoppingKart/>
    <span className="header_option_2 header_count">{cart?.length}</span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
