//寫一格 函數 返回 8個皇后 的所有不同的答案

//寫一個 函數 返回 4個皇后的 所有不同答案

// 條件一 每行都要有值Q
// 條件二 每個 Q 都不能 同行
// 條件三 每個 Q 都不能 同列
// 條件四 每個 Q 都不能 在對角線上


//做法2 全部填出來再刪 <先不要
//做法1 邊填邊限制


// 如果 沒有 就不遞迴
function queens(number) {
    let isValidCache = isValid()
    let total = []
    let totalCount = number
    while (totalCount > 0) {
        let answer = []
        for (let column = 0; column < number; column++) {
            let columnArr = []
            answer.push(columnArr)
            for (let row = 0; row < number; row++) {
                if (isValidCache(column, row, number)) {
                    columnArr.push(1)
                } else {
                    columnArr.push(0)
                }
            }
        }
        totalCount--
        total.push(answer)
    }
    return total
}

function isValid() {
    let cacheColumn = {}
    let cacheRow = {}
    let count = 0
    function cache(column, row, number) {
        if (count === number * number) {
            count = 0
            cacheColumn = {}
            cacheRow = {}
        }
        count++
        if (cacheColumn[column] === undefined && cacheRow[row] === undefined) {
            cacheColumn[column] = 1
            cacheRow[row] = 1
            return true
        }
        return false
    }
    return cache
}



console.log(queens(4))