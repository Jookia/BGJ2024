export default function gameTick(player, interactable) {
  let feedback = "";
  if (interactable.successChance < Math.random()) {
    // TODO implement failure event
  } else {
    feedback = interactable.successText;
    if (interactable.successTeleport !== "") {
      player.location = interactable.successTeleport;
    }
  }
  return feedback;
}
