function findMatrix(nums: number[]): number[][] {
    let [i, j, k] = [0, 0, 0]
    let o: number[][] = [[nums[i]]];
    i++;
    while (i < nums.length) {
        if(o[k][j] == nums[i]){
            k++; 
            j = 0;
            if(o.length <= k) 
                o.push([]); 
        }
        else if (o[k].length >= j)          
            j++; 
        else{
            o[k].push(nums[i]); 
            i++;
            j = 0
            k = 0
        }
    }
    return o;
};
