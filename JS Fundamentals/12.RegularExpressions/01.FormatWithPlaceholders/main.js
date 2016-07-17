function solve(args) {
    const options = JSON.parse(args[0]);
    let reg = new RegExp(/#{.*?}/, 'g');
    let result = args[1];
    for (var key in options) {
        let reg = new RegExp('#\{' + key + '}', 'g');
        result = result.replace(reg, options[key]);
    }
    console.log(result);
}

solve([
'{ "name": "John" }',
"Hello, there! Are you #{name}?"
]);

solve([
    '{ "name": "John", "age": 13 }',
    'My name is #{name} and I am #{age}-years-old'
]
);