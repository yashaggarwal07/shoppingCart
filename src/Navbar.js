import React from 'react';

const Navbar = (props) => {
        return (
            <div style = {styles.nav}>
                <label style = {{color: 'white'}}>Shopping Cart</label>
                <div style = {styles.cartIconContainer}>
                    <img style = {styles.cartIcon} src="https://image.flaticon.com/icons/svg/2121/2121815.svg" alt="cart-icon"></img>
        <span style = {styles.cartCount}>{props.count}</span>
                </div>
            </div>
        )

}


const styles = {
    
    cartIcon: {
        height : 32,
        marginRight:20
    },
    nav : {
        height : 70,
        background : 'darkgreen',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    cartIconContainer : {
        position :'relative',
       padding:'0px 0px 0px 900px'
    },
    cartCount : {
        background : 'yellow',
        borderRadius : '50%',
        padding : '4px 8px',
        position : 'absolute',
        right : 0,
        top : -9
    }
}

export default Navbar;