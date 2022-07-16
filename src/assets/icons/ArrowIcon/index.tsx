import { TProps } from "./types";

export default function ArrowIcon(props: TProps): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" {...props}>
      <path fill="none" stroke="#fff" strokeWidth={3} d="m2 1 6 6-6 6" />
    </svg>
  );
}
