import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const CREAR_USUARIO = gql`
  mutation CrearUsuario($nombre: String!, $correo: String!) {
    crearUsuario(nombre: $nombre, correo: $correo) {
      id
      nombre
      correo
    }
  }
`;

export default function CrearUsuario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [crearUsuario] = useMutation(CREAR_USUARIO);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearUsuario({ variables: { nombre, correo } });
    setNombre('');
    setCorreo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
      <input value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="Correo" />
      <button type="submit">Crear</button>
    </form>
  );
}
