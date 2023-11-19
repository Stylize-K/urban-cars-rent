import styled from "styled-components";

export const CarsItem = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const PhotoWrapper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
`;
export const Photo = styled.img`
  width: 100%;
  height: 268px;
  display: block;
  object-fit: cover;
`;
export const MainInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;
export const AdiitionalInfo = styled.div`
  width: 100%;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
`;
export const ButtonMore = styled.button`
  width: 100%;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
`;
export const ButtonHeart = styled.button`
  width: 46px;
  height: 46px;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
`;

export const Span = styled.span`
  color: #3470ff;
`;
