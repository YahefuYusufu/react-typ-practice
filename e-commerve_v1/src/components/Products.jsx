import React from "react"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"

const styles = {
  div: "product h-[350px] space-y-2 m-auto bg-white rounded-xl p-4",
  img: "w-full h-4/5 object-cover",
}
const Products = () => {
  return (
    <div className="w-4/5 m-auto bg-stone-200 my-4 rounded-xl space-y-10">
      <div className="flex justify-between items-center p-4">
        <ul className="flex  items-center space-x-8">
          <li>Home</li>
          <li>Product</li>
          <li>About</li>
        </ul>
        <div className="flex items-center space-x-5">
          <button>
            <BsArrowLeft size={"2.5rem"} />
          </button>
          <button>
            <BsArrowRight
              size={"2.5rem"}
              className="bg-rose-300 rounded-full p-2 text-white drop-shadow-xl"
            />
          </button>
        </div>
      </div>
      {/* Product */}
      <div className="products grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 -content-center">
        <div className={styles.div}>
          <img className={styles.img} src="images/glases.jpg" alt="glasses" />
          <p>Lorem ipsum dolor sit.</p>
          <h1>$700</h1>
        </div>
        <div className={styles.div}>
          <img className={styles.img} src="images/labtop.jpg" alt="laptop" />
          <p>Lorem ipsum dolor sit.</p>
          <h1>$700</h1>
        </div>
        <div className={styles.div}>
          <img className={styles.img} src="images/phone.jpg" alt="phone" />
          <p>Lorem ipsum dolor sit.</p>
          <h1>$700</h1>
        </div>
        <div className={styles.div}>
          <img className={styles.img} src="images/shoes.jpg" alt="shoes" />
          <p>Lorem ipsum dolor sit.</p>
          <h1>$700</h1>
        </div>
        <div className={styles.div}>
          <img className={styles.img} src="images/glases.jpg" alt="glasses" />
          <p>Lorem ipsum dolor sit.</p>
          <h1>$700</h1>
        </div>
        <div className={styles.div}>
          <img className={styles.img} src="images/labtop.jpg" alt="laptop" />
          <p>Lorem ipsum dolor sit.</p>
          <h1>$700</h1>
        </div>
        <div className={styles.div}>
          <img className={styles.img} src="images/phone.jpg" alt="phone" />
          <p>Lorem ipsum dolor sit.</p>
          <h1>$700</h1>
        </div>
        <div className={styles.div}>
          <img className={styles.img} src="images/shoes.jpg" alt="shoes" />
          <p>Lorem ipsum dolor sit.</p>
          <h1>$700</h1>
        </div>
      </div>
    </div>
  )
}

export default Products
