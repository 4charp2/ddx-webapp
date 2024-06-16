import styled from 'styled-components'

export const NavBlock = styled.div`
  margin-top: 47px;
`
export const NavOrder = styled.ul`
  display: flex;
  gap: 5px;
`
export const NavElement = styled.li`
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.44px;
  width: 86px;
  text-align: center;
  border: 0px solid #20243940;
  border-bottom-width: 1px;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    color: #ed6929;
    border-color: #ed6929;
    ${({ $typeWorkout }) =>
      $typeWorkout && 'color: #1BA3C4; border-color: #1BA3C4'}
  }
`
