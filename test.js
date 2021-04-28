var queens = function () {
    var column = [];
    var slash = [];
    var backSlash = [];
    var queens = [];

    function backTrack(n, i, take) {
        if (i >= n) {
            take(n, queens);
        }
        else {
            for (var j = 0; j < n; j++) if (isVisitable(i, j, n)) {
                queens[i] = j;
                column[j] = slash[i + j] = backSlash[i - j + n] = 1;
                backTrack(n, i + 1, take);
                column[j] = slash[i + j] = backSlash[i - j + n] = 0;
            }
        }
    }

    function isVisitable(i, j, n) {
        return !(column[j] || slash[i + j] || backSlash[i - j + n]);
    }

    return function (n, take) {
        backTrack(n, 0, take);
    };
}();

queens(8, function (n, qs) {
    var layout = '';
    for (var y = 0; y < n; y++) {
        for (var x = 0; x < n; x++) {
            layout += (qs[y] === x) ? ' Q' : ' .';
        }
        layout += '\n';
    }
    console.log(layout);
});