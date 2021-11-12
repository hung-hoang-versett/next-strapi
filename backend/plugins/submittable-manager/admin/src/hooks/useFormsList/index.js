import { useEffect, useReducer, useRef } from 'react';
import { get } from 'lodash';
import init from './init';
import reducer, { initialState } from './reducer';
import clientSubmittable from '../../../../config/functions/submittable';
const useFormsList = (shouldFetchData = true) => {
  const [{ forms, isLoading }, dispatch] = useReducer(reducer, initialState, () =>
    init(initialState, shouldFetchData)
  );

  const isMounted = useRef(true);
  const abortController = new AbortController();

  useEffect(() => {
    if (shouldFetchData) {
      fetchFormsList();
    }

    return () => {
      abortController.abort();
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldFetchData]);

  const fetchFormsList = async () => {
    try {
      dispatch({
        type: 'GET_DATA',
      });
      const client = clientSubmittable();
      const {data} = await client(`/v3/forms`);
      dispatch({
        type: 'GET_DATA_SUCCEEDED',
        data,
      });
    } catch (err) {
      const message = get(err, ['response', 'payload', 'message'], 'An error occured');

      if (isMounted.current) {
        dispatch({
          type: 'GET_DATA_ERROR',
        });

        if (message !== 'Forbidden') {
          strapi.notification.toggle({
            type: 'warning',
            message,
          });
        }
      }
    }
  };

  return { forms, isLoading, getData: fetchFormsList };
};

export default useFormsList;
