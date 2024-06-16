// import { Link } from 'react-router-dom'
import * as S from './Navigation.styles'

export const Navigation = ({ buttonNav }) => {
  return (
    <S.NavBlock>
      <S.NavOrder>
        {buttonNav.map((button, index) => (
          // <Link to={`/course/${id}`}>
          <S.NavElement key={index}>{button}</S.NavElement>
          // </Link>
        ))}
      </S.NavOrder>
    </S.NavBlock>
  )
}
