import { buttons } from "../../json/db.json"
import  styles from "../styles/buttons.module.css"

var btn = JSON.parse('{"title": "Comece Sua Transformação Digital Agora!"}')

export default function Button() {
    return (
            <div>
                <button className={styles.btn1}>{btn.title}</button>
            </div>
    )
}