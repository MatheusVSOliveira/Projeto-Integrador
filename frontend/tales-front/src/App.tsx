import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastropost/CadastroPost';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/estaticos/NavBar/NavBar';
import Login from './paginas/Login/Login';
import Home from './paginas/Home/Home';
import SobreNos from './paginas/sobre-nos/SobreNos';
import Footer from './components/estaticos/Footer/Footer';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer/> 
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <div style={{ minHeight: "100vh" }}>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/sobre-nos">
              <SobreNos />
            </Route>
            <Route path="/cadastrousuario">
              <CadastroUsuario />
            </Route>
            <Route path='/temas'>
              <ListaTema />
            </Route>
            <Route path='/posts'>
              <ListaPostagem />
            </Route>
            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
