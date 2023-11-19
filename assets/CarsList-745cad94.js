import{R as r,b as h,c as x,s as o,a as u,j as e,d as f,e as C}from"./index-34bf0956.js";function a(t=r){const s=t===r?h:x(t);return function(){const{store:i}=s();return i}}const g=a();function m(t=r){const s=t===r?g:a(t);return function(){return s().dispatch}}const w=m(),j=t=>t.favorites.items,v=o.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`,k=o.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`,L=o.img`
  width: 100%;
  height: 268px;
  display: block;
  object-fit: cover;
`,b=o.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`,y=o.div`
  width: 100%;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
`,F=o.button`
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
`,d=o.button`
  position: absolute;
  padding: 0;
  border: none;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background: none;
  cursor: pointer;
`,R=o.span`
  color: #3470ff;
`,S=({car:t})=>{const s=u(j),n=w(),i=()=>{n(f(t))},c=()=>{n(C(t))},l=s.find(function(p){return p.id===t.id});return e.jsxs(v,{children:[e.jsxs(k,{children:[e.jsx(L,{src:t.img,alt:`Image ${t.make} ${t.model} `}),l?e.jsx(d,{type:"button",onClick:c,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",fill:"#3470FF",stroke:"#3470FF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}):e.jsx(d,{type:"button",onClick:i,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:e.jsx("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",stroke:"white",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsxs(b,{children:[e.jsxs("p",{children:[t.make," ",e.jsx(R,{children:t.model}),", ",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(y,{children:[t.address.split(",")[1]," | ",t.address.split(",")[2]," |"," ",t.rentalCompany," | ",t.type," | ",t.model," | ",t.mileage," |"," ",t.accessories[0]]}),e.jsx(F,{type:"button",children:"Learn more"})]})},I=o.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
  column-gap: 29px;
  margin: 50px 0 100px;
`,M=({cars:t})=>e.jsx(I,{children:t.map(s=>e.jsx(S,{car:s},s.id))});export{M as C,j as s,w as u};
