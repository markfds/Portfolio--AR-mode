import {CSS3DObject} from "../../Documentation/applications/libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js";
 
const THREE = window.MINDAR.IMAGE.THREE;
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
document.addEventListener("DOMContentLoaded",()=>{

    const start = async()=>{
   
        const mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.body,
            imageTargetSrc:"../../Documentation/applications/assets/targets/targets (2).mind"
        });
        const {renderer,cssScene,cssRenderer,camera} = mindarThree;
        
        const obj = new CSS3DObject(document.querySelector(".ar-container"));
        const anchor = mindarThree.addCSSAnchor(0);
        anchor.group.add(obj);
      
        
        await mindarThree.start();
     
        renderer.setAnimationLoop(()=>{
            cssRenderer.render(cssScene, camera);
        });
   
    }
    start();
 
})