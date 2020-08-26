var json = '{"q1": "Commonly used data types do NOT include:", "q1a1": "Strings", "q1a2": "Booleans", "q1a3": "Alerts", "q1a4": "Numbers", "q1a": "q1a2"}';

var obj = JSON.parse(json);
document.write(obj.q1 + "</br>");
document.write(obj.q1a1 + "</br>");
document.write(obj.q1a2 + "</br>");
document.write(obj.q1a3 + "</br>");
document.write(obj.q1a4 + "</br>");