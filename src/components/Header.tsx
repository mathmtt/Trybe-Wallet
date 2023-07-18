import { useSelector } from 'react-redux';

function Header() {
  const { email } = useSelector((state:any) => state.user);
  return (
    <header>
      <ul>
        <li data-testid="email-field">{ email }</li>
        <li data-testid="total-field">0</li>
        <li data-testid="header-currency-field">BRL</li>
      </ul>
    </header>
  );
}

export default Header;
