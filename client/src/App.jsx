import React from 'react'
import './css/App.css'
import { BrowserRouter, NavLink, Route, Routes, withRouter } from 'react-router-dom'
import Profile from './pages/Profile';
import Dialogs from './pages/Dialogs';
import Main from './pages/Main';
import Login from './components/authform/Login';
import Registration from './components/authform/Registration';
import UsersContainer from './components/users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="header">
          <div className="header__body">
            <a href="#" className="header__logo">
              <img src={require('./img/logo.jpeg')} alt="logo" />
            </a>
            <nav className="header__menu">
              <ul className="header__list">
                <li className="header__link"><NavLink to='/'>Главная</NavLink></li>
                <li><a href="" className="header__link">Пункт меню</a></li>
                <li><a href="" className="header__link">Пункт меню</a></li>
                <li><a href="" className="header__link">Пункт меню</a></li>
                <li><a href="" className="header__link">Пункт меню</a></li>
              </ul>
            </nav>
            <div className="header__burger"><span></span></div>
          </div>
        </div>
        <div className="main">
          <section className="content">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialogs" element={<Dialogs />} />
              <Route path="/dialogs/:id" element={<Dialogs />} />
              <Route exact path="/" element={<Main />} />
            </Routes>
          </section>
          <aside className="sidebar">

            <div className="sidebar__form form">
              <Routes>
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route exact path="/" element={<Login />} />
              </Routes>

              <div className="form__social social">
                <div href="#" className="social__vk">
                  <img src={require('./img/social_vk.png')} alt="form__vk" />
                </div>
                <div href="" className="social__fb">
                  <img src={require('./img/social_vk.png')} alt="form__fb" />
                </div>
                <div href="" className="social__twitter">
                  <img src={require('./img/social_vk.png')} alt="form__twitter" />
                </div>
                <div href="" className="social__gmail">
                  <img src={require('./img/social_vk.png')} alt="form__gmail" />
                </div>
              </div>
            </div>

            <div className="sidebar__flex flex__center">
              <div className="sidebar__addpost">Добавить пост</div>
              <div className="sidebar__createpublic">Создать сообщество</div>
            </div>

            <div className="sidebar__flex menu">
              <div className="menu__item"><NavLink to='/profile' className="menu__navlink">Профиль</NavLink></div>
              <div className="menu__item active"><NavLink to='/dialogs' className="menu__navlink">Сообщения</NavLink></div>
            </div>
            <UsersContainer />
          </aside>
        </div>
        <div className="footer">
          <div className="footer__copy">Copy</div>
          <div className="footer__text">Text</div>
        </div>
      </div>
    </ BrowserRouter>
  );
}

export default App;
