import React from 'react'
import styled from 'styled-components'
import Element from './element'
import Ego from './element/ego'
import Sou from './element/sou'

export default function Outro() {
  return (
    <Wrapper>
      <Layer>
        <Element type="title" title="CRIANÇA" color="#149b18" />
        <Element type="title" title="JOVEM" color="#22a1b8" />
        <Element type="title" title="ADULTO" color="#9a22b8" />
        <Element type="title" title="ANCIÃO" color="#90a516" />
        <Element type="title" title="ILUMINAÇÃO" color="#d6581e" />
        <Element type="sou" title="CORPO">
          <Sou title="sou o que tenho" />
        </Element>
        <Element type="sou" title="REPUTAÇÃO">
          <Sou title="sou o que pensam de mim" />
        </Element>
        <Element type="sou" title="MENTE">
          <Sou title="sou o que penso de mim" />
        </Element>
        <Element type="sou" title="CONSCIÊNCIA">
          <Sou title="sou o que observa" />
        </Element>
        <Element type="sou" title="sou">
          <Sou title="sou o que sou" />
        </Element>
        <Element type="ego" title="inconsciente" subTitle="(possessivo)">
          <Ego text="EU em MIM" text2="VC para MIM" position={1} />
        </Element>
        <Element type="ego" title="inconsciente" subTitle="(possessivo)" />
        <Element type="ego" title="inconsciente" subTitle="(possessivo)" />
        <Element type="ego" title="inconsciente" subTitle="(possessivo)" />
        <Element type="ego" title="inconsciente" subTitle="(possessivo)" />
        <Element type="title" title="posse" />
        <Element type="title" title="tempo" />
        <Element type="title" title="ciclos" />
        <Element type="title" title="propósito" />
        <Element type="title" title="imortalidade" />
        <Element type="title" title="brincar" />
        <Element type="title" title="estudar" subTitle="(as 4 dimensões)" />
        <Element type="title" title="trabalhar" subTitle="(os 4 corpos)" />
        <Element type="title" title="estudar" subTitle="(os 4 elementos)" />
        <Element type="title" title="integrar" />
      </Layer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  height: 95vh;
  width: 60vw;
  position: relative;
  outline: white 2px solid;
`
const Layer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 25% 12% 21% 21% 21%;
`
