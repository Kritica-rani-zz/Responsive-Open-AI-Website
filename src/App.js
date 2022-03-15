
import './App.css'
import './index.css'
import{Blog,Footer,Header,Possiblity,Gpt3} from './containers'
import{Cta,Brand,Navbar,Feature} from './Component'
function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
     <Navbar/>
    <Header/>
     </div>
     <Brand/>
     <Gpt3/>
     <Feature/>
     <Possiblity/>
     <Cta/>
     <Blog/>
   <Footer/>
    </div>
    
  );
}

export default App;
