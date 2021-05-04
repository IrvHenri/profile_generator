const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
 
  let answer_one = answer
  rl.question('What\'s an activity you like doing?', (answer) => {
   
    let answer_two = answer
  
    rl.question('What do you listen to while doing that?', (answer) => {
      let answer_three = answer
      
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        let answer_four = answer
        
        
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          let answer_five = answer
          
          
          rl.question('Which sport is your absolute favourite?', (answer) => {
            let answer_six = answer
            
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              let answer_seven= answer
              
              console.log(`Fun Profile Generator: \n 
              Hey world! 

              Some people call me ${answer_one}, but that's just my mom. When I'm not being super cool at ${answer_seven}
              I like to ${answer_two} while listening to ${answer_three}. Intense right? Also every Tuesday
              for ${answer_four} you can catch me having ${answer_five}. Who doesn't love ${answer_five}?
              #${answer_six}4Life  
              
              `);
            
              rl.close();
            });
            
          });
          
        });
        
      });
      
    });
    
  });
  
});