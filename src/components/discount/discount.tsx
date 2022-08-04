import './styles/discount.css'

type DiscountProps = {
  oldPrice: number
  newPrice: number
}

function Discount({oldPrice, newPrice} : DiscountProps) : JSX.Element {
  return (
    <article className="discount">
      <header className="discount__header">
        <h3>Скидка за репост</h3>
      </header>
      <div className="discount__text">
        <p>Стоимость участия:</p>
        <div className="price">
          <p className="price__new">{newPrice}₽</p>
          <p className="price__old">{oldPrice}₽</p>
        </div>
        <p>При наличии репоста в соцсетях :)</p>
      </div>
      <footer className="discount__footer">
        <h3>Получить скидку:</h3>
        <div className="socials">
          <a href="https://vk.com/slonum">
            <img src="images/socs/vk.svg" alt="" width={39} height={39}/>
          </a>
          <a href="">
            <img src="images/socs/ok.svg" alt="" width={39} height={39}/>
          </a>
        </div>
      </footer>
    </article>
  );
}

export default Discount;
