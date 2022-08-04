function PageFooter() : JSX.Element {
  return (
    <footer className="page-footer">
      <div className="small-container">
        <div className="upper-container">
          <div className="socs">
            <p>Наши соцсети:</p>
            <ul className="socs__list">
              <li className="socs__list__item">
                <a href="">
                  <img src="images/socs/tg.svg" alt="" width={35} height={35}/>
                </a>
              </li>
              <li className="socs__list__item">
                <a href="">
                  <img src="images/socs/dzen.svg" alt="" width={35} height={35}/>
                </a>
              </li>
              <li className="socs__list__item">
                <a href="">
                  <img src="images/socs/vk.svg" alt="" width={35} height={35}/>
                </a>
              </li>
            </ul>
          </div>
          <nav className="footer-navigate">
            <a href="">Главная</a>
            <a href="">Личный кабинет</a>
            <a href="">Контакты</a>
            <a href="">Конфидециальность</a>
          </nav>
        </div>
        <div className="lower-container">
          <p className="copyright">
            @ Все права защищены. ООО "Слонум" 2022
          </p>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
