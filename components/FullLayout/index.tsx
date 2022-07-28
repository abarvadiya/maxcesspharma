// Components
import Footer from '../Footer'
import Navbar from '../Navbar'
import ScrollToTop from '../shared/BacktoTopButton'
import * as S from './StyledComponents'

interface PropsI {
  children: React.ReactNode
}

const FullLayout = ({ children }: PropsI) => {
  return (
    <>
      <S.Wrapper>
        <header>
          <Navbar />
        </header>
        <S.Main>
          {children}
        </S.Main>
        <Footer />
      </S.Wrapper>
      <ScrollToTop />
    </>
  )
}

export default FullLayout
