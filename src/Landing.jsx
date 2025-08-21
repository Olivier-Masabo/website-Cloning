import logo1 from "./assets/logo1.jpg"
import logo from "./assets/logo.jpg"
function LandingPage(){

return(
    <>
  <nav className="flex items-center justify-evenly mt-3 text-gray-600 py-5">
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

  <div className="w-full px-15 bg-gray-200 relative">
    <img className="w-full" src={logo} alt="" />
    <div className="absolute top-10 left-40 ">
       <p className="text-6xl bg-white"> One of the world's <br />
      top 50 universities</p>
      <p className="text-lg bg-white">
        We are 46th in the latest Academic <br /> Ranking of World Universities.
      </p>
      <button className=" bg-violet-700 p-5 text-white text-xl">find out more.</button>
</div>

  </div>

  <div>
    <div className="border-3 border-amber-400 flex justify-evenly px-20 py-10">
        {/* <h1>Study</h1> */}
        <div className="flex gap-x-10 bg-violet-800  p-15">
            <div>

            <h1 className="text-3xl text-white">Course and Programme finder  <br />
            <span>A-Z lists:</span></h1> <br /> 
            <li>Undergraduate course(2026 entry)</li>
            <li>Undergraduate course(2025 entry)</li>
            <li>Tought master's courses</li>
            <li>Postgraduate research areas</li>
            </div>

            <div>
                <select  className="border-1 border-gray-300 bg-white  outline-hidden rounded p-2 " name="" id="">Undergraduate course(2026 entry)
                    <option value="Undergraduate course(2026 entry)">Undergraduate course(2026 entry)</option>
                    <option value="Undergraduate course(2026 entry)">Undergraduate course(2025 entry)</option>
                    <option value="Tought master's courses">Tought master's courses</option>
                    <option value="Postgraduate research">Postgraduate research</option>
                </select> <br /> 
                    <input  className="border-1 border-gray-300 w-[100%]  bg-white mt-3 outline-hidden rounded p-1" type="text" name="" placeholder="Enter keywords" /> <br />
                    <button className="border-1 border-gray-300 bg-white w-[100%] mt-3 oultine-hidden p-1 rounded ">search</button>
                    <br /><br />
                    <p>Please enter course keywords.</p>
    


            </div>

        </div>
            <div className="bg-gray-200 p-5">
                <h1 className="text-2xl">Clearing 2025</h1>
                <p className="mt-5 mb-5">We have a few courses available in <br /> clearing.</p>

                <p className="text-violet-700 text-lg"><a href="#">Browse vacancies</a></p>
            </div>

    </div>
  </div>
    </>
)


 }

 export default LandingPage;