
import Logo from "../../assets/codebooklogo.png"
import { Link } from "react-router-dom"
export const Header = () => {
    return (
        <header>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8 sm:h-9 " alt="Codebook Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codebook</span>
                    </Link>
                    <div className="flex  items-center space-x-8 rtl:space-x-reverse">
                    <span className="bi bi-gear-wide-connected cursor-pointer text-xl text-gray-700 dark:text-white mr-5 "> </span>
                    <span className="bi bi-search cursor-pointer text-xl text-gray-700"></span>
                    <Link to="/cart" className="text-gray-700 dark:text-white">
                    <span className="bi bi-cart-check cursor-pointer text-2xl relative text-gray-700"> 
                    <span className="text-white text-sm absolute top-1 left-1/2  bg-rose-500 px-1 rounded-full ">0</span>
                    </span>
                    </Link>
                    <span className="bi bi-person-circle cursor-pointer text-xl text-gray-700 mr-5"></span>
                    
                    </div>
                </div>
            </nav>















        </header>
    )
}
