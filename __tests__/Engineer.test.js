const Engineer = require ('../lib/Engineer.js'); 

/*
 * Test: constructor(name, id, email, github)
 */
test('Create Engineer object', () => {
    const engineer = new Engineer('Ben', 20, 'ben@gmail.com', 'bencode');
    expect(engineer.github).toEqual(expect.any(String));
});

/*
 * Test: getRole()
 */
test('Gets role using getRole method',() => {
    const engineer = new Engineer('Ben', 20, 'ben@gmail.com', 'bencode');
    expect(engineer.getRole()).toEqual("Engineer");
});

/*
 * Test: getGithub()
 */
test('Gets Github username using getGithub method',() => {
    const engineer = new Engineer('Ben', 20, 'ben@gmail.com', 'bencode');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));   
});
