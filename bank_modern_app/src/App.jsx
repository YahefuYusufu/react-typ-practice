import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import style from "./style"

const App = () => (
  // Navbar
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* // Hero */}
    <div className={`bg-primary ${style.flexStart}`}>
      <div className={style.boxWidth}>
        <Hero />
      </div>
    </div>

    {/* <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        Stats Business Billing CardDeal Testimonials Clients CTA Footer
      </div>
    </div> */}
  </div>
)

export default App
