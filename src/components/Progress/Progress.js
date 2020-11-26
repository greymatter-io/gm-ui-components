import React from "react";
import styled from "styled-components";

Progress.propTypes = {};

const Indicator = styled.div`
  font-size: 2em;

  ${props => props.kind === 'bar' && `
    width: 10em;
    height: 1em;
    position: relative;

    &:after {
      content: '';
      border-radius: inherit;
      position: absolute;
      height: 100%;
      left: 0;
      background: currentColor;
      width: calc(var(--percent) * 100%);
    }
  `}

  ${props => props.kind === 'pie' && `
    position: relative;
    font-size: 1.5em;
    width: 1em;
    height: 1em;
    border-radius: 1000em;
    clip-path: circle(50% at 50% 50%);

    &:after {
      content: '';
      left: 50%;
      position: absolute;
      top: 50%;
      transform-origin: center center;
      background: currentColor;

      --radius: 1.1em;
      --value: calc(var(--percent) * 100);
      --start: 0;
      --part: calc( var(--value) * 3.6 );
      --main-angle: calc( var(--part) - ( 90 * ( var(--gt-25, 0) + var(--gt-50, 0) + var(--gt-75, 0) ) ) );
      --β: calc( var(--main-angle) * 0.01745329251 );
      --α: calc( ( 90 - var(--main-angle) ) * 0.01745329251 );
      --sin-term-β-1: var(--β);
      --sin-term-β-2: calc((var(--β) * var(--β) * var(--β)) / 6);
      --sin-term-β-3: calc((var(--β) * var(--β) * var(--β) * var(--β) * var(--β)) / 120);
      --sin-term-β-4: calc((var(--β) * var(--β) * var(--β) * var(--β) * var(--β) * var(--β) * var(--β)) / 5040);
      --sin-term-β-5: calc((var(--β) * var(--β) * var(--β) * var(--β) * var(--β) * var(--β) * var(--β) * var(--β) * var(--β)) / 362880);
      --sin-β: calc(var(--sin-term-β-1) - var(--sin-term-β-2) + var(--sin-term-β-3) - var(--sin-term-β-4) + var(--sin-term-β-5));
      --sin-term-α-1: var(--α);
      --sin-term-α-2: calc((var(--α) * var(--α) * var(--α)) / 6);
      --sin-term-α-3: calc((var(--α) * var(--α) * var(--α) * var(--α) * var(--α)) / 120);
      --sin-term-α-4: calc((var(--α) * var(--α) * var(--α) * var(--α) * var(--α) * var(--α) * var(--α)) / 5040);
      --sin-term-α-5: calc((var(--α) * var(--α) * var(--α) * var(--α) * var(--α) * var(--α) * var(--α) * var(--α) * var(--α)) / 362880);
      --sin-α: calc(var(--sin-term-α-1) - var(--sin-term-α-2) + var(--sin-term-α-3) - var(--sin-term-α-4) + var(--sin-term-α-5));
      --pos-B: calc( var(--sin-β) * 50 );
      --pos-A: calc( var(--sin-α) * 50 );
      --polygon: polygon(
        50% 50%,
        50% 0%,
        100% 0%,
        calc( 50% + ( var(--pos-B) * 1% * var(--lt-25, 1) ) + ( var(--gt-25, 0) * 50% ) ) calc( 50% - ( var(--pos-A) * 1% * var(--lt-25, 1) ) ),
        calc( 50% + ( var(--gt-25, 0) * 50% ) )                      calc( 50% + ( var(--gt-25, 0) * 50% ) ),
        calc( 50% + ( var(--pos-A) * 1% * var(--lt-50, 1) ) + ( var(--gt-50, 0) * 50% ) ) calc( 50% + ( var(--pos-B) * 1% * var(--lt-50, 1) ) + ( var(--gt-50, 0) * 50% ) ),
        calc( 50% - ( var(--gt-50, 0) * 50% ) )                      calc( 50% + ( var(--gt-50, 0) * 50% ) ),
        calc( 50% - ( var(--pos-B) * 1% * var(--lt-75, 1) ) - ( var(--gt-75, 0) * 50% ) ) calc( 50% + ( var(--pos-A) * 1% * var(--lt-75, 1) ) ),
        calc( 50% - ( var(--gt-75, 0) * 50% ) )                      calc( 50% - ( var(--gt-75, 0) * 50% ) ),
        calc( 50% - ( var(--pos-A) * 1% * var(--gt-75, 0) ) )        calc( 50% - ( var(--pos-B) * 1% * var(--gt-75, 0) ) ),
        50% 50%
      );
      clip-path: var(--polygon);
      height: var(--radius);
      --mask: radial-gradient( circle at center, #fff 0%, #fff calc(var(--radius) / 2), transparent 0 );
      mask-image: var(--mask);
      transform: translate(-50%,-50%);
      width: var(--radius);
    }
  `}
`;

Progress.defaultProps = {
  percent: 0.5,
  kind: 'pie'
}

export default function Progress({ kind, percent, ...props }) {

  let style = {
    "--percent": percent,
    "--lt-25": (percent * 100) <= 25 ? 1 : 0,
    "--gt-25": (percent * 100) > 25 ? 1 : 0,
    "--lt-50": (percent * 100) <= 50 ? 1 : 0,
    "--gt-50": (percent * 100) > 50 ? 1 : 0,
    "--lt-75": (percent * 100) <= 75 ? 1 : 0,
    "--gt-75": (percent * 100) > 75 ? 1 : 0,
  }

  return (
    <Indicator kind={kind} className="progress" style={style} />
  );
}

Progress.displayName = "Progress";