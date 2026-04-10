import React from "react";
import PlayerIndividual from "./playerIndividual";

const SelectedCartItems = ({ selectedPlayer }) => {
  return (
    <div className="w-full px-6 mb-9">
      <h2 className="text-xl font-bold mb-4 text-start">Your Cart</h2>

      <div>
        {selectedPlayer.map((player) => (
          <PlayerIndividual key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default SelectedCartItems;
