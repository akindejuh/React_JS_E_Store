import rootReducers from "../Redux/Reducers/Reducers";
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'scandiweb-store',
//     storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducers)
// const store = configureStore({ reducer: persistedReducer, middleware: [] });
// const persistedStore = persistStore(store);

const store = configureStore({ reducer: rootReducers, middleware: [] });

export default store;
// export { persistedStore };
