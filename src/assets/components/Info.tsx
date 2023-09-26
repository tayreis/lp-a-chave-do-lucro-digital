import Image from "next/image"
import styles from "../styles/info.module.css"
import { info } from "../../json/db.json"

export default function Info() {
    return (
        <section className={styles.container}>
            
            {info.map((texts) => (
                <div key={texts.id} className={styles.inner}>
                    <p className={styles.title}>{texts.text}</p>
                    <p className={styles.title}><strong>{texts.text2}</strong></p>
                    <Image className={styles.guideCover} src="/guide-cover.png" width={425} height={300} alt="Capa com o texto: A chave do lucro digital, seu guia definitivo para trasformar as redes sociais em uma máquina de dinheiro." />
                    <p className={styles.description}>{texts.text3}</p>
                </div>
            ))}

        </section>
        
    )
}