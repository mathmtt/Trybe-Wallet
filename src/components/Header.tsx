import { useSelector } from 'react-redux';
import { RootProp } from '../redux/types/types';

function Header() {
  const Users = useSelector((state: RootProp) => state.user.email);
  const expense = useSelector((state: RootProp) => state.wallet.expenses);
  const valueTotal = expense.reduce((acc, curr) => {
    return acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask);
  }, 0);
  return (
    <header>
      <p data-testid="total-field">
        {valueTotal.toFixed(2)}
      </p>
      <p data-testid="header-currency-field">BRL</p>
      <p data-testid="email-field">{Users}</p>
    </header>
  );
}
export default Header;
