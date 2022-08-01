function PageHeader() : JSX.Element {
  return (
    <div className="small-container">
      <header className="page-header">
        <div className="logo">
          <img className="logo__image" src="images/logo.svg" alt="" width={50} height={50}/>
          <p className="logo__text">Слон<span>УМ</span></p>
        </div>
        <button className="sign-in btn-2">Войти</button>
      </header>
    </div>
  );
}

export default PageHeader;
