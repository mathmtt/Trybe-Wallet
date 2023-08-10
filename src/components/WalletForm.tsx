import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootProp } from '../redux/types/types';
import { ActionFetch, WalletInputExpense } from '../redux/actions';
import { ApiFetch } from '../API/API';

const initialState = {
  value: '',
  description: '',
};

const initialStateChange = {
  tag: 'food',
  method: 'dinheiro',
  currency: 'USD',
};

function WalletForm() {
  const [inputWalletForm, setInputWalletForm] = useState(initialState);
  const [inputWalletChangeForm, setInputWalletChangeForm] = useState(initialStateChange);
  const dispatch: Dispatch = useDispatch();
  const currency = useSelector((state: RootProp) => state.wallet.currencies);

  useEffect(() => {
    dispatch(ActionFetch());
  }, [dispatch]);

  const handleInputForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWalletForm({
      ...inputWalletForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangeForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputWalletChangeForm({
      ...inputWalletChangeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitWalletForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await ApiFetch();
    dispatch(
      WalletInputExpense({
        ...inputWalletForm,
        ...inputWalletChangeForm,
        exchangeRates: data,
      }),
    );
    setInputWalletChangeForm(initialStateChange);
    setInputWalletForm(initialState);
  };

  return (
    <div>
      <form onSubmit={ handleSubmitWalletForm }>
        <div>
          <label htmlFor="description-expense">Descrição da despesa</label>
          <input
            type="text"
            data-testid="description-input"
            id="description-expense"
            name="description"
            onChange={ handleInputForm }
            value={ inputWalletForm.description }
          />
        </div>
        <div>
          <label htmlFor="tag">Categoria da despesa</label>
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            onChange={ handleInputChangeForm }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </div>
        <div>
          <label htmlFor="value">Valor</label>
          <input
            type="number"
            id="value"
            name="value"
            data-testid="value-input"
            onChange={ handleInputForm }
            value={ inputWalletForm.value }
          />
        </div>
        <div>
          <label htmlFor="method">Metodo de pagamento</label>
          <select
            name="method"
            onChange={ handleInputChangeForm }
            id="method"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="currency"
          >
            Moeda
          </label>
          <select
            name="currency"
            onChange={ handleInputChangeForm }
            id="currency"
            data-testid="currency-input"
          >
            {currency?.map((el) => (
              <option key={ el } value={ el }>
                {el}
              </option>
            ))}
          </select>
        </div>
        <button>Adicionar despesa</button>
      </form>
    </div>
  );
}

export default WalletForm;
