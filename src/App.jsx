import { useEffect, useState } from "react"
import Routers from './Routes/index'
function App() {

  const [loading, SetLoading] = useState(false)
  useEffect(() => {
    SetLoading(true)
    setTimeout(() => {
      SetLoading(false)
    }, 1000);
  }, [])

  if (loading) {

    return (
      <div className={`h-screen bg-white- flex justify-center items-center`}>
        <div className="border-4 h-12 w-12 border-red-600 border-dashed rounded-full justify-center items-center animate-[spin_5s_linear_infinite]"></div>
      </div>
    );

  }

  return (
    <>
      <Routers />
    </>

  );
}
export default App
