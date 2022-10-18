import {useState, useEffect} from 'react'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import '../styles/globals.css'
import styles from '../styles/NavbarFooter.module.css'
import {GrMenu, GrClose, GrTwitter, GrInstagram} from 'react-icons/gr'
import {ImFacebook} from 'react-icons/im'
import {FaRss, FaApple, FaGooglePlay} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {BsChat, BsCreditCard} from 'react-icons/bs'


function MyApp({ Component, pageProps }: AppProps) {

  const [menu, setMenu] = useState<Boolean>(false)
  const [showNav, setShowNav] = useState<Boolean>(true)
  const [showSearchBtn, setshowSearchBtn] = useState(false)

  const showNavbar = () => {
    if(window.scrollY > 200)  {
      setShowNav(false)
    } else {
      setShowNav(true)
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', showNavbar)
  
    return () => {
      window.removeEventListener('scroll', showNavbar)
    }
  }, [])
  

  return (
  <div className="container">

    <nav className={showNav ? `${styles.navbar}` : ''}>
      <div>
        { !menu ? <GrMenu onClick={() => setMenu(!menu)}/> : <GrClose onClick={() => setMenu(!menu)}/>}
        <button 
          className={styles.menuBtn} 
           onClick={() => setMenu(!menu)}
          >{ !menu ? 'MENÚ' : 'CERRAR' }</button>
        <input
          placeholder='Buscar' 
          onFocus={() => setshowSearchBtn(true)}
          onBlur={() => setshowSearchBtn(false)}
        />
        { showSearchBtn ? <button className={styles.searchBtn}>Buscar</button> : null }
      </div>

      <h1 className={styles.title}>LA NACION</h1>

      <aside>
        <button className={styles.suscribeBtn}>Suscribite</button>
        <button className={styles.loginBtn}>Ingresar</button>
      </aside>
    </nav>

    <nav className={styles.tabBar}>
      <a href='#'><AiFillHome />Home</a>
      <a href='#'><BsCreditCard />Club LA NACION</a>
      <a href='#'><BsChat />Mi cuenta</a>
      <a href='#'><GrMenu />Menú</a>
    </nav>

    <Component {...pageProps} />

    <footer className={styles.footer}>

      <div className={styles.footerFirstRow}>
        <ul>
          <a href='https://www.facebook.com/lanacion'>
            <ImFacebook/>
          </a>
          <a href='https://twitter.com/LANACION'>
            <GrTwitter/>
          </a>
          <a href='https://www.instagram.com/lanacioncom/'>
            <GrInstagram/>
          </a>
          <a href='https://servicios.lanacion.com.ar/herramientas/rss/ayuda'>
            <FaRss/>
          </a>
        </ul>

        <a href='#' className={styles.title}>LA NACION</a>

        <div className={styles.apps}>
          <a href="https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419" target="_blank" className={styles.appStore} rel="noreferrer">
            <span>
                <FaGooglePlay />
              </span>
            <p>DISPONIBLE EN <br /><strong>Google Play</strong></p>
          </a>

          <a href="https://apps.apple.com/ar/app/la-nacion/id410689702" target="_blank" className={styles.appStore} rel="noreferrer" >
            <span>
              <FaApple />
            </span>
            <p >Consiguelo en el <br /><strong>App Store</strong></p>
          </a>
        </div>
      </div>

      <div className={styles.linksList}>
        <ul>
          <a>Map del sitio</a>
          <a>Ayuda</a>
          <a>Términos y condiciones</a>
          <a>¿Cómo anunciar?</a>
          <a>Suscribirse al diario impreso</a>
        </ul>
        <div>
          <p>Protegido por re CAPTCHA:</p>
          <div>
            <a>Condiciones</a>
            <a>Privacidad</a>
          </div>
        </div>
      </div>

      <div className={styles.footerLastRow}>
        <p>Copyright 2019 SA LA NACION | Todos los derechos reservados</p>

        <p>
          <Image width={38} height={21} src='https://static.glanacion.com/v2/ln/img/gda.jpg' alt='gda' />
           Miembro de GDA. Grupo de Diarios América
        </p>
      </div>

    </footer>

  </div>
  )
}

export default MyApp
