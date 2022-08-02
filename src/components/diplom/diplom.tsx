import './styles/diplom.css'

type DiplomProps = {
  name: string;
  place: number;
  competition: string;
  ageFrom: number;
  ageTo: number;
  city: string;
  date: string; 
}

function Diplom({name, place, competition, ageFrom, ageTo, city, date} : DiplomProps) : JSX.Element {
  return (
    <div className="diplom">
      <div className="text-column">
        <h3>Диплом</h3>
        <p className='awards'>Награждается</p>
        <p className="name">{name}</p>
        <p className="place">{place} место</p>
        <p className='competition'>
          во Всероссийском конкурсе детских рисунков<br />
          «{competition}»<br />
          Возраст от {ageFrom} до {ageTo} лет, г. {city}
        </p>
        <p className="date">{date}</p>
      </div>
    </div>
  )
}

export default Diplom;
