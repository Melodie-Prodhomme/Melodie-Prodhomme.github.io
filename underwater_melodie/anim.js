

function anim(){

  gsap.set("#dechets>*",{opacity:0});
  gsap.from("svg",{opacity:0});
  gsap.set("#titre",{opacity:1});
  gsap.set("#fin",{opacity:0});

  // réglages
  function randomLigne(e){
    gsap.set(e,{y:"random(-300,300)"})
}

  tl.pause();

//animation déchets

 // le nombre de millisecondes depuis 1970
 const theMilliseconds = new Date().getTime();
 const jours = theMilliseconds/(1000*60*60*24);
 const sac = document.querySelector('#sac>*');
 const gobelet = document.querySelector('#gobelet>*');
 const paille = document.querySelector('#paille>*');
 const tissus = document.querySelector('#tissus>*');
 const verre = document.querySelector('#verre>*');
 const bouteille = document.querySelector('#bouteille>*');
 const emballage = document.querySelector('#emballage>*');

 // nombre de circle à créer selon la date
 let sacNum = Math.round(jours * 0.0010);
 console.log(sacNum);

 let gobeletNum = Math.round(jours * 0.0006);
 console.log(gobeletNum);

 let pailleNum = Math.round(jours * 0.0018);
 console.log(pailleNum);

 let tissusNum = Math.round(jours * 0.0002);
 console.log(tissusNum);

 let verreNum = Math.round(jours * 0.0005);
 console.log(verreNum);

 let bouteilleNum = Math.round(jours * 0.0004);
 console.log(bouteilleNum);

 let emballageNum = Math.round(jours * 0.0006);
 console.log(emballageNum);


 // clone the circle
 for (let i = 0; i < sacNum; i++) {
   const clone = sac.cloneNode(true);
   clone.id = "sac" + i;
   clone.opacity = 0;
   sac.parentNode.appendChild(clone);
   
  }
  
  for (let i = 0; i < gobeletNum; i++) {
    const clone = gobelet.cloneNode(true);
    clone.id = "gobelet" + i;
    clone.opacity = 0;
    gobelet.parentNode.appendChild(clone);
    
  }
  
  for (let i = 0; i < pailleNum; i++) {
    const clone = paille.cloneNode(true);
    clone.id = "paille" + i;
    clone.opacity = 0;
    paille.parentNode.appendChild(clone);
    
  }
  
  
  for (let i = 0; i < tissusNum; i++) {
    const clone = tissus.cloneNode(true);
    clone.id = "tissus" + i;
    clone.opacity = 0;
    tissus.parentNode.appendChild(clone);
    
  }
  
  for (let i = 0; i < verreNum; i++) {
    const clone = verre.cloneNode(true);
    clone.id = "verre" + i;
    clone.opacity = 0;
    verre.parentNode.appendChild(clone);
    
  }
  
  for (let i = 0; i < bouteilleNum; i++) {
    const clone = bouteille.cloneNode(true);
    clone.id = "bouteille" + i;
    clone.opacity = 0;
    bouteille.parentNode.appendChild(clone);
    
  }
  
  for (let i = 0; i < emballageNum; i++) {
    const clone = emballage.cloneNode(true);
    clone.id = "emballage" + i;
    clone.opacity = 0;
  emballage.parentNode.appendChild(clone);

}

  // addClass

  // add clone to the parent group
 tl.to("#dechets>*",{opacity:1,duration : 2, ease:"circ.in"},100);

 tl.set('#sac>*',{opacity:1, x:'random(-900,900,1)',y:'random(-540,540,1)',scale:'random(0.3,1.3)',rotate:'random(-360,360,1)'},0);

 tl.set('#gobelet>*',{opacity:1, x:'random(-1200,1000,1)',y:'random(-800,800,1)',scale:'random(0.2,0.7)',rotate:'random(-360,360,1)'},0);

 tl.set('#paille>*',{opacity:1, x:'random(-900,900,1)',y:'random(-440,640,1)',scale:'random(0.6,1)',rotate:'random(-360,360,1)'},0);

 tl.set('#tissus>*',{opacity:1, x:'random(-900,700,1)',y:'random(-140,540,1)',scale:'random(1,1.5)',rotate:'random(-360,360,1)'},0);

 tl.set('#verre>*',{opacity:1, x:'random(-300,600,1)',y:'random(-140,540,1)',scale:'random(0.2,2)',rotate:'random(-360,360,1)'},0);

 tl.set('#bouteille>*',{opacity:1, x:'random(-500,900,1)',y:'random(-140,540,1)',scale:'random(0.5,1)',rotate:'random(-360,360,1)'},0);

 tl.set('#emballage>*',{opacity:1, x:'random(-400,950,1)',y:'random(-140,800,1)',scale:'random(0.7,1.2)',rotate:'random(-360,360,1)'},0);
   
 //anim dechets
   //tl.to("#sac>*",{opacity:1, },100);
   tl.to("#sac>*",{y:'random(1000,1400,1)', rotate:'random(-5,5,1)',duration : 40, ease:"circ.in"},95);
   tl.to("#sac>*",{opacity:0, duration :'random(10,15,1)'},117);

   //tl.to("#gobelet>*",{opacity:1,duration : 2,ease:"circ.in"},100);
   tl.to("#gobelet>*",{y:'random(1500,1800,1)', rotate:'random(-5,5,1)',duration : 40, ease:"circ.in"},95);
   tl.to("#gobelet>*",{opacity:0, duration :'random(10,15,1)'},119);

   //tl.to("#paille>*",{opacity:1,duration : 2, ease:"circ.in"},100);
   tl.to("#paille>*",{y:'random(800,1000,1)', rotate:'random(-5,5,1)',duration : 40, ease:"circ.in"},95);
   tl.to("#paille>*",{opacity:0, duration : 2,duration :'random(10,15,1)'},119);

   //tl.to("#tissus>*",{opacity:1,duration : 2,ease:"circ.in"},100);
   tl.to("#tissus>*",{y:'random(200,800,1)', rotate:'random(-5,5,1)',duration : 40, ease:"circ.in"},95);
   tl.to("#tissus>*",{opacity:0, duration :'random(10,15,1)'},117);

   //tl.to("#verre>*",{opacity:1,duration : 2,ease:"circ.in"},100);
   tl.to("#verre>*",{y:'random(300,600,1)', rotate:'random(-5,5,1)',duration : 40, ease:"circ.in"},95);
   tl.to("#verre>*",{opacity:0, duration :'random(10,15,1)'},119);

   //tl.to("#bouteille>*",{opacity:1,duration : 2,ease:"circ.in"},100);
   tl.to("#bouteille>*",{y:'random(600,1500,1)', rotate:'random(-5,5,1)',duration : 40, ease:"circ.in"},95);
   tl.to("#bouteille>*",{opacity:0, duration :'random(10,15,1)'},119);

   //tl.to("#emballage>*",{opacity:1,duration : 2,ease:"circ.in"},100);
   tl.to("#emballage>*",{y:'random(200,700,1)', rotate:'random(-5,5,1)',duration : 40, ease:"circ.in"},95);
   tl.to("#emballage>*",{opacity:0, duration :'random(10,15,1)'},119);

  //transformOrigin:"1321px 88px"

  tl.to("#titre",{y:50,opacity:0,ease:"power1.in",duration:3},4);
  tl.to("#fin",{opacity:0},0);
  tl.to("#fin",{opacity:1,ease:"power1.in",duration:1},133);

  tl.fromTo("#baleine",{x:-2190},{scale:2,x:0,svgOrigin:"-700 300",duration:80},10);
  tl.to("#baleine",{scale:3,y:-230,duration:10,ease:"power1.in"},55);
  tl.to("#baleine",{scale:3,x:0,svgOrigin:"-700 300",duration:25},65);

  tl.to("#baleine",{svgOrigin:"949.5 407",scale:456,ease:"Power4.easeIn",duration:20},79);  

  tl.to("#baleine",{opacity:0, visibility:"hidden", duration:2,ease:"power1.in"},133);
  //tl.to("#oeil2,#oeil,#nageoireavant,#nageoirapres,#corps",{opacity:0,duration:2},80);

  tl.to("#oeil2",{opacity:0},0);
  tl.to("#oeil2",{opacity:1},60);
  tl.to("#oeil2",{opacity:0},62);
  tl.to("#oeil2",{opacity:1},65);
  tl.to("#oeil2",{opacity:0},74);

  tl.to("#pupille2",{opacity:0,scale:1},0);
  tl.to("#pupille2",{opacity:1,duration : 5,scale:1,ease:"power1.in"},100);
  tl.to("#pupille",{opacity:1,scale:1},0);
  //903.5 407.5
  /*tl.to("#transijaune",{transformOrigin:"center",scale:0.2,duration:2,ease: "sine.in"},65);*/
  /*tl.to("#transijaune",{transformOrigin:"center",scale:0.35,duration:2,ease: "sine.in"},69);
  tl.to("#transijaune",{fill:'gray',ease: "sine.in"},71);*/


  tl.fromTo("#ellipse",{x:0,opacity:0},{opacity:1,scale:5, rotation:60,transformOrigin:"center",duration:2,},18);
  tl.fromTo("#ellipse",{x:0},{scale:4,rotation:2,transformOrigin:"center",opacity: 0,duration:5,},20);
  tl.fromTo("#ellipse1",{x:0,opacity:0},{opacity:1,scale:15, rotation:60,transformOrigin:"center",duration:2,},23);
  tl.fromTo("#ellipse1",{x:0},{scale:7,rotation:2,transformOrigin:"center",opacity:0,duration:5,},25);
  tl.fromTo("#ellipse2",{x:0,opacity:0},{opacity:1,scale:30, rotation:60,transformOrigin:"center",duration:2,},28);
  tl.fromTo("#ellipse2",{x:0},{scale:15,rotation:2,transformOrigin:"center",opacity:0,duration:7,},30);

  tl.fromTo("#ellipse",{x:0,opacity:0},{opacity:1,scale:5, rotation:60,transformOrigin:"center",duration:2,},37);
  tl.fromTo("#ellipse",{x:0},{scale:4,rotation:2,transformOrigin:"center",opacity:0,duration:5,},39);
  tl.fromTo("#ellipse",{x:0,opacity:0},{opacity:1,scale:5, rotation:60,transformOrigin:"center",duration:2,},41);
  tl.fromTo("#ellipse",{x:0},{scale:4,rotation:2,transformOrigin:"center",opacity:0,duration:5,},43);
  tl.fromTo("#ellipse1",{x:0,opacity:0},{opacity:1,scale:15, rotation:60,transformOrigin:"center",duration:2,},46);
  tl.fromTo("#ellipse1",{x:0},{scale:7,rotation:2,transformOrigin:"center",opacity:0,duration:5,},48);
  tl.fromTo("#ellipse2",{x:0,opacity:0},{opacity:1,scale:30, rotation:60,transformOrigin:"center",duration:2,},55);
  tl.fromTo("#ellipse2",{x:0},{scale:15,rotation:2,transformOrigin:"center", opacity:0,duration:5,},57);

  tl.fromTo("#ellipse",{x:0,opacity:0},{opacity:1,scale:5, rotation:60,transformOrigin:"center",duration:2,},64);
  tl.fromTo("#ellipse",{x:0},{scale:4,rotation:2,transformOrigin:"center",opacity:0,duration:5,},66);
  tl.fromTo("#ellipse1",{x:0,opacity:0},{opacity:1,scale:15, rotation:60,transformOrigin:"center",duration:2,},69);
  tl.fromTo("#ellipse1",{x:0},{scale:7,rotation:2,transformOrigin:"center",opacity:0,duration:5,},71);
  tl.fromTo("#ellipse2",{x:0,opacity:0},{opacity:1,scale:30, rotation:60,transformOrigin:"center",duration:2,},74);
  tl.fromTo("#ellipse2",{x:0},{scale:15,rotation:2,transformOrigin:"center", opacity:0,duration:5,},76);


  //Poissons jaunes
  tl.set("#poissons",{x:-50,})
  tl.fromTo("#jaune1",{drawSVG:e => "0% "+gsap.utils.random(1,2,1)+"% "},{drawSVG:e => "98% "+gsap.utils.random(98,100,1)+"% ",duration:2.3,repeat:35,repeatRefresh:true,
       onRepeat:randomLigne,onRepeatParams:["#jaune1"], ease:"none"},0);
  tl.fromTo("#jaune2",{drawSVG:e => "0% "+gsap.utils.random(1,4,1)+"% "},{drawSVG:e => "97% "+gsap.utils.random(98,100,1)+"% ",duration:2.3,repeat:35,
       onRepeat:randomLigne,onRepeatParams:["#jaune2"],ease:"none", stagger:0.5},0.3);
  tl.fromTo("#jaune3",{drawSVG:e => "0% "+gsap.utils.random(1,3,1)+"% "},{drawSVG:e => "99% "+gsap.utils.random(98,100,1)+"% ",duration:2.3,repeat:35,
       onRepeat:randomLigne,onRepeatParams:["#jaune3"],ease:"none", stagger:1},0.5);
  tl.fromTo("#jaune4",{drawSVG:e => "0% "+gsap.utils.random(1,2,1)+"% "},{drawSVG:e => "98% "+gsap.utils.random(98,100,1)+"% ",duration:2.3,repeat:35,
       onRepeat:randomLigne,onRepeatParams:["#jaune4"],ease:"none", stagger:1.5},0.7);
  tl.fromTo("#jaune5",{drawSVG:e => "0% "+gsap.utils.random(1,4,1)+"% "},{drawSVG:e => "97% "+gsap.utils.random(98,100,1)+"% ",duration:2.3,repeat:35,
       onRepeat:randomLigne,onRepeatParams:["#jaune5"],ease:"none", stagger:2},0.9);
  tl.fromTo("#jaune6",{drawSVG:e => "0% "+gsap.utils.random(1,3,1)+"% "},{drawSVG:e => "99% "+gsap.utils.random(98,100,1)+"% ",duration:2.3,repeat:35,
       onRepeat:randomLigne,onRepeatParams:["#jaune6"],ease:"none", stagger:2.5},1.1);
  tl.fromTo("#jaune7",{drawSVG:e => "0% "+gsap.utils.random(1,2,1)+"% "},{drawSVG:e => "98% "+gsap.utils.random(98,100,1)+"% ",duration:2.3,repeat:35,
       onRepeat:randomLigne,onRepeatParams:["#jaune7"],ease:"none", stagger:3},1.3);
  tl.fromTo("#jaune8",{drawSVG:e => "0% "+gsap.utils.random(1,5,1)+"% "},{drawSVG:e => "98% "+gsap.utils.random(98,100,1)+"% ",duration:2.3,repeat:35,
       onRepeat:randomLigne,onRepeatParams:["#jaune8"],ease:"none", stagger:3.5},1.5);
 
  /*autres poissons*/
  tl.fromTo("#orange",{drawSVG:"0% 2% "},{drawSVG:"98% 100%",duration:2.3,ease:"none"},5);
  tl.fromTo("#rose",{drawSVG:"10% 20% "},{drawSVG:"85% 100%",duration:2.5,ease:"none"},7);
  tl.fromTo("#bleu",{drawSVG:"0% 15% "},{drawSVG:"85% 100%",duration:3,ease:"none"},9);
  tl.fromTo("#orange",{drawSVG:"0% 2% "},{drawSVG:"98% 100%",duration:2.3,ease:"none"},14);
  tl.fromTo("#rose",{drawSVG:"10% 20% "},{drawSVG:"85% 100%",duration:2.5,ease:"none"},16);
  tl.fromTo("#rose",{drawSVG:"10% 20% "},{drawSVG:"85% 100%",duration:2.5,ease:"none"},11.5);

  tl.fromTo("#orange",{drawSVG:"0% 2% "},{drawSVG:"98% 100%",duration:2.3,ease:"none"},21);
  tl.fromTo("#rose",{drawSVG:"10% 20% "},{drawSVG:"85% 100%",duration:2.5,ease:"none"},25.2);
 // tl.fromTo("#bleu",{drawSVG:"0% 5% "},{drawSVG:"85% 100%",duration:3,ease:"none"},27.5);
  tl.fromTo("#orange",{drawSVG:"0% 2% "},{drawSVG:"98% 100%",duration:2.3,ease:"none"},30);
  tl.fromTo("#rose",{drawSVG:"10% 20% "},{drawSVG:"85% 100%",duration:2.5,ease:"none"},32);

  tl.fromTo("#orange",{drawSVG:"0% 2% "},{drawSVG:"98% 100%",duration:2.3,ease:"none"},37);
  tl.fromTo("#rose",{drawSVG:"10% 20% "},{drawSVG:"85% 100%",duration:2.5,ease:"none"},39);
  tl.fromTo("#bleu",{drawSVG:"0% 5% "},{drawSVG:"85% 100%",duration:3,ease:"none"},41.5);
  tl.fromTo("#rose",{drawSVG:"10% 20% "},{drawSVG:"85% 100%",duration:2.5,ease:"none"},48.5);
  tl.fromTo("#orange",{drawSVG:"0% 2% "},{drawSVG:"98% 100%",duration:2.3,ease:"none"},51);

  /*rouge*/
// tl.fromTo("#rouge",{drawSVG:"0% 10% ",scale:0.2, opacity:0},
// {opacity:0,scale :2,y:-150,transformOrigin:"center",rotation:360,drawSVG:"98% 100%",duration:3,ease:"none"},65);
// tl.to("#rouge",{opacity:0},69);

  tl.set("#vagues",{y:0});
  tl.to("#vaguecyan",{x:-3565, duration : 120, ease:"none"},0);
  //tl.to("#vaguecyan",{fill:'white', opacity : 0.5,duration : 1, ease: "sine.in"},83);
  tl.to("#vaguebleue",{x:-3632, duration : 100, ease:"none"},0);
  //tl.to("#vaguebleue",{fill:'gray', opacity : 0.5,duration : 1, ease: "sine.in"},83);
  tl.to("#vagueviolette",{x:-3086, duration : 143, ease:"none"},0);
  //tl.to("#vagueviolette",{fill:'darkgray', opacity : 0.5,duration : 1, ease: "sine.in"},83);
  tl.to("#vaguenoire",{x:-4375, duration: 100, ease:"none"},0);
  tl.to("#vagues",{opacity:0, duration:2, visibility:"hidden"},100);

  tl.to("#fond",{opacity:1},0)
  //tl.to("#fond",{fill:'black', opacity : 0.5,duration : 1, ease: "sine.in"},83);
  // 144 110 144 110




 


  /*
  tl.set("#algues-2",{y:-100});
tl.to('#algues',{x:-2948,repeat:10,duration:5,ease:"none"},0);
tl.to('#algues-2',{x:-2948,repeat:10,duration:8,ease:"none"},0);

tl.to('#mesalgues',{scale:1.2,transformOrigin:"50% 100%",duration:5},0)
tl.to('#mesalgues',{scale:1,transformOrigin:"50% 100%",duration:5},0)*/


} // anim fin