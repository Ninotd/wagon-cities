// TODO: add and export your own actions
import cities from "../cities";

export default function SetCity () {
  return {
    type: "SET_CITY",
    payload: cities
  };
}
