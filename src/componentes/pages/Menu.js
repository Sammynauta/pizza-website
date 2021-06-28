import React from "react";
import { ProdutosList } from '../../database/Produtos'
import MenuItem from "../MenuItem";
import '../styles/menu.css';

function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">MENU PIZZA</h1>
            <div className='menu-list'>
                {ProdutosList.map((prodItem, key) => {
                    return (
                        <MenuItem key={key} image={prodItem.image} name={prodItem.name} price={prodItem.price} />
                    )
                })}
            </div>
        </div>

    );
}

export default Menu;