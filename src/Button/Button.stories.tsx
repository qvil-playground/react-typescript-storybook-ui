import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
// import { wInfo } from "../../.storybook/utils";
import { wInfo } from "../utils";
import { text, boolean } from "@storybook/addon-knobs/react";

(storiesOf("components/Button", module) as any).addWithJSX(
  "Default Button",
  wInfo(`
    ### Notes

    This is a button

    ### Usage
    ~~~js
    <Button
      label={'Enroll'}
      disabled={false}
      onClick={() => alert('hello there')}
    />
    ~~~
  `)(() => (
    <Button
      title={text("title", "title")}
      disabled={boolean("disabled", false)}
      onClick={() => alert("Hello")}
    >
      Hello
    </Button>
  ))
);
