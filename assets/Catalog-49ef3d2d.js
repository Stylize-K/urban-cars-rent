import{s as i,r as n,u as l,f as u,j as e}from"./index-5de7d265.js";import{u as d,C as f}from"./CarsList-61d50b96.js";const h=t=>t.cars.items,p=i.button`
  background: none;
  border: none;
  text-align: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`,C=()=>{const[t,r]=n.useState(1),s=l(h),o=d(),a=s.length%12!==0;n.useEffect(()=>{o(u(t))},[o,t]);const c=()=>{r(t+1)};return e.jsxs("div",{children:[e.jsx(f,{cars:s}),!a&&e.jsx(p,{type:"button",onClick:c,children:"Load More"})]})};export{C as default};
