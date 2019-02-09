var myArr = [
 "kind",
"loved",
"friendly",
"smart",
"enchanting",
"lovely",
"refreshing",
"unique",
"caring",
"trying",
"present",
"alive",
"breathing",
"the only you",
"sincere",
"loyal",
"engaging",
"independent",
"capable",
"creative",
"intuitive",
"perceptive",
"kind-hearted",
"purposeful",
"intentional",
"beautiful",
"inspiring",
"captivating"
]

function pickRandomWord() {
  var rnd = Math.ceil(Math.random() * (28-1) + 1);

  return myArr[rnd];
}
