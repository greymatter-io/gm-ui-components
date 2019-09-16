import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { text, boolean } from "@storybook/addon-knobs";

import Entity from "./Entity";

const stories = storiesOf("Components|Entity", module);

const Container = styled.div`
  * + * {
    margin-top: 2px;
  }
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_DEFAULT};
`;

const BartSimpsonGallery = [
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FjYdGfowI7h4%2Fhqdefault.jpg&f=1&nofb=1",
  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.photobucket.com%2Falbums%2Fv166%2Fryanmediocre%2FSimpsons100%2F30.jpg&f=1&nofb=1",
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FB%2FBart_Simpson-logo-B1213E41BF-seeklogo.com.png&f=1&nofb=1"
];
const MargeSimpsonGallery = [
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.fxnetworks.com%2Fcms%2Fprod%2Fshows%2Fthe-simpsons%2Fphotos%2Fsimpsons-character%2FMarge%2Fswsb_character_fact_marge_550x960.png&f=1&nofb=1",
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fakns-images.eonline.com%2Feol_images%2FEntire_Site%2F2017925%2Frs_480x362-171025091537-500-marge-simpson-gif-2-102517.gif%3Ffit%3Dinside%257C900%3Aauto%26output-quality%3D90&f=1&nofb=1",
  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmarieclaire.media.ipcdigital.co.uk%2F11116%2F00007eef0%2F3526%2Fmarge-simpson-mac-t.jpg&f=1&nofb=1"
];
const BartSimpsonDescription = `Bartholomew JoJo "Bart" Simpson is a fictional character in the American
animated television series The Simpsons and part of the Simpson family.
He is voiced by Nancy Cartwright and first appeared on television in The
Tracey Ullman Show short "Good Night" on April 19, 1987...`;
const MargeSimpsonDescription = `Marjorie Jacqueline "Marge" Simpson (née Bouvier) is a fictional character in the American animated sitcom The Simpsons and part of the eponymous family. She is voiced by Julie Kavner and first appeared on television in The Tracey Ullman Show short "Good Night" on April 19, 1987. Marge was created and designed by cartoonist Matt Groening while he was waiting in the lobby of James L. Brooks' office. Groening had been called to pitch a series of shorts based on Life in Hell but instead decided to create a new set of characters. He named the character after his mother Margaret Groening. After appearing on The Tracey Ullman Show for three seasons, the Simpson family received their own series on Fox, which debuted December 17, 1989.`;

stories.add(
  "default",
  () => {
    return (
      <>
        <Heading>Normal</Heading>
        <Container>
          <Entity
            name="Bart Simpson"
            number="2039572652308"
          />
          <Entity
            name="Marge Simpson"
            number="5298212485623"
          />
        </Container>
        <Heading>With Description</Heading>
        <Container>
          <Entity
            name="Bart Simpson"
            description={BartSimpsonDescription}
            number="2039572652308"
          />
          <Entity
            name="Marge Simpson"
            description={MargeSimpsonDescription}
            number="5298212485623"
          />
        </Container>
        <Heading>With Description and Gallery</Heading>
        <Container>
          <Entity
            name="Bart Simpson"
            description={BartSimpsonDescription}
            gallery={BartSimpsonGallery}
            number="2039572652308"
          />
          <Entity
            name="Marge Simpson"
            description={MargeSimpsonDescription}
            gallery={MargeSimpsonGallery}
            number="5298212485623"
          />
        </Container>
      </>
    );
  },
  {
    info: {
      text: "Add component description here. Accepts markdown."
    }
  }
);
