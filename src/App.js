import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="mt-3 text-center">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <h3 className="mt-3 text-center">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3 text-center">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default App;