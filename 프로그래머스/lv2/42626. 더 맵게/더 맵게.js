class MinHeap {
    //생성자 함수
    constructor() {
        this.heap = [];
    }

    //index를 가져오는 함수
    getParentIdx(childIdx) {
        return Math.floor((childIdx - 1) / 2);
    }
    getLeftChildIdx(parentIdx) {
        return (parentIdx *  2) + 1;
    }
    getRightChildIdx(parentIdx) {
        return (parentIdx * 2) + 2;
    }
    
    //heap tree의 노드개수를 세어주는 함수
    size() {
        return this.heap.length;
    }

    //두 값을 swap해준다.
    swap(Idx_1, Idx_2) {
        [this.heap[Idx_1], this.heap[Idx_2]] = [this.heap[Idx_2], this.heap[Idx_1]];

        return this.heap;
    }

    //새로운 노드를 heap tree의 마지막 노드에 push해주는 함수
    push(value) {
        this.heap.push(value); // 마지막 노드에 push 해주고
        this.bubbleUp(); // 삽입 과정 시작

        return this.heap;
    }   
    
    //최상단 head node를 pop해주는 함수
    pop() {
        if(this.size() == 1) { // 사이즈가 1이라면
            return this.heap.pop(); // 그대로 반환하고 종료
        }
        if(this.size() == 0) { //사이즈가 0이라면
            return null; // 빈값 반환하고 종료
        }
        const value = this.heap[0]; // 루트 노드를 저장
        this.heap[0] = this.heap.pop(); // pop을 하면서 루트 노드에 마지막 값 넣기 
        this.bubbleDown(); // 삭제 과정 진행
        return value;
    }

    //맨 마지막 노드에서 출발해서 최상단 노드까지 올라가면서 bubble up 한다.
    bubbleUp() {
        let child_Idx = this.size() - 1; //자식 노드 인덱스: 마지막 노드
        let parent_Idx = this.getParentIdx(child_Idx); //부모 노드 인덱스: 자식 노드를 활용해서 구하기

        while (this.heap[child_Idx] < this.heap[parent_Idx]) { //자식 노드가 부모노드보다 작은 경우 계속 진행
            this.swap(child_Idx, parent_Idx); //두 노드를 바꿔주기
            child_Idx = parent_Idx;//자식의 인덱스에 부모의 인덱스 저장
            parent_Idx = this.getParentIdx(child_Idx); //부모의 인덱스: 자식 노드를 활용해서 구하기
        }
    }

    //최상단 노드에서 마지막노드까지 내려가면서 bubble down 한다.
    bubbleDown() {
        let parent_Idx = 0;
        let left_Idx = this.getLeftChildIdx(parent_Idx);
        let right_Idx = this.getRightChildIdx(parent_Idx);

        while((left_Idx <= this.size() - 1 && this.heap[left_Idx] < this.heap[parent_Idx]) || (right_Idx <= this.size() - 1 && this.heap[right_Idx] < this.heap[parent_Idx])) {
            //오른쪽이 왼쪽보다 작고 오른쪽 노드가 존재한다면
            if(this.heap[right_Idx] < this.heap[left_Idx] && right_Idx <= this.size() - 1){
                //오른쪽과 부모노드를 swap 한다.
                this.swap(right_Idx, parent_Idx);
                parent_Idx = right_Idx;
                right_Idx = this.getRightChildIdx(parent_Idx);
                left_Idx = this.getLeftChildIdx(parent_Idx);
            } else {
                //왼쪽과 부모노드를 swap 한다.
                this.swap(left_Idx, parent_Idx);
                parent_Idx = left_Idx;
                right_Idx = this.getRightChildIdx(parent_Idx);
                left_Idx = this.getLeftChildIdx(parent_Idx);
            }
        }
    }
}

function solution(scoville, K) { 
    let count = 0;
    
    const heap = new MinHeap();
    
    scoville.forEach((value) => heap.push(value));
    
    while (heap.heap[0] < K && heap.size() > 1) {
        const firstPop = heap.pop();
        const secondPop = heap.pop();
        const newFood = firstPop + (secondPop * 2);
    
        heap.push(newFood);
        
        count++;
    }
    
    if (heap.heap[0] >= K) {
        return count;
    } 
    return -1;
    
}
//섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)