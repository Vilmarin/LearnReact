import './App.css';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Header from './components/Header/Header';
import UsersProfile from './components/UsersProfile/UsersProfile';

const App = () => {
  return (
    <div className = 'wrapper'>
      <Header/>
    <section className = 'container'>
      <AsideMenu/>
      <UsersProfile/>

    </section>

    </div>
  );
}

export default App;
