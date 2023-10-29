


// Validate the input parameters.
function convertNumberSystem() {
  // Validate the conversion type.
  let conversionTypeFrom = document.getElementById("conversionTypeForm").value;
  let conversionTypeTo = document.getElementById("conversionTypeTo").value;
  let inputNumber = document.getElementById("inputNumber").value;
  
  
  if (["decimal", "binary", "octal", "gray", "excess-3"].indexOf(conversionTypeFrom) === -1) {
    // Display an error message to the user.
    alert("Invalid conversion type from: " + conversionTypeFrom);
    return;
  }
  if (inputNumber === "" || inputNumber === undefined) {
    throw new Error("Invalid input number: " + inputNumber);
  }

  function decimalToOctal(decimalNumber) {F
    // Check if the decimal number is valid.
    if (!isNaN(decimalNumber)) {
      throw new Error("Invalid input number: " + decimalNumber);
    }
  
    // Convert the decimal number to octal.
    let octalNumber = "";
    while (decimalNumber > 0) {
      octalNumber = (decimalNumber % 8) + octalNumber;
      decimalNumber = Math.floor(decimalNumber / 8);
    }
  
    // Return the converted octal number.
    return octalNumber;
  }
  function decimalToGray(decimalNumber) {
    // Check if the decimal number is valid.
    if (!isNaN(decimalNumber)) {
      throw new Error("Invalid input number: " + decimalNumber);
    }
  
    // Convert the decimal number to gray code.
    let grayCode = "";
    let previousBit = 0;
    while (decimalNumber > 0) {
      const currentBit = decimalNumber % 2;
      grayCode = currentBit ^ previousBit + grayCode;
      previousBit = currentBit;
      decimalNumber = Math.floor(decimalNumber / 2);
    }
  
    // Return the converted gray code.
    return grayCode;
  }
  function decimalToExcess3(decimalNumber) {
    // Check if the decimal number is valid.
    if (!isNaN(decimalNumber)) {
      throw new Error("Invalid input number: " + decimalNumber);
    }
  
    // Convert the decimal number to excess-3.
    const excess3Number = decimalNumber + 3;
  
    // Return the converted excess-3 number.
    return excess3Number;
  }  

  // Convert a binary number to gray code.
function binaryToGray(binaryNumber) {
  // Check if the binary number is valid.
  if (!/^[01]+$/.test(binaryNumber)) {
    throw new Error("Invalid binary number: " + binaryNumber);
  }

  // Convert the binary number to gray code.
  let grayCode = binaryNumber[0];
  for (let i = 1; i < binaryNumber.length; i++) {
    grayCode += binaryNumber[i] ^ binaryNumber[i - 1];
  }

  // Return the converted gray code.
  return grayCode;
}
function binaryToExcess3(binaryNumber) {
  // Check if the binary number is valid.
  if (!/^[01]+$/.test(binaryNumber)) {
    throw new Error("Invalid binary number: " + binaryNumber);
  }

  // Convert the binary number to decimal.
  const decimalNumber = binaryToDecimal(binaryNumber);

  // Convert the decimal number to excess-3.
  const excess3Number = decimalNumber + 3;

  // Convert the excess-3 number to binary.
  const binaryExcess3Number = bin(excess3Number)[2];

  // Return the excess-3 number.
  return binaryExcess3Number;
}
function octalToGray(octalNumber) {
  // Check if the octal number is valid.
  if (!/^[0-7]+$/.test(octalNumber)) {
    throw new Error("Invalid octal number: " + octalNumber);
  }

  // Convert the octal number to decimal.
  const decimalNumber = parseInt(octalNumber, 8);

  // Convert the decimal number to gray code.
  const grayCode = decimalToGray(decimalNumber);

  // Return the gray code.
  return grayCode;
}
function octalToExcess3(octalNumber) {
  // Check if the octal number is valid.
  if (!/^[0-7]+$/.test(octalNumber)) {
    throw new Error("Invalid octal number: " + octalNumber);
  }

  // Convert the octal number to decimal.
  const decimalNumber = parseInt(octalNumber, 8);

  // Convert the decimal number to excess-3.
  const excess3Number = decimalNumber + 3;

  // Convert the excess-3 number to octal.
  const octalExcess3Number = excess3Number.toString(8);

  // Return the excess-3 number.
  return octalExcess3Number;
}

function grayToDecimal(grayNumber) {
  // Check if the gray number is valid.
  if (!/^[01]+$/.test(grayNumber)) {
    throw new Error("Invalid gray number: " + grayNumber);
  }

  // Convert the gray number to decimal.
  let decimalNumber = 0;
  for (let i = grayNumber.length - 1; i >= 0; i--) {
    decimalNumber ^= parseInt(grayNumber[i]);
    if (i > 0) {
      decimalNumber <<= 1;
    }
  }

  // Return the converted decimal number.
  return decimalNumber;
}

// Convert a gray code number to binary.
function grayToBinary(grayNumber) {
  // Check if the gray number is valid.
  if (!/^[01]+$/.test(grayNumber)) {
    throw new Error("Invalid gray number: " + grayNumber);
  }

  // Convert the gray number to binary.
  let binaryNumber = grayNumber[0];
  for (let i = 1; i < grayNumber.length; i++) {
    binaryNumber += grayNumber[i] ^ grayNumber[i - 1];
  }

  // Return the converted binary number.
  return binaryNumber;
}

// Convert a gray code number to octal.
function grayToOctal(grayNumber) {
  // Check if the gray number is valid.
  if (!/^[01]+$/.test(grayNumber)) {
    throw new Error("Invalid gray number: " + grayNumber);
  }

  // Convert the gray number to decimal.
  const decimalNumber = grayToDecimal(grayNumber);

  // Convert the decimal number to octal.
  const octalNumber = decimalToOctal(decimalNumber);

  // Return the converted octal number.
  return octalNumber;
}

// Convert a gray code number to excess-3.
function grayToExcess3(grayNumber) {
  // Check if the gray number is valid.
  if (!/^[01]+$/.test(grayNumber)) {
    throw new Error("Invalid gray number: " + grayNumber);
  }

  // Convert the gray number to decimal.
  const decimalNumber = grayToDecimal(grayNumber);

  // Convert the decimal number to excess-3.
  const excess3Number = decimalToExcess3(decimalNumber);

  // Return the converted excess-3 number.
  return excess3Number;
}

// Convert an excess-3 number to binary.
function excess3ToBinary(excess3Number) {
  // Check if the excess-3 number is valid.
  if (!/^[0-7]+$/.test(excess3Number)) {
    throw new Error("Invalid excess-3 number: " + excess3Number);
  }

  // Convert the excess-3 number to decimal.
  const decimalNumber = excess3Number - 3;

  // Convert the decimal number to binary.
  const binaryNumber = decimalToBinary(decimalNumber);

  // Return the converted binary number.
  return binaryNumber;
}

// Convert an excess-3 number to octal.
function excess3ToOctal(excess3Number) {
  // Check if the excess-3 number is valid.
  if (!/^[0-7]+$/.test(excess3Number)) {
    throw new Error("Invalid excess-3 number: " + excess3Number);
  }

  // Convert the excess-3 number to decimal.
  const decimalNumber = excess3Number - 3;

  // Convert the decimal number to octal.
  const octalNumber = decimalToOctal(decimalNumber);

  // Return the converted octal number.
  return octalNumber;
}

// Convert an excess-3 number to gray code.
function excess3ToGray(excess3Number) {
  // Check if the excess-3 number is valid.
  if (!/^[0-7]+$/.test(excess3Number)) {
    throw new Error("Invalid excess-3 number: " + excess3Number);
  }

  // Convert the excess-3 number to decimal.
  const decimalNumber = excess3Number - 3;

  // Convert the decimal number to gray code.
  const grayCode = decimalToGray(decimalNumber);

  // Return the converted gray code.
  return grayCode;
}

function binaryToDecimal(inputNumber){
  return parseInt(inputNumber, 2).toString(10);
}

// Convert an excess-3 number to decimal.
function excess3ToDecimal(excess3Number) {
  // Check if the excess-3 number is valid.
  if (!/^[0-7]+$/.test(excess3Number)) {
    throw new Error("Invalid excess-3 number: " + excess3Number);
  }

  // Convert the excess-3 number to decimal.
  const decimalNumber = excess3Number - 3;

  // Return the converted decimal number.
  return decimalNumber;
}

//------------------------------------------------------------------------------------------

  // Set a default value for the result variable.
  let result = undefined;

  // Convert the number.
  switch (conversionTypeFrom) {
    case "decimal":
      switch (conversionTypeTo) {
        case "binary":
          result = parseInt(inputNumber, 10).toString(2);
          break;
        case "octal":
          result = parseInt(inputNumber, 10).toString(8);
          break;
        case "gray":
          result = decimalToGray(inputNumber);
          break;
        case "excess-3":
          result = decimalToExcess3(inputNumber);
          break;
      }
      break;
    case "binary":
      switch (conversionTypeTo) {
        case "decimal":
          result = parseInt(inputNumber, 2).toString(10);
          break;
        case "octal":
          result = parseInt(inputNumber, 2).toString(8);
          break;
        case "gray":
          result = binaryToGray(inputNumber);
          break;
        case "excess-3":
          result = binaryToExcess3(inputNumber);
          break;
      }
      break;
    case "octal":
      switch (conversionTypeTo) {
        case "decimal":
          result = parseInt(inputNumber, 8).toString(10);
          break;
        case "binary":
          result = parseInt(inputNumber, 8).toString(2);
          break;
        case "gray":
          result = octalToGray(inputNumber);
          break;
        case "excess-3":
          result = octalToExcess3(inputNumber);
          break;
      }
      break;
    case "gray":
      switch (conversionTypeTo) {
        case "decimal":
          result = grayToDecimal(inputNumber);
          break;
        case "binary":
          result = grayToBinary(inputNumber);
          break;
        case "octal":
          result = grayToOctal(inputNumber);
          break;
        case "excess-3":
          result = grayToExcess3(inputNumber);
          break;
      }
      break;
    case "excess-3":
      switch (conversionTypeTo) {
        case "decimal":
          result = excess3ToDecimal(inputNumber);
          break;
        case "binary":
          result = excess3ToBinary(inputNumber);
          break;
        case "octal":
          result = excess3ToOctal(inputNumber);
          break;
        case "gray":
          result = excess3ToGray(inputNumber);
          break;
      }
      break;
  }
  if (result === undefined) {
    throw new Error("Failed to convert number.");
  }
  console.log("Result:", result);
  // Return the converted number.
  document.getElementById("resultBox").value = result;
  // return result;
}
