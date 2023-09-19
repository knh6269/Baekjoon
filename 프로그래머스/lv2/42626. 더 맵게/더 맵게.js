class MinHeap { 
    // 힙 생성
    constructor() {
        this.heap = [];
    } 

    // 부모 인덱스 얻기
    getParentIdx(childIdx){
        return Math.floor((childIdx-1) / 2);
    }

    // 자식의 왼쪽 인덱스 얻기
    getLeftChildIdx(parentIdx){
        return parentIdx*2 + 1;
    }
    
    // 자식의 오른쪽 인덱스 얻기
    getRightChildIdx(parentIdx){
        return parentIdx*2 + 2;
    }
size(){
        return this.heap.length;
    }

    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
        return this.heap;
    }

    push(newNode){
        this.heap.push(newNode);
        this.bubbleUP();

        return this.heap;
    }

    pop(){
        const heapSize = this.size();
        if (!heapSize) return null;
        if (heapSize === 1) return this.heap.pop();
          
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return value;
    }

    bubbleUP(){
        let childs = this.size()-1;
        let parent = this.getParentIdx(childs);

        while (this.heap[childs] < this.heap[parent]) {
            this.swap(childs, parent);
            childs = parent;
            parent = this.getParentIdx(childs);
        }
    }
     
    bubbleDown() {
        let parent = 0;
        let leftChild = this.getLeftChildIdx(parent);
        let rightChild = this.getRightChildIdx(parent);

        while((leftChild <= this.size()-1 && this.heap[leftChild] < this.heap[parent]) || (rightChild <= this.size()-1 && this.heap[rightChild] < this.heap[parent])){

            // 오른쪽 자식이 존재하고, 오른쪽 자식이 왼쪽 자식보다 작다면
            if (this.heap[leftChild] > this.heap[rightChild]){
                this.swap(parent, rightChild); //부모와 오른쪽 자식을 스왑
                parent = rightChild; //부모의 인덱스 = 오른쪽 자식의 인덱스
            }
            
            // 위 조건중 하나라도 해당되지 않는다면 왼쪽과 스왑
            else {
                this.swap(parent, leftChild); //부모와 왼쪽 자식을 스왑
                parent = leftChild; //부모의 인덱스 = 왼쪽 자식의 인덱스
            }
            
            //부모의 인덱스를 활용해 왼쪽 자식 인덱스 구하기
            leftChild = this.getLeftChildIdx(parent);
            //부모의 인덱스를 활용해 오른쪽 자식 인덱스 구하기 
            rightChild = this.getRightChildIdx(parent);
        }     
    }
}

function solution(scoville, K) {
    let count = 0;
    const heap = new MinHeap();
    scoville.forEach(el => heap.push(el));

    while(heap.heap[0] < K && heap.size() > 1){
        count++;
        heap.push(heap.pop() + heap.pop()*2);
    }
    return heap.heap[0] >= K ? count : -1;
} 