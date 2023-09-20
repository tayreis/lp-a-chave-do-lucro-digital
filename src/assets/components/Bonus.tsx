import Image from "next/image"
import { bonus } from "../../json/db.json"
import styles from "../styles/bonus.module.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules';

export default function Bonus(){


    return (
        <section className={styles.container} >
            <h1 className={styles.containerTitle}>Adquira HOJE e Desbloqueie 5 Bônus Exclusivos!</h1>
                <Swiper
                    
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    loop={true}
                    className={styles.swiper}

                    >   
                    {bonus.map((gift) => (
                        <SwiperSlide key={gift.id} className={styles.swiperSlide} >
                            <div className={styles.inner}  style={{backgroundColor : gift["background-color"]}}>
                                <Image src={gift.icon} width={100} height={100} alt='Imagem de Caixa de Presente'/>
                                <h2 className={styles.title}>{gift.title}</h2>
                                <p className={styles.subtitle}>{gift.subtitle}</p>
                                <p className={styles.description}>{gift.description}</p>
                            </div>
                        </SwiperSlide>
                            
                        )
                    )}
                </Swiper>
        </section>
    )
}