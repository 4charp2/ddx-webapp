import styled from 'styled-components'
import { Heading, Title } from '../../App.styles'

export const CardCourse = styled.li`
  width: 358px;
  height: 150px;
  position: relative;
`

export const CardImg = styled.img`
  width: 358px;
  height: 150px;
  border-radius: 16px;
`

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 20px;
  left: 20px;
`

export const CardHeading = styled(Heading)`
  color: #ffffff;
`

export const TopBlock = styled.div`
  display: flex;
  gap: 2px;
`

export const TopComplexity = styled.img`
  width: 9px;
  height: 12px;
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CardTitle = styled(Title)`
  color: #ffffff;
`

export const ContentArrow = styled.img`
  width: 29.42px;
  height: 29.42px;
  top: 15.58px;
`
