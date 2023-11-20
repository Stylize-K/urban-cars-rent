import{R as w,b as N,c as W,d as x,s as i,r as z,e as $,j as e,a as H,g as Z,h as G}from"./index-23e077de.js";function I(t=w){const n=t===w?N:W(t);return function(){const{store:s}=n();return s}}const K=I();function U(t=w){const n=t===w?K:I(t);return function(){return n().dispatch}}const Y=U(),q=t=>t.favorites.items;var E={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=x.createContext&&x.createContext(E),h=globalThis&&globalThis.__assign||function(){return h=Object.assign||function(t){for(var n,o=1,s=arguments.length;o<s;o++){n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h.apply(this,arguments)},J=globalThis&&globalThis.__rest||function(t,n){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)n.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(o[s[r]]=t[s[r]]);return o};function F(t){return t&&t.map(function(n,o){return x.createElement(n.tag,h({key:o},n.attr),F(n.child))})}function Q(t){return function(n){return x.createElement(V,h({attr:h({},t.attr)},n),F(t.child))}}function V(t){var n=function(o){var s=t.attr,r=t.size,d=t.title,u=J(t,["attr","size","title"]),p=r||o.size||"1em",a;return o.className&&(a=o.className),t.className&&(a=(a?a+" ":"")+t.className),x.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,s,u,{className:a,style:h(h({color:t.color||o.color},o.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),d&&x.createElement("title",null,d),t.children)};return k!==void 0?x.createElement(k.Consumer,null,function(o){return n(o)}):n(E)}function X(t){return Q({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}const tt=i.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(2px);
`,et=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 14px;
  background-color: #ffffff;
  padding: 34px;
  width: 541px;
  max-height: 700px;
  /* overflow: auto; */
`,nt={position:"absolute",stroke:"transparent",fill:"#121417",top:12,right:12,width:22,height:22,cursor:"pointer"},ot=i.img`
  width: 100%;
  height: 248px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
`,it=i.div`
  margin-top: 14px;
  margin-bottom: 24px;
`,st=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 8px;
`,rt=i.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
`,lt=i.span`
  color: #3470ff;
`,j=i.ul`
  display: flex;
  flex-wrap: wrap;
`,c=i.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`,at=i.p`
  line-height: 1.43;
  margin-top: 14px;
  width: 461px;
`,L=i.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;
`,ct=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  letter-spacing: -0.24px;
  width: 461px;
  list-style: none;
`,m=i.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
`,v=i.span`
  color: #3470ff;
  font-weight: 600;
`,dt=i.a`
  width: 168px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,ht=document.getElementById("modal-root"),pt=({car:t,onClose:n})=>{const{id:o,make:s,model:r,year:d,rentalPrice:u,address:p,type:a,accessories:f,mileage:O,img:T,fuelConsumption:M,engineSize:R,description:P,functionalities:B,rentalConditions:b}=t,D=p.split(",")[1],_=p.split(",")[2],C=(l=>{const g={},y=l.split(`
`)[0].split(" ");return g.conditionText=y.slice(0,2).join(" "),g.minAge=y[y.length-1],g})(b);z.useEffect(()=>{const l=g=>{g.code==="Escape"&&n()};return window.addEventListener("keydown",l),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",l),document.body.style.overflow="visible"}},[n]);const A=l=>{l.target===l.currentTarget&&n()};return $.createPortal(e.jsx(tt,{onClick:A,children:e.jsxs(et,{children:[e.jsx(X,{style:nt,onClick:n}),e.jsx(ot,{src:T,alt:s,loading:"lazy",width:"469",height:"314"}),e.jsxs(it,{children:[e.jsx(st,{children:e.jsxs(rt,{children:[s," ",e.jsxs(lt,{children:[r,", "]}),d]})}),e.jsxs(j,{children:[e.jsx(c,{children:D}),e.jsx(c,{children:_}),e.jsxs(c,{children:["Id: ",o]}),e.jsxs(c,{children:["Year: ",d]}),e.jsxs(c,{children:["Type: ",a]})]}),e.jsxs(j,{children:[e.jsxs(c,{children:["Fuel Consumption: ",M]}),e.jsxs(c,{children:["Engine Size: ",R]})]}),e.jsx(at,{children:P}),e.jsx(L,{children:"Accessories and functionalities:"}),e.jsx(j,{children:f.map(l=>e.jsx(c,{children:l},l))}),e.jsx(j,{children:B.map(l=>e.jsx(c,{children:l},l))}),e.jsx(L,{children:"Rental Conditions:"}),e.jsxs(ct,{children:[e.jsx(m,{children:e.jsxs("p",{children:[C.conditionText,e.jsxs(v,{children:[" ",C.minAge]})]})}),e.jsx(m,{children:b.split(`
`)[1]}),e.jsx(m,{children:b.split(`
`)[2]}),e.jsxs(m,{children:["Mileage:"," ",e.jsx(v,{children:O.toLocaleString("en-US")})]}),e.jsxs(m,{children:["Price: ",e.jsx(v,{children:u})]})]})]}),e.jsx(dt,{href:"tel:+380730000000",children:"Rental car"})]})}),ht)},xt=i.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`,ut=i.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`,ft=i.img`
  width: 100%;
  height: 268px;
  display: block;
  object-fit: cover;
`,gt=i.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`,mt=i.div`
  width: 100%;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
`,jt=i.button`
  width: 100%;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  transition: background 0.3s ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`,S=i.button`
  position: absolute;
  padding: 0;
  border: none;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background: none;
  cursor: pointer;
`,wt=i.span`
  color: #3470ff;
`,bt=({car:t})=>{const n=H(q),[o,s]=z.useState(!1),r=Y(),d=()=>s(f=>!f),u=()=>{r(Z(t))},p=()=>{r(G(t))},a=n.find(function(f){return f.id===t.id});return e.jsxs(e.Fragment,{children:[e.jsxs(xt,{children:[e.jsxs(ut,{children:[e.jsx(ft,{src:t.img,alt:`Image ${t.make} ${t.model} `}),a?e.jsx(S,{type:"button",onClick:p,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",fill:"#3470FF",stroke:"#3470FF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}):e.jsx(S,{type:"button",onClick:u,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",stroke:"white",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsxs(gt,{children:[e.jsxs("p",{children:[t.make," ",e.jsx(wt,{children:t.model}),", ",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(mt,{children:[t.address.split(",")[1]," | ",t.address.split(",")[2]," |"," ",t.rentalCompany," | ",t.type," | ",t.model," | ",t.mileage," |"," ",t.accessories[0]]}),e.jsx(jt,{type:"button",onClick:d,children:"Learn more"})]}),o&&e.jsx(pt,{onClose:d,car:t})]})},yt=i.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
  column-gap: 29px;
  margin: 25px 0 25px;
`,Lt=({cars:t})=>e.jsx(yt,{children:t.map(n=>e.jsx(bt,{car:n},n.id))});export{Lt as C,q as s,Y as u};
