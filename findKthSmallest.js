var kthSmallest = function(root, k) {
    // left is always smaller than the parent node and right is always bigger than parent node
    let array = []
    
    function dfs(root){
        if(root === null){
            return
        }
    // start with deepest layer leftmost and move up
        dfs(root.left)
        array.push(root.val)
    // then move down a layer to the right of leftmost
        dfs(root.right)
    }
    dfs(root)
    return array[k-1]
};

