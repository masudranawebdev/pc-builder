import Footer from "./Footer";
import Navbar from "./Navber";

 
export default function RootLayout({ children }) {
  return (
    <div className="main-container">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}