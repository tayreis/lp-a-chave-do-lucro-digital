import { buttons } from "../../json/db.json"
import  styles from "../styles/buttons.module.css"

var btn = JSON.parse('{"title": "Junte-se aos Vencedores! Adquira Já!"}')

export default function ButtonTestimonials() {
    return (
            <div>
                <button className={styles.btn3}>{btn.title}</button>
            </div>
    )
}