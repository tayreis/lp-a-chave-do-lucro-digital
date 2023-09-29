import Image from "next/image"
import ButtonBenefits from "./ButtonBenefits"
import { benefits } from "../../json/db.json"
import styles from "../styles/benefits.module.css"


export default function BenefitsSection() {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Como nosso Guia pode ser seu novo <span>Caminho Para a Renda Extra</span></h1>
            <div className={styles.inner}>
                {
                    benefits.map((benefit) =>  (
                            <div className={styles.elements} key={benefit.id}>
                                <Image src={benefit.icon} width={150} height={150} alt={benefit.alt}/>
                                <h3 className={styles.subtitle}>{benefit.title}</h3>
                                <p className={styles.description}>{benefit.description}</p>
                            </div>
                        )
                    )
                }
            </div>
            <ButtonBenefits/>
        </section>
    )
}