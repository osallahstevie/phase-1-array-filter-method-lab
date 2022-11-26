// Code your solution here
function findMatching(array, name){
    return array.filter (
        function (key){
            if (key.toUpperCase()===name.toUpperCase()){
            return true;
            }
        }
    )
}

function fuzzyMatch(array, name){
    return array.filter(
        function (key){
            if (key.slice(0, name.length)===name){
            return true;
            }
        }
    )
}

function matchName (array, name){
    return array.filter (
        function (key){
            if (key.name===name){
                return true;
            }
        }  
    )
}

