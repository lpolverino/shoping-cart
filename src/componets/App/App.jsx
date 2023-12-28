import styles from './App.module.css'
import Header from '../Header/Header'
import ImageSlider from '../ImageSlider/ImageSlider'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className={styles.page}>
    <Header className={styles.header}></Header>
    <ImageSlider className={styles.slider}></ImageSlider>
    <Footer className={styles.footer}></Footer>
    </div>
  )
}

export default App
