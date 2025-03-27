import { dayOfTheYear } from './dayOfYear.js';
// Each row has test arguments (Month, day), followed by expected value

let testData = [["January", 1, 1],
                ["February", 1, 32],
                ["March", 25, 84],
                ["December", 31, 365],
                ["July", 1, 182]
                ]

for ( let i = 0; i < testData.length; i++) {
    let val = dayOfTheYear (testData[i][0], testData[i][1])
    if (val == testData[i][2]){
        console.log ("\x1b[32m%s\x1b[0m", `${i}: Passed`)
    }
    else {
        console.log ("\x1b[31m%s\x1b[0m", `${i}: Failed`)
    }
}