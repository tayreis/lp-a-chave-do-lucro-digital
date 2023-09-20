import { buttons } from "../../json/db.json"
import  styles from "../styles/buttons.module.css"

var btn = JSON.parse('{"title": "🌟Quero Ampliar Minhas Oportunidades!"}')

export default function ButtonBenefits() {
    return (
        <div>
            <button className={styles.btn2}>{btn.title}</button>
        </div>
    )
}