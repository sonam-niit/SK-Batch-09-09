import logo from './logo.svg';
import './App.css';
import GrandGrandParent from './propdriling/GrandGrandParent';
import MyGrandGParent from './contextdemo1/MyGrandGParent';
import ThemeProvider from './contextdemo2/themecontext';
import Usage from './contextdemo2/Usage';
import Header from './contextdemo2/Header';
import LoginContextProvider from './contextdemo3/logincontext';
import Login from './contextdemo3/Login';

function App() {
  return (
    <div>

      <LoginContextProvider>
        <Header />
        <Login />
      </LoginContextProvider>
    </div>
  );
}

export default App;
