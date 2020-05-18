const Employee = require ('../lib/Employee.js'); 

/*
 * Test: constructor(name, id, email)
 */
test('Create Employee object', () => {
    const employee = new Employee('Adam', 10, 'adam@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("@"));

});

/*
 * Test: getName()
 */
test('Gets employee name using the getName method', ()=>{
    const employee = new Employee('Adam', 10, 'adam@gmail.com');
    
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

/*
 * Test: getId()
 */
test('Gets ID using the getId method', ()=>{
    const employee = new Employee('Adam', 10, 'adam@gmail.com');
    
    expect(employee.getId()).toEqual(expect.any(Number));
});

/*
 * Test: getEmail()
 */
test('Gets email using the getEmail method', ()=>{
    const employee = new Employee('Adam', 10, 'adam@gmail.com');
    
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

/*
 * Test: getRole()
 */
test('Gets rolename using the getRole method', ()=>{
    const employee = new Employee('Adam', 10, 'adam@gmail.com');
    
    expect(employee.getRole()).toEqual("Employee");
});