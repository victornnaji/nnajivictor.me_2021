export type SetValue = (value: any) => void;

export type LoadingContextInterface = [
  isLoading: Boolean,
  setIsLoading: SetValue
];

export type MenuContextInterface = [
  isOpen: Boolean,
  setIsOpen: SetValue,
]

export type AnimatingContextInterface = [
  animating: Boolean,
  setAnimating: SetValue,
]