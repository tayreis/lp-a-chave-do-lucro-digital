import { buttons } from "../../json/db.json"
import  styles from "../styles/buttons.module.css"

var btn = JSON.parse('{"title": "Aproveitar o Desconto!"}')

export default function ButtonCta() {
    return (
            <div className={styles.container}>
                <button className={styles.btn1}>{btn.title}</button>
            </div>
    )
}