import logo1 from "./assets/logo1.jpg"
import logo from "./assets/logo.jpg"
function LandingPage(){

return(
    <>
  <nav className="flex items-center justify-evenly mt-3 border-2 text-gray-600">
    <ul className="flex justify-evenly items-center gap-x-5 text-2xl">
    <div>
        <img src={logo1} alt="" />
    </div>
        <li>Icon</li>
        <li>study</li>
        <li>Research</li>
        <li>collaborate</li>
        <li>About</li>
        <li>connect</li>
    </ul>
    <button className="px-6 py-3 text-end border-gray-300 border-1 rounded-2xl text-2xl">Search</button>

  </nav>

  <div>
    <img src={logo} alt="" />
  </div>
    </>
)


 }

 export default LandingPage;