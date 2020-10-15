# calculator
 
# Payvision calculator

In this exercise you are given the legacy code of Payvision Calculator web app. Maintainance and new features development is your responsability.

You are allowed to change as much code as you consider.

**Bonus:**

1. Configure the application to allow use of keyboard numpad.

### 1. Code review
BAD PRACTICES
1. I would create the index.js file
2. Include doctype and html structure
3. Include meta tags to improve SEO
4. Include css file
5. Add Document title
6. ES6 sintaxis{
    let instead of var
    use const
    arrow function
}
7. A function should only have one return

GOOD PRACTICES
1. Code was well commented

### 2. Testing and bug fixing
1. data-num="3" and data-num= "0" in the html are switched
2. the sum and minus are also switched
3. Refactoring


### 3. New features implementation

Our product owner required us new features for this application. We would like the application new version to support multiplications and divisions.

- Could you implement these new features?
- Bear in mind usage of git-flow to track your changes.
- Current version is 1.2.2 (see package.json version). Should we increase the version? How? Why?

### 4. Test automation

We would like to automate testing of this application.

- What kind of tests would you implement? Why?

**Bonus**: Implement the tests.

### 5. UI/UX design

1. Add favicon
2. Add main section

## How to run the application using local server

To run the project, open a terminal and execute the following command from project root path:

- Install depencencies:

> yarn

- Run the application

> yarn serve

This command will run a local web server in port 8082:
[http://localhost:8082/src/index.html](http://localhost:8082/src/index.html)

