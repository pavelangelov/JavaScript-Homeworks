function solve(args) {
    let text = args[0];
    let inTag = false,
        result = '',
        tag = '',
        symbol;
    
    let regEx = /<a href=".*?">.*?<\/a>/ig;
    let matches = regEx[Symbol.match](text);

    for (let i = 0; i < matches.length; i += 1){
        let match = matches[i];
        let replacedStr = replaceTag(match);
        text = text.replace(match, replacedStr);
    }

    function replaceTag(tagStr) {
        let splitTag = tagStr.split('"');
        let href = splitTag[1];
        let index = splitTag[2].indexOf('</');
        let text = splitTag[2].substring(1, index);

        return `[${text}](${href})`;
    }

    console.log(text);

    
    // for (let i = 0; i < text.length; i += 1) {
    //     symbol = text[i];
    //     if (symbol === '<') {
    //         if (text[i + 1] === 'a') {
    //             tag += symbol;
    //             inTag = true;
    //             continue;
    //         }
    //     } else if (symbol === '>' && inTag) {
    //         if (text[i - 2] === '/' && text[i - 1] === 'a') {
    //             inTag = false;
    //             tag += symbol;
    //             result += replaceTag(tag);
    //             tag = '';
    //             continue;
    //         }
    //     }

    //     if (inTag) {
    //         tag += symbol;
    //     } else {
    //         result += symbol;
    //     }
    // }

}

solve(
    ['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']
);