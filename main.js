var clients = [{
    id: 1,
    name: "Ruti",
    phone: "0504599660",
    email: "Ruti@gmail.com",
    balance: 2000
},
{
    id: 2,
    name: "Shahar",
    phone: "0504599660",
    email: "Shahar@gmail.com",
    balance: 100
},
{
    id: 3,
    name: "Noam",
    phone: "0504599660",
    email: "Noam@gmail.com",
    balance: 12000000
},
{
    id: 4,
    name: "Yael",
    phone: "0504599660",
    email: "Yael@gmail.com",
    balance: 231114000
},
{
    id: 5,
    name: "Ariel",
    phone: "0504599660",
    email: "Ariel@gmail.com",
    balance: 1000
},
{
    id: 6,
    name: "Osher",
    phone: "0504599660",
    email: "Osher@gmail.com",
    balance: 1232
}];

var blocked = [1, 8, 90, 43, 2, 63];

//! ----------------------------------------------------------------------------------------------------------------

function isExisting(newClientId) {
    for (var i = 0; i < clients.length; i++) {
        if (clients[i].id == newClientId) {
            return true;
        }
    }
    return false;
}

function isBlocked(clientId) {
    for (var i = 0; i < blocked.length; i++) {
        if (clientId == blocked[i]) {
            return true;
        }
    }
    return false;
};

function addClient(newClient) {
    if (isBlocked(newClient.id)) {
        alert("Blocked Client");
        return false;
    }
    else if (isExisting(newClient.id)) {
        alert("The client is already in the system");
        return false;
    }
    else {
        clients.push(newClient);
        return true;
    }
};

function searchById(clientId) {
    if (isBlocked(clientId)) {
        alert("Blocked Client");
        return;
    }
    for (var i = 0; i < clients.length; i++) {
        if (clientId == clients[i].id) {
            return clients[i];
        }
    }
};

function deleteClient(clientId) {
    if (isBlocked(clientId)) {
        alert("Blocked Client");
        return;
    }
    for (var i = 0; i < clients.length; i++) {
        if (clientId == clients[i].id) {
            clients.splice(i, 1);
            return;
        }
    }
};

function withdrow(clientId, amount) {
    if (isBlocked(clientId)) {
        alert("Blocked Client");
        return;
    }
    for (var i = 0; i < clients.length; i++) {
        if (clientId == clients[i].id) {
            clients[i].balance -= amount;
            return;
        }
    }
};

function deposit(clientId, amount) {
    if (isBlocked(clientId)) {
        alert("Blocked Client");
        return;
    }
    for (var i = 0; i < clients.length; i++) {
        if (clientId == clients[i].id) {
            clients[i].balance += amount;
            return;
        }
    }
};

function moreThan400() {
    var clientsMoreThan400Array = [];
    for (var i = 0; i < clients.length; i++) {
        if (clients[i].balance > 400) {
            clientsMoreThan400Array.push(clients[i]);
        }
    }
    return clientsMoreThan400Array;
};

function lessThan200() {
    var clientslessThan200Array = [];
    for (var i = 0; i < clients.length; i++) {
        if (clients[i].balance < 200) {
            clientslessThan200Array.push(clients[i]);
        }
    }
    return clientslessThan200Array;
};

function firstToMillion() {
    for (var i = 0; i < clients[i].length; i++) {
        if (clients[i].balance >= 1000000) {
            return clients[i];
        }
    }
};

function isEmailExist(userEmail) {
    for (var i = 0; i < clients.length; i++) {
        if (userEmail == clients[i].email) {
            return true;
        }
    }
    return false;
};

function createNewClient() {
    var clientObject = {};
    clientObject.id = Number(userId.value);
    clientObject.name = userName.value;
    clientObject.phone = userPhone.value;
    clientObject.email = userEmail.value;
    clientObject.balance = userMoney.value;
    return clientObject;
};

function addToTable(newClient) {
    customers.innerHTML += `<tr><td>${newClient.id}</td><td>${newClient.name}</td>
    <td>${newClient.phone}</td><td>${newClient.email}</td><td>${newClient.balance}</td></tr>`;
    if (newClient.balance > 400) {
        rich.innerHTML += `<tr><td>${newClient.id}</td><td>${newClient.name}</td>
        <td>${newClient.phone}</td><td>${newClient.email}</td><td>${newClient.balance}</td></tr>`;
    }
    else {
        if (newClient.balance < 200) {
            poor.innerHTML += `<tr><td>${newClient.id}</td><td>${newClient.name}</td>
            <td>${newClient.phone}</td><td>${newClient.email}</td><td>${newClient.balance}</td></tr>`;
        }
    }
};

function printWelcomeMessage() {
    window.setTimeout(() => {
        alert("WELCOME!");
    }, 1000);
};

function loanMessage() {
    window.setInterval(() => {
        alert("Need a loan? Special offers for limited time!");
    }, 3000);
};

//! ---------------------------------------------------------------------------------------------------------

printWelcomeMessage();
// loanMessage();

userEmail.onchange = () => {
    var newEmail = isEmailExist(userEmail.value);
    if (newEmail) {
        alert("This Email Address Already In Use");
        return;
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (addClient(createNewClient())) {
        addToTable(clients[clients.length - 1]);
    }

});

for (var i = 0; i < clients.length; i++) {
    customers.innerHTML += `<tr><td>${clients[i].id}</td><td>${clients[i].name}</td>
    <td>${clients[i].phone}</td><td>${clients[i].email}</td><td>${clients[i].balance}</td></tr>`
};
var richArray = moreThan400();
for (var i = 0; i < richArray.length; i++) {
    rich.innerHTML += `<tr><td>${richArray[i].id}</td><td>${richArray[i].name}</td>
    <td>${richArray[i].phone}</td><td>${richArray[i].email}</td><td>${richArray[i].balance}</td></tr>`
};
var poorArray = lessThan200();
for (var i = 0; i < poorArray.length; i++) {
    poor.innerHTML += `<tr><td>${poorArray[i].id}</td><td>${poorArray[i].name}</td>
    <td>${poorArray[i].phone}</td><td>${poorArray[i].email}</td><td>${poorArray[i].balance}</td></tr>`
};

