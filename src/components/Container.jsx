import MaterialList from "./MaterialList";

function Container() {
  function crossOutNext(index, setter) {
    const newIndex = index + 1;
    setter(newIndex);
  }

  function moveBack(index, setter) {
    const newIndex = index - 1;
    setter(newIndex);
  }

  return (
    <>
      <MaterialList
        crossOutNext={crossOutNext}
        moveBack={moveBack}
        title="Ingredients"
        listStyle={"list-disc"}
      />
      <hr className="my-4" />
      <MaterialList
        crossOutNext={crossOutNext}
        moveBack={moveBack}
        title="Steps"
        listStyle={"list-decimal"}
      />
    </>
  );
}

export default Container;
