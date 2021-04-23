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
import {MyContext} from "../../context"
import useTrans, { TransCtx } from "../../hooks/useTrans"
import Flags from 'country-flag-icons/react/3x2'

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
z-index: 9;
top: 30vw;
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

li p {
    text-decoration: none;
color: #8C857E;
font-family: 'L Bold';
font-size: 5vw;
}
`


const Header = ({toggleLang}) => {
const {t} = useContext(TransCtx)

const windowSize = useWindowSize();
const [nav, setNav] = useState(false)
const [roomNav, setRoomNav] = useState(false)
const [kitchenNav, setKitchenNav] = useState(false)
const [livingNav, setLivingNav] = useState(false)
const [exteriorNav, setExteriorNav] = useState(false)
const [cart, setCart] = useContext(CartContext);
const { clearCtxUser, user } = useContext(MyContext);


const menu = (
    <Menu style={{width: '25vw', marginTop: '2vw', marginRight: '-20vw', backgroundColor: '#8C857E'}}>
        <SubMenu title={t.header.products.items[0].title}>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/beds">{t.header.products.items[0].items[0]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/nightstands">{t.header.products.items[0].items[1]}</Link></Menu.Item>
            <MenuItem className="antd-submenu-item-axess"><Link to="/tv-stands">{t.header.products.items[0].items[2]}</Link></MenuItem>
        </SubMenu>
        <SubMenu title={t.header.products.items[1].title}>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/dining-tables">{t.header.products.items[1].items[0]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/dining-chairs">{t.header.products.items[1].items[1]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/high-chairs">{t.header.products.items[1].items[2]}</Link></Menu.Item>
        </SubMenu>
        <SubMenu title={t.header.products.items[2].title}>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/sofas">{t.header.products.items[2].items[0]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/side-chairs">{t.header.products.items[2].items[1]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/coffee-tables">{t.header.products.items[2].items[2]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/credenzas">{t.header.products.items[2].items[3]}</Link></Menu.Item>
        </SubMenu>
        <SubMenu title="Exterior">
            <Menu.Item className="antd-submenu-item-axess"><Link to="/outdoor-side-tables">{t.header.products.items[3].items[0]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/outdoor-chairs">{t.header.products.items[3].items[1]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/outdoor-dining-tables">{t.header.products.items[3].items[2]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/lounge-chairs">{t.header.products.items[3].items[3]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/sunbeds">{t.header.products.items[3].items[4]}</Link></Menu.Item>
            <Menu.Item className="antd-submenu-item-axess"><Link to="/outdoor-sofas">{t.header.products.items[3].items[5]}</Link></Menu.Item>
        </SubMenu>
    </Menu>
);


let history = useHistory();

return (windowSize > 480) ? (

<DesktopHeader className="desktop-header">
    <div 
        style={{
            width: '3vw', 
            zIndex: 99, 
            position: "fixed",
            top: '7vw',
            right: 10, 
            cursor: 'pointer'
            }} 
        onClick={toggleLang}    
    >
        {t.lang === 'en' ? (
        <Flags.US title="United States" className="..."/>
        ) : (
            <Flags.MX title="United States" className="..."/>
            )}
        </div>
<div className="logo-header-link">
        <Link to="/"><img src={AxessIcon} alt='Logo' className="header-axess-icon-desktop"/></Link>
    </div>
    <MenuLinks>
        <ul className="menu-list">
            <li>
                <Link to="/">{t.header.home}</Link>
            </li>
            <li>
            <Dropdown overlay={menu} placement="bottomRight">
                <a className="antd-dropdown-link" onClick={e => e.preventDefault()}>
                    {t.header.products.title}
                    <DownOutlined />
                </a>
            </Dropdown>
            </li>
            <li>
                <Link to="/contact">{t.header.contact}</Link>
            </li>
        </ul>
    </MenuLinks>
    <div className="header-searchbar-div">
        <Searchbar/>
    </div>
    {/* {user && (
                <div>
                    <Link to="/create-furniture-asygy66516fyffasduy6hfasgflodfiihc725">Añade un mueble</Link>
                </div>
            )} */}
    <div className="header-cart-icon-div">
        {/* <Badge count={cart.length} className='header-cart-badge' size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
        </Badge> */}
        <Link to="/cart"><img src={CartIcon} alt="cart-icon"/></Link>
    </div>
</DesktopHeader>

) : (
<>
<MobileHeader nav={nav}>
<div 
        style={{
            width: '8vw', 
            zIndex: 99, 
            position: "fixed",
            top: '45vw',
            right: 10, 
            cursor: 'pointer'
            }} 
        onClick={toggleLang}    
    >
        {t.lang === 'en' ? (
        <Flags.US title="United States" className="..."/>
        ) : (
            <Flags.MX title="United States" className="..."/>
            )}
        </div>
    <div className="mobile-header-first-div">
        <div className="mobile-menu-div">
            <MenuIcon nav={nav} onClick={() => setNav(!nav)}>
                <div></div>
                <div></div>
                <div></div>
            </MenuIcon>
        </div>

        <div className="mobile-menu-image-div">
            <Link to='/'><img src={AxessIcon} alt='Logo'/></Link>
        </div>

        <div className="header-cart-icon-div-mobile">
            <img src={CartIcon} alt="cart-icon-mobile" onClick={() => history.push('/cart')}/>
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
                <p onClick={() => {
                    setNav(!nav);
                    history.push('/')
                }}
                >{t.header.home}</p>
            </li>
            <li>
                <a href="#" className="mobile-header-products-anchor">{t.header.products.title}</a>
                <div className="mobile-menu-products-div">
                    <p roomNav={roomNav} onClick={() => setRoomNav(!roomNav)} className="mobile-header-product-category">{t.header.products.items[0].title}<DownOutlined style={{fontSize: '2.5vw', marginLeft: '.5vw'}}/></p>
                        {roomNav ? 
                            <nav roomNav={roomNav} className="room-nav-links">
                                <ul>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/beds')
                                    }}>{t.header.products.items[0].items[0]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/nightstands')
                                    }}>{t.header.products.items[0].items[1]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/tv-stands')
                                    }}>{t.header.products.items[0].items[2]}</li>
                                </ul>
                            </nav>
                        : null}
                    <p kitchenNav={kitchenNav} onClick={() => setKitchenNav(!kitchenNav)} className="mobile-header-product-kitchen mobile-header-product-category">{t.header.products.items[1].title}<DownOutlined style={{fontSize: '2.5vw', marginLeft: '.5vw', marginTop: '5%'}}/></p>
                        {kitchenNav ? 
                            <nav kitchenNav={kitchenNav} className="kitchen-nav-links">
                                <ul>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/dining-tables')
                                    }}>{t.header.products.items[1].items[0]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/dining-chairs')
                                    }}>{t.header.products.items[1].items[1]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/high-chairs')
                                    }}>{t.header.products.items[1].items[2]}</li>
                                </ul>
                            </nav>
                        : null}
                    <p livingNav={livingNav} onClick={() => setLivingNav(!livingNav)} className="mobile-header-product-category">{t.header.products.items[2].title}<DownOutlined style={{fontSize: '2.5vw', marginLeft: '.5vw'}}/></p>
                        {livingNav ? 
                            <nav livingNav={livingNav} className="living-nav-links">
                                <ul>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/sofas')
                                    }}>{t.header.products.items[2].items[0]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/side-chairs')
                                    }}>{t.header.products.items[2].items[1]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/coffee-tables')
                                    }}>{t.header.products.items[2].items[2]}</li>
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
                                    }}>{t.header.products.items[3].items[0]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/outdoor-chairs')
                                    }}>{t.header.products.items[3].items[1]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/outdoor-dining-tables')
                                    }}>{t.header.products.items[3].items[2]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/lounge-chairs')
                                    }}>{t.header.products.items[3].items[3]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/sunbeds')
                                    }}>{t.header.products.items[3].items[4]}</li>
                                    <li onClick={() => {
                                        setNav(!nav);
                                        history.push('/outdoor-sofas')
                                    }}>{t.header.products.items[3].items[5]}</li>
                                </ul>
                            </nav>
                        : null}
                </div>
            </li>
            <li>
                <p onClick={() => {
                    setNav(!nav);
                    history.push('/contact')
                    }}>{t.header.contact}</p>
            </li>
        </ul>
    </nav>

    <div style={{backgroundColor: "rgba(1,1,1,0.3)", width: '20vw'}}>
        <p nav={nav} style={{color: 'white', fontFamily: 'L Bold', fontSize: '7vw'}} onClick={() => {
            setNav(!nav);
            }}>X</p>
    </div>
    
</MobileMenuLinks>
: null}
</>
);
}



export default Header
