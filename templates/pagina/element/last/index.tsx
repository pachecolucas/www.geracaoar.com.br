import styled from 'styled-components'

type Props = {
  img: number
}

export default function Last(props: Props) {
  return (
    <Wrapper>
      <img
        style={{ height: '100%', width: '100%' }}
        src={`pagina/last${props.img}.jpg`}
        alt=""
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media only screen and (max-device-width: 414px) {
    min-height: 50px;
  }
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`
