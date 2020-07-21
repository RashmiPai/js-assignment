/* Create a Class User with properties as name, age & email. He can login and logout.
Create another class Moderator which has all the features of User, plus additional functionality to Add coins and remove coins.
Create one more class Admin which has all the features of Moderator plus additional features like add a Course and delete a particular course for a user. */

// Creating the class 'User'
class User {
    constructor(name,age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.luCoins = 1;
        this.courses = [];
    }
    
    // login function
    login() {
        console.log(`${this.name} has logged in`);
        return this;
    }

    // logout function
    logout() {
        console.log(`${this.name} has logged out`);
        return this;
    }

    // to get user details
    getDetails() {
        console.log(`Name : ${this.name} \n Age : ${this.age} \n Email : ${this.email}`);
        return this;
    }
}

// Creating class 'Moderator'
class Moderator extends User {
    // function for adding coins
    addCoins(user) {
        user.lucoins++;
        console.log(`${user.name} has ${user.luCoins} LU coins.`);
    }

    // function for removing coins
    removeCoins(user) {
        user.luCoins--;
        console.log(`${user.name} has ${user.luCoins} LU coins.`);
    }
}

// Creating class 'Admin'
class Admin extends Moderator {
    // Admin class has all the priveleges as that of a moderator and user.
    // function to add course
    addCourse(user,c) {
        user.courses.push(c);
        console.log(user);
    }
    // function to remove course
    removeCourse(user,c) {
        user.courses.pop(c);
        console.log(user);
    }
}

// declaring users
let user1 = new User('Denver',25,'d@gmail.com');
let user2 = new User('Nairobi',24,'n@gmai.com');
let mod = new Moderator('Berlin',27,'b@gmail.com');
let admin = new Admin('Rio',23,'r@gmail.com');

// displaying
let users = [user1,user2,mod,admin];
users.forEach(ele => {
    console.log(ele);
});

// admin adding courses 
admin.addCourse(user1,'Javascript');
admin.addCourse(user2,'Python');
admin.addCourse(user1,'Blockchain');

// admin removing course
admin.removeCourse(user1);

// moderator adding and removing coins
mod.addCoins(user1);
mod.addCoins(user1);
mod.addCoins(user2);
mod.removeCoins(user1);
