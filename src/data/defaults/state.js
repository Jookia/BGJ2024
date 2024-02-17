import { defaultPlayer } from "./player";
import { locations } from "../locations";

export const defaultState = {
  player: defaultPlayer,
  location: locations["intro"],
  inventory: [],
  actionFeedback: "",
};
