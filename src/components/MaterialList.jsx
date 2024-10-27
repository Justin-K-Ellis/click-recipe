import { useState } from "react";

function MaterialList({ crossOutNext, moveBack, title, listStyle }) {
  const [newIngredident, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientIndex, setIngredientIndex] = useState(-1);

  function addIngredient(event) {
    event.preventDefault();
    setIngredients([...ingredients, newIngredident]);
    setNewIngredient("");
  }

  function clearList() {
    const choice = confirm("Are you sure you want to clear this list?");
    if (choice) {
      setIngredients([]);
      setIngredientIndex(-1);
    }
  }

  return (
    <div className="rounded shadow-lg bg-base-200 p-4">
      <h1 className="text-2xl font-bold text-center my-2">{title}</h1>
      <form onSubmit={addIngredient} className="flex flex-row justify-center">
        <div className="flex flex-row mb-2 gap-1">
          <input
            className="rounded p-1"
            value={newIngredident}
            onChange={(e) => setNewIngredient(e.target.value)}
          ></input>
          <button type="submit" className="btn btn-accent">
            Add
          </button>
        </div>
      </form>
      <hr className="my-2" />
      <ul className="ml-4">
        {ingredients.map((item) => {
          if (ingredients.indexOf(item) <= ingredientIndex) {
            return (
              <li className={`line-through ${listStyle}`} key={item}>
                {item}
              </li>
            );
          } else {
            return (
              <li className={listStyle} key={item}>
                {item}
              </li>
            );
          }
        })}
      </ul>
      <div className="flex flex-row gap-1 justify-center">
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
      <div className="flex flex-row justify-center mt-2">
        <button className="btn btn-sm btn-warning" onClick={clearList}>
          Clear list
        </button>
      </div>
    </div>
  );
}

export default MaterialList;
