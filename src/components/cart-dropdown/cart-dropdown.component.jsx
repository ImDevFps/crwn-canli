import React from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {CartItem} from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {ButtonContainer, CartDropdownContainer, CartItemContainer, EmptyMessageContainer} from "./cart-dropdown.styles";


const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemContainer>
            {
                cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                ) :
                (<EmptyMessageContainer>Your Cart is Empty</EmptyMessageContainer>)
            }
        </CartItemContainer>
        <ButtonContainer onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}
        >Go To CheckOut</ButtonContainer>
    </CartDropdownContainer>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));