function calculateLove() {
    const name1 = document.getElementById('YourName').value;
    const name2 = document.getElementById('CrushName').value;

   

    // random score between 0 and 100
  
    const loveScore = Math.floor(Math.random() * 101);
    
    let message;

    // Using if-else statement to determine the message based on the score
   
        
     if (loveScore >= 80){
        message = `Your love score is ${loveScore}%. You two are a perfect match! ❤️🥰😍 `;
    } 
    else if (loveScore >= 50) {
        message = `Your love score is ${loveScore}%. You may give it a chance 😍😍`;
    } 
    else if (loveScore >= 40) {
        message = `Your love score is ${loveScore}%. friendzone for now 👫🏻👫🏻`;
    } 
    else if (loveScore >= 30) {
        message = `Your love score is ${loveScore}%. continue at your own risk 😥😥 `;
    } 
    else {
        message = `Your love score is ${loveScore}%. stop what you trying to do before it to late 💔💔   `;
    }
    
    // Display the result
    document.getElementById('result').innerText =   message;
}

    