import styled from 'styled-components'
import { Body as EarthIcon } from '@styled-icons/ionicons-solid/'
import { Brain as AirIcon } from '@styled-icons/boxicons-solid'
import { Heart as WaterIcon } from '@styled-icons/entypo/'
import { Sun as FireIcon } from '@styled-icons/boxicons-solid/'
import { useState } from 'react'

type Pos = {
  top: string
  left: string
  rotate: string
}

const POSITIONS: Pos[] = [
  {
    top: '8.8%',
    left: '49%',
    rotate: '11.25deg',
  },
  {
    top: '14.4%',
    left: '62.4%',
    rotate: '33.75deg',
  },
]

const COLORS = {
  water: 'var(--color-water)',
  air: 'var(--color-air)',
  earth: 'var(--color-earth)',
  fire: 'var(--color-fire)',
}

type Props = {
  type: 'water' | 'air' | 'earth' | 'fire'
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
}

export default function SubSubElement(props: Props) {
  const POSITION: Pos = POSITIONS[props.position - 1]
  const COLOR = COLORS[props.type]

  const [hover, setHover] = useState(false)

  function handleClick() {
    console.log('Clicou')
  }

  function handleClickMouseEnter() {
    setHover(true)
  }

  function handleClickMouseLeave() {
    setHover(false)
  }

  return (
    <Wrapper pos={POSITION} hover={hover}>
      <Bg pos={POSITION} color={COLOR}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.73 55.44">
          <path
            onMouseEnter={handleClickMouseEnter}
            onMouseLeave={handleClickMouseLeave}
            onClick={handleClick}
            d="m94.73 55.44 10-50.28A268.454 268.454 0 0 0 52.36 0C34.78 0 17.24 1.73 0 5.16l10 50.28c27.97-5.56 56.76-5.56 84.73 0z"
          />
        </svg>
      </Bg>
      <Icon pos={POSITION}>
        {props.type === 'air' && <AirIcon />}
        {props.type === 'earth' && <EarthIcon />}
        {props.type === 'water' && <WaterIcon />}
        {props.type === 'fire' && <FireIcon />}
      </Icon>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ pos: Pos; hover: boolean }>`
  /* aspect-ratio: 1 / 1; */
  position: absolute;
  width: 16.3%;
  top: ${(p) => p.pos.top};
  left: ${(p) => p.pos.left};
  /* border: 1px solid red; */
  transition: scale 0.3s, filter 0.3s;
  scale: ${(p) => (p.hover ? '1.05' : '1')};
  z-index: ${(p) => (p.hover ? '9999' : '999')};
  filter: ${(p) =>
    p.hover
      ? 'drop-shadow(0 0 5vh rgb(0 0 0 / 0.7))'
      : 'drop-shadow(0 0 1vh rgb(0 0 0 / 0.4))'};
  /* border: 1px dotted yellow; */
`

const Bg = styled.div<{ pos: Pos; color: string }>`
  fill: ${(p) => p.color};
  svg > path {
    cursor: pointer;
  }
  rotate: ${(p) => p.pos.rotate};
  /* border: 1px solid white; */
`

const Icon = styled.div<{ pos: Pos }>`
  /* border: 1px solid white; */
  pointer-events: none;
  width: 30%;
  aspect-ratio: 1 / 1;
  position: absolute;
  top: 20%;
  left: 35%;
`