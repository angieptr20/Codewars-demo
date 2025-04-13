// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {
    while (string.endsWith('!')) {
      string = string.slice(0, -1);
    }
    return string;
  }
  
  console.log(remove("Hi!!!")); // Output: "Hi"


//OTHER SOLUTION
function remove(s){
    while (s[s.length - 1] === '!') {
      s = s.slice(0, -1);
    }
    return s;
}  

  
//OTHER
function remove(s){
    let res = s;
     for(let i = s.length - 1; i >= 0; i-- ){
       if(s[i] == "!"){
         res = res.slice(0, -1)}
       else{break;}
     }
     return res;  
   }


//BEST SOLUTION
function remove(s){
    return s.replace(/!+$/, '');
  } 

//   🔍 Explanation:
//   s.replace(...)
//   This replaces part of the string s with something else.
  
//   In this case, it's replacing a pattern (defined by the regular expression /!+$/) with an empty string ''.
  
//   🧠 What's /!+$/?
//   This is a regular expression (regex), and here's what each part means:
  
//   / — the start and end of the regex.
  
//   ! — matches an actual exclamation mark.
  
//   + — means "one or more" of the thing before it (so one or more !).
  
//   $ — anchors the match to the end of the string.
  
//   🟡 So together: /!+$/ matches one or more exclamation marks at the end of the string.  