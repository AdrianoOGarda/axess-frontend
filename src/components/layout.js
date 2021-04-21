import React, {useState} from 'react'
import {createGlobalStyle} from "styled-components"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import 'antd/dist/antd.css'
import {TransCtx} from '../hooks/useTrans'
import es from '../i18n/es';
import en from '../i18n/en';

const Global = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
}
`

function Layout({ children }) {
  const [t, setLang] = useState(es);

  const toggleLang = () => setLang(t.lang === 'es' ? en : es);

    return (
        <>
        <TransCtx.Provider value={{t}}>
        <Global />
        <Header toggleLang={toggleLang} />
        <main>{children}</main>
        <Footer />
        </TransCtx.Provider>
        </>
    )
}

export default Layout
