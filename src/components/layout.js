import React from 'react'
import {createGlobalStyle} from "styled-components"
import Header from "../components/header/header"
import 'antd/dist/antd.css'

const Global = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
}
`

function Layout({ children }) {
    return (
        <>
        <Global />
        <Header />
        <main>{children}</main>
        </>
    )
}

export default Layout
