import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import Toast from "./toast";

const InputBreak: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const Emoji = (props) => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );

  return (
    <div className="border-2 border-orange-600 my-8 rounded-lg p-5 spread-8">
      <h1 className="text-lg">Have you tried this product during your stay?</h1>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>Yes</Radio>
        <Radio value={2}>No</Radio>
      </Radio.Group>

      <h1 className="text-lg pt-4">How do you like the product?</h1>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="b">
          <Emoji symbol="🙂" />
        </Radio.Button>
        <Radio.Button value="c">
          <Emoji symbol="😀" />
        </Radio.Button>
        <Radio.Button value="d">
          <Emoji symbol="😁" />
        </Radio.Button>
      </Radio.Group>

      <div className="pt-4">
        <Toast/>
      </div>
    </div>
  );
};

export default InputBreak;
