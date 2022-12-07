import styled from 'styled-components';

export const ContactListUl = styled.ul`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;
export const ContactListLi = styled.li`
  display: flex;

  align-items: center;
  justify-content: space-between;

  list-style-position: inside;
  width: 450px;
  padding: 20px;
`;
export const BtnDelete = styled.button`
  margin-left: 18px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
  transition: transform 500ms;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;
