import{d as m,r as g,a as u,e as t,u as n,t as h,n as a,o as y,p as f,f as x,_ as T}from"./index.9de5fbf3.js";const c="/images/placeholderV3.png",s=i=>(f("data-v-27d1255c"),i=i(),x(),i),L={class:"contentBlock"},B=["src"],b=s(()=>t("span",{class:"toolTip",id:"copyLinkToolTip"},"Copy link to this project.",-1)),v=s(()=>t("img",{src:c,alt:"Copy link icon."},null,-1)),C=[v],S=s(()=>t("span",{class:"toolTip"},"Link to the Github for this project.",-1)),j=["href"],w=s(()=>t("img",{src:c,alt:"Github link icon."},null,-1)),I=[w],E=s(()=>t("span",{class:"toolTip"},"Link to this project's external website.",-1)),G=["href"],H=s(()=>t("img",{src:c,alt:"External link icon."},null,-1)),M=[H],V=m({__name:"contentBlock",props:["params"],setup(i){const o=i,e=g({title:o.params.title,description:o.params.description,image:o.params.image,links:o.params.links,share:o.params.share,git:o.params.git,external:o.params.external});let r="inherit",p="inline-block",_="inline-block";e.git=="none"&&(p="none"),e.external=="none"&&(_="none"),e.links||(r="none");function k(){const d=window.location.origin+"/projects/"+e.share;navigator.clipboard.writeText(d);const l=document.getElementById("copyLinkToolTip");l.innerHTML="Copied!",setTimeout(()=>l.innerHTML="Copy link to this project.",600)}return(d,l)=>(y(),u("div",L,[t("img",{src:n(e).image,alt:"Content Block image."},null,8,B),t("h3",null,h(n(e).title),1),t("section",null,[t("p",null,h(n(e).description),1),t("ul",{class:"shareLinkContainer",style:a({display:n(r)})},[t("li",null,[b,t("a",{onClick:l[0]||(l[0]=z=>{k()}),class:"shareLink"},C)]),t("li",{style:a({display:n(p)})},[S,t("a",{href:n(e).git,target:"_blank",class:"shareLink"},I,8,j)],4),t("li",{style:a({display:n(_)})},[E,t("a",{href:n(e).external,target:"_blank",class:"shareLink"},M,8,G)],4)],4)])]))}});const N=T(V,[["__scopeId","data-v-27d1255c"]]);export{N as c};
