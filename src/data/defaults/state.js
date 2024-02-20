import { defaultPlayer } from "./player";
import { locations } from "../locations";
import { items } from "../items";

export const defaultState = {
  player: defaultPlayer,
  location: locations["intro"],
  inventory: [items["watch"]],
  actionFeedback: "",
  clock: 0,
  feedbackRepeats: 0,
  interactables: Object.assign(
    locations["intro"].interactables,
    items["watch"].interactables,
  ),
};
