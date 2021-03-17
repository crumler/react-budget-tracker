import { useContext } from 'react';
import { TiDelete, TiEdit } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge badge-primary badge-pill mr-3">
                    ${props.cost}
                </span>
                <TiEdit size='1.5em' className='edit-icon'></TiEdit><TiDelete size='1.5em' className='delete-icon' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;