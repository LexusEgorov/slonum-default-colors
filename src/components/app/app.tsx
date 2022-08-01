import About from "../about/about";
import PageHeader from "../page-header/page-header";
import PromoBlock from "../promo-block/promo-block";

function App() : JSX.Element {
  return (
    <div className="extra-wide-container">
      <PageHeader />
      <main>
        <PromoBlock />
        <About />
      </main>
    </div>
  )
}

export default App;
