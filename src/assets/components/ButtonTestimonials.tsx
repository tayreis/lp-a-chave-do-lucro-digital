import Link from "next/link"
import  styles from "../styles/buttons.module.css"

var btn = JSON.parse('{"title": "Junte-se aos Vencedores! Adquira Já!"}')

export default function ButtonTestimonials() {
    return (
            <Link href="https://pay.hotmart.com/A86711842C?checkoutMode=10">
                <button className={styles.btn3}>{btn.title}</button>
            </Link>
    )
}