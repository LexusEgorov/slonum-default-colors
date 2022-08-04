import './styles/go-up-btn.css'

function GoUp() : JSX.Element {
  return (
    <div className="go-up-btn"
    onClick={() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }}
    >
      <img src="images/go-up.svg" alt="" width={12} height={6}/>
    </div>
  )
}

export default GoUp;
