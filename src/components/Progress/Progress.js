import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

const CHANGE_SMOOTHING_DURATION = '0.1s';
const CHANGE_SMOOTHING_TIMING_FUNCTION = 'ease';

const indeterminateBar = keyframes`
  from {
    transform: translateX(-200%);
    
  } to {
    transform: translateX(200%);
  }
`;

const Progress = styled.progress.attrs(props => ({
  style: {
    "--percent": props.reverse
      ? 1 - (props.value / props.max)
      : props.value / props.max,
    "--lt-25": (props.value / props.max * 100) <= 25 ? 1 : 0,
    "--gt-25": (props.value / props.max * 100) > 25 ? 1 : 0,
    "--lt-50": (props.value / props.max * 100) <= 50 ? 1 : 0,
    "--gt-50": (props.value / props.max * 100) > 50 ? 1 : 0,
    "--lt-75": (props.value / props.max * 100) <= 75 ? 1 : 0,
    "--gt-75": (props.value / props.max * 100) > 75 ? 1 : 0,
  }
}))`

  /* Reset default styles */
  appearance: none;

  &::-webkit-progress-bar {
    background: transparent;
  }

  /* temp styles */
  border: 1px solid;
  margin: 1em;
  border-radius: 1em;

  ${props => props.shape === 'bar' && css`
    width: 10em;
    height: 1em;
    overflow: hidden;

    /* &:after { */
    &::-ms-fill,
    &::-webkit-progress-value {
      /* position: absolute; */
      /* top: 0; */
      /* bottom: 0; */
      /* left: 0; */
      background: currentColor;
      /* background: red; */
      /* width: calc(var(--percent) * 100%); */
      transition: width ${CHANGE_SMOOTHING_DURATION} ${CHANGE_SMOOTHING_TIMING_FUNCTION};
    }

    // Indeterminate style for when value is not present
    //
    // Normally we'd use the :indeterminate pseudo-class,
    // but using !props.value also captures the case where
    // the value prop exists but is empty.
    ${props => !props.value && css`
      &:after{
        width: 100%;
        background: none;
        background-image: linear-gradient(to right, transparent, currentColor, transparent);
        animation: ${indeterminateBar} 1s linear infinite ${props => props.reverse && 'reverse'};
      }
    `}
  `}

  ${props => props.shape === 'pie' && css`
    position: relative;
    font-size: 1.5em;
    width: 1em;
    height: 1em;
    border-radius: 1000em;
    clip-path: circle(50% at 50% 50%);

    @supports (background-image: conic-gradient(currentColor calc(3.6deg * var(--percent, 100)))) {
      transition: background-image ${CHANGE_SMOOTHING_DURATION} ${CHANGE_SMOOTHING_TIMING_FUNCTION};
      background-image:
        conic-gradient(
          currentColor calc(3.6deg * (var(--percent) * 100)),
          transparent calc(3.6deg * (var(--percent) * 100))
        );
    }

    @supports not (background-image: conic-gradient(currentColor calc(3.6deg * var(--percent, 100)))) {
      &:after {
        content: '';
        left: 50%;
        position: absolute;
        top: 50%;
        transform-origin: center center;
        background: currentColor;
        transition: clip-path ${CHANGE_SMOOTHING_DURATION} ${CHANGE_SMOOTHING_TIMING_FUNCTION};

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
    }
  `}
`;

Progress.defaultProps = {
  shape: 'bar',
  max: 1
}

Progress.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  shape: PropTypes.oneOf(['pie', 'bar']),
  reverse: PropTypes.bool,
  direction: PropTypes.oneOf(['ltr', 'rtl']),
};

Progress.displayName = "Progress";

export default Progress;