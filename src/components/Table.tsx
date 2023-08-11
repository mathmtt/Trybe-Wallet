import { useDispatch, useSelector } from 'react-redux';
import { RootProp } from '../redux/types/types';
import { TableActionDelete } from '../redux/actions';

function Table() {
  const dispatch = useDispatch();
  const expense = useSelector((state: RootProp) => state.wallet.expenses);
  const handleClickDelete = (id: number) => {
    dispatch(TableActionDelete(id));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expense.map((element) => (
            <tr key={ element.id }>
              <td>{element.description}</td>
              <td>{element.tag}</td>
              <td>{element.method}</td>
              <td>{`${element.value}.00`}</td>
              <td>{element.exchangeRates[element.currency].name}</td>
              <td>{Number(element.exchangeRates[element.currency].ask).toFixed(2)}</td>
              <td>
                {(
                  Number(element.value)
                  * Number(element.exchangeRates[element.currency].ask)
                ).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button>Editar</button>
                <button
                  data-testid="delete-btn"
                  onClick={ () => handleClickDelete(Number(element.id)) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
