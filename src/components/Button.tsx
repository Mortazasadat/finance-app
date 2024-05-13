import { sizes, variants } from "../../lib/variants";

export const Button = (props: any) => {
  return (
    <button
      {...props}
      className={`${
        props.variants ? variants[props.variants] : variants["default"]
      } ${props.size ? sizes[props.size] : sizes["base"]} ${props.className} `}
    >
      {props.children}{" "}
    </button>
  );
};
