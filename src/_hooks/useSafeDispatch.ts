import React from 'react';

const useSafeDispatch : (D: Function) => () => void = (dispatch: Function) => {
    const mounted = React.useRef(false);
    React.useLayoutEffect(() => {
        mounted.current = true;
        return () => {mounted.current = false}
    }, [])
    return React.useCallback((...args) => (
        mounted.current ? dispatch(...args) : void(0)
    ), [dispatch])
}

export default useSafeDispatch;