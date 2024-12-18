export type HeroDropDownProps = {
  dropDownState: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
  options: string[];
  selectOption: (option:string) => void
};