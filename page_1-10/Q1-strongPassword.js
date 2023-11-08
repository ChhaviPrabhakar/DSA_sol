function strongPassword(password) {
  
    let hasLowerCase = /[a-z]/.test(password);
    let hasUpperCase = /[A-Z]/.test(password.substr(1, password.length-2));
    let hasDigit = /[0-9]/.test(password.substr(1, password.length-2));
    let hasSymbol = /['@#%&?']/.test(password.substr(1, password.length-2));
    
    if(password.length > 9 && hasLowerCase && hasUpperCase && hasDigit && hasSymbol) {
      return 'SECURE';
    } else {
      return 'NOT SECURE';
    }
    
  }
  
  strongPassword('abcD?e1rgsdddd');