const Intern = require('../lib/Intern.js');

/*
 * Test: constructor(name, id, email, school)
 */
test('Create Intern object', ()=>{
    const intern = new Intern('Cameron', 30, 'cameron@gmail.com', 'Stanford');
    expect(intern.school).toEqual(expect.any(String));
});

/*
 * Test: getRole()
 */
test('Gets role using the getRole method',() => {
    const intern = new Intern('Cameron', 30, 'cameron@gmail.com', 'Stanford');
    expect(intern.getRole()).toEqual("Intern");
});

/*
 * Test: getSchool()
 */
test('Gets school name using getSchool method',() => {
    const intern = new Intern('Cameron', 30, 'cameron@gmail.com', 'Stanford');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));   
});