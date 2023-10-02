import Link from "next/link"
import { buttons } from "../../json/db.json"
import  styles from "../styles/buttons.module.css"

var btn = JSON.parse('{"title": "Desbloqueie Seu Potencial no Marketing!"}')

export default function ButtonBenefits() {
    return (
        <Link href="#CTA">
            <button className={styles.btn3}>{btn.title}</button>
        </Link>
    )
}