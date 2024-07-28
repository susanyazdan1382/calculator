






document.getElementById('calculate').addEventListener('click', function() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result = 0;
  
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
    }
  
    document.getElementById('result').textContent = 'Result: ' + result;
  });
  
  document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('result').textContent = 'Result: ';
  });
  
