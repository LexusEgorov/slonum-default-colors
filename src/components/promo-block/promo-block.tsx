import Space from "../space/space";
import Timer from "../timer/timer";

function PromoBlock() : JSX.Element {
  return (
    <div className="promo-block">
      <div className="info-column">
        <h1>Всероссийский конкурс<br/>Детского рисунка</h1>
        <p className="signature">От компании Слонум</p>
        <p className="description">
          Участвуйте в конкурсе и получайте призы в различных<br />
          номинациях детского рисунка для всех возрастов
        </p>
        <div className="time-to-go">
          <button className="btn-1 get-in">Участвовать</button>
          <Timer />
        </div>
      </div>
      <Space />
    </div>
  );
}

export default PromoBlock;
