import Header from "./component/header";
import './app.scss';
import Headline from './component/headline';
const tempArr=[{
  fName: 'joe',
  lName:'Bloogs',
  email:'joebloggs@gmail.com',
  age:24,
  onlineStatus:true
}]
function App() {
  return (
    <div>    
      <Header/>
      <section className='main'>
          <Headline header={'Posts'} desc='Click the button to render post!' tempArr={tempArr}/>
      </section>     
    </div>
  );
}

export default App;
