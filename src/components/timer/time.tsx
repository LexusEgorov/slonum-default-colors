type TimeProps = {
  count: number;
  text: string;
};

function Time({count, text} : TimeProps) : JSX.Element {
  return (
    <div className="time">
      <p className="time__count timer-text-count">{count < 10 ? `0${count}` : count}</p>
      <p className="time__text timer-text">{text}</p>
      {
        text === 'часов'
          ? <p className="time__where timer-text">по МСК</p>
          : <></>
      }
    </div>
  )
}

export default Time;
