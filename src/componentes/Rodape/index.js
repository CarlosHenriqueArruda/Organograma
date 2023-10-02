import './Rodape.css'

const Rodape = (props) =>{
  return(<footer className="footer">
  <section>
      <ul className='lista'>
          <li>
              <a href="https://github.com/CarlosHenriqueArruda" target="_blank">
                  <img width="40px" src="./imagens/github2.png" alt="GitHub" />
              </a>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/carloshenriquech/" target="_blank">
                  <img width="40px" src="./imagens/linkedin.png" alt="LinkedIn" />
              </a>
          </li>
          <li>
              <a href="https://www.instagram.com/carlosoliveirach/" target="_blank">
                  <img width="40px" src="./imagens/ig.png" alt="Instagram" />
              </a>
          </li>
      </ul>
  </section>
  <section>
      <img src="/imagens/logo.png" alt="" />
  </section>
  <section>
      <p>
          Desenvolvido por Carlos Henrique.
      </p>
  </section>
</footer>
)
}

export default Rodape