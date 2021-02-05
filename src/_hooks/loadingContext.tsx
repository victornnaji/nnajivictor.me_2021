import * as React from "react";
import {LoadingContextInterface} from './hooks.types';

export const LoadingContext = React.createContext<LoadingContextInterface | null>(null);

const LoadingProvider: React.FC = props => {
  const [isLoading, setIsLoading] = React.useState(null);
  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
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
