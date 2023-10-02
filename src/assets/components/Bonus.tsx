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
            <h1 className={styles.title}>Aproveite nossa Promoção e Desbloqueie <span>5 Bônus Exclusivos!</span></h1>
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
                                <Image className={styles.giftImg} src={giftImg} width={100} height={100} alt='Imagem de Caixa de Presente'/>
                                <h2 className={styles.subtitle}>{gift.title}</h2>
                                <p className={styles.description}>{gift.subtitle}</p>
                                <p className={styles.description}>{gift.description}</p>
                            </div>
                        </SwiperSlide>
                            
                        )
                    )}
                </Swiper>

                <div className={styles.hidden}>
                    <div className={styles.itemsHidden}>
                    {bonus.map((gift) => (
                        <div key={gift.id} className={styles.innerHidden}>
                            <div className={styles.imgContainer}>
                                <Image className={styles.freeImg} src={freeImg} width={250} height={250} alt='Imagem de Caixa de Presente'/>
                            </div>
                            <div className={styles.bonusContainer}>
                                <h2 className={styles.subtitle}>{gift.title}</h2>
                                <p className={styles.description}>{gift.subtitle}</p>
                                <p className={styles.description}>{gift.description}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
        </section>
    )
}