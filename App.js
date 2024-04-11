import Header from "./components/header"
import Title from "./components/title"
import Card from "./components/cardOne"
import CardTwo from "./components/cardTwo"
import CardThree from "./components/cardThree"
import CardFour from "./components/cardFour"

function App() {
  return (
    <div className="px-20">
    <div>

<div className="p-4 w-full border border-black flex align-middle justify-between">
        <h1 className="text-5xl font-bold">Bootstrap</h1>
        
        <div className="">
        <a className="text-2xl font-bold pl-10">About</a>
        <a className="text-2xl font-bold pl-10">Services</a>
        <a className="text-2xl font-bold pl-10">Contact</a>
        <a className="text-2xl font-bold pl-10">Portfolio</a>
        </div>
</div>
<div className="p-4 w-full border border-black text-center">
  <Title/>
</div>

<div className=" flex items-stretch mt-28">
<div className="p-4 border-4 border-black text 2xl ml-8 items-center content-center"><Card/></div>
<div className="p-4 border-4 border-black text 2xl ml-8 items-center content-center"><CardTwo/></div>
<div className="p-4 border-4 border-black text 2xl ml-8 items-center content-center"><CardThree/></div>
<div className="p-4 border-4 border-black text 2xl ml-8 items-center content-center"><CardFour/></div>
</div>

    </div>
    </div>
  )
}

export default App;