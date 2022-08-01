type TimeProps = {
  count: number;
  text: string;
};

function Time({count, text} : TimeProps) : JSX.Element {
  return (
    <div className="time">
      <p className="time__count">{count < 10 ? `0${count}` : count}</p>
      <p className="time__text">{text}</p>
      {
        text === 'часов'
          ? <p className="time__where">по МСК</p>
          : <></>
      }
    </div>
  )
}

export default Time;
