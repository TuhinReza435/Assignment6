
import PlayerIndividual from "./playerIndividual";
import CheckOut from "./CheckOut";
const SelectedCartItems = ({ selectedPlayer, removePlayer }) => {
  const total = selectedPlayer.reduce((sum, player) => sum + player.price, 0);
  return (
    <div className="w-full px-6 mb-9">
      <h2 className="text-xl font-bold mb-4 text-start">Your Cart</h2>

      <div>
        {selectedPlayer.map((player) => (
          <PlayerIndividual
            key={player.id}
            player={player}
            removePlayer={removePlayer}
          />
        ))}
      </div>

      <CheckOut total={total} />
    </div>
  );
};

export default SelectedCartItems;
