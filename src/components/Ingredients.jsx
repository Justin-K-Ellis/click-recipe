import { useState } from "react";

function Ingredients({ crossOutNext, moveBack }) {
  const [newIngredident, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientIndex, setIngredientIndex] = useState(-1);

  function addIngredient(event) {
    event.preventDefault();
    setIngredients([...ingredients, newIngredident]);
  }

  return (
    <div className="rounded shadow-md p-4">
      <form onSubmit={addIngredient}>
        <div className="flex flex-row mb-2 gap-1">
          <input
            className="rounded"
            value={newIngredident}
            onChange={(e) => setNewIngredient(e.target.value)}
          ></input>
          <button type="submit" className="btn btn-accent">
            Add
          </button>
        </div>
      </form>
      <hr />
      <ul>
        {ingredients.map((item) => {
          if (ingredients.indexOf(item) <= ingredientIndex) {
            return (
              <li className="line-through" key={item}>
                {item}
              </li>
            );
          } else {
            return <li key={item}>{item}</li>;
          }
        })}
      </ul>
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => moveBack(ingredientIndex, setIngredientIndex)}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={() => crossOutNext(ingredientIndex, setIngredientIndex)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Ingredients;
