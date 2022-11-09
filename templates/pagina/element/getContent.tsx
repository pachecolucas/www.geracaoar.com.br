import Elemente from 'templates/outro/element'
import Ego from 'templates/outro/element/ego'
import Sou from 'templates/outro/element/sou'
import { Props } from '.'
import styled from 'styled-components'
import HoverElement from './hoverElement'

export default function getContent(type: string, hover: boolean, props: Props) {
  switch (type) {
    case 'circle':
      return (
        <>
          {hover ? (
            <HoverElement
              title={props.title}
              subTitle={props.subTitle}
              text={props.text}
            ></HoverElement>
          ) : (
            <svg
              viewBox="0 0 100 100"
              width="100%"
              height="100%"
              xmlSpace="preserve"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          )}
        </>
      )
    case 'dot':
      return (
        <>
          {hover ? (
            <>
              {props.subType === 'sou' ? (
                <Elemente type="sou" title={props.title}>
                  <Sou title={props.text} />
                </Elemente>
              ) : null}
              {props.subType === 'ego' ? (
                <Elemente
                  type="ego"
                  title={props.title}
                  subTitle={props.subTitle}
                  hover={hover}
                >
                  <Ego text={props.text} text2={props.text2} position={1} />
                </Elemente>
              ) : (
                <></>
              )}
            </>
          ) : (
            <SvgContainer>
              <svg
                viewBox="0 0 100 100"
                width="20%"
                height="20%"
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </SvgContainer>
          )}
        </>
      )
    case '2dot':
      return (
        <>
          {hover ? (
            <div style={{ height: '100%', width: '100%' }}>
              <img
                style={{ height: '100%', width: '100%' }}
                src="ego1.jpg"
                alt=""
              />
            </div>
          ) : (
            <SvgContainer>
              <svg
                viewBox="0 0 100 100"
                width="20%"
                height="20%"
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
              <svg
                viewBox="0 0 100 100"
                width="20%"
                height="20%"
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </SvgContainer>
          )}
        </>
      )
    case '3dot':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="20%"
            height="20%"
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            width="20%"
            height="20%"
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            width="20%"
            height="20%"
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </SvgContainer>
      )
    case '4dot':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="20%"
            height="20%"
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            width="20%"
            height="20%"
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            width="20%"
            height="20%"
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            width="20%"
            height="20%"
            xmlSpace="preserve"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
        </SvgContainer>
      )
    case 'line':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="20" cy="50" r="8" />
            <line
              x1="20"
              y1="50"
              x2="80"
              y2="50"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="80" cy="50" r="8" />
          </svg>
        </SvgContainer>
      )
    case 'diagonalL':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="50%"
            height="50%"
            xmlSpace="preserve"
          >
            <circle cx="15" cy="15" r="15" />
            <line
              x1="15"
              y1="15"
              x2="85"
              y2="85"
              stroke="white"
              strokeWidth="8"
            />
            <circle cx="85" cy="85" r="15" />
          </svg>
        </SvgContainer>
      )
    case 'diagonalR':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="50%"
            height="50%"
            xmlSpace="preserve"
          >
            <circle cx="15" cy="85" r="15" />
            <line
              x1="85"
              y1="15"
              x2="15"
              y2="85"
              stroke="white"
              strokeWidth="8"
            />
            <circle cx="85" cy="15" r="15" />
          </svg>
        </SvgContainer>
      )
    case '3diagonalL':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="25" cy="25" r="7" />
            <line
              x1="25"
              y1="25"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="50" cy="50" r="7" />
            <circle cx="75" cy="75" r="7" />
          </svg>
        </SvgContainer>
      )
    case '3diagonalR':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="25" cy="75" r="7" />
            <line
              x1="75"
              y1="25"
              x2="25"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="50" cy="50" r="7" />
            <circle cx="75" cy="25" r="7" />
          </svg>
        </SvgContainer>
      )
    case '4diagonalL':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="25" cy="25" r="7" />
            <line
              x1="25"
              y1="25"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="42" cy="42" r="7" />
            <circle cx="58" cy="58" r="7" />
            <circle cx="75" cy="75" r="7" />
          </svg>
        </SvgContainer>
      )
    case '4diagonalR':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="75" cy="25" r="7" />
            <line
              x1="75"
              y1="25"
              x2="25"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="58" cy="42" r="7" />
            <circle cx="42" cy="58" r="7" />
            <circle cx="25" cy="75" r="7" />
          </svg>
        </SvgContainer>
      )
    case 'square':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="25" cy="25" r="7" />
            <circle cx="25" cy="75" r="7" />
            <circle cx="75" cy="25" r="7" />
            <circle cx="75" cy="75" r="7" />
            <line
              x1="25"
              y1="25"
              x2="25"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="75"
              y1="25"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="25"
              y1="25"
              x2="75"
              y2="25"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="25"
              y1="75"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </SvgContainer>
      )
    case 'triangle':
      return (
        <SvgContainer>
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="50" cy="25" r="7" />
            <circle cx="75" cy="75" r="7" />
            <circle cx="25" cy="75" r="7" />
            <line
              x1="25"
              y1="75"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="75"
              y1="75"
              x2="50"
              y2="25"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="25"
              y1="75"
              x2="50"
              y2="25"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </SvgContainer>
      )
    default:
      null
      break
  }
}
const SvgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
