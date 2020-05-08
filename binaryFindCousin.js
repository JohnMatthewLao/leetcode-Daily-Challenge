var isCousins = function(root, x, y) {
    var parentX;
    var parentY;
    var depthX;
    var depthY;
      var recursion = (node,depth,parent) => {
         if(parentX !== undefined && parentY !== undefined) {
             return;
         }else{
            for(var key in node) {
              if(key === 'val' && node[key] === x) {
                  depthX = depth;
                  parentX = parent
              } else if(key === 'val' && node[key] === y){
                  depthY = depth;
                  parentY = parent
              }
              if(node[key] !== null && (key ==='left' || key ==='right')) {
                  recursion(node[key], depth+1, node['val'])
              }
            }
         }
      }
      recursion(root,0,root['val'])
      
      if(parentX !== parentY && depthX ===depthY) {
          return true
      }
      return false;
  };