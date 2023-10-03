import Button from "./Button";
import styles from "../styles/hero.module.css";
import { hero } from "../../json/db.json";
import Image from "next/image";
import guideCover from "../../../public/guide-cover.png";



export default function Hero(){
    return (
        <section className={styles.container}>
            <Image className={styles.guideCover} quality={75} src={guideCover} width={425} height={300} placeholder="blur" alt="Capa com o texto: A chave do lucro digital, seu guia definitivo para trasformar as redes sociais em uma máquina de dinheiro." />
                {hero.map((items) => (
                    <div className={styles.inner} key={items.id}>
                        <h1 className={styles.title}><span>{items.title}</span></h1>
                        <p className={styles.description}><span>{items.description}</span></p>
                        <Button/>
                    </div>
                ))}
    
        </section>
    )
}