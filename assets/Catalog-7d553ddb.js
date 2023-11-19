import{R as i,u as p,c as d,s,j as e,r as a,f as l,a as x}from"./index-63532656.js";function c(t=i){const n=t===i?p:d(t);return function(){const{store:o}=n();return o}}const u=c();function h(t=i){const n=t===i?u:c(t);return function(){return n().dispatch}}const f=h(),g=t=>t.cars.items,m=s.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`,j=s.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`,b=s.img`
  width: 100%;
  height: 268px;
  display: block;
  object-fit: cover;
`,w=s.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`,y=s.div`
  width: 100%;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
`,C=s.button`
  width: 100%;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
`;s.button`
  width: 46px;
  height: 46px;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
`;const k=s.span`
  color: #3470ff;
`,v=({car:t})=>e.jsxs(m,{children:[e.jsx(j,{children:e.jsx(b,{src:t.img,alt:`Image ${t.make} ${t.model} `})}),e.jsxs(w,{children:[e.jsxs("p",{children:[t.make," ",e.jsx(k,{children:t.model}),", ",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(y,{children:[t.address.split(",")[1]," | ",t.address.split(",")[2]," |"," ",t.rentalCompany," | ",t.type," | ",t.model," | ",t.mileage," |"," ",t.accessories[0]]}),e.jsx(C,{type:"button",children:"Learn more"})]}),R=s.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
  column-gap: 29px;
  margin: 50px 0 100px;
`,S=({cars:t})=>e.jsx(R,{children:t.map(n=>e.jsx(v,{car:n},n.id))}),L=()=>{const[t,n]=a.useState(1),r=f();a.useEffect(()=>{r(l(t))},[t]);const o=x(g);return e.jsx("div",{children:e.jsx(S,{cars:o})})};export{L as default};
