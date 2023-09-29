import Image from "next/image";
import { testimonials } from "../../json/db.json"
import styles from "../styles/testimonials.module.css"
import Button from "./Button";
import ButtonTestimonials from "./ButtonTestimonials";

export default function Testimonials(){
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>Relatos de Quem Já <span>Abriu as Portas do Sucesso!</span></h3>
            <div className={styles.items}>
            {testimonials.map((person) => (
                <div key={person.id} className={styles.inner}>
                    <p className={styles.description}>{person.description}</p>
                    <div className={styles.person}>
                        <Image src={person.selfie} width={50} height={50} alt="Foto da Pessoa"/>
                        <p className={styles.name}>{person.name}</p>
                    </div>
                </div>
            ))}
            </div>
            

        </section>
    )
}