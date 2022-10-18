import {useState, useEffect} from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import api, { Article, Tag } from '../articles/api'

type Props = {
  articles: Article[]
  tags: Tag[] 
}

export const getStaticProps: GetStaticProps = async () => {

  const {articles, tags} = await api.list()


  return {
    props: {
      articles,
      tags
    }
  }
}


const Home: NextPage<Props> = ({articles, tags}) => {

  const [products, setProducts] = useState(articles)
  const [updatedList, setUpdatedList] = useState<Props["articles"]>([])
  const [quantity, setQuantity] = useState(8)
  const [disabledBtn, setDisabledBtn] = useState(false)


  useEffect(() => {
    const newList = products.slice(0, quantity)
    setUpdatedList(newList)

    if(quantity < products.length){
      setDisabledBtn(false)
    } else {
      setDisabledBtn(true)
    }

  }, [quantity, products])
  
  
  const showMore = () => {
    if(quantity < products.length){
      setQuantity( amount => amount + 8)
    } 
  }

  return (
    <>
      <header className={styles.headerAds}>
        <p>Este es un clon para un challenge de LA NACION. No es la página web original!</p>
        <a href=''>Repositorio del Challenge</a>
      </header>

      <div className={styles.mobileAds}></div>

      <main className={styles.main}>

        <div className={styles.container}>
          <h2>Acumulado Grilla</h2>
          <ul>
            {tags.map( tag => (
              <a href={`/${tag.slug}`} key={tag.slug}>{tag.text}</a>
              ))}
          </ul>
          
          <div className={styles.itemsGrid}>
            {updatedList.map( article => (
              <div key={article._id} className={styles.itemCard}>
                <div>
                  <Image 
                    alt={`${article.headlines.basic}`} 
                    src={article.promo_items?.basic?.url!} 
                    layout='fill'
                    objectFit='cover'
                    placeholder="blur"
                    blurDataURL={article.promo_items?.basic?.url!} 
                    />
                </div>
                <a href='#'>{article.headlines.basic}</a>
                <span>{article.display_date}</span>
              </div>
            ))}
          </div>

          <button 
            className={!disabledBtn ? `${styles.showMoreBtn}` : `${styles.disabledBtn}`}
            onClick={showMore}
          >MÁS NOTAS DE ACUMULADO GRILLA</button>
          
            {quantity}
        </div>

        <aside className={styles.asideAds}></aside>
      
      </main>
    </>
  )
}

export default Home
