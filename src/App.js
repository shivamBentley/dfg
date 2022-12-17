import './App.css';
import Footer from './components/common/Footer';
import { Navbar } from './components/common/Navbar';
import PublicRoutes from './routes/PublicRoutes';
function App() {
  return (
    <>
      <Navbar />
      <PublicRoutes />
      <Footer />
    </>

  );
}

export default App;
