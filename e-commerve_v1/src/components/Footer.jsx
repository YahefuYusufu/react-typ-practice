import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai"

const styles = {
  footer: "w-4/5 m-auto bg-gray-800 text-white p-10",
  container: "md:flex grid grid-cols-2 gap justify-between items-center my-10",
  section: "flex flex-col gap-2",
  a: "text-gray-400 hover:text-gray-200",
}
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className="space-y-5 py-5 border-b">
          <h1 className="text-2xl font-bold">سەي سىچاڭ</h1>
          <div>
            <AiOutlineInstagram size={"1.5rem"} />
            <AiOutlineYoutube size={"1.5rem"} />
            <AiOutlineWhatsApp size={"1.5rem"} />
          </div>
        </div>
        <section className={styles.section}>
          <h1 className="font-bold">ئەڭ يېڭى خەۋەرلەر</h1>
          <a className={styles.a} href="/">
            About Us
          </a>
          <a className={styles.a} href="/">
            Contact Us
          </a>
          <a className={styles.a} href="/">
            Servise
          </a>
          <a className={styles.a} href="/">
            Blog
          </a>
        </section>
        <section className={styles.section}>
          <h1 className="font-bold">ئەڭ يېڭى خەۋەرلەر</h1>
          <a className={styles.a} href="/">
            About Us
          </a>
          <a className={styles.a} href="/">
            Contact Us
          </a>
          <a className={styles.a} href="/">
            Servise
          </a>
          <a className={styles.a} href="/">
            Blog
          </a>
        </section>
        <section className={styles.section}>
          <h1 className="font-bold">ئەڭ يېڭى خەۋەرلەر</h1>
          <a className={styles.a} href="/">
            About Us
          </a>
          <a className={styles.a} href="/">
            Contact Us
          </a>
          <a className={styles.a} href="/">
            Servise
          </a>
          <a className={styles.a} href="/">
            Blog
          </a>
        </section>
      </div>
      <div className="border-t py-2">
        <p>
          copy &copy;2022 <span className="font-bold">E-commerce</span> All
          Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
