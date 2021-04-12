import React, {useState, useContext} from "react"
import styled from "styled-components"
import "./header.css"
import useWindowSize from "../../hooks/useWindowSize";
import AxessIcon from "../../images/logo-axess-app.jpg"
import { AutoComplete, Menu, Dropdown, Badge } from 'antd';
import Searchbar from "../searchbar"
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import CartIcon from "../../icons/shopping-cart.svg"
import "../../css/typography.css"
import MenuItem from "antd/lib/menu/MenuItem";
import {useHistory} from 'react-router-dom'
import {Link} from "react-router-dom"
import {CartContext} from "../../CartContext"

const { SubMenu } = Menu;

const DesktopHeader = styled.header`
background: #8C857E;
height: 6.2vw;
width: 100vw;
display: flex;
justify-content: space-between;
overflow: hidden;
`
const MenuLinks = styled.nav`
display: flex;
align-items: center;
font-family: "L Bold";
color: white;
margin-top: 1%;
margin-left: -25%;
width: 30vw;

ul {
display: flex;
justify-content: space-between;
}

li {
display: inline;
}

a {
text-decoration: none;
transition: color 300ms;
}
`

const menu = (
    <Menu style={{width: '25vw', marginTop: '2vw', marginRight: '-20vw', backgroundColor: '#8C857E'}}>
        <SubMenu title="Recámara">
            <Menu.Item className="antd-submenu-item-axess"><Link to="/beds">Camas</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/nightstands">Burós</Link></Menu.Item>
            <MenuItem className="antd-submenu-item-axess"><Link to="/tv-stands">Mubles de TV</Link></MenuItem>
        </SubMenu>
        <SubMenu title="Cocina & Comedor">
            <Menu.Item className="antd-submenu-item-axess"><Link to="/dining-tables">Comedores</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/dining-chairs">Sillas para Comedor</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/high-chairs">Bancos de Cocina</Link></Menu.Item>
        </SubMenu>
        <SubMenu title="Sala">
            <Menu.Item className="antd-submenu-item-axess"><Link to="/sofas">Sofás</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/side-chairs">Sillas Laterales</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/coffee-tables">Mesas de Centro</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/credenzas">Credenzas</Link></Menu.Item>
        </SubMenu>
        <SubMenu title="Exterior">
            <Menu.Item className="antd-submenu-item-axess"><Link to="/outdoor-side-tables">Mesas Laterales de Exterior</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/outdoor-chairs">Sillas de Exterior</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/outdoor-dining-tables">Comedores de Exterior</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/lounge-chairs">Sillas Lounge</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/sunbeds">Camastros</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/outdoor-sofas">Salas de Exterior</Link></Menu.Item>
        </SubMenu>
    </Menu>
);

const MobileHeader = styled.header`
background: #8C857E;
width: 100vw;
box-shadow: ${({nav}) => (nav ? "0" : "0 0 5px 0 gray")};
overflow: hidden;
height: 30vw;
`

const MenuIcon = styled.button`
display: flex; 
flex-direction: column;
justify-content: space-around;
width: 1.5rem;
height: 1.8rem; 
background: transparent;
border: none;
cursor: pointer;
z-index: 5;
margin-left: 10%;

div {
width: 2rem; 
height: 0.25rem;
background: white; 
border-radius: 5px; 
transform-origin: 1px;
position: relative;


/* :first-child {
    transform: ${({nav}) => (nav ? 'rotate(45deg)' : 'rotate(0)')};
};

:nth-child(2){
    opacity: ${({nav}) => (nav ? "0" : "1")};
};

:nth-child(3){
    transform: ${({nav}) => (nav ? 'rotate(-45deg)' : 'rotate(0)')};
    margin-top: ${({nav}) => (nav ? "50%" : "0")};
} */
}
`

const MobileMenuLinks = styled.div`
position: absolute;
top: 13%;
transform: ${({nav}) => (nav ? "translateX(0)" : "translateX(100%)")};
display: flex;

ul {
    padding: 0 0 0 5%;
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

li {
    list-style: none;
    padding-bottom: 10px;
}

a {
text-decoration: none;
color: #8C857E;
font-family: 'L Bold';
font-size: 5vw;
}
`


const Header = () => {

const windowSize = useWindowSize();
const [nav, setNav] = useState(false)
const [roomNav, setRoomNav] = useState(false)
const [kitchenNav, setKitchenNav] = useState(false)
const [livingNav, setLivingNav] = useState(false)
const [exteriorNav, setExteriorNav] = useState(false)
const [cart, setCart] = useContext(CartContext)

let history = useHistory();

return (windowSize > 480) ? (

<DesktopHeader className="desktop-header">
    <div className="logo-header-link">
        <a href="/"><img src={AxessIcon} alt='Logo' className="header-axess-icon-desktop"/></a>
    </div>
    <MenuLinks>
        <ul className="menu-list">
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
            <Dropdown overlay={menu} placement="bottomRight">
                <a className="antd-dropdown-link" onClick={e => e.preventDefault()}>
                    Productos
                    <DownOutlined />
                </a>
            </Dropdown>
            </li>
            <li>
                <a href="#">Contacto</a>
            </li>
        </ul>
    </MenuLinks>
    <div className="header-searchbar-div">
        <Searchbar/>
    </div>
    <div className="header-cart-icon-div">
        <Badge count={cart.length} className='header-cart-badge' size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
            <a href="#" className="head-example" />
        </Badge>
        <Link to="/cart"><img src={CartIcon} alt="cart-icon"/></Link>
    </div>
</DesktopHeader>

) : (
<>
<MobileHeader nav={nav}>
    <div className="mobile-header-first-div">
        <div className="mobile-menu-div">
            <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                <div></div>
                <div></div>
                <div></div>
            </MenuIcon>
        </div>

        <div className="mobile-menu-image-div">
            <img src={AxessIcon} alt='Logo'/>
        </div>

        <div className="header-cart-icon-div-mobile">
            <img src={CartIcon} alt="cart-icon-mobile"/>
        </div>
    </div>

    <div className="header-searchbar-div-mobile">
        <Searchbar />
    </div>

</MobileHeader>

{nav ? 
<MobileMenuLinks nav={nav}>
    <nav style={{backgroundColor: 'white', width: '80vw'}}>
        <ul>
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#" className="mobile-header-products-anchor">Productos</a>
                <div className="mobile-menu-products-div">
                    <p roomNav={roomNav} onClick={() => setRoomNav(!roomNav)} className="mobile-header-product-category">Recámara<DownOutlined style={{fontSize: '2.5vw', marginLeft: '.5vw'}}/></p>
                        {roomNav ? 
                            <nav roomNav={roomNav} className="room-nav-links">
                                <ul>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/beds')
                                    }}>Camas</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/nightstands')
                                    }}>Burós</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/tv-stands')
                                    }}>Muebles de TV</li>
                                </ul>
                            </nav>
                        : null}
                    <p kitchenNav={kitchenNav} onClick={() => setKitchenNav(!kitchenNav)} className="mobile-header-product-kitchen mobile-header-product-category">Cocina & Comedor<DownOutlined style={{fontSize: '2.5vw', marginLeft: '.5vw', marginTop: '5%'}}/></p>
                        {kitchenNav ? 
                            <nav kitchenNav={kitchenNav} className="kitchen-nav-links">
                                <ul>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/dining-tables')
                                    }}>Comedores</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/dining-chairs')
                                    }}>Sillas para Comedor</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/high-chairs')
                                    }}>Bancos de Cocina</li>
                                </ul>
                            </nav>
                        : null}
                    <p livingNav={livingNav} onClick={() => setLivingNav(!livingNav)} className="mobile-header-product-category">Sala<DownOutlined style={{fontSize: '2.5vw', marginLeft: '.5vw'}}/></p>
                        {livingNav ? 
                            <nav livingNav={livingNav} className="living-nav-links">
                                <ul>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/sofas')
                                    }}>Sofás</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/side-chairs')
                                    }}>Sillas Laterales</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/coffee-tables')
                                    }}>Mesas de Centro</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/credenzas')
                                    }}>Credenzas</li>
                                </ul>
                            </nav>
                        : null}
                    <p exteriorNav={exteriorNav} onClick={() => setExteriorNav(!exteriorNav)} className="mobile-header-product-category">Exterior<DownOutlined style={{fontSize: '2.5vw', marginLeft: '.5vw'}}/></p>
                        {exteriorNav ? 
                            <nav exteriorNav={exteriorNav} className="exterior-nav-links">
                                <ul>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/outdoor-side-tables')
                                    }}>Mesas Laterales de Exterior</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/outdoor-chairs')
                                    }}>Sillas de Exterior</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/outdoor-dining-tables')
                                    }}>Comedores de Exterior</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/lounge-chairs')
                                    }}>Sillas Lounge</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/sunbeds')
                                    }}>Camastros</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/outdoor-sofas')
                                    }}>Salas de Exterior</li>
                                </ul>
                            </nav>
                        : null}
                </div>
            </li>
            <li>
                <a href="#">Contacto</a>
            </li>
        </ul>
    </nav>

    <div style={{backgroundColor: "rgba(1,1,1,0.3)", width: '20vw'}}>
        <p nav={nav} onClick={() => {
            setNav(!nav);
            }}>TACHE</p>
    </div>
    
</MobileMenuLinks>
: null}

</>
);
}



export default Header
