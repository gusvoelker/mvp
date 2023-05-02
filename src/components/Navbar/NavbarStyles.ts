import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 24px 32px;
  gap: 32px;
  background: white;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
  gap: 44px;
  width: 238px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 218px;
  height: 56px;
`;

export const Logo = styled.img`
  width: 56px;
  height: 56px;
`;

export const HeadingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 150px;
  height: 41px;
`;

export const DinnerTime = styled.h1`
  width: 150px;
  height: 22px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #09090a;
`;

export const NameText = styled.h2`
  width: 150px;
  height: 19px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #1f1f22;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 218px;
  height: 56px;
  background-color: #f5f5f5;
  border-radius: 16px;
`;

export const SearchContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  padding-left: 10px;
  gap: 16px;
  width: 186px;
  height: 24px;
`;

export const SearchText = styled.span`
  width: 146px;
  height: 22px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #2a2a2e;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 218px;
  background: #ffffff;
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 218px;
  height: 56px;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 186px;
  height: 24px;
`;

export const IconBox = styled.div`
  width: 24px;
  height: 24px;
`;

export const NavText = styled.span`
  width: 83px;
  height: 22px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #09090a;
  white-space: nowrap;
  line-height: 16px;
`;
