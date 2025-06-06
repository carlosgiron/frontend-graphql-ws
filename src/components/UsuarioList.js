import { useEffect, useState } from 'react';
import { useSubscription, useQuery, gql } from '@apollo/client';
import { USUARIO_CREADO } from '../subscriptions/usuarioCreado';

const GET_USUARIOS = gql`
  query {
    usuarios {
      id
      nombre
      correo
    }
  }
`;

export default function UsuarioList() {
  const { data, loading } = useQuery(GET_USUARIOS);
  const { data: nuevoUsuario } = useSubscription(USUARIO_CREADO);

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    if (data) setUsuarios(data.usuarios);
  }, [data]);

  useEffect(() => {
    if (nuevoUsuario) {
      setUsuarios((prev) => [...prev, nuevoUsuario.usuarioCreado]);
    }
  }, [nuevoUsuario]);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u.id}>
          {u.nombre} ({u.correo})
        </li>
      ))}
    </ul>
  );
}
