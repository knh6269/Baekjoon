function solution(n) {
    let answer=0;
    function dfs(board,row){
        if(row==n)answer++;
        else{
            for(let i=1; i<=n; i++){
                board[row+1]=i;
                if(isOkay(board,row+1))dfs(board,row+1);
            }
        }
    }
    function isOkay(board,row){
        for(let i=1; i<row; i++){
            if(board[i]==board[row])
                return false;
            if(Math.abs(row-i)==Math.abs(board[row]-board[i]))
                return false;
        }
            return true;
    }
    
    for(let i=1; i<=n; i++){
        let board = new Array(n+1).fill(0);
        board[1]=i;
        dfs(board,1);
    }
    return answer;
}