(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function u(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=u(i);fetch(i.href,n)}})();class r{constructor(t,u,l,i,n,s,g,w,y,Y){this.location=t,this.cupWins=i,this.goalieGoals=n,this.mainColors=s,this.hallOfFamers=g,this.goals=w,this.logoType=y,this.points=Y,u.push(this),l.push(this)}}let c=[],p=[],h=[],d=[],m=[],f=[];new r("Anaheim",p,d,1,0,["black","gold","orange","silver"],7,6056,"letter",58);new r("Arizona",p,m,0,1,["black","red","green","cream","orange","purple"],7,10092,"animal",70);new r("Chicago",p,m,6,0,["red","black","white"],41,19877,"other",59);new r("Colorado",p,m,3,0,["red","blue","silver","black"],11,10987,"letter",109);new r("Dallas",p,m,6,0,["green","black","white","silver"],7,13153,"other",108);new r("Minnesota",p,m,0,0,["green","red","gold","cream"],0,4639,"animal",103);new r("Winnipeg",p,m,0,0,["blue","red","silver","white"],3,5097,"other",95);new r("Nashville",p,m,0,1,["gold","blue","silver"],2,5138,"animal",92);new r("St Louis",p,m,1,0,["blue","gold","white"],24,13322,"other",81);new r("Vegas",p,d,1,0,["gray","gold","orange","silver"],7,1457,"other",111);new r("Boston",c,h,6,1,["black","gold"],51,21598,"letter",135);new r("Buffalo",c,h,0,1,["white","blue","gold"],9,12907,"animal",91);new r("Edmonton",p,d,5,0,["blue","white","orange"],11,11311,"other",109);new r("Los Angeles",p,d,2,0,["black","silver","white"],18,13493,"other",104);new r("Seattle",p,d,0,0,["black","turquoise","blue","red"],0,502,"letter",100);new r("Calgary",p,d,1,0,["red","yellow","white"],11,12811,"letter",93);new r("Vancouver",p,d,0,0,["blue","green","white"],8,12582,"animal",83);new r("San Jose",p,d,0,1,["blue","black","orange"],6,6858,"animal",60);new r("Pittsburgh",c,f,5,0,["black","gold","white"],14,14321,"animal",91);new r("Washington",c,f,1,0,["red","blue","white"],8,11971,"other",80);new r("Philadelphia",c,f,2,2,["black","orange","white"],13,14067,"other",75);new r("Columbus",c,f,0,0,["blue","red","white","silver"],1,4490,"other",59);new r("New York",c,f,4,0,["blue","orange","white"],8,12430,"other",93);new r("Detroit",c,h,11,1,["red","white"],58,20493,"other",80);new r("Florida",c,h,0,0,["red","blue","gold","white"],3,6219,"animal",92);new r("Montreal",c,h,24,1,["red","white","blue"],50,22166,"letter",68);new r("Ottawa",c,h,0,0,["red","white","black","gold"],4,6675,"other",86);new r("Tampa Bay",c,h,3,0,["blue","white","black"],5,6713,"other",98);new r("Toronto",c,h,13,0,["blue","white"],60,21407,"other",111);new r("Carolina",c,f,1,0,["red","white","black","silver"],3,10107,"other",113);new r("New Jersey",c,f,3,1,["red","white","black"],11,11048,"letter",112);new r("New York",c,f,4,0,["red","white","blue"],53,20485,"other",107);const b=["yes","yeah","yep","yup","true","t","y","aye","yup","yuhhuh"],N=["no","n","false","f","nope","nah","nuhuh"];class O{constructor(t=document.body){this.outputAnimationLength=800,this.outputDelay=300,this.outputQueue=[],this.div=document.createElement("div"),this.div.classList.add("text-interface"),t.appendChild(this.div),this.div.innerHTML=`
      <h2 class="ti-title">Text Interface</h2>
      <div class="output">
      </div>
      <div class="input-wrap">
          <div 
             class="input" 
             contenteditable 
             placeholder="Type here...">
          </div>
          <div class="placeholder">Type and hit return...</div>
      </div>
    `,this.inputWrap=this.div.querySelector(".input-wrap"),this.inputEl=this.div.querySelector(".input"),this.outputEl=this.div.querySelector(".output"),this.placeholderEl=this.div.querySelector(".placeholder"),this.setupInputListener()}setTitle(t){this.div.querySelector(".ti-title").textContent=t}clear(){this.outputEl.innerHTML=""}async readChoice(t,u="Choose one of the following:",l="You must choose one of the options!"){this.output(u);for(let s=0;s<t.length;s++)this.output(`${s+1}. ${t[s]}`);let i=await this.readText();if(t.indexOf(i)>-1)return i;if(i=i.replace(/\D/g,""),i!=""){let s=Number(i);if(!isNaN(s)&&s<=t.length&&s>0)return t[Math.floor(s)-1]}return this.output(l),await this.readChoice(t,u,l)}async readYesOrNo(t="Say yes or no!"){let u=await this.readText();return u=u.toLowerCase(),u=u.replace(/\s+/,""),b.indexOf(u)>-1?!0:N.indexOf(u)>-1?!1:(this.output(t),await this.readYesOrNo(t))}async readNumber(t="Please type a number"){let u=await this.readText(),l=Number(u);return isNaN(l)?(this.output(t),this.readNumber(t)):l}readText(){return this.inputWrap.classList.add("active"),new Promise((t,u)=>{this.listener=t})}output(t,u=!1){if(t=""+t,this.outputting)this.outputQueue.push([t,u]);else{let l=document.createElement("div");if(l.classList.add("output"),u&&l.classList.add("echo"),!this.outputAnimationLength||u)l.textContent=t;else{this.outputting=!0;let i=this.outputAnimationLength/t.length;const n=()=>{if(l.textContent+=t[0]||"",t=t.substr(1),t.length)setTimeout(n,i);else if(this.outputting=!1,this.outputQueue.length){let s=this.outputQueue[0];this.outputQueue=this.outputQueue.slice(1),this.output(...s)}};setTimeout(n,this.outputDelay)}this.outputEl.appendChild(l)}}setupInputListener(){this.inputEl.addEventListener("keypress",t=>{if(t.code=="Enter"){let l=this.inputEl.textContent.replace(/\n$/,"");this.output(l,!0),this.listener&&(this.listener(l),this.listener=null),this.inputWrap.classList.remove("active"),setTimeout(()=>{this.inputEl.textContent=""},1)}}),this.placeholderEl.addEventListener("click",()=>this.inputEl.focus())}}const e=new O;async function o(){e.clear();let a=[];e.setTitle("Hockey Team Guesser"),e.output("I'll guess your hockey team!"),e.output("Type anything to begin"),await e.readText(),e.clear(),e.output("Is your team part of the East region?"),await e.readYesOrNo()?(e.clear(),e.output("Is it Atlantic Division?"),await e.readYesOrNo()?(a=h,e.clear(),e.output("Does your team have red as a team color?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.mainColors.includes("red")}),e.clear(),e.output("Has your team won the Stanley Cup at all?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.cupWins>0}),e.clear(),e.output("Does your team have a letter as a logo?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Montreal Canadiens!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Detroit Red Wings!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())):(a=a.filter(function(t){return t.cupWins==0}),e.clear(),e.ouput("Is your team based in the United States?"),await e.readyYesOrNo()?(e.clear(),e.output("Your team must be the Florida Panthers!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Ottawa Senators!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()))):(a=a.filter(function(t){return!t.mainColors.includes("red")}),console.log(a),e.clear(),e.output("Does your team have more than 50 players in the NHL Hall of Fame"),await e.readYesOrNo()?(a=a.filter(function(t){return t.hallOfFamers>50}),console.log(a),e.clear(),e.output("Does your team have any goalie goals (Not including                        own goals)"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Boston Bruins!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Toronto Maple Leafs!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())):(a=a.filter(function(t){return t.hallOfFamers<50}),console.log(a),e.clear(),e.output("Does your team have an animal logo?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Buffalo Sabres!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Tampa Bay Lightning!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())))):(a=f,e.clear(),e.output("Does your team have black as a team color?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.mainColors.includes("black")}),e.clear(),e.output("Does your team have any goalie goals (Not including own goals)?"),console.log(a),await e.readYesOrNo()?(a=a.filter(function(t){return t.goalieGoals>0}),console.log(a),e.clear(),e.output("Did your team make the 2023 Stanley Cup Playoffs?"),await e.readYesOrNo()?(e.clear(),e.output("New Jersey Devils!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Philidelphia Flyers!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())):(a=a.filter(function(t){return t.goalieGoals==0}),console.log(a),e.clear(),e.output("Does your team have an animal as its logo?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Pitsburgh Penguins!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Carolina Hurricanes"),e.output("Want to play again?"),await e.readYesOrNo()&&o()))):(a=a.filter(function(t){return!t.mainColors.includes("black")}),e.clear(),e.output("Is your team based in New York?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.location=="New York"}),console.log(a),e.clear(),e.output("Does your team have more than 10 players in the NHL hall of fame?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the New York Rangers!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the New York Islanders!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())):(a=a.filter(function(t){return t.location!="New York"}),console.log(a),e.clear(),e.output("Does your team have more than 10,000 total goals?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Washington Capitals!"),e.output("Want to play again?"),await readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Columbus Blue Jackets!"),e.output("Want to play again?"),await readYesOrNo()&&o()))))):(e.clear(),e.output("Is it Pacific Division?"),await e.readYesOrNo()?(a=d,e.clear(),e.output("Does your team have orange as a team color?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.mainColors.includes("orange")}),console.log(a),e.clear(),e.output("Does your team have blue as a team color?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.mainColors.includes("blue")}),console.log(a),e.clear(),e.output("Is your team's logo an animal?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the San Jose Sharks!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Edmonton Oilers!!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())):(a=a.filter(function(t){return!t.mainColors.includes("blue")}),console.log(a),e.clear(),e.output("Did your team make the 2023 Stanley Cup playoffs?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Vegas Golden Kights"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Anaheim Ducks"),e.output("Want to play again?"),await e.readYesOrNo()&&o()))):(a=a.filter(function(t){return!t.mainColors.includes("orange")}),console.log(a),e.clear(),e.output("Does your team have any Stanley Cup wins?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.cupWins>0}),console.log(a),e.clear(),e.output("Does your team have silver as a main color?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Los Angeles Kings!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Calgary Flames!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())):(a=a.filter(function(t){return t.cupWins==0}),console.log(a),e.clear(),e.output("Does your team have a letter logo?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Seattle Kraken!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Vancouver Canucks!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())))):(a=m,e.clear(),e.output("Does your team have blue as a team color?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.mainColors.includes("blue")}),console.log(a),e.clear(),e.output("Does your team have any Stanley Cup Wins?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.cupWins>0}),console.log(a),e.clear(),e.output("Does your team have a letter based logo?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Colorado Avalanche!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the St. Louis Blues!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())):(a=a.filter(function(t){return t.cupWins==0}),e.clear(),e.output("Does your team have an animal logo?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Nashville Predators!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Winnipeg Jets!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()))):(a=a.filter(function(t){return!t.mainColors.includes("blue")}),console.log(a),e.clear(),e.output("Does your team have an animal logo?"),await e.readYesOrNo()?(a=a.filter(function(t){return t.logoType=="animal"}),e.clear(),e.output("Does your team have any goalie goals (not including own goals)"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Arizona Coyotes!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Minnesota Wild!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())):(a=a.filter(function(t){return!t.logoType=="animal"}),e.clear(),e.output("Does your team have red as a main color?"),await e.readYesOrNo()?(e.clear(),e.output("Your team must be the Chicago Blackhawks!"),e.output("Want to play again?"),await e.readYesOrNo()&&o()):(e.clear(),e.output("Your team must be the Dallas Stars!"),e.output("Want to play again?"),await e.readYesOrNo()&&o())))))}o();
