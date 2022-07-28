import React from "react"

// Components
import * as S from './StyledComponents'

// Utils
import { SpinnerDotted } from 'spinners-react'

interface PropsI {
  children?: React.ReactNode
  onClick?: () => void
  isLoading?: boolean
  type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ children, onClick, isLoading, type }: PropsI) => {
  const isDisabled = isLoading ? true : false
  return (
    <S.Button
      type={type || 'button'}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
      &nbsp;
      {isLoading &&
        <SpinnerDotted
          size={30}
          thickness={200}
          enabled={isLoading}
        />
      }
    </S.Button>
  );
}

export default Button;