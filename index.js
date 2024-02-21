//concatination of two srtings //
// let str1="Md Israr";
// let str2="Ahemed";
// let result = str1.concat(" ",str2);  //using of concat() method iske 
//parameter me el spaerator denge "" or dusra string variable
// console.log(result)
// <------------------------------------------------------------------>
//Another approach//
// let str1="Md Israr";
// let str2="Ahemed";
// console.log(str1+ " "+ str2)
//<--------------------------------------------------------------------->
//substring method isme ye string ke characer number se
// slect karta hai or jahan tak print karana hai jaise 
// hum ko "Hello World" me sirf world print karana hai
// to hum  substring(6,11) yahan jo 6 hai wo H ki position hai
// jo 0 se start hoti hai oe 11 ko hai wo last element hai or 
//jo first element hota hai wo including hota hai 
//or last element exluding hota hai to ekprogram dekhte hain 
//<--------------------------------------------
// let string= "Hello JavaScript";             |
// let result = string.substring(10,16);       |
// console.log(result)                         |
//<--------------------------------------------|
//remark is me jo "S" hai wo 10 index pe hai or "t" wo 15 index 
//pe hai to last wala index humara excluding hota hai to hum ek 
//index badha ke likte hain to (n-1) 15 include ho jayega or huamra 
//= "Script" jo required output tha wo Print ho jayega 
//<------------------------------------------------------------------------->
//Length property
// let str="My name is ";
// console.log(str.length)  kisi bhi string ki length 
//pata karne ke liye use kar te hain length property
//<------------------------------------------------------------------------------>
//kisi bhi string lo upper Case me convert karna ho to
//hum toUpperCase() method ka use kate hain
// let str= "md israr ahmed" 
// let upper=str.toUpperCase();
// // console.log(upper);
//<---------------------------------------------------------------------------------->
//kisi bhi string lo lower Case me convert karna ho to
//hum toLowerCase() method ka use kate hain
// let str="MD ISRAR AHMED";
// let lower= str.toLowerCase();
// console.log(lower)
//<------------------------------------------------------------------------------------->
//Split method ye kisi bhi string ke words ko split
// kar deta hai or humko ek array return karta hai ;
// let str ="India";
// let split=str.split("")
// console.log(split)----------output will [ 'I', 'n', 'd', 'i', 'a' ];
// split method words ko bhi split karta hai jaise hellow world;
// let  str= "helloWorld";
// let result= str.split("")
// console.log(result)
//  split ke parameter me agar inverted 
// comma ke bich me koi space nahi denge to to wo pure string ko 
// breake kar  array ke index numver ke sath return karega or agar
// inverted comma ke bich me koi space denge to pure string ke words ko inverted
// comma me bind kar dega for Example
// let str = "my name is Md israr ahmed";
// let store = str.split(" ");
// console.log(store)
//<---------------------------------------------------------------------------------------->
// Replace method ye kisi bhi string ko change karne ka kam karta hai  
// let str = "Israr";
// let replace = str.replace("Israr","Sumaiya")
// console.log(replace) //output will be Sumaiya not israr
//<------------------------------------------------------------------------------------------>
//Trim method generally humara kisi bhi strings ke age piche se unwanted 
//white space ko remove karta hai  ye inbetween string ke bich ke white space ko remove nahi karta;
// let str="           Javascript is scripting language           ";
// let trim = str.trim();
// console.log(trim)
//<==----------------------------------------------------------------------------------------->




