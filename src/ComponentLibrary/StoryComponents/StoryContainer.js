import styled from 'styled-components';

export const StoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  justify-content: center;

  ${props => props.align === 'center' && (`
    align-items: center;
    justify-content: center;
  `)};
  ${props => props.align === 'left' && (`
    align-items: flex-start;
    justify-content: flex-start;
  `)};
  ${props => props.align === 'right' && (`
    align-items: flex-end;
    justify-content: flex-end;
  `)};
`;