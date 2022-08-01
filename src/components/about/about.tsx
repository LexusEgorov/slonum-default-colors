import Point from "../point-advantage/point-advantage";

function About() : JSX.Element {
  return (
    <div className="about">
      <p className="about__us">
        Компания <span className="company">СлонУм</span> – проводит конкурс для детей в котором могут<br />
        участвовать ребята <span className="accent">всех возрастов!</span> Номинации в которых можно<br />
        победить, есть возможность проявить себя во всех направлениях<br />
        и даже <span className="accent">без художественных способностей.</span>
      </p>
      <div className="for-what">
        <div className="small-container">
          <h2>Для чего <span className="underline-wavy">нужно</span> участвовать</h2>
          <ul className="points">
            <li className="points__item">
              <Point img="star"
                text={
                  `Шанс занять 1 место — в вашем
                  городе и по всей России`
                }
              />
            </li>
            <li className="points__item">
              <Point img="winne"
                text={
                  `Развитие самостоятельности +
                  свободное время для родителей ;)`
                }
              />
            </li>
            <li className="points__item">
              <Point img="certification"
                text={
                  `Персональный диплом в разных
                  номинациях каждому участнику`
                }
              />
            </li>
            <li className="points__item">
              <Point img="gift-box"
                text={
                  `Призы и скидки для подписчиков и
                  авторизованных пользователей`
                }
              />
            </li>
            <li className="points__item">
              <Point img="email"
                text={
                  `Бесплатный диплом на email —
                  через 1 день после конкурса`
                }
              />
            </li>
            <li className="points__item point-advantage">
              <img src="images/points/vk.png" alt="" width={70} height={70}/>
              <p>
                Публикация работ победителей во ВКонтакте. <a className="underline vk-link" href="https://vk.com/slonum">Подписывайтесь!</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
