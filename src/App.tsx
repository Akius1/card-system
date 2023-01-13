
import  {useState, useEffect} from "react"
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import { CartType } from "./types/product.type";
import ProductDataService from "./services/service";


function App() {

  let initialItemInCart: CartType = {
    id: 0,
    count: 0,
  };

  const [items, setItems] = useState([initialItemInCart]);
  const [cart, setCart] = useState([initialItemInCart])
  
  // const [products, setProducts] = useState([]);;




  const getProducts = async () => {
    try {
      const { status, data } = await ProductDataService.getAll();
      if (status === 200) {
        let itemsWithId = data.data.benefitsList.filter((item)=> Object.keys(item).includes('id'))
        
        localStorage.setItem("products", JSON.stringify(itemsWithId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    
  }, []);
 


useEffect(() => {
  localStorage.setItem("carts", JSON.stringify(cart));
  const items:any = localStorage.getItem('carts');
  if (items) {
   setItems(JSON.parse(items));
  }
}, [cart]);

  return (
    <>
     
     <Router>
     <Header carts={items} />
       <Routes>
       <Route path='/' element={<Dashboard  cart={cart} setCart={setCart}/>}/>
       <Route path='/cart' element={<Cart cart={cart}/>}/>
       </Routes>
       
     </Router>
    </>
  );
}

export default App;
