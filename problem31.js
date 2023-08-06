var currentUsers = ['Ahmed', 'Ali', 'Hassan', 'Nazim', 'Wasif'];
var newUsers = ['Farooq', 'Hammad', 'Faisal', 'Ihsan', 'Noman'];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (currentUsers.map(function (user) { return user.toLowerCase(); }).includes(newUser.toLowerCase())) {
        console.log("The username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
