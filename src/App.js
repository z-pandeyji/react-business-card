import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Text from './components/textPart';
import Footer from './components/footer';

function App() {
  return (
    <div className="container">
      <div className="size style">
        <img src="./image/profile2.jpg" />
        <div className="name-txt">Shivanshu Pandey</div>
        <small>Full Stack Developer</small>
        <Button />
        <Text />
        <Footer />
      </div>
    </div>
  );
}

export default App;
