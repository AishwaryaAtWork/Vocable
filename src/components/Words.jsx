import wordBank from './word-bank.txt';

export const boardDefault= [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]  
];

export const generateWordSet= async ()=>{
    let wordSet;
    await fetch(wordBank)
    .then((response)=>response.text())
    .then((result)=>{
        const wordArr=result.split("\r\n");
        wordSet=new Set(wordArr);
    });
    return {wordSet};
};