let stats = document.getElementById("s-header");
stats.addEventListener("click",()=>{
    
    stats.classList.add("move");
    console.log("Clicked!!");
    const Sinfo = document.querySelectorAll(".stats-info");
    const size = Sinfo.length;
    let i;
    for(i =0;i<size;i++)
        {
            Sinfo[i].classList.add("show")
        }
    
});
let trophies = document.getElementById("t-header");
trophies.addEventListener("click",()=>{
    trophies.classList.add("move");
    const Tinfo = document.querySelectorAll(".trophies-info");
    const size = Tinfo.length;
    let i;
    for(i =0;i<size;i++)
        {
            Tinfo[i].classList.add("show")
        }
});