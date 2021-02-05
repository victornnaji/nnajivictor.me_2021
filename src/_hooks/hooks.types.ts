export type SetValue = (value: any) => void;
export interface LoadingContextInterface {
  isLoading: any;
  setIsLoading: SetValue;
}
export interface MenuContextInterface {
  isOpen: any;
  setIsOpen: SetValue;
}
export interface AnimatingContextInterface {
  animating: any;
  setAnimating: SetValue;
}