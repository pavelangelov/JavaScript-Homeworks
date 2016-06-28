function solve(args) {
    var i,
        len = args.length,
        people = [],
        person,
        youngestAge = Number.MAX_VALUE;
    
    for (i = 0; i < len; i += 3){
        person = {};
        person.firstName = args[i];
        person.lastName = args[i + 1];
        person.Age = args[i + 2];
        people.push(person);
        if (args[i + 2] < youngestAge) {
            youngestAge = +args[i + 2];
        }
    }

    var youngest = people.filter(function (element) { 
         return Number(element.Age) === youngestAge;
        } );

    console.log(youngest[0].firstName + ' ' + youngest[0].lastName);
}

solve([
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42'
]);
solve([
  'Penka', 'Hristova', '61',
  'System', 'Failiure', '88',
  'Bat', 'Man', '16',
  'Malko', 'Kote', '72'
]);