import Image from "next/image"
import styles from "../styles/info.module.css"

export default function Info() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia minima maiores saepe quisquam neque aliquam obcaecati libero laudantium molestias eius quidem inventore non incidunt accusamus, fugit soluta quam asperiores.</h3>
            <Image className={styles.guideCover} src="/guide-cover.png" width={425} height={300} alt="Capa com o texto: A chave do lucro digital, seu guia definitivo para trasformar as redes sociais em uma máquina de dinheiro." />
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi in dolor necessitatibus, nam officia ullam provident sapiente explicabo corrupti, dolorem dolore placeat repellat suscipit. Esse, doloribus dolor! Dignissimos natus soluta, eum architecto sed dolore, vel veritatis aspernatur laudantium dolorum mollitia minus beatae sit praesentium!</p>
        </div>
        
    )
}