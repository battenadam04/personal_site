import * as React from 'react';
import { Link } from "react-router-dom";
import styles from "./NavigationPage.module.scss";


export class Navigation extends React.Component<any, any> {


    public render() {

        return (
            <nav id="sidebar" className={styles.nav}>
                <img className={"App-logo"} src={"/logo.png"} />
                <section id="Home"><Link to={"Home"}>Home</Link></section>
                <section id="About"><Link to={"About"}>About</Link></section>
                <section id="Contact"><Link to={"Contact"}>Contact</Link></section>
                <section id="Blog"><Link to={"Blog"}>Blog</Link></section>
                <section id="Projects"><Link to={"Projects"}>Projects</Link></section>
            </nav>
        )
    }

}


export default Navigation;