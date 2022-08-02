import About from "../about/about";
import Diploms from "../diploms/diploms";
import PageHeader from "../page-header/page-header";
import Plan from "../plan/plan";
import PromoBlock from "../promo-block/promo-block";

function App() : JSX.Element {
  return (
    <div className="extra-wide-container">
      <PageHeader />
      <main>
        <PromoBlock />
        <About />
        <Plan />
        <Diploms />
      </main>
    </div>
  )
}

export default App;
