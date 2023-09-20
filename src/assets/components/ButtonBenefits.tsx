import { buttons } from "../../json/db.json"
import  styles from "../styles/buttons.module.css"

var btn = JSON.parse('{"title": "Desbloqueie Seu Potencial no Marketing!"}')

export default function ButtonBenefits() {
    return (
        <div>
            <button className={styles.btn1}>{btn.title}</button>
        </div>
    )
}