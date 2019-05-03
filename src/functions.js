
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                mined: false,
                nearMines: 0,
                flagged: false,
                exploded: false
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    
    const rows = board.length
    const columns = board[0].length
    let plantedMines = 0

    while(plantedMines <= minesAmount){
        const sortedRow = Math.floor(Math.random() * rows)
        const sortedColumn = Math.floor(Math.random() * columns) 

        if(!board[sortedRow][sortedColumn].mined){
            board[sortedRow][sortedColumn].mined = true
            plantedMines++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

const getNeighbors = (board, row, column) => {
    const neighbors = []
    const neighborRows = [row - 1 , row, row + 1]
    const neighborColumns = [column - 1, column, column + 1]


    neighborRows.forEach(r => {
        neighborColumns.forEach(c => {
            const different = c !== column || r !== row
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            
            if(different && validRow && validColumn) neighbors.push(board[r][c])
        })
    })

    return neighbors
}

const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true) 
}

const openField = (board, row, column) => {
    const field = board[row][column]
    
    if(!field.opened){
        field.opened = true
        if(field.mined) field.exploded = true
        else if(safeNeighborhood(board, row, column)){
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        }
        else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

const flagField = (board, row, column) => {
    const field = board[row][column]    
    field.flagged = !field.flagged
}

const fields = board => [].concat(...board)
const hadExplosion = board => fields(board)
    .filter(field => field.exploded).length > 0
const pendding = field => (field.mined && !field.flagged) || (!field.opened && !field.mined)
const wonGame = board => fields(board).filter(pendding).length === 0
const showMines = board => fields(board).filter(f => f.mined)
    .forEach(field => field.opened = true)

const flagsUsed = board => fields(board).filter(field => field.flagged).length 

export {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    flagField,
    flagsUsed
}