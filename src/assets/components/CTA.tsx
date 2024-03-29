import Image from "next/image";
import pgts from "../img/pgts.png";
import ctaImg from "../img/cta-img.png";
import { callToAction } from "../../json/db.json";
import styles from "../styles/cta.module.css";
import ButtonCta from "./ButtonCta";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({ weight: '700', subsets: ['latin']})


export default function CTA(){
    return (
        <section className={styles.container} id="CTA">
            <div className={styles.divImg}>
                <Image className={styles.ctaImg} src={ctaImg} quality={75} placeholder='blur' width={350} height={350} alt="desenho de mulher segurando um presente."/>
            </div>
            {callToAction.slice(0,1).map((price) => (
                <div className={styles.inner} key={price.id}>
                    <p>de <span>{price.original}</span> por apenas</p>
                    <h1 className={poppins.className}>{price.current}</h1>
                    <p></p>
                    
                    <Image className={styles.pgtImg} src={pgts} width={400} height={80} alt="imagem com os métodos de pagamento: cartão de crédito, boleto, pix e hotmart"/>

                    <ButtonCta/>

                </div>
                ))}
        </section>
    )
}