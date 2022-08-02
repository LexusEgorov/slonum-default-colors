import { useEffect, useRef } from "react";
import PointPlan from "../point-plan/point-plan";

const DELAY = 1000;

function Plan() {
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].intersectionRatio <= 0){
      return;
    }

    setTimeout(() => {
      entries[0].target.querySelector('.plane')?.classList.add('plane-animated');
      const plans = entries[0].target.querySelectorAll('.point-plan');
      plans.forEach((plan) => plan.classList.add('point-plan__animated'));
      observer.disconnect();
    }, DELAY);
  });

  const planRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(planRef.current === null){
      return;
    }

    observer.observe(planRef.current);
  });

  return (
    <div className="plan" ref={planRef}>
      <div className="small-container">
        <h2>Пошаговый <span className="underline-wavy">план</span></h2>
        <div className="plan__items">
          <PointPlan number={1}><p>Зарегистрируйтесь<br /> на конкурс <a>Здесь</a></p></PointPlan>
          <PointPlan number={2}><p>Выполните все<br />условия конкурса</p></PointPlan>
          <PointPlan number={3}><p>Загрузите рисунок <a>Здесь</a> или в Личном кабинете</p></PointPlan>
          <img className="plane" src="images/plane.svg" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Plan;
