import { combineReducers } from 'redux';

import { AuthReducer } from './Auth/AuthReducer';
import { ScreenWidthReducer } from './Utils/ScreenWidthReducer';
import { ScrollPageReducer } from './Utils/ScrollPageReducer';
import { ShowFooterReducer } from './Utils/ShowFooterReducer';

const rootReducers = combineReducers({
    Auth: AuthReducer,
    ScreenWidth: ScreenWidthReducer,
    ScrollPage: ScrollPageReducer,
    ShowFooter: ShowFooterReducer
})

export default rootReducers;