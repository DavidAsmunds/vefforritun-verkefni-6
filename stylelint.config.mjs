/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  
  //þessi regla leyfir mér að nota __ í card__klösunum.
  //game is game
  rules: {
    "selector-class-pattern":
      "^[a-z][a-z0-9-]*(?:__[a-z0-9-]+)?$"
  }
};