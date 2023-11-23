import logo from './logo.svg';
import './App.css';
import Products from './composants/Products';
const produits=[
  {
    id:1,
    title:'lenovo ideapad 3',
    price:'7000dh',
    thumbnail:'LENOVO.PNG'
  },
  {
    id:2,
    title:'DELL',
    price:'6000dh',
    thumbnail:'DELL.PNG'
  },
  {
    id:3,
    title:'ASUS',
    price:'9000dh',
    thumbnail:'ASUS.PNG'
  },
  {
    id:4,
    title:'hp ',
    price:'5400dh',
    thumbnail:'HP.PNG'
  }
]        
function App() {
  return (
    <div className="App">
      <Products produits={produits} />  
    
    </div>
  );
}

export default App;
