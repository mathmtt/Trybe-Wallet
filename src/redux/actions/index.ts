// Coloque aqui suas actions
import { ATT_EMAIL } from '../reducers/user';

export const setEmail = (email: string) => ({
  type: ATT_EMAIL,
  email,
});
