const record = [
        {year: "2018", result: "L"},
        {year: "2016", result: "N/A"}
        //...
      ]
    
    function superbowlWin(arr) {
        const response = arr.find(element => element.result === "W");
        if (response === undefined) {
            return response
        } else {
            return response.year
        }
    }
    
    
    
    
