import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        {props.date.toISOString()}
      </div>
      <h2 className="expense-item h2">{props.title}</h2>
      <div className="expense-item__price">Rs. {props.amt}</div>
    </div>
  );
}
export default ExpenseItem;
