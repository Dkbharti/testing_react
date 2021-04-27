import Header from "./component/header";
import './app.scss';
import Headline from './component/headline'
function App() {
  return (
    <div>
    
     <Header/>
     <section className='main'>
         <Headline header='Posts' desc='Click the button to render post!'/>
     </section>
     
    </div>
  );
}

export default App;
