import PointPlan from "../point-plan/point-plan";

function Plan() {
  return (
    <div className="plan">
      <div className="small-container">
        <h2>Пошаговый <span className="underline-wavy">план</span></h2>
        <div className="plan__items">
          <PointPlan number={1}><p>Зарегистрируйтесь<br /> на конкурс <a>Здесь</a></p></PointPlan>
          <PointPlan number={2}><p>Выполните все<br />условия конкурса</p></PointPlan>
          <PointPlan number={3}><p>Загрузите рисунок <a>Здесь</a> или в Личном кабинете</p></PointPlan>
          <img src="images/plane.svg" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Plan;
