// @codegen
// sizes for the layout items
const sizes = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  15,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100
];

/**
 * codegen expects a string so we map through the sizes
 * and create a string for every size (which contains all of the layout items)
 * and then we join the strings together to create the export
 * */
module.exports = sizes
  .map(
    size =>
      `
      export const m${size} = {
        margin: ${size}
      };

      export const mt${size} = {
        marginTop: ${size}
      };

      export const mr${size} = {
        marginRight: ${size}
      };

      export const ml${size} = {
        marginLeft: ${size}
      };

      export const mb${size} = {
        marginBottom: ${size}
      };

      export const p${size} = {
        padding: ${size}
      };

      export const pt${size} = {
        paddingTop: ${size}
      };

      export const pr${size} = {
        paddingRight: ${size}
      };

      export const pl${size} = {
        paddingLeft: ${size}
      };

      export const pb${size} = {
        paddingBottom: ${size}
      };
    `
  )
  .join("");
