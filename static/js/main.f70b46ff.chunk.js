(this.webpackJsonpquest=this.webpackJsonpquest||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(9),o=a.n(i),c=a(16),r=a(25),s=(a(86),a(148)),l=a(151),h=a(152),d=a(154),u=a(153),j=a(2),g=function(e){var t=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a,{}),Object(j.jsx)(l.a,{className:"top-bar",position:"sticky",children:Object(j.jsxs)(h.a,{children:[Object(j.jsx)(u.a,{}),Object(j.jsx)(d.a,{variant:"h6",children:Object(j.jsx)("a",{href:"/",children:"Quest"})})]})}),Object(j.jsx)("div",{className:"content-wrapper",children:Object(j.jsx)("div",{className:"container",children:t})})]})},b=a(13),x=a(155),p=a(158),O=a(156),m=a(159),f=function(){var e=Object(n.useState)("Adventurer"),t=Object(b.a)(e,2),a=t[0],i=t[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{children:Object(j.jsxs)(x.a,{"max-Width":"sm",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Quest"}),Object(j.jsxs)(p.a,{textAlign:"center",children:[Object(j.jsx)(d.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Enter your name:"}),Object(j.jsx)(O.a,{id:"outlined-basic",label:"Name",variant:"outlined",onInput:function(e){return i(e.target.value)}}),Object(j.jsx)(d.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Choose your adventure"}),Object(j.jsx)(c.b,{to:{pathname:"/choice/1",state:a},children:Object(j.jsx)(m.a,{variant:"contained",children:"Project Quest"})}),Object(j.jsx)("p",{}),Object(j.jsx)(c.b,{to:{pathname:"/challenge",state:a},children:Object(j.jsx)(m.a,{variant:"contained",children:"Challenge Quest"})}),Object(j.jsx)("p",{}),Object(j.jsx)(c.b,{to:{pathname:"/puzzle",state:a},children:Object(j.jsx)(m.a,{variant:"contained",children:"Puzzle Quest"})})]})]})})})})},y=[{},{id:1,quest:"Project Quest",info:{decisionText:"It's the final project week of the course. It's time to do something amazing to really show off your mad skills as a programmer. First big decision to make - should I use a login? It makes the project a lot more difficult but does allow for better user interaction.",choiceOne:{text:"Use Login",path:"/choice/2"},choiceTwo:{text:"Better not risk it",path:"/choice/3"}}},{id:2,quest:"Project Quest",info:{decisionText:"You have decided to use login. You have wasted your weekend trying to get it to work and nothing is happening. You hate life. Why would you do this? You only have a week to get the project done this is insane. Big decision time. Do you give up, or do you sacrifice sleep to get this working?",choiceOne:{text:"Give Up",path:"/final/4"},choiceTwo:{text:"I live for pain",path:"/choice/10"}}},{id:3,quest:"Project Quest",info:{decisionText:"You've made the smart decision by not using login and you get to enjoy your weekend as the project is so easy now. I suppose you probably should try and do something a little challenging since this is meant to show off what you can do. When you sit down to get the work done you realise that this week the Big Bash and the Ashes have both started. Do you watch cricket all week and forget about the project or do you continue working?",choiceOne:{text:"I don't like cricket",path:"/choice/5"},choiceTwo:{text:"I love it!",path:"/final/6"}}},{id:4,quest:"Project Quest",info:{decisionText:"You have decided to use give up on using login. You're sad that you wasted so much time but in the long run I think you're better off because now you can actually work on something more exciting. You scramble somthing together and get through the week. Well done.",choiceOne:{text:"Take on another Quest",path:"/"},choiceTwo:{text:"DO NOT USE",path:"/"}}},{id:5,quest:"Project Quest",info:{decisionText:"Why don't you like cricket? Cricket is great. You should like cricket. Change your mind?",choiceOne:{text:"Sorry, I actually do like cricket",path:"/final/6"},choiceTwo:{text:"Leave me alone, I can not like things",path:"/final/7"}}},{id:6,quest:"Project Quest",info:{decisionText:"You spend all week watching cricket and have a great time. This course was stupid anyway. You decide to drop out of the course and focus on watching cricket full time. You live a long and fulfilling life.",choiceOne:{text:"Take on another quest",path:"/"},choiceTwo:{text:"DO NOT USE",path:"/"}}},{id:7,quest:"Project Quest",info:{decisionText:"This game is over. If you don't like cricket I'm not interested in continuing talking to you. Goodbye",choiceOne:{text:"Take on another quest",path:"/"},choiceTwo:{text:"DO NOT USE",path:"/"}}},{id:8,quest:"Project Quest",info:{decisionText:"SUCCESS!!! You nailed it! You are basically a computer God for figuring this out. You have login working and everything else goes smoothly. You get your dream job at Facebook and continue making great content for them for the rest of your life.",choiceOne:{text:"Take on another quest",path:"/"},choiceTwo:{text:"DO NOT USE",path:"/"}}},{id:9,quest:"Project Quest",info:{decisionText:"FAILED! You couldn't figure it out and now you have nothing to submit at the end of the week. You show your Tic-Tac-Toe project again and Joel looks at you with sad judgemental eyes. 'I'm not angry, I'm just disappointed,' he says. You cry yourself to sleep.",choiceOne:{text:"Take on another quest",path:"/"},choiceTwo:{text:"DO NOT USE",path:"/"}}},{id:10,quest:"Project Quest",info:{decisionText:"You animal, I love the enthusiasm and belief in your abilities. Are you gonna take this on yourself or are you gonna make Pat and Rowena stay up all night to help you get this done.",choiceOne:{text:"Make Pat and Rowena suffer",path:"/final/8"},choiceTwo:{text:"I can do this!",path:"/final/9"}}}],v=[{},{id:1,quest:"SEI-48 Quest",info:{decisionText:"You have just quit your job and decided to pursue your dream of becomming a Software Engineer! You've enrolled into a course and ready to take on the challenge!",success:{path:"/challenge/2",reqSkill:"coding",reqResult:0},failure:{path:"/challenge/2"}}},{id:2,quest:"SEI-48 Quest",info:{decisionText:"Alright, time to get through the pre course work. It's not too difficult, hopefully you have at least a few coding skills to get through it.",success:{path:"/challenge/4",reqSkill:"coding",reqResult:2},failure:{path:"/challenge/3"}}},{id:3,quest:"SEI-48 Quest",info:{decisionText:"FAILED! You couldn't get through the pre course work and as such they don't accept you into the course. You didn't actually want to learn anyway, you were much happier living in your parents basement and selling drugs.",success:{path:"/",reqSkill:"coding",reqResult:0},failure:{path:"/"}}},{id:4,quest:"SEI-48 Quest",info:{decisionText:"SUCCESS! You begin the course and everything is going well so far. You're getting towards the end of the week and Joel tells you about the MTA homework. I mean it sounds complicated but I think if I can work on it without getting too distracted I should be able to get somewhere with it.",success:{path:"/challenge/5",reqSkill:"procrastination",reqResult:8},failure:{path:"/challenge/6"}}},{id:5,quest:"SEI-48 Quest",info:{decisionText:"SUCCESS! You did it. I mean it doesn't really work that well and your code is proper garbage but at least it sort of works. You keep trucking along and now it's time for the first project. Goal is to make a Tic-Tac-Toe game. You'll need some coding skills to get this done.",success:{path:"/challenge/7",reqSkill:"coding",reqResult:4},failure:{path:"/challenge/8"}}},{id:6,quest:"SEI-48 Quest",info:{decisionText:"Oh oh, you got distracted too easily and didn't really get anywhere with it. That doesn't matter though because the benefits to your mental health by not trying to get MTA done far outweigh any skills gained by doing it. Time for the first project. Goal is to make a Tic-Tac-Toe game. You'll need some coding skills to get this done.",success:{path:"/challenge/7",reqSkill:"coding",reqResult:4},failure:{path:"/challenge/8"}}},{id:7,quest:"SEI-48 Quest",info:{decisionText:"SUCCESS! You worked really hard and made a working Tic-Tac-Toe game. Now it's time for a group project. You'll really need to focus to get some work done as a group. It looks easy enough, it's called Buring Airlines...",success:{path:"/challenge/9",reqSkill:"procrastination",reqResult:6},failure:{path:"/challenge/10"}}},{id:8,quest:"SEI-48 Quest",info:{decisionText:"You Tic-Tac-Can't do it so you decide to quit. You always thought it was called noughts and crosses anyways, which is clearly why you was unable to get anything done.",success:{path:"/",reqSkill:"coding",reqResult:0},failure:{path:"/"}}},{id:9,quest:"SEI-48 Quest",info:{decisionText:"SUCCESS, well I mean sort of. The project doesn't work even a little bit and you're now scared of air travel but you managed to tough it out and are ready for the final project. You can do this!",success:{path:"/challenge/11",reqSkill:"coding",reqResult:7},failure:{path:"/challenge/12"}}},{id:10,quest:"SEI-48 Quest",info:{decisionText:"Burning Airlines breaks you. Your dreams are haunted by dark visions of crashing plane gifs. You will never fully recover from this. You are a shell of your former self.",success:{path:"/",reqSkill:"coding",reqResult:0},failure:{path:"/"}}},{id:11,quest:"SEI-48 Quest",info:{decisionText:"SUCCESS, you completed the final project and finished the course. Well done for choosing high numbers in the coding skill and low numbers in procrastination on the first page.",success:{path:"/",reqSkill:"coding",reqResult:0},failure:{path:"/"}}},{id:12,quest:"SEI-48 Quest",info:{decisionText:"FAILED! Why didn't you pick better numbers at the start of this quest. You literally get to choose - just give yourself better ratings.",success:{path:"/",reqSkill:"coding",reqResult:0},failure:{path:"/"}}}],k=Object(r.f)((function(e){var t=e.match.params.id,a=y[t].quest,n=y[t].info.decisionText,i=y[t].info.choiceOne.text,o=y[t].info.choiceTwo.text,c=y[t].info.choiceOne.path,s=y[t].info.choiceTwo.path,l=Object(r.e)().state,h=function(){e.history.push({pathname:c,state:l})},u=function(){e.history.push({pathname:s,state:l})};return"Meow-Meow"===l?Object(j.jsx)("div",{children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"cat-game",children:Object(j.jsxs)(x.a,{"max-Width":"sm",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Meow-Meow-Meow"}),Object(j.jsxs)(p.a,{textAlign:"center",children:[Object(j.jsx)("img",{src:"https://cataas.com/cat",alt:"cat"}),Object(j.jsx)(d.a,{variant:"body1",align:"center",color:"textSecondary",paragraph:!0,children:n}),Object(j.jsxs)(d.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:["Make your decision ",l]}),Object(j.jsx)(m.a,{variant:"contained",onClick:h,children:i}),Object(j.jsx)("p",{}),Object(j.jsx)(m.a,{variant:"contained",onClick:u,children:o})]})]})})})}):Object(j.jsx)("div",{children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{children:Object(j.jsxs)(x.a,{"max-Width":"sm",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:a}),Object(j.jsxs)(p.a,{textAlign:"center",children:[Object(j.jsx)(d.a,{variant:"body1",align:"center",color:"textSecondary",paragraph:!0,children:n}),Object(j.jsxs)(d.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:["Make your decision ",l]}),Object(j.jsx)(m.a,{variant:"contained",onClick:h,children:i}),Object(j.jsx)("p",{}),Object(j.jsx)(m.a,{variant:"contained",onClick:u,children:o})]})]})})})})})),w=Object(r.f)((function(e){var t=e.match.params.id,a=y[t].quest,n=y[t].info.decisionText,i=y[t].info.choiceOne.text;return Object(j.jsx)("div",{children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{children:Object(j.jsxs)(x.a,{"max-Width":"sm",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:a}),Object(j.jsxs)(p.a,{textAlign:"center",children:[Object(j.jsx)(d.a,{variant:"body1",align:"center",color:"textSecondary",paragraph:!0,children:n}),Object(j.jsx)(m.a,{variant:"contained",onClick:function(){e.history.push("/")},children:i})]})]})})})})})),S=Object(r.f)((function(e){var t=e.match.params.id,a=v[t].quest,n=v[t].info.decisionText,i=v[t].info.success.path,o=v[t].info.failure.path,c=v[t].info.success.reqSkill,s=v[t].info.success.reqResult,l=Object(r.e)(),h=l.state.name,u=l.state.skills.coding,g=l.state.skills.procrastination;(isNaN(u)||u>10||u<0)&&(u=0),(isNaN(g)||g>10||g<0)&&(g=0);var b=function(){"coding"===c&&u>=s||"procrastination"===c&&g<=s?e.history.push({pathname:i,state:{name:h,skills:{coding:u,procrastination:g}}}):e.history.push({pathname:o,state:{name:h,skills:{coding:u,procrastination:g}}})};return"Meow-Meow"===h?Object(j.jsx)("div",{children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"cat-game",children:Object(j.jsxs)(x.a,{"max-Width":"sm",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:a}),Object(j.jsxs)(p.a,{textAlign:"center",children:[Object(j.jsxs)(d.a,{variant:"h5",align:"center",paragraph:!0,children:["Name: ",h," ",Object(j.jsx)("p",{}),"Coding: ",u," ",Object(j.jsx)("p",{}),"Procrastination: ",g," ",Object(j.jsx)("p",{})]}),Object(j.jsx)(d.a,{variant:"body1",align:"center",color:"textSecondary",paragraph:!0,children:n}),Object(j.jsx)(m.a,{variant:"contained",onClick:b,children:"Take Challenge"})]})]})})})}):Object(j.jsx)("div",{children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{children:Object(j.jsxs)(x.a,{"max-Width":"sm",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:a}),Object(j.jsxs)(p.a,{textAlign:"center",children:[Object(j.jsxs)(d.a,{variant:"h5",align:"center",paragraph:!0,children:["Name: ",h," ",Object(j.jsx)("p",{}),"Coding: ",u," ",Object(j.jsx)("p",{}),"Procrastination: ",g," ",Object(j.jsx)("p",{})]}),Object(j.jsx)(d.a,{variant:"body1",align:"center",color:"textSecondary",paragraph:!0,children:n}),Object(j.jsx)(m.a,{variant:"contained",onClick:b,children:"Take Challenge"})]})]})})})})})),T=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(),s=Object(b.a)(o,2),l=s[0],h=s[1],u=Object(r.e)().state;return"Meow-Meow"===u?Object(j.jsx)("div",{children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"cat-game",children:Object(j.jsx)(x.a,{"max-Width":"sm",children:Object(j.jsxs)(p.a,{textAlign:"center",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Challenge Quest"}),Object(j.jsx)(d.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Rate your coding skills (0-10)"}),Object(j.jsx)(O.a,{id:"outlined-basic",label:"Coding Skills",variant:"outlined",onInput:function(e){return i(e.target.value)}}),Object(j.jsx)(d.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Rate your procrastination skills (0-10)"}),Object(j.jsx)(O.a,{id:"outlined-basic",label:"Coding Skills",variant:"outlined",onInput:function(e){return h(e.target.value)}}),Object(j.jsx)("p",{}),Object(j.jsx)(c.b,{to:{pathname:"/challenge/1",state:{name:u,skills:{coding:a,procrastination:l}}},children:Object(j.jsx)(m.a,{variant:"contained",children:"Take the challenge"})})]})})})})}):Object(j.jsx)("div",{children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{children:Object(j.jsx)(x.a,{"max-Width":"sm",children:Object(j.jsxs)(p.a,{textAlign:"center",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Challenge Quest"}),Object(j.jsx)(d.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Rate your coding skills (0-10)"}),Object(j.jsx)(O.a,{id:"outlined-basic",label:"Coding Skills",variant:"outlined",onInput:function(e){return i(e.target.value)}}),Object(j.jsx)(d.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Rate your procrastination skills (0-10)"}),Object(j.jsx)(O.a,{id:"outlined-basic",label:"Coding Skills",variant:"outlined",onInput:function(e){return h(e.target.value)}}),Object(j.jsx)("p",{}),Object(j.jsx)(c.b,{to:{pathname:"/challenge/1",state:{name:u,skills:{coding:a,procrastination:l}}},children:Object(j.jsx)(m.a,{variant:"contained",children:"Take the challenge"})})]})})})})})},q=a(52),I=a.n(q),Y=a(71),C=a(14),Q=a(53),E=a(42),P=320;function M(e){for(var t=0,a=e.length;t<a;t++)if(e[t]!==t)return!1;return!0}function N(e){return{row:Math.floor(e/4),col:e%4}}function A(e){var t=[].concat(Object(C.a)(e.filter((function(t){return t!==e.length-1})).sort((function(){return Math.random()-.5}))),[e.length-1]);return function(e){for(var t=1,a=1;a<=15;a++)for(var n=a+1;n<=16;n++)t*=(e[a-1]-e[n-1])/(a-n);return 1===Math.round(t)}(t)&&!M(t)?t:A(t)}var R=function(e){var t=e.tile,a=e.index,n=e.width,i=e.height,o=e.handleTileClick,c=e.imgUrl,r=N(a),s=function(e,t,a,n){return{x:t*a,y:e*n}}(r.row,r.col,n,i),l={width:"calc(100% / ".concat(4,")"),height:"calc(100% / ".concat(4,")"),translateX:s.x,translateY:s.y,backgroundImage:"url(".concat(c,")"),backgroundSize:"".concat(400,"px"),backgroundPosition:"".concat(t%4*25,"% ").concat(25*Math.floor(t/4),"%")},h={translateX:Object(E.spring)(s.x),translateY:Object(E.spring)(s.y)};return Object(j.jsx)(E.Motion,{style:h,children:function(e){var n=e.translateX,i=e.translateY;return Object(j.jsx)("li",{style:Object(Q.a)(Object(Q.a)({},l),{},{transform:"translate3d(".concat(n,"px, ").concat(i,"px, 0)"),opacity:15===t?0:1}),className:"tile",onClick:function(){return o(a)},children:!c&&"".concat(t+1)})}})};var U=function(e){var t=Object(n.useState)(Object(C.a)(Array(16).keys())),a=Object(b.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(!1),r=Object(b.a)(c,2),s=r[0],l=r[1];console.log("is started:",s);var h=function(){var e=A(i);o(e)},d=function(e){if(function(e,t){var a=N(e),n=a.row,i=a.col,o=N(t),c=o.row,r=o.col;return Math.abs(n-c)+Math.abs(i-r)===1}(e,i.indexOf(i.length-1))){var t=function(e,t,a){var n=Object(C.a)(e),i=[n[a],n[t]];return n[t]=i[0],n[a]=i[1],n}(i,e,i.indexOf(i.length-1));o(t)}},u=function(e){d(e)},g=Math.round(80),x=Math.round(80),O={width:P,height:P},f=M(i);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{style:O,className:"board",children:i.map((function(t,a){return Object(j.jsx)(R,{index:a,tile:t,width:g,height:x,handleTileClick:u,imgUrl:e.imgUrl},t)}))}),Object(j.jsxs)(p.a,{textAlign:"center",children:[f&&s&&Object(j.jsx)("div",{children:"Great success!"}),s?Object(j.jsx)(m.a,{className:"button-board",onClick:function(){h()},children:"Restart Quest"}):Object(j.jsx)(m.a,{className:"button-board",onClick:function(){return h(),void l(!0)},children:"Start Quest"})]})]})},B=a.p+"static/media/cat3.b771d05b.gif",W=a(72),z=a.n(W),D=function(){var e=B,t=Object(n.useState)(""),a=Object(b.a)(t,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(Y.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z()("https://meowfacts.herokuapp.com/");case 2:t=e.sent,o(t.data.data[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),"Meow-Meow"===Object(r.e)().state?Object(j.jsx)("div",{children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{className:"cat-game",children:Object(j.jsxs)(x.a,{"max-Width":"sm",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Meow-Meow-Meow"}),Object(j.jsx)(U,{imgUrl:e}),Object(j.jsxs)(d.a,{variant:"h6",align:"center",color:"textPrimary",children:["CAT FACTS: ",i]})]})})})}):Object(j.jsx)("div",{children:Object(j.jsx)("main",{children:Object(j.jsx)("div",{children:Object(j.jsxs)(x.a,{"max-Width":"sm",children:[Object(j.jsx)(d.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Puzzle Quest"}),Object(j.jsx)(U,{imgUrl:"https://picsum.photos/300"})]})})})})},F=Object(j.jsx)(g,{children:Object(j.jsxs)(c.a,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:f}),Object(j.jsx)(r.a,{path:"/choice/:id",component:k}),Object(j.jsx)(r.a,{path:"/challenge/:id",component:S}),Object(j.jsx)(r.a,{exact:!0,path:"/challenge",component:T}),Object(j.jsx)(r.a,{path:"/final/:id",component:w}),Object(j.jsx)(r.a,{path:"/puzzle",component:D})]})});o.a.render(F,document.getElementById("root"))},86:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.f70b46ff.chunk.js.map