import './App.css';
import { AddTransaction } from './Component/Addtransaction';
import { Balance } from './Component/Balance';
import { Header } from './Component/Header';
import { IncomeExpenses } from './Component/IncomeExpenses';
import { TransactionList } from './Component/TransactionList';
import { GlobalProvider } from './Contex/GlobalState';

function App() {
  return (
   <GlobalProvider>
     <Header/>
    <div className='container'>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
   </GlobalProvider>
  );
}

export default App;
