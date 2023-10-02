import Link from "next/link"
import { buttons } from "../../json/db.json"
import  styles from "../styles/buttons.module.css"

var btn = JSON.parse('{"title": "Clique e comece sua Transformação Digital!"}')

export default function Button() {
    return (
            <Link href="#CTA" className={styles.container}>
                <button className={styles.btn3}>{btn.title}</button>
            </Link>
    )
}