import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { spacingScale } from "style/styleFunctions";
import { PropTypes } from "prop-types";
import Tooltip from "../Tooltip";

import { IconPerson } from "../Glyphs";

const Wrap = styled(Tooltip)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) =>
    transparentize(1 - theme.OPACITY_LIGHTEST, theme.COLOR_INTENT_INFO)};
  color: ${({ theme }) => theme.COLOR_INTENT_INFO};
  border-radius: ${({ theme }) => theme.CORNER_RADIUS_CARD_SM};
  padding: ${spacingScale(0.25)} ${spacingScale(1)};
  text-decoration: none;
  transition: all 0.15s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) =>
      transparentize(
        1 - theme.OPACITY_LIGHTEST - 0.1,
        theme.COLOR_INTENT_INFO
      )};
  }
`;

const Preview = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-areas: "header" "gallery" "description" "details";
  grid-gap: 2px;
  min-width: 400px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  margin-right: auto;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_MEDIUM};
`;

const Number = styled.div`
  justify-self: flex-end;
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
`;

const Icon = styled.div`
  justify-self: flex-end;
`;

const Gallery = styled.div`
  grid-area: gallery;
  display: grid;
  max-height: 100px;
  overflow: hidden;
  max-width: 30em;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.COLOR_KEYLINE_DEFAULT};
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
  grid-gap: 1px;

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.div`
  grid-area: description;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
`;

const Details = styled.div`
  grid-area: details;
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};

  div + div {
    margin-left: 8px;
  }

  span {
    color: ${({ theme }) => theme.COLOR_CONTENT_DEFAULT};
  }
`;

Entity.propTypes = {};

Entity.defaultProps = {};

/**
 * Description of your component
 */
export default function Entity({ name, number, description, gallery }) {
  let preview = (
    <Preview>
      <Header>
        <Name>{name || "—"}</Name>
        {number && <Number>{number}</Number>}
        <Icon>
          <IconPerson />
        </Icon>
      </Header>
      {gallery && (
        <Gallery>
          {gallery.map(imageUrl => {
            return <img src={imageUrl} />
          })}
        </Gallery>
      )}
      {description && <Description>{description}</Description>}
      <Details>
        <div>
          <span>4</span> Sources
        </div>
        <div>
          <span>180</span> Associations
        </div>
        <div>
          <span>83</span> Instances
        </div>
        <div>
          <span>22</span> Video
        </div>
        <div>
          <span>572</span> Photo
        </div>
      </Details>
    </Preview>
  );

  return (
    <>
      {/* {preview} */}
      {/* <hr /> */}
      <Wrap content={preview} position="right" href="#">
        <Name>{name || "Entity"}</Name>
        <IconPerson />
      </Wrap>
    </>
  );
}

Entity.displayName = "Entity";
