// @codegen
// sizes for the layout items
// since the array starts at 0 we want everything after that
const sizes = [...Array(101).keys()].slice(1);

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
