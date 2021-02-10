import * as React from "react";
import {LoadingContextInterface} from './hooks.types';

export const LoadingContext = React.createContext<LoadingContextInterface | true>(true);

const LoadingProvider: React.FC = props => {
  const [isLoading, setIsLoading] = React.useState(true);
  const value = [isLoading, setIsLoading] as LoadingContextInterface;
  return (
    <LoadingContext.Provider
      value={value}
      {...props}
     />
  );
};

const useLoader = () => {
    const context = React.useContext(LoadingContext);
    if(context === undefined){
        throw new Error(`useLoader must be used within a LoadingProvider Context`)
    }
    return context;
}

export {LoadingProvider, useLoader}
