import styled from "styled-components";

export const CardContainer = styled.div`
  font: 20px Helvetica, Arial;
  color: #000;
  margin-top: 3em;
  padding: 0;
  overflow-x: hidden;
  height: 800px;
`;

export const CardWrapper = styled.div`
  position: relative;
  margin-left: 15%;
  border: 2px solid #ddd;
  border-radius: 12px;
  margin-bottom: 2em;
  height: 200px;
  width: 300px;
  float: left;
`;
export const CardWrapper2 = styled.div`
  position: relative;
  margin-left: 15%;
  border: 2px solid #ddd;
  border-radius: 12px;
  margin-bottom: 2em;
  height: 200px;
  width: 300px;
  float: left;
`;
export const CardHeader = styled.div`
  height: 70px;
  background: #82a4e3;
  border-radius: 12px 12px 0px 0px;
  color: #fff;
`;

export const CardTitle = styled.div`
  margin-top: -15px;
  float: left;
`;

export const Cardh3 = styled.h3`
  margin: 12px auto 0 7px;
  padding: 10px;
`;
export const CardFooter = styled.div`
  margin-left: 8px;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  float: right;
  padding-left: 50px;
`;

export const Img1 = styled.img`
  width: 100px;
  height: 105px;
  float: left;
  padding-left: 50px;
  margin-left: -50px;
  margin-top: 10px;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    margin-top: -100px;
  }
`;
export const CardWrap = styled.div`
  height: 500px;
`;

export const CardUl = styled.ul`
  width: 50%;
  float: left;
  padding-left: 17px;
`;
export const CardLi = styled.li`
  list-style-type: none;
`;
