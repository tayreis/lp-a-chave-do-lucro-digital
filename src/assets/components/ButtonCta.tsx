import Link from "next/link"
import { buttons } from "../../json/db.json"
import  styles from "../styles/buttons.module.css"

var btn = JSON.parse('{"title": "Quero investir no meu futuro digital!"}')

export default function ButtonCta() {
    return (
            <Link href="https://pay.hotmart.com/A86711842C?checkoutMode=10" className={styles.container}>
                <button className={styles.btn3}>{btn.title}</button>
            </Link>
    )
}