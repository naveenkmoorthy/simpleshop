import './App.css';
import Filters from './components/Filters';
import ProductsList from './components/ProductsList';
import SortProducts from './components/SortProducts';
import { StoreProvider } from './store/store';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Filters />
        <SortProducts />
        <ProductsList />
      </StoreProvider>
    </div>
  );
}

export default App;
