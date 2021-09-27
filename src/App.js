import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProver } from './context/GlobalState';

function App() {
  return (
  <GlobalProver>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
    </GlobalProver>
  );
}

export default App;
