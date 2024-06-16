import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderCloseButton = styled.button`
  width: 66px;
  height: 22px;
  font-family: Inter;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.44px;
  background: #ffffff;
`

export const HeaderCenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.p`
  font-family: Inter;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.44px;
`

export const Text = styled.p`
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.07px;
  color: #8a8a8e;
`

export const HeaderMenu = styled.nav`
  cursor: pointer;
`
export const MenuImg = styled.img`
  width: 28px;
  height: 28px;
  padding: 0px 5.25px 0px 5.25px;
`
