import styles from "./styles.module.css"



function Footer(props) {
    const reset = () =>(
        window.location.reload()
    )
    
    const showDane = ()=>{
        props.setDane(true)
    }


    return(
        <div className={styles.footer}>
            <div className={styles.css}>
                CSS IS AWESOME
            </div>

            <div className={styles.nabthat}>
                <div className={styles.line}></div>
                
                <div>nabthat</div>
                <div className={styles.line}></div>
                </div>
            <div className={styles.show} tabIndex="1">POKAŻ
<div className={styles.hidden}>
    <ul>
        <li onClick={reset}>Zresetuj ustawienie</li>
        <li onClick={showDane}>Pokaz dane osobowe</li>
    </ul>
</div>

            </div>


        </div>
    )
}
export default Footer