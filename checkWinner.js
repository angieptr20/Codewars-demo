/* This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck! */

function quote(fighter) {
    fighter = fighter.toLowerCase()
    //need an if statement to check who winner is
    if(fighter === 'george saint pierre'){ 
      return "I am not impressed by your performance."
    } else if(fighter === 'conor mcgregor'){
      return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    }
  };

  function quote(fighter) {
    //need an if statement to check who winner is
    if(fighter.toLowerCase() === 'george saint pierre'){ 
      return "I am not impressed by your performance."
    } else if(fighter.toLowerCase() === 'conor mcgregor'){
      return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    }
  };  