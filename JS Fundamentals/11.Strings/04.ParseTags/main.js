function solve(args) {
    const Cases = [
        ['<lowcase>', '</lowcase>'],
        ['<orgcase>', '</orgcase>'],
        ['<upcase>', '</upcase>']
    ];
    let text = args[0];
    for (let i = 0; i < Cases.length; i += 1){
        replaceCase(Cases[i]);
    }
    
    console.log(text);

    function replaceCase(caseArr) {
        const upcaseLen = caseArr[0].length + caseArr[1].length;
        let openTagIndex = text.indexOf(caseArr[0]);
        let closeTagIndex = text.indexOf(caseArr[1]);

        while (openTagIndex > -1) {
            let word = text.substring(openTagIndex + caseArr[0].length, closeTagIndex);
            let textToReplace = caseArr[0] + word + caseArr[1];
            if (caseArr[0] === '<upcase>') {
                word = word.toUpperCase();
            } else if (caseArr[0] === '<lowcase>') {
                word = word.toLowerCase();
            }
            text = text.replace(textToReplace, word);
            openTagIndex = text.indexOf(caseArr[0]);
            closeTagIndex = text.indexOf(caseArr[1]);
        }
    }
}

solve([ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' 
    ]);