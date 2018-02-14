import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean } from "@storybook/addon-knobs/react";
import SectionHeader from "../components/SectionHeader";
import SubsectionHeader from "../components/SubsectionHeader";
import LongformText from "../components/LongformText";

const stories = storiesOf("Text", module);

const LongformTextContent = `
<p><b>Saratov Airlines Flight 703</b> (<b>6W703</b>/<b>SOV703</b>)<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">[a]</a></sup> was a domestic passenger flight from <a href="/wiki/Moscow_Domodedovo_Airport" title="Moscow Domodedovo Airport">Moscow Domodedovo Airport</a> to <a href="/wiki/Orsk_Airport" title="Orsk Airport">Orsk Airport</a>. On 11 February 2018, the aircraft serving the flight, an <a href="/wiki/Antonov_An-148" title="Antonov An-148">Antonov An-148-100B</a>, crashed shortly after take-off, killing all 71 people on board&nbsp;— 65 passengers and 6 crew.</p>
`

stories.addDecorator(withKnobs);

stories.add("All", () => {
  return (
    <div style={{ width: "100vw" }}>
      <SectionHeader label={"Section Header"} />
      <LongformText dangerouslySetInnerHTML={{ __html: LongformTextContent }} />
      <SubsectionHeader label={"Subsection Header"} />
      <LongformText dangerouslySetInnerHTML={{ __html: LongformTextContent }} />
    </div>
  );
});


stories.add("Section Header", () => {
  return (
    <div style={{ width: "100vw" }}>
      <SectionHeader label={"test"} />
    </div>
  );
});


stories.add("Subsection Header", () => {
  return (
    <div style={{ width: "100vw" }}>
      <SubsectionHeader label={"test"} />
    </div>
  );
});
