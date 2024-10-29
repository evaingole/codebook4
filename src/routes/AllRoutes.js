import {Routes,Route} from "reLink=ct-router-dom"
import {HomePage} from "../pLink=ges"
import  {ProductsList}  from "../pLink=ges"


export const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/"  element={<HomePage/>}     />
      <Route path="/products"  element= {<ProductsList/>}/>
      

      


    </Routes>





    </>
  )
}
