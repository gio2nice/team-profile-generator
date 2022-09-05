const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Gio', 24, 'gio24@yahoo.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Gio', 24, 'gio24@yahoo.com');

    expect(manager.getRole()).toEqual("Manager");
}); 