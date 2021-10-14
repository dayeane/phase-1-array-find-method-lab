
    
    function superbowlWin(arr) {
        const response = arr.find(element => element.result === "W");
        if (response === undefined) {
            return response
        } else {
            return response.year
        }
    }
    
    
    
    
