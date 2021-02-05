import * as React from "react";
import {AnimatingContextInterface} from './hooks.types';

export const AnimatingContext = React.createContext<AnimatingContextInterface | null>(null);

const AnimatingProvider: React.FC = props => {
  const [animating, setAnimating] = React.useState(null);
  return (
    <AnimatingContext.Provider
      value={{
        animating,
        setAnimating,
      }}
      {...props}
     />
  );
};

const useAnimating = () => {
    const context = React.useContext(AnimatingContext);
    if(context === undefined){
        throw new Error(`useAnimating must be used within an AnimatingProvider Context`)
    }
    return context;
}


export {AnimatingProvider, useAnimating}
