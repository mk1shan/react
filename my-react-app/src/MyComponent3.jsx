import React, { useState } from "react";

function MyComponent3() {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;

    document.getElementById("foodInput").value = " ";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>list of food</h2>

      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input type="text" id="foodInput" plcaeholder="enter food name" />

      {/* methna di thma danagnne chnage una kiyla */}

      <button onClick={handleAddFood}>add food</button>
    </div>
  );
}
export default MyComponent3;
