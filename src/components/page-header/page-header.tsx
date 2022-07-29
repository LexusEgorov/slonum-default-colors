function PageHeader() : JSX.Element {
  return (
    <header className="page-header">
      <div className="logo">
        <img className="logo__image" src="images/logo.svg" alt="" width={50} height={50}/>
        <p className="logo__text">Слон<span>УМ</span></p>
      </div>
      <button className="sign-in btn">Войти</button>
    </header>
  );
}

export default PageHeader;
