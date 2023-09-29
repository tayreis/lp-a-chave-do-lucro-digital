import Image from "next/image"
import styles from "../styles/info.module.css"
import { info } from "../../json/db.json"
import ButtonTestimonials from "./ButtonTestimonials"

export default function Info() {
    return (
        <section className={styles.container}>
            {info.map((texts) => (
                <div key={texts.id} className={styles.inner}>
                    <p className={styles.text1}>{texts.text}</p>
                    <p className={styles.text2}><strong>{texts.text2}</strong></p>
                    <p className={styles.text3}>{texts.text3}</p>
                </div>
            ))}
            <ButtonTestimonials/>

        </section>
        
    )
}