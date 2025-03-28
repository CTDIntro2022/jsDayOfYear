import { dayOfTheYear } from './dayOfYear.js';
// Each row has test arguments (Month, day), followed by expected value

let testData = [["January", 1, 2025, 1],
                ["February", 1, 2025, 32],
                ["March", 25, 2025, 84],
                ["December", 31, 2025, 365],
                ["July", 1, 2025, 182],
                ["January", 31, 2025, 31],
                ["February", 28, 2025, 59],
                ["February", 29, 2028, 60],
                [99, 28, 2028, -1],
                ["January", "foo", 2028, -1],
                ["January", 1, "foo", -1],
                ["January", 32, 2025, -1],
                ["March", 0, 2025, -1],
                ["March", 24, 0, -1]
                ]

for ( let i = 0; i < testData.length; i++) {
    let val = dayOfTheYear (testData[i][0], testData[i][1], testData[i][2])
    if (val == testData[i][3]){
        console.log ("\x1b[32m%s\x1b[0m", `${i}: Passed`)
    }
    else {
        console.log ("\x1b[31m%s\x1b[0m", `${i}: Failed`)
    }
}