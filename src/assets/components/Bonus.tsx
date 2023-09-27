import Image from "next/image"
import { bonus } from "../../json/db.json"
import styles from "../styles/bonus.module.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import giftImg from "../img/gift.png"
import freeImg from "../img/free.png"

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
                                <Image src={giftImg} width={100} height={100} alt='Imagem de Caixa de Presente'/>
                                <h2 className={styles.title}>{gift.title}</h2>
                                <p className={styles.subtitle}>{gift.subtitle}</p>
                                <p className={styles.description}>{gift.description}</p>
                            </div>
                        </SwiperSlide>
                            
                        )
                    )}
                </Swiper>

                <div className={styles.hidden}>
                    <Image className={styles.freeImg} src={freeImg} width={600} height={600} alt='Imagem de Caixa de Presente'/>
                    <div className={styles.itemsHidden}>
                    {bonus.map((gift) => (
                        <div key={gift.id} className={styles.innerHidden}>
                                    <h2 className={styles.titleHidden}>{gift.title}</h2>
                                    <p className={styles.subtitleHidden}>{gift.subtitle}</p>
                                    <p className={styles.descriptionHidden}>{gift.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
        </section>
    )
}