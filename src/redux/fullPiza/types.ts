import { Status } from "./../../@types/Status";
import { Pizza } from "../../@types/Pizza";

export interface IState {
  fullPizza: Pizza | null;
  status: Status;
}
