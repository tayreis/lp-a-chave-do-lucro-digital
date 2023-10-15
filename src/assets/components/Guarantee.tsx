import Image from "next/image";
import garanteeImg from "../img/garantee-img.png"
import styles from "../styles/garantee.module.css"

export default function Guarantee(){
    return (
        <section className={styles.container}>
            <Image className={styles.img} src={garanteeImg} quality={75} placeholder='blur' width={600} height={600} alt="Imagem de selo de garantia"/>
            <div className={styles.inner}>
                <h1>Compra 100% Segura</h1>
                <p>Sabemos a importância de confiar na sua compra, especialmente quando se trata de produtos digitais. Por isso, temos um compromisso transparente com você.
                    De acordo com o Código de Defesa do Consumidor, garantimos seu direito de arrependimento dentro de 7 dias corridos após a compra. Se, por algum motivo, você não estiver satisfeito com o conteúdo do e-book ou sentir que ele não atende às suas expectativas, pode solicitar o reembolso total do seu investimento.</p>
            </div>
        </section>
    )
}