// Make objects language translator

const germanWords = 
{"peace" : "frieden" , "and" :"und" ,"love" :"liebe"};

const frenchWords =
{"peace" :"paiy" , "and" : "et" , "love" : "amour"};

const spanishWords =
{"peace" :"paz" , "and" : "y", "love" : "amor"};

// German Language Functions
// need to take user words and store in variable = to something
// 

const printToDom =(stringToPrint,divId) =>{
    const selectedDiv =document.getElementById(divId);
    newWords.innerHTML += stringToPrint;
    };

const userInputBox = document.getElementById('words');

const holidayMessageGerman = () => {
    let finalAns = ""; 
    const inputWords = userInputBox.value.toLowerCase();
    const words = inputWords.split(" ");
    for (i =0; i<words.length;i++){
        finalAns+= germanWords[words[i]]+" ";
    }
    printToDom(finalAns,newWords);
};

const holidayMessageFrench = () => {
    let finalAns = ""; 
    const inputWords = userInputBox.value.toLowerCase();
    const words = inputWords.split(" ");
    for (i =0; i<words.length;i++){
        finalAns+= frenchWords[words[i]]+" ";
    }
    printToDom(finalAns,newWords);
};

const holidayMessageSpanish = () => {
    let finalAns = ""; 
    const inputWords = userInputBox.value.toLowerCase();
    const words = inputWords.split(" ");
    for (i =0; i<words.length;i++){
        finalAns+= spanishWords[words[i]]+" ";
    }
    printToDom(finalAns,newWords);
};


// Played with PTD function
// const printToDomn = (finalAns,newWords) =>{
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML += stringToPrint;
// };

// const printToDom =(stringToPrint,divId) =>{
// const selectedDiv =document.getElementById(divId);
// newWords.innerHTML += stringToPrint;
// };

// const showMe = (finalAns) => {
// printToDom(showMe,newWords);




// showMe();


// const germanMsg = () => {
//     germanWords.



// };
const germanButton = document.getElementById('german');
germanButton.addEventListener('click', holidayMessageGerman);

const frenchButton = document.getElementById('french');
frenchButton.addEventListener('click' , holidayMessageFrench);

const spanishButton = document.getElementById('spanish');
spanishButton.addEventListener('click', holidayMessageSpanish);