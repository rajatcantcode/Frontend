//import and export
//We create 'component' in React like sidebar, navbar, cart.. These are all different elements which are kept in different
//files at last we need to merge them all where we need to use 'import and export'.

// --------------------------------
//navbar file ko - export
//cart file ko - export
//sidebar file ko - export

//main -import navbar, cart, sidebar

// how to do in code
//1st way---------------Single fxn to export

function Cart() {}
export default Cart;
//in different file where we need to import it
import Cart from "./script.js";

//2nd way---------------Multiple fxn to export
export function abcd() {}
export function xyz() {}
import { abcd, xyz } from "./script.js";
