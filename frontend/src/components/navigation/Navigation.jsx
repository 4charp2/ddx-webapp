import { useNavigate } from 'react-router-dom'
import * as S from './Navigation.styles'

export const Navigation = ({ buttonNav, setCurrentCourse, typeWorkout }) => {
  const navigate = useNavigate()

  return (
    <S.NavBlock>
      <S.NavOrder>
        {buttonNav?.map((button) => (
          <S.NavElement
            key={button.id}
            onClick={() => setCurrentCourse(button.tag_category)}
            $typeWorkout={typeWorkout}
          >
            {button.name}
          </S.NavElement>
        ))}
      </S.NavOrder>
    </S.NavBlock>
  )
}
