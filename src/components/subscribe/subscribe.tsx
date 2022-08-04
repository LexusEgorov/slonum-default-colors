import Agreement from "../agreement/agreement";
import StyledInput from "../styled-input/styled-input";

function Subscribe() : JSX.Element {
  return (
    <section className="subscribe">
      <div className="wide-container">
        <div className="form-subscribe">
          <h2>Подпишись на нашу рассылку</h2>
          <p>
            Обещаем присылать только самое важное<br />
            и интересное :)
          </p>
          <form action="">
            <div className="form-input">
              <StyledInput type="text" placeholder="Email"/>
              <button className="btn-1">Отправить</button>
            </div>
            <Agreement />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
