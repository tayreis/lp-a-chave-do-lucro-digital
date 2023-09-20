import Button from "./Button";
import styles from "../styles/hero.module.css"
import { hero } from "../../json/db.json"
import Image from "next/image";

export default function Hero(){
    return (
        <section className={styles.container}>
            <Image className={styles.guideCover} src="/guide-cover.png" width={425} height={300} alt="Capa com o texto: A chave do lucro digital, seu guia definitivo para trasformar as redes sociais em uma máquina de dinheiro." />
                {hero.map((items) => (
                    <div className={styles.inner} key={items.id}>
                        <h1 className={styles.title}>{items.title}</h1>
                        <p className={styles.description}>{items.description}</p>
                        <Button/>
                    </div>
                ))}
    
        </section>
    )
}