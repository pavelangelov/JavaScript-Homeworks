function solve(args) {
    let result = '',
        tags = /<.*?>/ig,
        line;

    for (let i = 0; i < args.length; i += 1){
        line = args[i];
        result += line.replace(tags, '').trim();
    }

    console.log(result);
}

solve([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);