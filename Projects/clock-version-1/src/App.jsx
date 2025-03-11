import './App.css'
import ClockHeading from './components/ClockHeading';
import ClockMotto from './components/ClockMotto';
import CurrentTime from './components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  
  return <center>
    <ClockHeading></ClockHeading>
    <ClockMotto></ClockMotto>
    <CurrentTime></CurrentTime>
    </center>
}

export default App;
