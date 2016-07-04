function solve(args) {
    let url = args[0];
    let protocol,
        server,
        resource,
        index;

    index = url.indexOf(':');
    protocol = url.substring(0, index);
    index = url.indexOf('/', index + 3);
    server = url.substring(protocol.length + 3, index);
    resource = url.substring(index);

    console.log(`protocol: ${protocol}\nserver: ${server}\nresource: ${resource}`);
}

solve(
    [ 'http://telerikacademy.com/Courses/Courses/Details/239' ]
);