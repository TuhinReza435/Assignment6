import React from "react";

const PlayerIndividual = ({ player,  removePlayer }) => {
  const handleclick = () => {
    console.log(player.id)
    removePlayer(player.id)
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl mb-3 w-full">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <img src={player.icon} alt="" className="w-6 h-6" />
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">{player.name}</h2>
          <p className="text-sm text-gray-500">{player.price}</p>
        </div>
      </div>

      <button
        className="text-pink-500 font-medium hover:underline"
        onClick={handleclick}
      >
        Remove
      </button>
    </div>
  );
};

export default PlayerIndividual;
