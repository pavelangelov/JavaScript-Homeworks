function solve(args) {
    var singles,
        tenths,
        hundreths,
        numberStr = args[0] + '',
        number = +args[0];
    
    if (number < 20) {
        console.log(ReturnNumberToString(number));
    } else if (number < 100) {
        tenths = ReturnTenthToString(numberStr[0]);
        singles = ReturnSinglesToString(numberStr[1]);

        console.log(tenths + ' ' + singles);
    } else {
        hundreths = ReturnNumberToString(numberStr[0]) + ' hundred ';
        tenths = numberStr[1];
        singles = numberStr[2];

        if (+tenths === 1) {
            tenths = ReturnNumberToString(tenths + singles);
            console.log(hundreths + 'and ' + tenths.toLowerCase());
        } else if (+tenths === 0 &&  +singles > 0) {
            singles = ReturnSinglesToString(singles);

            console.log(hundreths + 'and ' + singles);
        } else if (+tenths === 0 &&  +singles === 0) {
            console.log(hundreths);
        } else {
            tenths = ReturnTenthToString(tenths);
            singles = ReturnSinglesToString(singles);

            console.log(hundreths + 'and ' + tenths.toLowerCase() + ' ' + singles.toLowerCase());
        }
        
    }
    
    function ReturnSinglesToString(single) {
        switch (+single) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
        
            default:
                break;
        }
    }

    function ReturnTenthToString(tenth) {
        switch (+tenth) {
            case 2:
                return "Twenty";
            case 3:
                return "Thirty";
            case 4:
                return "Fourty";
            case 5:
                return "Fifty";
            case 6:
                return "Sixty";
            case 7:
                return "Seventy";
            case 8:
                return "Eighty";
            case 9:
                return "Ninety";
            default:
                break;
        }
    }

    function ReturnNumberToString(num) {
        switch (+num) {
            case 0:
                return('Zero'); 
            case 1:
                return('One'); 
            case 2:
                return('Two'); 
            case 3:
                return('Three'); 
            case 4:
                return('Four'); 
            case 5:
                return('Five'); 
            case 6:
                return('Six'); 
            case 7:
                return('Seven'); 
            case 8:
                return('Eight'); 
            case 9:
                return('Nine'); 
            case 10:
                return('Ten'); 
            case 11:
                return('Eleven'); 
            case 12:
                return('Twelve'); 
            case 13:
                return('Thirteen'); 
            case 14:
                return('Fourteen'); 
            case 15:
                return('Fifteen'); 
            case 16:
                return('Sixteen'); 
            case 17:
                return('Seventeen'); 
            case 18:
                return('Eighteen'); 
            case 19:
                return('Nineteen'); 
            default:
                break;
        }
    
    }
}

solve([0]);
solve([9]);
solve([10]);
solve([12]);
solve([19]);
solve([25]);
solve([98]);
solve([273]);
solve([400]);
solve([501]);
solve([617]);
solve([711]);
solve([999]);