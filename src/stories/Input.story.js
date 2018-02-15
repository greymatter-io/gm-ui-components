import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, boolean, text } from "@storybook/addon-knobs/react";
import { Input } from "../components";
import NumberInput from "../components/Input/NumberInput";
import TextInput from "../components/Input/TextInput";
import PasswordInput from "../components/Input/PasswordInput";
import EmailInput from "../components/Input/EmailInput";
import Textarea from "../components/Input/Textarea";

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

stories.add("All Types", () => {
  return (
    <div style={{ width: "50vw" }}>
      <TextInput
        name="text-input"
        stretch={boolean("stretch", false)}
        label="Text"
        placeholder={text("Placeholder", "")}
        hintText={text("")}
        autofocus={true}
      />
      <NumberInput
        name="number-input"
        stretch={boolean("stretch", false)}
        label="Number"
        placeholder={text("Placeholder", "")}
        hintText={text("")}
        required={boolean("required?", false)}
      />
      <PasswordInput
        name="password-input"
        stretch={boolean("stretch", false)}
        label="Password"
        placeholder={text("Placeholder", "")}
        hintText={text("")}
        required={boolean("required?", false)}
      />
      <EmailInput
        name="email-input"
        stretch={boolean("stretch", false)}
        label="Email"
        placeholder={text("Placeholder", "")}
        hintText={text("")}
        required={boolean("required?", false)}
      />
      <Textarea
        name="email-input"
        stretch={boolean("stretch", false)}
        label="Textarea"
        placeholder={text("Placeholder", "")}
        hintText={text("")}
        required={boolean("required?", false)}
      />
    </div>
  );
});