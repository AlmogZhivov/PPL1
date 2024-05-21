import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels: (s:string ) => number = (s) => 
    stringToArray(s).reduce((acc:number, curr:string) => isVowel(curr)? acc+1 : acc, 0)


const isVowel: (s:string) => boolean = (s) => s==="a" || s==="A" || s==="e" || s==="E" || s==="i" ||
    s==="I" || s==="o" || s==="O" || s==="u" || s==="U";



/* Question 2 */
export const isPaired: (s:string) => boolean = (s) => stringToArray(s).filter(
    (x:string) =>isParenthesis(x)).reduce(
        (acc:string, curr:string) =>
         acc===""? acc+curr : 
            (
                (curr===")" && acc.charAt(acc.length-1)==="(") ||
                (curr==="]" && acc.charAt(acc.length-1)==="[") ||
                (curr==="}" && acc.charAt(acc.length-1)==="{")
            )?
                acc.slice(0,-1) : acc+curr
    , "")==="";


// returns true iff the string is a parenthesis
const isParenthesis: (s: string) => boolean = (s) => s==="(" || s===")" ||  s==="[" ||
    s==="]" || s==="{" || s==="}";



/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence : (wt:WordTree) => string = (wt) =>
    wt.root + wt.children.reduce((acc:string, curr:WordTree) => acc + " " + treeToSentence(curr), "");


