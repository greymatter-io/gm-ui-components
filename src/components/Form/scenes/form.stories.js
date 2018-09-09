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
import Button from "../../Button";

const stories = storiesOf("Components|Form", module);

stories.add(
  "Form Inputs",
  withInfo("A checkbox form input with a label.")(() => {
    const labelPosition = select(
      "labelPosition",
      ["top", "bottom", "left", "right"],
      "left"
    );
    const label = text("Label", "");
    const value = text("Value", "");
    const hint = text("Hint", "");
    const readonly = boolean("Read-only", false);
    const disabled = boolean("Disabled", false);
    const required = boolean("Required", false);

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
            label={label || "Checkbox"}
            disabled={disabled}
            hint={hint}
          />
          <Checkbox
            labelPosition={labelPosition}
            label={label || "Checkbox"}
            disabled={disabled}
            hint={hint}
          />
          <Radio
            labelPosition={labelPosition}
            name="radioGroup"
            label={label || "Radio Button"}
            disabled={disabled}
            defaultChecked={true}
            hint={hint}
          />
          <Radio
            labelPosition={labelPosition}
            name="radioGroup"
            label={label || "Radio Button"}
            disabled={disabled}
            hint={hint}
          />
        </Fieldset>
        <Select
          labelPosition={labelPosition}
          label={label || "Select input"}
          disabled={disabled}
          required={required}
          hint={hint}
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
        <InputRange
          label={label || "Range input"}
          labelPosition={labelPosition}
          disabled={disabled}
          hint={hint}
        />
        <Button type="danger" label={label || "Cancel"} />
        <Button label={label || "Default"} />
        <Button type="primary" label={label || "Submit"} />
        <Textarea
          labelPosition={labelPosition}
          label={label || "Textarea"}
          value={value}
          disabled={disabled}
          readonly={readonly}
          required={required}
          hint={hint}
        />
        <InputText
          labelPosition={labelPosition}
          label={label || "Text input"}
          value={value}
          disabled={disabled}
          readonly={readonly}
          required={required}
          hint={hint}
        />
        <InputEmail
          labelPosition={labelPosition}
          label={label || "Email input"}
          value={value}
          disabled={disabled}
          readonly={readonly}
          required={required}
          hint={hint}
        />
        <InputNumber
          labelPosition={labelPosition}
          label={label || "Number input"}
          value={value}
          disabled={disabled}
          readonly={readonly}
          required={required}
          hint={hint}
        />
        <InputPassword
          labelPosition={labelPosition}
          label={label || "Password input"}
          value={value}
          disabled={disabled}
          readonly={readonly}
          required={required}
          hint={hint}
        />
        <InputSearch
          labelPosition={labelPosition}
          label={label || "Search input"}
          value={value}
          disabled={disabled}
          readonly={readonly}
          required={required}
          hint={hint}
        />
        <InputTelephone
          labelPosition={labelPosition}
          label={label || "Telephone input"}
          value={value}
          disabled={disabled}
          readonly={readonly}
          required={required}
          hint={hint}
        />
        <InputUrl
          label={label || "Url input"}
          value={value}
          labelPosition={labelPosition}
          disabled={disabled}
          readonly={readonly}
          required={required}
          hint={hint}
        />
      </div>
    );
  })
);
