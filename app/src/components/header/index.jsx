import { useEffect } from "react"
import styles from "./styles.module.css"

function Header (props) {

    useEffect(()=>{
        console.log(props.dane)
    },[props.dane])

   
    const dataVisible = props.dane ? {} : {display: 'none'}

    return(
        <div className={styles.header}>
            <a className={styles.logo} href="/">
                <img alt="html logo" className={styles.logoimg} src="https://www.w3.org/html/logo/downloads/HTML5_1Color_White.svg"></img>
            </a>
            <div className={styles.title}>
                Zadanie <b>rekrutacyjne</b>
                <div style={dataVisible}>Dawid Skubij</div>
            </div>
        </div>

    )
}

export default Header