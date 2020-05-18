const Manager = require ('../lib/Manager.js'); 

/*
 * Test: constructor(name, id, email, officenumber)
 */
test('Create Manager object', () => {
    const manager = new Manager('Daniel', 40, 'daniel@gmail.com', 100);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

/*
 * Test: getRole()
 */ 
test('Gets role using the getRole method',() => {
    const manager = new Manager('Daniel', 40, 'daniel@gmail.com', 100);
    expect(manager.getRole()).toEqual("Manager");
});