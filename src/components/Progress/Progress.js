import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

const CONIC_SUPPORT_REQUIREMENTS = 'conic-gradient(var(--fill-color, currentColor) calc(3.6deg * var(--percent, 100)))';

// Animations
const indeterminateBar = keyframes`
  from {
    transform: scaleX(1.5) translateX(-100%);
    /* background-position-x: -100%; */
  } to {
    transform: scaleX(1.5) translateX(100%);
    /* background-position-x: 100%; */
  }
`;

const indeterminatePie = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

// Progress Component
const Progress = styled.progress.attrs(props => ({
  value: (props.value)
    ? Math.min(props.reverse
      ? (props.max - props.value / props.max)
      : props.value, props.max)
    : undefined,
  style: {
    ...props.style,
    "--percent": Math.min((props.reverse ? (props.max - props.value / props.max) : props.value / props.max), props.max) || undefined,

    // CSS Variables for the fallback Pie style
    "--lt-25": (props.value / props.max * 100) <= 25 ? 1 : 0,
    "--gt-25": (props.value / props.max * 100) > 25 ? 1 : 0,
    "--lt-50": (props.value / props.max * 100) <= 50 ? 1 : 0,
    "--gt-50": (props.value / props.max * 100) > 50 ? 1 : 0,
    "--lt-75": (props.value / props.max * 100) <= 75 ? 1 : 0,
    "--gt-75": (props.value / props.max * 100) > 75 ? 1 : 0,
  }
}))`
  /* Reset element style */
  appearance: none;
  position: relative;
  background-color: transparent;

  /* Very basic default styling */
  border: 1px solid;

  /* Set some default values */
  --change-smoothing-duration: 0.1s;
  --change-smoothing-timing-function: ease;
  --indeterminate-bar-animation-duration: 1.1s;
  --indeterminate-bar-animation-timing-function: linear;
  --indeterminate-pie-circle-animation-duration: 0.9s;
  --indeterminate-pie-circle-animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67); // Default follows Microsoft's FluentUI style: https://developer.microsoft.com/en-us/fluentui#/controls/web/spinner
  
  
  /* Brower-specific selectors have to be separated, because
  some browsers will ignore a selector that includes another
  browser's styles */
  &::-webkit-progress-bar {
    background: transparent;
  } &::-moz-progress-bar {
    background: transparent;
  } &::-ms-fill {
    background: transparent;
  }

  /* Reverse inverts the value recieved to the element,
  and also flips the progress bar on the y axis. */
  ${props => props.reverse && css`
    transform: scaleX(-1);
  `}

  /* Bar style mostly uses default progress element
  behavior, but with a more minimal style. */
  ${props => props.shape === 'bar' && css`
    width: 10em;
    height: 1em;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.CORNER_RADIUS_INPUT};

    &::-webkit-progress-value {
      background: var(--fill-color, currentColor);
      transition: width var(--change-smoothing-duration) var(--change-smoothing-timing-function);
    } &::-moz-progress-bar {
      background: var(--fill-color, currentColor);
      transition: width var(--change-smoothing-duration) var(--change-smoothing-timing-function);
    } &::-ms-fill {
      background: var(--fill-color, currentColor);
      transition: width var(--change-smoothing-duration) var(--change-smoothing-timing-function);
    }

    // Indeterminate style for when value is undefined
    //
    // Normally we'd use the :indeterminate pseudo-class,
    // but this also captures the case where the value
    // prop itself exists but the value is undefined.
    ${props => !props.value && css`

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        transform-origin: center center;
      }

      /* Scrolling gradient */
      &:after{
        background-position: center;
        background-image: linear-gradient(to right, transparent 0%, var(--fill-color, currentColor) 45%, var(--fill-color, currentColor) 55%, transparent 100%);
        animation: ${indeterminateBar} var(--indeterminate-bar-animation-duration) var(--indeterminate-bar-animation-timing-function) infinite;
        opacity: ${({ theme }) => theme.OPACITY_LIGHT};
      }

      /* Light (opacity) background color */
      &:before {
        background: var(--fill-color, currentColor);
        opacity: ${({ theme }) => theme.OPACITY_LIGHTEST};
      }
    `}
  `}

  /* Pie & circle styles
  Circle is the same as pie, except that it sets a value
  to --mask-image, to cut out the center of the pie. */
  ${props => (props.shape === 'pie' || props.shape === 'circle') && css`
    position: relative;
    width: 1em;
    height: 1em;
    border-radius: 1000em;
    clip-path: circle(50% at 50% 50%);

    /* Indeterminate style for pies and circles */
    ${props => !props.value && css`
      /* Set the size to 1/6 */
      --percent: 0.125 !important;
      /* And make it spin */
      animation: ${indeterminatePie} var(--indeterminate-pie-circle-animation-duration) var(--indeterminate-pie-circle-animation-timing-function) infinite ${props => props.reverse ? 'reverse' : ''};
    `}

    ${props.shape === 'circle' && css`
      --circle-width: 0.125em;
      /* Difference between the hypoteneuse of a square
      and the diameter of a circle
      =  (Math.sqrt(2) / 2) - (1 / 2) */
      --magic-offset: 0.20710678118654757em;
      --mask: radial-gradient(
        circle at center,
        transparent 0%,
        transparent calc(100% - var(--magic-offset) - var(--circle-width) - 1px),
              black calc(100% - var(--magic-offset) - var(--circle-width))
        );
        mask-image: var(--mask);
    `}

    /* The browser's fill doesn't quite work
    here so we turn off the default progress fills... */
    &::-webkit-progress-value {
      display: none;
    } &::-moz-progress-bar {
      display: none
    } &::-ms-fill {
      display: none
    }

    /* ...And create a new fill with either a simple
    conic gradient... */
    @supports (background-image: ${CONIC_SUPPORT_REQUIREMENTS}) {
      /* We can't transition background gradients now, but maybe someday... */
      /* transition: background var(--change-smoothing-duration) var(--change-smoothing-timing-function); */
      background-image:
        conic-gradient(
          var(--fill-color, currentColor) calc(3.6deg * (var(--percent) * 100)),
          transparent calc(3.6deg * (var(--percent) * 100))
        );
    }

    /* ...Or a giant, math-heavy approximation of one...

    Older browser support (Pre-11 IE) requires some fun math.
    Thanks to https://ffoodd.github.io/chaarts/pie-charts.html for
    climbing that mountain. */
    @supports not (background-image: ${CONIC_SUPPORT_REQUIREMENTS}) {
      &:after {
        content: '';
        left: 50%;
        position: absolute;
        top: 50%;
        transform-origin: center center;
        background: var(--fill-color, currentColor);
        transition: clip-path var(--change-smoothing-duration) var(--change-smoothing-timing-function);

        --value: calc(var(--percent) * 100);
        --radius: 1em;
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
        transform: translate(-50%,-50%);
        width: var(--radius);
      }
    }
  `}
`;

Progress.defaultProps = {
  shape: 'bar',
  // 'max' on a progress element defaults to 1 anyway,
  // but setting it here ensures it's available for
  // important calcuations inside the component.
  max: 1,
}

Progress.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number.isRequired,
  shape: PropTypes.oneOf(['pie', 'bar', 'circle']),
  reverse: PropTypes.bool,
};

Progress.displayName = "Progress";

export default Progress;