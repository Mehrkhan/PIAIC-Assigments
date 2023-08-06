
let currentUsers: string[] = ['Ahmed', 'Ali', 'Hassan', 'Nazim', 'Wasif'];
let newUsers: string[] = ['Farooq', 'Hammad', 'Faisal', 'Ihsan', 'Noman'];

for (let newUser of newUsers) {
    if (currentUsers.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}

