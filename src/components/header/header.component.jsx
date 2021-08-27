import React from "react";
import {connect} from "react-redux";
import {ReactComponent as Logo} from '../../assets/4.1 crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './header.styles';




const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                Shop
            </OptionLink>
            <OptionLink to='/shop'>
                Contact
            </OptionLink>
            {
                currentUser ?
                    (<OptionDiv onClick={() => auth.signOut()}>
                        Sign Out
                    </OptionDiv>)
                    :
                    (<OptionLink to='/signin'>
                        Sign In
                    </OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : (
                <CartDropdown />
            )
        }

    </HeaderContainer>
);
const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);