// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "Amulya", email: "amulya@gmail.com" },
                        { id: 2, name: "Radha", email: "radha@gmail.com" },
                        { id: 3, name: "Sita", email: "sita@gmail.com" },
                        { id: 1, name: "Rama", email: "rama@gmail.com" },
                        { id: 1, name: "Madhu", email: "madhu@gmail.com" },
                        { id: 1, name: "Gita", email: "gita@gmail.com" },
                        { id: 1, name: "Yamini", email: "yamini@gmail.com" },
                        { id: 1, name: "Vasudha", email: "vasu@gmail.com" },
                        { id: 1, name: "Raghav", email: "raghav@gmail.com" },
                        { id: 1, name: "Anand", email: "anand@gmail.com" }
                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
