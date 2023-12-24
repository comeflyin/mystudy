// 超时
var minStoneSum = function(piles, k) {
    const len = piles.length
    let right = len - 2
    let ans = 0
    piles.sort((a,b) => a - b)
    while(k){
        piles[len - 1] = piles[len - 1] - Math.floor(piles[len - 1]/2)
        while(piles[right] > piles[len - 1]){
            right --
        }
        if(right != len - 2){
            const temp = piles.pop()
            piles.splice(right + 1,0,temp)
        }
        right = len - 2
        k--
    }
    for(let i = 0;i < len;i ++){
        ans += piles[i]
    }
    return ans
};

// 优先队列
var minStoneSum = function(piles, k) {
    const pq = new MaxPriorityQueue();
    for (const pile of piles) {
        pq.enqueue(pile, pile);
    }
    for (let i = 0; i < k; i++) {
        let pile = pq.front().element;
        pq.dequeue();
        pile -= Math.floor(pile / 2);
        pq.enqueue(pile, pile);
    }
    let sum = 0;
    while (!pq.isEmpty()) {
        sum += pq.front().element;
        pq.dequeue();
    }
    return sum;
};

piles =
[4122,9928,3477,9942]

console.log(minStoneSum(piles,6));