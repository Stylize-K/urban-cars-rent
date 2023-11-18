import{s as e,j as t}from"./index-7a0b375c.js";const r="/urban-cars-rent/assets/hero_pic-86fe8a25.jpg",n=e.section`
  max-width: 100%;
  height: 400px;
  padding: 60px 20px;

  margin-left: auto;
  margin-right: auto;
  text-align: left;

  background-image: url(${r});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  /* max-width: 1600px;
    height: 600px;
    padding: 180px 200px; */
`,o=e.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  font-size: 24px;
`,i=e.button`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: white;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`,c=()=>t.jsx("main",{children:t.jsxs(n,{children:[t.jsx(o,{children:"One click. Long trip"}),t.jsx(i,{children:"Start"})]})});export{c as default};
