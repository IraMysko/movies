import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

import { RootState } from '../store/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
