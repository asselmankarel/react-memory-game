import React from "react";

export default function NewGameForm() {
  return (
    <form>
      <label htmlFor="numberOfPLayers">Number of players:</label>
      <select name="numberOfPlayers" id="">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </form>
  );
}
