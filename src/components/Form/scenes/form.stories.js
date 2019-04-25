import React from "react";

import { storiesOf } from "@storybook/react";
import { text, select, boolean } from "@storybook/addon-knobs";

import Fieldset from "./../components/Fieldset";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Textarea from "./Textarea";
import InputField from "./InputField";
import InputRange from "./InputRange";
import Select from "./Select";
import Button from "../../Button";

const stories = storiesOf("Scenes|Form", module);

const props = {
  base: () => ({
    hint: text("hint", "Hint lorem ipsum dolor sit amet"),
    disabled: boolean("disabled", false),
    required: boolean("required", false)
  }),
  button: () => ({}),
  inputField: () => ({
    placeholder: text("placeholder", ""),
    labelPosition: select(
      "labelPosition",
      ["top", "bottom", "left", "right"],
      "top"
    )
  })
};

stories.add(
  "Form Inputs",
  () => {
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
        <InputField
          {...baseProps}
          {...inputFieldProps}
          label={text("label")}
          type={select(
            "type",
            [
              "text",
              "search",
              "number",
              "password",
              "email",
              "telephone",
              "url"
            ],
            "text"
          )}
        />
      </div>
    );
  },
  {
    info: {
      text: "A checkbox form input with a label."
    }
  }
);
