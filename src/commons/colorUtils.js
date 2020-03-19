import { HEX_COLOT_LETTER, HEX_COLOR_INDEX, TOTAL_COLOR_CELL } from "./Constants"
import { reduce } from 'lodash'

const initialColor = () => {
  return reduce(HEX_COLOR_INDEX, (color) => {
    let random = Math.floor(Math.random() * HEX_COLOT_LETTER.length);
    return color += HEX_COLOT_LETTER[random];
  }, "#");
}

const getListColorCells = () => {
  let result = [], index = 0;
  while (index < TOTAL_COLOR_CELL) {
    result.push(initialColor())
    index++;
  }
  return result;
}

export default {
  init: initialColor,
  list: getListColorCells
}