import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Fieldset from "./../components/Fieldset";
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
import InputRange from "./InputRange";
import Select from "./Select";

const stories = storiesOf("Components|Form", module);

stories.add(
  "Form Inputs",
  withInfo("A checkbox form input with a label.")(() => {
    const labelPosition = select(
      "labelPosition",
      ["top", "bottom", "left", "right"],
      "right"
    );
    const readonly = boolean("readonly", false);
    const disabled = boolean("disabled", false);

    return (
      <div>
        <Fieldset
          style={{
            display: "flex",
            flexDirection: "row"
          }}
          name="Buttons"
          disabled={disabled}
        >
          <Checkbox
            labelPosition={labelPosition}
            label={text("label", "Checkbox")}
            disabled={disabled}
          />
          <Checkbox
            labelPosition={labelPosition}
            label={text("label", "Checkbox")}
            disabled={disabled}
          />
          <Checkbox
            labelPosition={labelPosition}
            label={text("label", "Checkbox")}
            disabled={disabled}
          />
          <Radio
            labelPosition={labelPosition}
            name="radioGroup"
            label={text("label", "Radio Button")}
            disabled={disabled}
            defaultChecked={true}
          />
          <Radio
            labelPosition={labelPosition}
            name="radioGroup"
            label={text("label", "Radio Button")}
            disabled={disabled}
          />
        </Fieldset>
        <Select
          labelPosition={labelPosition}
          label="Select input"
          disabled={disabled}
        >
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </Select>
        <Textarea
          labelPosition={labelPosition}
          label="Textarea"
          disabled={disabled}
          readonly={readonly}
        />
        <InputText
          labelPosition={labelPosition}
          label="Text input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputEmail
          labelPosition={labelPosition}
          label="Email input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputNumber
          labelPosition={labelPosition}
          label="Number input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputPassword
          labelPosition={labelPosition}
          label="Password input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputSearch
          labelPosition={labelPosition}
          label="Search input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputTelephone
          labelPosition={labelPosition}
          label="Telephone input"
          disabled={disabled}
          readonly={readonly}
        />
        <InputUrl
          label="Url input"
          labelPosition={labelPosition}
          disabled={disabled}
          readonly={readonly}
        />
        <InputRange
          label="Range input"
          labelPosition={labelPosition}
          disabled={disabled}
        />
      </div>
    );
  })
);
