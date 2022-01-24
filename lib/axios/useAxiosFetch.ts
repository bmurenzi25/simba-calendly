import axios from 'axios';
import { useEffect, useReducer } from 'react';

const UseAxiosFetch = (url: string) => {
  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'INIT':
        return { ...state, isLoading: true, isError: false, data: null };
      case 'SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'ERROR':
        return { ...state, isLoading: false, isError: true, data: null };
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetch = async () => {
      dispatch({ type: 'INIT' });
      try {
        const result = await axios(url);
        dispatch({ type: 'SUCCESS', payload: result.data });
      } catch (_) {
        dispatch({ type: 'ERROR' });
      }
    };
    fetch();
  }, [url]);

  return state;
};

export default UseAxiosFetch;
