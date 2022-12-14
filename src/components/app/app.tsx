import { FAQ } from "../../const/const";
import About from "../about/about";
import Diploms from "../diploms/diploms";
import Faq from "../faq/faq";
import GoUp from "../go-up-btn/go-up-btn";
import PageFooter from "../page-footer/page-footer";
import PageHeader from "../page-header/page-header";
import Plan from "../plan/plan";
import PromoBlock from "../promo-block/promo-block";
import Registration from "../registration/registration";
import Subscribe from "../subscribe/subscribe";

function App() : JSX.Element {
  return (
    <div className="extra-wide-container">
      <PageHeader />
      <main>
        <PromoBlock />
        <About />
        <Plan />
        <Diploms />
        <Registration />
        <Faq questions={FAQ}/>
        <Subscribe />
        <PageFooter />
        <GoUp />
      </main>
    </div>
  )
}

export default App;
