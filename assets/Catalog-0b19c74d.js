import{R as r,u as p,c as x,s as n,j as e,r as c,a as u,f as h}from"./index-0ee561ed.js";function a(t=r){const o=t===r?p:x(t);return function(){const{store:s}=o();return s}}const f=a();function g(t=r){const o=t===r?f:a(t);return function(){return o().dispatch}}const m=g(),j=t=>t.cars.items,b=n.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`,w=n.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`,C=n.img`
  width: 100%;
  height: 268px;
  display: block;
  object-fit: cover;
`,y=n.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`,k=n.div`
  width: 100%;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
`,v=n.button`
  width: 100%;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
`;n.button`
  width: 46px;
  height: 46px;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
`;const R=n.span`
  color: #3470ff;
`,S=({car:t})=>e.jsxs(b,{children:[e.jsx(w,{children:e.jsx(C,{src:t.img,alt:`Image ${t.make} ${t.model} `})}),e.jsxs(y,{children:[e.jsxs("p",{children:[t.make," ",e.jsx(R,{children:t.model}),", ",t.year]}),e.jsx("span",{children:t.rentalPrice})]}),e.jsxs(k,{children:[t.address.split(",")[1]," | ",t.address.split(",")[2]," |"," ",t.rentalCompany," | ",t.type," | ",t.model," | ",t.mileage," |"," ",t.accessories[0]]}),e.jsx(v,{type:"button",children:"Learn more"})]}),L=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
  column-gap: 29px;
  margin: 50px 0 100px;
`,I=({cars:t})=>e.jsx(L,{children:t.map(o=>e.jsx(S,{car:o},o.id))}),M=n.button`
  background: none;
  border: none;
  text-align: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
`,P=()=>{const[t,o]=c.useState(1),i=u(j),s=m(),l=i.length%12!==0;c.useEffect(()=>{s(h(t))},[s,t]);const d=()=>{o(t+1)};return e.jsxs("div",{children:[e.jsx(I,{cars:i}),!l&&e.jsx(M,{type:"button",onClick:d,children:"Load More"})]})};export{P as default};
