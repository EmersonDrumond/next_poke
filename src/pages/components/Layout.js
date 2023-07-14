import Navbar from "./Navbar"
import Footer from "./Footer"

import Head from "next/head"


export default function Layout({children}) {
    return(
        <>
        <Head>
            <link rel="shortcut icon" href="/img/favicon.ico"/>
            <title>Pokenext</title>
            <Navbar/>
            <main className="h-[88vh]">{children}</main>
            <Footer/>
        </Head>
        </>
    )
}