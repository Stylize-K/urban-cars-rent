import{s as i,r as n,a as l,f as u,j as e}from"./index-4d772e9d.js";import{u as d,C as f}from"./CarsList-d4666721.js";const h=t=>t.cars.items,p=i.button`
  background: none;
  margin-bottom: 25px;
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
`,m=()=>{const[t,r]=n.useState(1),o=l(h),s=d(),a=o.length%12!==0;n.useEffect(()=>{s(u(t))},[s,t]);const c=()=>{r(t+1)};return e.jsxs(e.Fragment,{children:[e.jsx(f,{cars:o}),!a&&e.jsx(p,{type:"button",onClick:c,children:"Load More"})]})};export{m as default};
