function generateRandomNumber(num) {
  // get a number from 0 => num - 1
  return Math.floor(Math.random() * num)
}

//make an array for messages that could be selected on each attempt 
const combinedMessages = {
  fortuneMessage: ['Do not hold onto things that require a tight grip.', 'Vulnerability sounds like faith and looks like courage.', 
                    'Every good and perfect gift is from above.', 'Do it scared.', 'Each time you break your own boundaries to ensure that someone else likes you, you like yourself a little less.'],
  adviceMessage: ['learn code at codecademy', 'not do drugs', 'play hard, but study harder', 'trust no one'],
  signMessage: ['leo', 'aries', 'capricorn', 'scorpio']
}

// Storing the messages in an array
let mixedMessages = []

// Iterate over the object
for(let choice in combinedMessages) {
  let message = generateRandomNumber(combinedMessages[choice].length)

  // use the object's properties to customize the message being added to mixedMessages 
  switch(choice) {
    case 'signMessage':
      mixedMessages.push(`Your star sign is ${combinedMessages[choice][message]}. ;-)`)
      break
    case 'fortuneMessage':
      mixedMessages.push(`${combinedMessages[choice][message]}`)
      break
    case 'adviceMessage':
      mixedMessages.push(`You should ${combinedMessages[choice][message]}.`)
      break
    default:
      mixedMessages.push('There is no message')
  }
}

//Creating a function to display the mixed messages
function displayMessage(array) {
  
  const print = mixedMessages.join(' ;-) \n')
  console.log(print)
}

  displayMessage(mixedMessages);