import Time from "./time";

function Timer() : JSX.Element {
  return (
    <div className="timer">
      <Time count={1} text={'дней'}/>
      <span className="colon">:</span>
      <Time count={9} text={'часов'}/>
      <span className="colon">:</span>
      <Time count={43} text={'минут'}/>
    </div>
  );
}

export default Timer;
