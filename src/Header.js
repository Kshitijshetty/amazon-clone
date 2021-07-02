import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket, user},dispatch]=useStateValue();
    console.log(basket);
    const login =()=>{
        if (user){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchIP" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            <div className="header__Nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__option1">hello {user?.email}</span>
                        <span className="header__option2">{user?'Sign Out': 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="" className="header__link">
                    <div className="header__option">
                        <span className="header__option1">Returns</span>
                        <span className="header__option2">& orders</span>
                    </div>
                </Link>

                <Link to="" className="header__link">
                    <div className="header__option">
                        <span className="header__option1">Your</span>
                        <span className="header__option2">prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBas">
                        <ShoppingCartIcon className="header__kart" />
                        <span className="header__option2 header__Bascount">{basket?.length}</span>
                    
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
