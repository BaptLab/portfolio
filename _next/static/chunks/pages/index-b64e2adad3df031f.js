(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(352)}])},9396:function(e,i,n){"use strict";var t=n(5893),o=n(1163),s=n(330),r=n.n(s);i.Z=e=>{let i=(0,o.useRouter)(),n="right"===e.align?r().alignRight:"left"===e.align?r().alignLeft:r().alignCenter;return(0,t.jsx)("div",{className:"".concat(r().btnContainer," ").concat(n),children:(0,t.jsx)("button",{onClick:n=>{"submit"!==e.buttonType&&n.preventDefault(),e.navTo?i.push(e.navTo):e.onClickFunction&&e.onClickFunction(n)},className:r().actionBtn,type:e.buttonType||"button",children:e.btnText})})}},8303:function(e,i,n){"use strict";var t=n(5893),o=n(1664),s=n.n(o),r=n(836),c=n.n(r);i.Z=()=>(0,t.jsx)("footer",{className:c().footer,children:(0,t.jsx)(s(),{href:"/legals",className:c().footerRedirect,children:"Mentions L\xe9gales"})})},8831:function(e,i,n){"use strict";n.d(i,{Z:function(){return m}});var t=n(5893),o=n(1664),s=n.n(o),r=n(9791),c=n.n(r),a=n(5675),l=n.n(a),d=()=>(0,t.jsxs)("nav",{className:c().navBar,children:[(0,t.jsxs)("ul",{className:c().anchorLinks,children:[(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/#profil",children:"Profil"})}),(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/#technos",children:"Technologies"})}),(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/#projets",children:"Projets"})}),(0,t.jsx)("li",{children:(0,t.jsx)(s(),{href:"/#offres",children:"Offres"})})]}),(0,t.jsxs)("div",{className:c().externalLinks,children:[(0,t.jsx)(s(),{href:"/contact",children:"Contact"}),(0,t.jsx)("a",{href:"https://github.com/BaptLab",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(l(),{src:"/logos/github.png",alt:"GitHub",width:18,height:18})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/in/baptiste-labaune-3950771a9/",target:"_blank",rel:"noopener noreferrer",children:(0,t.jsx)(l(),{src:"/logos/linkedIn.png",alt:"LinkedIn",width:18,height:18})})]})]}),f=n(5735),p=n.n(f),m=()=>(0,t.jsxs)("header",{className:p().headerContainer,children:[(0,t.jsx)(s(),{href:"/",className:p().logoContainer,children:(0,t.jsx)("h1",{className:p().logo,children:"Baptiste LABAUNE - D\xe9veloppeur Web en Freelance"})}),(0,t.jsx)(d,{})]})},352:function(e,i,n){"use strict";n.r(i),n.d(i,{__N_SSG:function(){return T},default:function(){return b}});var t=n(5893),o=n(9008),s=n.n(o),r=n(8831),c=n(9789),a=n.n(c),l=e=>(0,t.jsxs)("div",{className:a().competenceContainer,children:[(0,t.jsx)("div",{className:a().logoContainer,children:(0,t.jsx)("img",{src:e.logoPath,alt:"Logo",className:a().logo})}),(0,t.jsx)("h3",{className:a().competenceTitle,children:e.title}),(0,t.jsx)("p",{className:a().competenceDescription,children:e.description}),(0,t.jsx)("ul",{className:a().competenceListContainer,children:e.competenceList.map((e,i)=>(0,t.jsx)("li",{className:a().competenceListElement,children:e},i))})]}),d=n(7409),f=n.n(d),p=n(5675),m=n.n(p),h=n(1163),u=e=>{let i=(0,h.useRouter)();return(0,t.jsxs)("div",{className:f().projectContainer,children:[(0,t.jsx)(m(),{src:e.imagePath,alt:e.clientName,width:579,height:397}),(0,t.jsxs)("div",{className:f().projectInfos,children:[(0,t.jsxs)("span",{className:f().projectId,children:["[",e.projectId,"]"]}),(0,t.jsx)("span",{className:f().clientName,children:e.clientName}),(0,t.jsx)("p",{className:f().projectDescription,children:e.projectDescription}),(0,t.jsx)("ul",{className:f().techUsed,children:e.techUsed.map((e,i)=>(0,t.jsxs)("li",{className:f().techUsedItem,children:["[ ",e," ]"]},i))})]}),(0,t.jsx)("a",{href:"#",onClick:n=>{n.preventDefault(),i.push("/projects/".concat(e.projectId))},className:f().projectCTA,children:"Voir le projet [↗]"})]})},j=n(8303),x=n(5906),_=n.n(x),g=e=>(0,t.jsxs)("div",{className:_().offreContainer,children:[(0,t.jsxs)("span",{className:_().offreId,children:["[",e.offreId,"]"]}),(0,t.jsx)("h3",{className:_().offreName,children:e.offreName}),(0,t.jsx)("span",{className:_().offreTitle,children:"Technologies"}),(0,t.jsx)("span",{className:_().offreTechnos,children:e.offreTechnos}),(0,t.jsx)("span",{className:_().offreTitle,children:"Version"}),(0,t.jsx)("span",{className:_().offreVersion,children:e.offreVersion}),(0,t.jsx)("span",{className:_().offreTitle,children:"Back-Office"}),(0,t.jsx)("span",{className:_().offreBackOffice,children:e.offreBackOffice}),(0,t.jsx)("span",{className:_().offreTitle,children:"Description"}),(0,t.jsx)("span",{className:_().offreDescription,children:e.offreDescription}),(0,t.jsx)("span",{className:"".concat(_().offreTitle," ").concat(_().offreTitlePrice),children:"Prix"}),(0,t.jsx)("span",{className:_().offrePrice,children:e.offrePrice})]}),N=n(6484),C=n.n(N),v=e=>(0,t.jsx)("div",{className:C().offresContainer,children:e.offres.map((e,i)=>(0,t.jsx)(g,{offreId:e.offreId,offreName:e.offreName,offreTechnos:e.offreTechnos,offreVersion:e.offreVersion,offreBackOffice:e.offreBackOffice,offreDescription:e.offreDescription,offrePrice:e.offrePrice},i))}),L=n(9396),T=!0;function b(e){let{offres:i}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:"Baptiste LABAUNE - BLab."}),(0,t.jsx)("meta",{name:"description",content:"Site internet de Baptiste LABAUNE"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(r.Z,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)("section",{id:"profil",children:(0,t.jsxs)("div",{className:"section-container",children:[(0,t.jsx)("h2",{children:"[ A propos ]"}),(0,t.jsxs)("div",{className:"profil-container",children:[(0,t.jsx)(m(),{src:"./images/profil.jpg",alt:"Baptiste LABAUNE",width:379,height:230}),(0,t.jsxs)("p",{className:"profil-description",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"," ",(0,t.jsx)("strong",{children:"nostrud exercitation"})," ","ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"," ",(0,t.jsx)("strong",{children:"reprehenderit "})," in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]})]}),(0,t.jsx)(l,{logoPath:"/logos/competences.png",title:"Comp\xe9tences",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",competenceList:["M\xe9thodologie agile","Conformit\xe9 RGPD (master 2)","Architecture logicielle","Architecture Base de donn\xe9es"]})]})}),(0,t.jsx)("section",{id:"technos",children:(0,t.jsxs)("div",{className:"section-container",children:[(0,t.jsx)("h2",{children:"[ Mes technologies ]"}),(0,t.jsxs)("div",{className:"competences-container",children:[(0,t.jsx)(l,{logoPath:"portfolio/logos/frontend.png",title:"Frontend",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",competenceList:["HTML","CSS","JavaScript","Wordpress","Angular","React","Next.js"]}),(0,t.jsx)(l,{logoPath:"./portfolio/logos/backend.png",title:"Backend",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",competenceList:["Java","SpringBoot (security, starter web, data JPA, etc.)","MongoDB & MySQL"]}),(0,t.jsx)(l,{logoPath:"/logos/testing.png",title:"Testing",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",competenceList:["Cypress","JUnit","Jest"]}),(0,t.jsx)(l,{logoPath:"/logos/software.png",title:"Logiciels",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",competenceList:["Figma","Visual Studio Code","Eclipse","Photoshop & Premiere Pro"]})]})]})}),(0,t.jsx)("section",{id:"projets",children:(0,t.jsxs)("div",{className:"section-container",children:[(0,t.jsx)("h2",{children:"[ Mes projets ]"}),(0,t.jsx)(u,{imagePath:"/images/test.jpg",projectId:"01",clientName:"Nom du client",projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",techUsed:["HTML","CSS","JS"]}),(0,t.jsx)(u,{imagePath:"/images/test2.jpg",projectId:"02",clientName:"Nom du client",projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",techUsed:["HTML","CSS","JS"]})]})}),(0,t.jsx)("section",{id:"offres",children:(0,t.jsxs)("div",{className:"section-container",children:[(0,t.jsx)("h2",{children:"[ Mes offres ]"}),(0,t.jsxs)("div",{className:"offre-warning",children:[(0,t.jsx)(m(),{src:"/logos/warning.png",width:24,height:24}),(0,t.jsx)("p",{className:"offre-warning-paragraphe",children:"Les prix indiqu\xe9s sont donn\xe9s \xe0 titre indicatif et peuvent varier en fonction de plusieurs facteurs. La pr\xe9sence d'un back-office, le choix entre un design pr\xe9d\xe9fini ou sur mesure (cf. colonne Prix). La complexit\xe9 sp\xe9cifique de votre demande peut \xe9galement influencer le co\xfbt final et faire d\xe9passer les prix indiqu\xe9s. Chaque devis est personnalis\xe9 pour s'adapter au mieux \xe0 vos besoins et garantir un service de qualit\xe9."})]}),(0,t.jsx)(v,{offres:i}),(0,t.jsx)(L.Z,{btnText:"Je suis int\xe9ress\xe9",navTo:"/contact"})]})}),(0,t.jsx)(j.Z,{})]})]})}},330:function(e){e.exports={actionBtn:"actionBtn_actionBtn__qkl69",alignLeft:"actionBtn_alignLeft__aiZth",alignCenter:"actionBtn_alignCenter___WPh4",alignRight:"actionBtn_alignRight__rO6dv",btnContainer:"actionBtn_btnContainer__dGypD"}},9789:function(e){e.exports={competenceContainer:"competence_competenceContainer___tMa0",competenceTitle:"competence_competenceTitle__d5XUE",competenceDescription:"competence_competenceDescription__AIF3D",competenceListContainer:"competence_competenceListContainer__p1qWo",logoContainer:"competence_logoContainer__XT42W",logo:"competence_logo__N9_Cn"}},836:function(e){e.exports={footer:"footer_footer__MbdlQ",footerRedirect:"footer_footerRedirect__eiKMn"}},5735:function(e){e.exports={headerContainer:"header_headerContainer__PZETA",logoContainer:"header_logoContainer__k2qc_"}},9791:function(e){e.exports={navBar:"navigation_navBar__F9Lx6",anchorLinks:"navigation_anchorLinks__eboQv",externalLinks:"navigation_externalLinks__lhY5K"}},5906:function(e){e.exports={offreContainer:"offre_offreContainer__R8XDn",offreName:"offre_offreName__kMz_d",offreId:"offre_offreId__W5hGo",offreTitle:"offre_offreTitle__UlE71",offreTitlePrice:"offre_offreTitlePrice__KQhYq"}},7409:function(e){e.exports={projectContainer:"project_projectContainer__Ygvzp",projectInfos:"project_projectInfos__RdTyT",projectId:"project_projectId__tUhac",clientName:"project_clientName__4W9eh",projectDescription:"project_projectDescription__D6_KG",projectCTA:"project_projectCTA__pR58Q"}},6484:function(e){e.exports={offresContainer:"slideCarrousel_offresContainer__FEmkS","offres-container":"slideCarrousel_offres-container__ja1KF"}},9008:function(e,i,n){e.exports=n(7828)}},function(e){e.O(0,[640,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);