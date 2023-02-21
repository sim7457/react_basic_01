import Footer from './Footer';
import Header from './Header';
import Main from './Main';


function App() {
  // 컴포넌트 만들어서 재사용할꺼임...
  return (
    <div className="wrap">
      {/* header component */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
