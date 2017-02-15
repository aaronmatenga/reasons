var reasonsList = {
  "1": "You have good taste in music... most of the time... hahaha",
  "2": "You are a good cook",
  "3": "You are a good mother",
  "4": "You are a good daughter",
  "5": "You are intelligent",
  "6": "You are confident",
  "7": "You are diligent",
  "8": "You are self motivated and disciplined",
  "9": "You are studious",
  "10": "You are safety concious",
  "11": "You live a healthy lifestyle",
  "12": "You are a good, loyal friend",
  "13": "You have a good sense of humour",
  "14": "You are a great singer, especially at harmonies",
  "15": "You are beautiful",
  "16": "You are clean, both temporaly and spiritually",
  "17": "You are very orgainsed",
  "18": "You keep the house very organised",
  "19": "You are creative and good at making arts and crafts",
  "20": "You make the best muffins",
  "21": "You are forgiving",
  "22": "You love God",
  "23": "You love your family",
  "24": "You are thoughtful",
  "25": "You are prepared",
  "26": "You keep me on track",
  "27": "You teach me how to be a better person",
  "28": "You are great at managing money",
  "29": "You set a good example for your friends and family",
  "30": "You are very multi talented",
  "31": "You are a good teacher"
  // "1-1": "You have good taste in music... most of the time... hahaha",
  // "2-1": "You are a good cook",
  // "3-1": "You are a good mother",
  // "4-1": "You are a good daughter",
  // "5-1": "You are intelligent",
  // "6-1": "You are confident",
  // "7-1": "You are diligent",
  // "8-1": "You are self motivated and disciplined",
  // "9-1": "You are studious",
  // "10-1": "You safety concious",
  // "11-1": "You are healthy and live a healthy lifestyle",
  // "12-1": "You are a good, loyal friend",
  // "13-1": "You have a good sense of humour",
  // "14-1": "You are a great singer, especially at harmonies",
  // "15-1": "You are beautiful",
  // "16-1": "You are clean, both temporaly and spiritually",
  // "17-1": "You are very orgainsed",
  // "18-1": "You keep the house very organised",
  // "19-1": "You ",
  // "20-1": "You ",
  // "21-1": "You ",
  // "22-1": "You ",
  // "23-1": "You ",
  // "24-1": "You ",
  // "25-1": "You ",
  // "26-1": "You ",
  // "27-1": "You ",
  // "28-1": "You ",
  // "29-1": "You ",
  // "30-1": "You ",
  // "31-1": "You "
  // "13-2": "You are a great singer, especially at harmonies",
  // "14-2": "You are beautiful",
  // "15-2": "You are clean, both temporaly and spiritually",
  // "16-2": "You are very orgainsed",
  // "17-2": "You keep the house very organised"
};

//Function for setting the current reason text
function setReason(date) {
  if (!reasonsList[date]) return;
  reasonText.innerHTML = reasonsList[date];
}

//Get current date index to list
var date = new Date();
var day = date.getDate();
// var month = date.getMonth() + 1;
// var current = day + '-' + month;
// setReason(current);
setReason(day);

//Event listeners for navigating reason list on button clicks
backButton.onclick = function() {
  date.setDate(date.getDate() - 1);
  day = date.getDate();
  // month = date.getMonth() + 1;
  // current = day + '-' + month;
  // setReason(current);
  setReason(day);
}

todayButton.onclick = function() {
  date = new Date();
  day = date.getDate();
  // month = date.getMonth() + 1;
  // current = day + '-' + month;
  // setReason(current);
  setReason(day);
}

forwardButton.onclick = function() {
  date.setDate(date.getDate() + 1);
  day = date.getDate();
  // month = date.getMonth() + 1;
  // current = day + '-' + month;
  // setReason(current);
  setReason(day);
}
