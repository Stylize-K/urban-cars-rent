import{s as e,u as i,j as t}from"./index-4d772e9d.js";const r="/urban-cars-rent/assets/hero_pic-86fe8a25.jpg",a=e.section`
  max-width: 100%;
  height: 400px;
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`,s=e.img`
  position: absolute;
  top: 100px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-image: url(${r});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -10;
`,c=e.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  font-size: 36px;
  color: #fff;
`,d=e.button`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`,g=()=>{const n=i(),o=()=>{n("/catalog")};return t.jsx("main",{children:t.jsxs(a,{children:[t.jsx(s,{}),t.jsx(c,{children:"One click. Long trip"}),t.jsx(d,{onClick:o,children:"Start"})]})})};export{g as default};
