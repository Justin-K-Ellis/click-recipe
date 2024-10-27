import Ingredients from "./Ingredients";

function Card() {
  function crossOutNext(index, setter) {
    const newIndex = index + 1;
    setter(newIndex);
  }

  function moveBack(index, setter) {
    const newIndex = index - 1;
    setter(newIndex);
  }

  return <Ingredients crossOutNext={crossOutNext} moveBack={moveBack} />;
}

export default Card;
