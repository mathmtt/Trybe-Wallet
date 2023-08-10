import { useSelector } from 'react-redux';
import { RootProp } from '../redux/types/types';

function Header() {
  const Value = useSelector((state: RootProp) => state.wallet.total);
  const Users = useSelector((state: RootProp) => state.user.email);
  return (
    <header>
      <p data-testid="total-field">
        {Value}
      </p>
      <p data-testid="email-field">{Users}</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
