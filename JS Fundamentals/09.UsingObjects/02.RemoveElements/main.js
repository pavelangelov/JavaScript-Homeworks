function solve(args) {
    Array.prototype.remove = function (element) {
        var i,
            result = [];

        for (i = 0; i < this.length; i += 1){
            if (this[i] == element) {
                continue;
            }
            result.push(this[i]);
        }

        return result;
      };

      var arr = args.remove(args[0]);
      for (i = 0; i < arr.length; i += 1){
          console.log(arr[i]);
      }
}

solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);
solve([
  '_h/_',
  '^54F#',
  'V',
  '^54F#',
  'Z285',
  'kv?tc`',
  '^54F#',
  '_h/_',
  'Z285',
  '_h/_',
  'kv?tc`',
  'Z285',
  '^54F#',
  'Z285',
  'Z285',
  '_h/_',
  '^54F#',
  'kv?tc`',
  'kv?tc`',
  'Z285'
]);