let getData=()=>{
    
    let myReq=new XMLHttpRequest()
    myReq.open('GET',"./cycles.json")
    myReq.onload=()=>{
        let cycleArr=JSON.parse(myReq.responseText)
        console.log(cycleArr);
        displayCard(cycleArr)
        
        

    }
    myReq.send()
    setTimeout(()=>{document.getElementById('middle').scrollIntoView();},100)
    
}


let displayCard=(arr)=>{
    arr.map(cycle=>{
        document.getElementById('middle').innerHTML+=`
        <div class="card col-lg-3 offset-1  mt-5" style="border:2px black solid;justify-content:center">
            <img class="card-img-top" src="./images/cycles/${cycle.imgLink}.jpg">
            <h5 class="card-title">${cycle.name}</h5>
            <div class="card-body">${cycle.description}</div>
            <button onclick="bookingDone()")}" style="margin-bottom:10px" class="btn btn-xs btn-outline-dark">Book</button>
        </div>
        `
    })
    document.getElementById('btn').disabled=true
}

let bookingDone=()=>{
    alert("Booking Done Successfully!")
}