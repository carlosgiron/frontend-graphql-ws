// import logo from './logo.svg';
import './App.css';
import CrearUsuario from './components/CrearUsuario';
import { ApolloProvider } from '@apollo/client';
import UsuarioList from './components/UsuarioList';
import client from './apolloClient';
function App() {
  return (
    <ApolloProvider client={client}>
    <h1>Usuarios</h1>
     <CrearUsuario />
     <UsuarioList />
   </ApolloProvider>
  );
}

export default App;
