function takeANumber(currentLine, newCustomer){
  var temp = currentLine.push(newCustomer);
  var welcome = `Welcome, ${newCustomer}. You are number ${temp.length} in line.`;
  return temp;
}
