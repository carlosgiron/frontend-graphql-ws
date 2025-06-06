import { gql } from '@apollo/client';

export const USUARIO_CREADO = gql`
  subscription {
    usuarioCreado {
      id
      nombre
      correo
    }
  }
`;
