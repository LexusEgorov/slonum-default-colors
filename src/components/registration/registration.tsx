import { useEffect, useRef } from "react";
import Discount from "../discount/discount";
import StyledCheckbox from "../styled-checkbox/styled-checkbox";
import StyledInput from "../styled-input/styled-input";

const DELAY = 1000;

function Registration() : JSX.Element {
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio <= 0){
      return;
    }
    
    
    setTimeout(() => {
      entries[0].target.querySelector('.planes')?.classList.add('registration-planes-animated');
      observer.disconnect();
    }, DELAY);
  });

  const planesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(planesRef.current === null){
      return;
    }

    observer.observe(planesRef.current);
  });

  return (
    <section className="registration">
      <div className="small-container">
        <Discount oldPrice={299} newPrice={149}/>
        <article className="registration-form">
          <h2>Зарегистрируйтесь, чтобы участвовать</h2>
          <form action="">
            <StyledInput placeholder="ФИО ребёнка" type="text" id={1}/>
            <StyledInput placeholder="Дата рождения" type="date" id={2}/>
            <StyledInput placeholder="Город" type="text" id={3}/>
            <StyledInput placeholder="Email" type="text" id={4}/>
            <StyledInput placeholder="Пароль" type="password" id={5}/>
          </form>
          <div className="agreement">
            <StyledCheckbox id={1}/>
            <p>
              Отправляя данные я соглашаюсь с <a href="" className="accent underline">Условиями конкурса</a><br />
              и <a href="" className="accent underline">Политикой обработки данных</a>
            </p>
          </div>
          <footer className="registration-form__footer" ref={planesRef}>
            <button className="btn-1">Участвовать</button>
            <div className="planes">
              <img className="plane plane__1" src="images/planes/plane-1.svg" alt="" width={120} height={90}/>
              <img className="plane plane__2"src="images/planes/plane-2.svg" alt="" width={120} height={77}/>
              <img className="plane plane__3" src="images/planes/plane-3.svg" alt="" width={100} height={70}/>
            </div>
          </footer>
        </article>
      </div>
    </section>
  )
}

export default Registration;
