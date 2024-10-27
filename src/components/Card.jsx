import { useState } from "react";

function Card() {
  const [newIngredident, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([
    "Carrots",
    "Cabbage",
    "Shoyu",
  ]);
  const [ingredientIndex, setIngredientIndex] = useState(0);

  function addIngredient(event) {
    event.preventDefault();
    setIngredients([...ingredients, newIngredident]);
  }

  function crossOutNext() {
    const newIndex = ingredientIndex + 1;
    setIngredientIndex(newIndex);
  }

  function moveBack() {
    const newIndex = ingredientIndex - 1;
    setIngredientIndex(newIndex);
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
        <button className="btn btn-secondary" onClick={moveBack}>
          Back
        </button>
        <button className="btn btn-primary" onClick={crossOutNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Card;
