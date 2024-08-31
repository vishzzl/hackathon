import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import { useTheme } from './Themecontext';
import './light_theme.css'
import './dark_theme.css'
import SVGComponent from './components/Svgcomponent';
import Feature from './components/Feature';
function App() {
  const { theme } = useTheme();
  return (
   <div className=''>
    <Navbar/>
    <Banner/>
    <Feature/>
   </div>
  );
}

export default App;
