(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{119:function(e,t,a){"use strict";(function(e){var n=a(15),r=a(16),o=a(18),i=a(17),c=a(0),l=(a(179),a(120)),s=a(122),m=a(127),u=a(130),p=a(131),d=a(133),f=a(157),g=a(136),h=a(140),b=a(141),E=a(159),v=a(149),y=a(12),w=a(9),k=a(153),j=a(156),O=a(235),N=a(97),C=a(241),x=a(234),I=Object(N.a)({palette:{type:"dark",primary:{main:"#199bfc"}}});I=Object(C.a)(I);var S=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.createElement(y.a,{basename:""},c.createElement(x.a,{theme:I},c.createElement(j.a,null),c.createElement(O.a,null),c.createElement("header",null,c.createElement(m.a,null)),c.createElement(l.a,null),c.createElement(w.d,null,c.createElement(w.b,{path:"/",exact:!0,component:k.a}),c.createElement(w.b,{path:"/about",exact:!0,component:u.a}),c.createElement(w.b,{path:"/resume",exact:!0,component:p.a}),c.createElement(w.b,{path:"/projects",exact:!0,component:d.a}),c.createElement(w.b,{path:"/gifinder",exact:!0,component:f.a}),c.createElement(w.b,{path:"/bobamap",exact:!0,component:g.a}),c.createElement(w.b,{path:"/llnlposter",exact:!0,component:h.a}),c.createElement(w.b,{path:"/markdownpreviewer",exact:!0,component:b.a}),c.createElement(w.b,{path:"/photos",exact:!0,component:E.a}),c.createElement(w.b,{path:"/contact",exact:!0,component:v.a}),c.createElement(w.a,{to:"/"})),c.createElement(s.a,null)))}}]),a}(c.Component);t.a=S}).call(this,a(44))},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(15),r=a(16),o=a(18),i=a(17),c=a(0),l=a(121),s=a.n(l),m=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.createElement(s.a,{params:{particles:{number:{value:120,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.02},move:{direction:"right",speed:.05},size:{value:3},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})}}]),a}(c.Component)},122:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(123),i=a.n(o),c=a(90),l=a(12);t.a=function(e){var t=[{id:"Greet",message:"Hello, Welcome to my website!",trigger:"Ask How to Help"},{id:"Ask How to Help",message:"How may I help you?",trigger:"Waiting User Input"},{id:"Waiting User Input",user:!0,trigger:"Ask Highlights Inquiry"},{id:"Ask Highlights Inquiry",message:"Alright, I'm not that sophisticated..\nBut here are some interactive projects you could check out?",trigger:"Display Project Options"},{id:"Display Project Options",options:[{value:"gifinder",label:"GIFinder",trigger:"Link to GIFinder"},{value:"boba map",label:"Boba Map",trigger:"Link to Boba Map"}]},{id:"Link to GIFinder",component:r.a.createElement("div",null,"You can check out GIFinder right ",r.a.createElement(l.b,{to:"/gifinder"},"here"),"!"),asMessage:!0,trigger:"Ask How to Help Again"},{id:"Link to Boba Map",component:r.a.createElement("div",null,"You can check out my new boba map over ",r.a.createElement(l.b,{to:"/bobamap"},"here"),"!"),asMessage:!0,trigger:"Ask How to Help Again"},{id:"Ask How to Help Again",message:"Anything else I can help you with?",trigger:"Waiting User Response"},{id:"Waiting User Response",user:!0,trigger:"Done"},{id:"Done",message:"Cool. Have a great day!",end:!0}];return r.a.createElement(c.ThemeProvider,{theme:{background:"grey",fontFamily:"Arial, Helvetica, sans-serif",headerBgColor:"#199bfc",headerFontColor:"#fff",headerFontSize:"25px",botBubbleColor:"#fff",botFontColor:"#4c4c4c",userBubbleColor:"#199bfc",userFontColor:"#fff"}},r.a.createElement(i.a,Object.assign({steps:t},{width:"300px",height:"400px",floating:!0})))}},127:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var n=a(15),r=a(16),o=a(18),i=a(17),c=(a(160),a(0)),l=a.n(c),s=a(231),m=a(239),u=a(163),p=a(161),d=a(229),f=a(36),g=a(55),h=a(128),b=a.n(h),E=a(232),v=(a(54),a(238),a(129)),y=a.n(v),w=a(230),k=a(12);a(184);function j(e){return{id:"scrollable-prevent-tab-".concat(e),"aria-controls":"scrollable-prevent-tabpanel-".concat(e)}}var O=Object(p.a)((function(e){return{root:{display:"flex",position:"fixed",bottom:e.spacing(2),right:e.spacing(2),flexGrow:1,zIndex:1}}}));function N(e){var t=e.children,a=O(),n=Object(d.a)({disableHysteresis:!0,threshold:100});return l.a.createElement(w.a,{in:n},l.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},t))}var C=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav"},l.a.createElement(s.a,{className:"appbar"},l.a.createElement(m.a,{variant:"scrollable",scrollButtons:"off",value:""},l.a.createElement(u.a,null,l.a.createElement(g.a,{edge:"start","aria-label":"open drawer",style:{marginLeft:"1%"}},l.a.createElement(b.a,null)),l.a.createElement(k.b,Object.assign({to:"/"},j(0)),l.a.createElement(f.a,null,"Home")),l.a.createElement(k.b,Object.assign({to:"/about"},j(1)),l.a.createElement(f.a,null,"About Me")),l.a.createElement(k.b,Object.assign({to:"/resume"},j(2)),l.a.createElement(f.a,null,"Resume")),l.a.createElement(k.b,Object.assign({to:"/projects"},j(3)),l.a.createElement(f.a,null,"Projects")),l.a.createElement(k.b,Object.assign({to:"/photos"},j(4)),l.a.createElement(f.a,null,"Photos")),l.a.createElement(k.b,Object.assign({to:"/contact"},j(5)),l.a.createElement(f.a,null,"Contact"))))),l.a.createElement(u.a,{id:"back-to-top-anchor"}),l.a.createElement(N,this.props,l.a.createElement(E.a,{size:"small","aria-label":"scroll back to top"},l.a.createElement(y.a,null))))}}]),a}(l.a.Component)},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(15),r=a(16),o=a(18),i=a(17),c=a(47),l=a(0),s=a(242),m=a(233),u=a(240),p=a(243),d=a(36),f=a(162),g=a(54);a(186);var h=function(){var e=l.useState(0),t=Object(c.a)(e,2),a=t[0],n=t[1],r=["Introduction","During 2019...","Earlier in 2020...","This Summer (so far)..."],o=function(){n((function(e){return e+1}))},i=function(){n((function(e){return e-1}))};return l.createElement("div",null,l.createElement(s.a,{activeStep:a,orientation:"vertical"},r.map((function(e,t){return l.createElement(m.a,{key:e},l.createElement(u.a,null,e),l.createElement(p.a,null,l.createElement(g.a,null,function(e){switch(e){case 0:return"I am currently a Master's student pursuing a 4-year B.S./M.S. in Computer Science at UC Santa Cruz. \n      My interests primarily include topics in computer & network security, distributed systems, web development, \n      cloud-based platforms, and many other domains within the field of software engineering. I'm always eager to work with diverse\n      technologies to learn and expand my expertise.";case 1:return"I was a Computation Intern at the National Ignition Facility, a division of Lawrence Livermore National Laboratory. \n      In the quarter of Fall 2019,  I began a research project focused on web and network security for everyday online users.\n      I also worked part time this Fall as a Mozilla Ingenious for the Glass Room, a pop-up exhibition in downtown San Francisco \n      sponsored by Tactical Tech and Mozilla Firefox to address modern issues surrounding data privacy and digital security.";case 2:return"I recently graduated with my Bachelor's in June, and will spend my fourth year at UCSC pursuing a Master's\n      to finish by Spring 2021 as part of the new B.S./M.S. pathways program. I also completed an internship at Bank of America as a Global Technology Summer Analyst. My team and I scraped over\n      30+ financial and regulatory documents to build an NLP language model using Python. We also created a document search engine with\n      similarity scoring and keyword highlighting using frequency and deep learning models.";case 3:return"TODO: fill in this last step";default:return"Unknown step"}}(t)),l.createElement("br",null),l.createElement("div",null,l.createElement("div",null,l.createElement(d.a,{disabled:0===a,onClick:i},"Back"),l.createElement(d.a,{variant:"contained",color:"primary",onClick:o},a===r.length-1?"Finish":"Next")))))}))),a===r.length&&l.createElement(f.a,{square:!0,elevation:0},l.createElement(g.a,{style:{padding:"1%"}},"Introduction completed - scroll down for more info!"),l.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){n(0)},style:{margin:"1%"}},"Reset")))},b=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.createElement("div",{className:"content-wrapper"},l.createElement("h2",{className:"gradient-font"},"About Me"),l.createElement(h,null),l.createElement("br",null),l.createElement("p",null,"Other interests: playing piano, hiking, rock climbing, collecting plushies, playing Animal Crossing~"),l.createElement("p",null,"More information on the Tech4Good Lab can be found ",l.createElement("a",{href:"https://tech4good.soe.ucsc.edu/#/",target:"_blank",rel:"noopener noreferrer"},"here"),"."),l.createElement("p",null,"The Glass Room website can be found ",l.createElement("a",{href:"https://theglassroom.org",target:"_blank",rel:"noopener noreferrer"},"here"),"."),l.createElement("p",null,"The Glass Room offers Data Detox Kits, which are available online ",l.createElement("a",{href:"https://datadetoxkit.org/en/home",target:"_blank",rel:"noopener noreferrer"},"here"),"."))}}]),a}(l.Component)},131:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(15),r=a(16),o=a(18),i=a(17),c=a(0),l=a.n(c),s=a(132),m=a.n(s),u=(a(187),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("br",null),l.a.createElement("div",{className:"resume-container"},l.a.createElement("object",{className:"pdf",type:"application/pdf",data:m.a},l.a.createElement("p",null,"PDF cannot be displayed :("))))}}]),a}(l.a.Component))},132:function(e,t,a){e.exports=a.p+"static/media/Melanie_Wong_Resume.200562fe.pdf"},133:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(93),r=a(0),o=a.n(r),i=a(161),c=a(83),l=a(54),s=a(75),m=a.n(s),u=a(134),p=a.n(u),d=a(135),f=a.n(d),g=a(12),h=(a(188),[{url:p.a,title:"GIFinder",link:"./gifinder",description:"A simple search to discover awesome GIFs, powered by the Giphy API",width:"40%"},{url:f.a,title:"Bobamap",link:"./bobamap",description:"A map of (most) boba places around the SF Bay Area",width:"40%"},{url:m.a,title:"LLNL Poster",link:"./llnlposter",description:"Project poster from my 2019 summer internship at LLNL",width:"40%"}]),b=Object(i.a)((function(e){var t;return{root:{display:"flex",flexDirection:"column",minWidth:300,width:"80%",margin:"auto"},image:(t={position:"relative",margin:"20px",height:200},Object(n.a)(t,e.breakpoints.down("xs"),{width:"100% !important",height:100}),Object(n.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"4px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(4),"px ").concat(e.spacing(1)+6,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}})),E=function(){var e=b();return o.a.createElement("div",{className:"content-wrapper"},o.a.createElement("h2",{className:"gradient-font"},"Projects"),o.a.createElement("div",{className:e.root},h.map((function(t){return o.a.createElement("div",{className:"projects"},o.a.createElement(c.a,{focusRipple:!0,key:t.title,className:e.image,focusVisibleClassName:e.focusVisible,style:{width:t.width}},o.a.createElement(g.b,{to:t.link},o.a.createElement("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat(t.url,")")}}),o.a.createElement("span",{className:e.imageBackdrop}),o.a.createElement("span",{className:e.imageButton},o.a.createElement(l.a,{component:"span",variant:"subtitle1",color:"inherit",className:e.imageTitle},t.title,o.a.createElement("span",{className:e.imageMarked}))))),o.a.createElement("div",{className:"project-summary"},t.description))}))),o.a.createElement(g.b,{to:"/markdownpreviewer"},o.a.createElement("h3",{style:{textAlign:"center"}},"Markdown Previewer")))}},134:function(e,t,a){e.exports=a.p+"static/media/giphy.c8adcecb.jpg"},135:function(e,t,a){e.exports=a.p+"static/media/cinna_boba.43c3e9fa.gif"},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(95),r=a.n(n),o=a(137),i=a(158),c=a(15),l=a(16),s=a(18),m=a(17),u=a(0),p=a(244),d=a(245),f=a(164),g=a(165),h=a(138),b=a(12),E=a(36),v=(a(222),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={geoLocation:[37.763659,-122.485595],geoError:null,markers:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(h.a)("https://raw.githubusercontent.com/mwong775/mwong775.github.io/development/src/assets/bayarea_boba_spots.csv",{complete:function(t){console.log("Results: ",t,t.data.length);for(var a=[],n=1;n<t.data.length;n++){var r=t.data[n];void 0!==r[2]&&a.push({coords:[r[6],r[7]],name:r[2],address:r[4],city:r[5]})}e.setState((function(e){return{markers:[].concat(Object(i.a)(e.markers),a)}}))}}),navigator.geolocation.getCurrentPosition((function(t){e.setState({geoLocation:[t.coords.latitude,t.coords.longitude]})}),function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({geoError:a});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){return u.createElement("div",{className:"App"},u.createElement(b.b,{to:"/projects"},u.createElement(E.a,{className:"back"},"Back")),u.createElement("div",{className:"map-header"},u.createElement("h2",{className:"gradient-font"},"Boba Map!"),u.createElement("h4",null,"Dataset from ",u.createElement("a",{href:"https://www.kaggle.com/vnxiclaire/bobabayarea",target:"_blank",rel:"noopener noreferrer"},"Kaggle"))),u.createElement(p.a,{id:"mapId",center:this.state.geoLocation,zoom:9},u.createElement(d.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),u.createElement(f.a,{position:this.state.geoLocation},u.createElement(g.a,null,u.createElement("h3",null,"Current Location"))),this.state.markers.map((function(e){return console.log("marking"),u.createElement(f.a,{position:e.coords},u.createElement(g.a,null,u.createElement("h3",null,e.name),u.createElement("h4",null,e.address," - ",e.city)))}))))}}]),a}(u.Component))},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),o=a(75),i=a.n(o),c=function(){return r.a.createElement("img",{src:i.a,alt:"LLNL Poster"})}},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(47),r=a(0),o=(a(223),a(236)),i=a(224),c=function(){var e=r.useState("### Hello World!\n* Edit text in the left\n* Conversion in the right"),t=Object(n.a)(e,2),a=t[0],c=t[1];return r.createElement("div",{className:"App"},r.createElement("h2",{className:"gradient-font"},"Markdown Previewer"),r.createElement("div",{className:"boxes"},r.createElement(o.a,{className:"box",id:"outlined-multiline-static",label:"Markdown Input",multiline:!0,rows:10,defaultValue:a,onChange:function(e){var t;t=e.target.value,c(t)},variant:"outlined"}),r.createElement("div",{className:"preview box",dangerouslySetInnerHTML:{__html:i(a)}})))}},142:function(e,t,a){e.exports=a.p+"static/media/rocks.f752cff2.jpg"},143:function(e,t,a){e.exports=a.p+"static/media/old_gold_building.bc5a4e7d.jpg"},144:function(e,t,a){e.exports=a.p+"static/media/sheeep.053ff0d8.jpg"},145:function(e,t,a){e.exports=a.p+"static/media/NY_5-15-19_2.9e13cc4e.jpg"},146:function(e,t,a){e.exports=a.p+"static/media/pubu.72709814.jpg"},147:function(e,t,a){e.exports=a.p+"static/media/Tahoe.1d076758.jpg"},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(15),r=a(16),o=a(18),i=a(17),c=a(0),l=a.n(c),s=a(55),m=a(82),u=a(151),p=a.n(u),d=a(152),f=a.n(d),g=a(81),h=a(150),b=a.n(h),E=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("h2",{className:"gradient-font"},"Contact"),l.a.createElement("p",null,"Feel free to get in touch!"),l.a.createElement(s.a,{href:"mailto:mwong775@gmail.com"},l.a.createElement(p.a,null)),l.a.createElement(s.a,{onClick:function(){return window.open("https://www.facebook.com/mwong775","_blank")}},l.a.createElement(g.a,{color:"#199bfc",icon:m.a})),l.a.createElement(s.a,{onClick:function(){return window.open("https://www.linkedin.com/in/mwong775","_blank")}},l.a.createElement(g.a,{color:"#199bfc",icon:m.c})),l.a.createElement(s.a,{onClick:function(){return window.open("https://github.com/mwong775","_blank")}},l.a.createElement(g.a,{color:"#199bfc",icon:m.b})),l.a.createElement(s.a,{onClick:function(){return window.open("https://www.goslugs.com/sports/track/2018-19/bios/wong_melanie_0nqe?view=bio","_blank")}},l.a.createElement(f.a,{style:{color:"#199bfc"}})),l.a.createElement("br",null),l.a.createElement("img",{className:"cinnamoroll",src:b.a,alt:"cinnamoroll"}))}}]),a}(l.a.Component)},150:function(e,t,a){e.exports=a.p+"static/media/cinna_stack.8dfb69c7.gif"},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(15),r=a(16),o=a(18),i=a(17),c=a(0),l=(a(226),a(12)),s=a(154),m=a(36),u=a(155),p=a.n(u),d=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#nameId");Object(s.a)(e,{showCursor:!1,strings:["Hi there!","Melanie Wong"]})}},{key:"render",value:function(){return c.createElement("div",{className:"home"},c.createElement("div",{className:"intro"},c.createElement("h2",{className:"name"},c.createElement("div",{id:"nameId"})),c.createElement("img",{className:"cinnamoroll",src:p.a,alt:"cinnamoroll"})),c.createElement("div",{className:"about content-wrapper"},c.createElement("div",{className:"about-wrapper"},c.createElement("h4",{className:"gradient-font"},"About Me"),c.createElement("p",null,"Hi there! I'm Melanie, and I'm studying Computer Science at the University of California in Santa Cruz."),c.createElement(l.b,{to:"/about"},c.createElement(m.a,{style:{color:"#199bfc"}},"Learn More"))),c.createElement("div",{className:"about-wrapper"},c.createElement("h4",{className:"gradient-font"},"About This Site"),c.createElement("p",null,"Welcome to my website! Please feel free to read more ",c.createElement(l.b,{to:"/about"},"about")," me, or you can check out my ",c.createElement(l.b,{to:"/resume"},"resume"),", past ",c.createElement(l.b,{to:"/projects"},"projects"),", collection of ",c.createElement(l.b,{to:"/photos"},"photos"),", or ",c.createElement(l.b,{to:"/contact"},"contact")," me."),c.createElement("p",null,"Source available on GitHub ",c.createElement("a",{href:"https://github.com/mwong775/melaniewong.github.io/tree/development",target:"_blank",rel:"noopener noreferrer"},"here"),"."))))}}]),a}(c.Component)},155:function(e,t,a){e.exports=a.p+"static/media/cinna_sup.66e3768b.gif"},156:function(e,t,a){"use strict";var n=a(15),r=a(16),o=a(18),i=a(17),c=a(0),l=a(9),s=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return c.createElement(c.Fragment,null)}}]),a}(c.Component);t.a=Object(l.g)(s)},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(15),r=a(16),o=a(18),i=a(17),c=a(0),l=a.n(c),s=(a(189),a(94)),m=a.n(s),u=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onInputChange=function(t){e.setState({input:t}),e.props.onInputChange(t)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.createElement("div",{className:"search"},c.createElement("input",{onChange:function(t){return e.onInputChange(t.target.value)},placeholder:"Start typing here to find GIFs!"}))}}]),a}(c.Component),p=function(e){return l.a.createElement("div",{className:"gif-item"},l.a.createElement("img",{src:e.gif.images.downsized.url,onClick:function(){return window.open(e.gif.images.downsized.url,"_blank")},alt:"GIF"}))},d=function(e){var t=e.gifs.map((function(e){return l.a.createElement(p,{key:e.id,gif:e})}));return l.a.createElement("div",{className:"gif-list"},t)},f=a(36),g=a(12),h="wy1tKswrmePmcwQI2hV3RBd336yfjvkS",b="https://api.giphy.com/v1/gifs/",E=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={gifs:[],viewMode:"Trending"},e.handleInputChange=function(t){var a=b+"search?api_key="+h+"&q="+t+"&limit=15&offset=0&rating=G&lang=en";m.a.get(a).then((function(a){if(a.data.data[0]){var n="Displaying results for: "+t;e.setState({gifs:a.data.data,viewMode:n})}else e.getTrending(),e.setState({viewMode:"Trending"})}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getTrending()}},{key:"getTrending",value:function(){var e=this;m.a.get("https://api.giphy.com/v1/gifs/trending?api_key=wy1tKswrmePmcwQI2hV3RBd336yfjvkS&limit=15&rating=G").then((function(t){e.setState({gifs:t.data.data})})).catch((function(e){console.log(e)})).finally((function(){}))}},{key:"render",value:function(){return c.createElement("div",{className:"App"},c.createElement(g.b,{to:"/projects"},c.createElement(f.a,{className:"back"},"Back")),c.createElement("h1",null,"GIFinder"),c.createElement("h5",null,"A simple search to discover awesome GIFs, powered by the Giphy API"),c.createElement(u,{onInputChange:this.handleInputChange}),c.createElement("h2",null,this.state.viewMode),c.createElement(d,{gifs:this.state.gifs}))}}]),a}(c.Component)},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return L}));var n=a(47),r=a(0),o=a.n(r),i=a(297),c=a(298),l=a(299),s=a(55),m=a(148),u=a.n(m),p=a(142),d=a.n(p),f=a(143),g=a.n(f),h=a(144),b=a.n(h),E=a(145),v=a.n(E),y=a(146),w=a.n(y),k=a(147),j=a.n(k),O=[{img:d.a,title:"Rocks, rocks, and sand",location:"\u82b1\u84ee - \u53f0\u7063 Taiwan"},{img:g.a,title:"\u91d1\u95a3\u5bfa Kinkakuji",location:"Kyoto, Japan"},{img:b.a,title:"Woolies",location:"\u6e05\u5883\u8fb2\u5834 - \u53f0\u7063"},{img:v.a,title:"NY Skyline",location:"Manhattan, NY"},{img:w.a,title:"\u7011\u5e03 (Waterfall)",location:"\u53f0\u7063 Taiwan"},{img:j.a,title:"Blue Lake",location:"Lake Tahoe, NV"}],N=a(305),C=a(303),x=a(301),I=a(302),S=a(300),M=a(73),A=a(296),_=a(25),L=(a(225),function(){var e=o.a.useState(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],m=o.a.useState({location:"",img:"",title:""}),p=Object(n.a)(m,2),d=p[0],f=p[1],g=Object(_.a)(),h=Object(A.a)(g.breakpoints.down("sm")),b=function(){r(!1)};return o.a.createElement("div",{className:"content-wrapper"},o.a.createElement("h2",{className:"gradient-font"},"Photos"),o.a.createElement("div",{className:"description"},"Surprisingly decent photos taken with an iPhone"),o.a.createElement(i.a,{className:"grid"},O.map((function(e){return o.a.createElement(c.a,{key:e.img,className:"tile"},o.a.createElement("img",{src:e.img,alt:e.title}),o.a.createElement(l.a,{title:e.title,subtitle:o.a.createElement("span",null,e.location),className:"title-bar",actionIcon:o.a.createElement(s.a,{"aria-label":"info about ".concat(e.title),className:"icon",onClick:function(){return function(e){f(e),r(!0)}(e)}},o.a.createElement(u.a,null))}),o.a.createElement(N.a,{fullScreen:h,open:a,onClose:b,"aria-labelledby":"responsive-dialog-title"},o.a.createElement(S.a,{id:"responsive-dialog-title"},d.title),o.a.createElement(x.a,null,o.a.createElement(I.a,null,d.location),o.a.createElement("img",{src:d.img,alt:d.title})),o.a.createElement(C.a,null,o.a.createElement(s.a,{onClick:b},o.a.createElement(B,{color:"primary"})))))}))))});function B(e){return o.a.createElement(M.a,e,o.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}},173:function(e,t,a){e.exports=a(174)},174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(14),o=a(119);r.render(n.createElement(o.a,null),document.getElementById("root"))},179:function(e,t,a){},184:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},211:function(e,t){},213:function(e,t){},222:function(e,t,a){},223:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},75:function(e,t,a){e.exports=a.p+"static/media/Poster.7f31df48.jpg"}},[[173,1,2]]]);
//# sourceMappingURL=main.b34a7db2.chunk.js.map