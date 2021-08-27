import React from "react";
import {CartItemContainer, CartItemImage, ItemDetailsContainer, NameContainer} from "./cart-item.styles";


export const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span>{quantity} × ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)