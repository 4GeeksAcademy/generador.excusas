/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  //write your code here
  let whoRandom = who[Math.floor(Math.random() * who.length)];

  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];
  console.log(
    whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom
  );
  document.getElementById("excusas").innerHTML =
    whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;
};
