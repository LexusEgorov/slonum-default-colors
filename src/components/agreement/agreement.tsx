import StyledCheckbox from "../styled-checkbox/styled-checkbox";
import './styles/agreement.css';

function Agreement() : JSX.Element {
  return (
    <div className="agreement">
      <StyledCheckbox id={1}/>
      <p>
        Отправляя данные я соглашаюсь с <a href="" className="accent underline">Условиями конкурса</a><br />
        и <a href="" className="accent underline">Политикой обработки данных</a>
      </p>
    </div>
  );
}

export default Agreement;
