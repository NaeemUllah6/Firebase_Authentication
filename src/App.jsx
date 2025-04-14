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



  return (
    <>
      <Routers />
    </>

  );
}
export default App
