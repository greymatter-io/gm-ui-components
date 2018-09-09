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

const props = {
  base: () => ({
    hint: text("Hint", "Hint lorem ipsum dolor sit amet"),
    disabled: boolean("Disabled", false),
    required: boolean("Required", false)
  }),
  button: () => ({}),
  inputField: () => ({
    placeholder: text("Placeholder", ""),
    labelPosition: select(
      "labelPosition",
      ["top", "bottom", "left", "right"],
      "top"
    )
  })
};

stories.add(
  "Form Inputs",
  withInfo("A checkbox form input with a label.")(() => {
    const baseProps = props.base();
    const buttonProps = props.button();
    const inputFieldProps = props.inputField();

    return (
      <div>
        <Fieldset>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Checkbox
              {...baseProps}
              labelPosition="right"
              label={"Checkbox"}
              defaultChecked={true}
            />
            <Checkbox {...baseProps} labelPosition="right" label={"Checkbox"} />
            <Radio
              {...baseProps}
              labelPosition="right"
              name="radioGroup"
              group="radioGroup"
              label={"Radio Button"}
              defaultChecked={true}
            />
            <Radio
              {...baseProps}
              labelPosition="right"
              name="radioGroup"
              group="radioGroup"
              label={"Radio Button"}
            />
          </div>
        </Fieldset>
        <Select
          {...baseProps}
          labelPosition={inputFieldProps.labelPosition}
          label={"Select input"}
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
          {...baseProps}
          labelPosition={inputFieldProps.labelPosition}
          label={"Range input"}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Button
            type="danger"
            {...baseProps}
            {...buttonProps}
            label={"Cancel"}
          />
          <Button {...baseProps} {...buttonProps} label={"Default"} />
          <Button
            type="primary"
            {...baseProps}
            {...buttonProps}
            label={"Submit"}
          />
        </div>
        <Textarea {...baseProps} {...inputFieldProps} label={"Textarea"} />
        <InputText {...baseProps} {...inputFieldProps} label={"Text input"} />
        <InputEmail {...baseProps} {...inputFieldProps} label={"Email input"} />
        <InputNumber
          {...baseProps}
          {...inputFieldProps}
          label={"Number input"}
        />
        <InputPassword
          {...baseProps}
          {...inputFieldProps}
          label={"Password input"}
        />
        <InputSearch
          {...baseProps}
          {...inputFieldProps}
          label={"Search input"}
        />
        <InputTelephone
          {...baseProps}
          {...inputFieldProps}
          label={"Telephone input"}
        />
        <InputUrl {...baseProps} {...inputFieldProps} label={"Url input"} />
      </div>
    );
  })
);
