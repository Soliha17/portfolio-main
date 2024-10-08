import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Nilufar</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>
          <li>
            <a href='#portfolio' className='footer__link'>
              Projects
            </a>
          </li>
          <li>
            <a href='https://t.me/Nilufar_Hamzaevna' className='footer__link'>
              Contact
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='https://t.me/Nilufar_Hamzaevna'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bx bxl-telegram'></i>
          </a>
          {/* <a
            href='https://github.com/Soliha17'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          >
            <i className='uil uil-github-alt'></i>
          </a> */}
          <a
            href='www.linkedin.com/in/turaeva-nilufar-0a5657288'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bx bxl-linkedin'></i>
          </a>
        </div>
        <span className='footer__copy'>
          &#169; Nilufar. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
