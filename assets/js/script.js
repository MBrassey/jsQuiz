var json = '{
"q1": "Commonly used data types do NOT include:", "q1a1": "Strings", "q1a2": "Booleans", "q1a3": "Alerts", "q1a4": "Numbers", "q1a": "Alerts", 
"q2": "The condition of an if/ else statement is enclosed with __________:", "q2a1": "Quotes", "q2a2": "Curly Brackets", "q2a3": "Parentheses", "q2a4": "Square Brackets", "q2a": "Parentheses", 
"q3": "Arrays is Javascript can be used to store:", "q3a1": "Numbers & Strings", "q3a2": "Other Arrays", "q3a3": "Booleans", "q3a4": "All of the above", "q3a": "All of the above",
"q4": "String values must be enclosed within _______ when being assigned to variables:", "q4a1": "Commas", "q4a2": "Curly Brackets", "q4a3": "Quotes", "q4a4": "Parentheses", "q4a": "Quotes",
"q5": "A very useful tool used during development & debugging for printing content to the debugger is:", "q5a1": "Javascript", "q5a2": "Terminal/Bash", "q5a3": "For Loops", "q5a4": "Console.log", "q5a": "Console.log",
}';

var obj = JSON.parse(json);
document.write(obj.q1 + "</br>");
document.write(obj.q1a1 + "</br>");
document.write(obj.q1a2 + "</br>");
document.write(obj.q1a3 + "</br>");
document.write(obj.q1a4 + "</br>");
