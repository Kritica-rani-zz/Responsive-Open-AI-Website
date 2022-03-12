
import './App.css'
import './index.css'
import{Blog,Features,Footer,Header,Possiblity,Gpt3} from './containers'
import{Cta,Brand,Navbar} from './Component'
function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
     <Navbar/>
    <Header/>
     </div>
     <Brand/>
     <Gpt3/>
     <Features/>
     <Possiblity/>
     <Cta/>
     <Blog/>
   <Footer/>
    </div>
    
  );
}

export default App;
