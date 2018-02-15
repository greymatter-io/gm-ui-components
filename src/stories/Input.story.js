import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs/react";
import { Input } from "../components";
import NumberInput from "../components/Input/NumberInput";
import TextInput from "../components/Input/TextInput";
import PasswordInput from "../components/Input/PasswordInput";
import EmailInput from "../components/Input/EmailInput";

const stories = storiesOf("Input", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => {
  return (
    <div style={{ width: "50vw" }}>
      <Input
        style={{
          margin: "10px"
        }}
        label="Default Input"
        placeholder="Default"
        onChange={e => console.log("value changed", e)}
        maxLength={number("maxLength", 100)}
      />
    </div>
  );
});

stories.add("Number", () => {
  return (
    <div style={{ width: "50vw" }}>
      <TextInput
        fieldName="text-input"
        stretch={boolean("stretch", false)}
        label="Text"
        placeholder={text("field Placeholder", "")}
        hintText={text("")}
      />
      <NumberInput
        fieldName="number-input"
        stretch={boolean("stretch", false)}
        label="Number"
        placeholder={text("field Placeholder", "")}
        hintText={text("")}
      />
      <PasswordInput
        fieldName="password-input"
        stretch={boolean("stretch", false)}
        label="Password"
        placeholder={text("field Placeholder", "")}
        hintText={text("")}
      />
      <EmailInput
        fieldName="email-input"
        stretch={boolean("stretch", false)}
        label="Email"
        placeholder={text("field Placeholder", "")}
        hintText={text("")}
      />
    </div>
  );
});