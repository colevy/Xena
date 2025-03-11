import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://colevy.github.io/Xena" className="logo">
        <span>Xena White's Dungeon </span>
      </a>
      <div>
        <p>
          This Website was made with black girl magic <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.instagram.com/beezwaxnotyourz/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
