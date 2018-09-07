import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Textarea from "./Textarea";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import InputSearch from "./InputSearch";
import InputUrl from "./InputUrl";
import InputTelephone from "./InputTelephone";
import InputNumber from "./InputNumber";
import InputEmail from "./InputEmail";

const stories = storiesOf("Components|Form", module);

stories.add(
  "Form Inputs",
  withInfo("A checkbox form input with a label.")(() => {
    const readonly = boolean("readonly", false);
    const disabled = boolean("disabled", false);

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Checkbox
            labelPosition={select(
              "labelPosition",
              ["top", "bottom", "left", "right"],
              "right"
            )}
            label={text("label", "Checked")}
            disabled={disabled}
            defaultChecked={true}
          />
          <Radio
            name="radioGroup"
            labelPosition={select(
              "labelPosition",
              ["top", "bottom", "left", "right"],
              "right"
            )}
            label={text("label", "Radio Button")}
            disabled={disabled}
            defaultChecked={true}
          />
          <Radio
            name="radioGroup"
            labelPosition={select(
              "labelPosition",
              ["top", "bottom", "left", "right"],
              "right"
            )}
            label={text("label", "Radio Button")}
            disabled={disabled}
          />
        </div>
        <InputText label="Text input" disabled={disabled} readonly={readonly} />
        <Textarea label="Textarea" disabled={disabled} readonly={readonly} />
        <InputEmail
          label="Email input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputNumber
          label="Number input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputPassword
          label="Password input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputSearch
          label="Search input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputTelephone
          label="Telephone input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputUrl label="Url input" disabled={disabled} readonly={readonly} />
      </div>
    );
  })
);
