import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import beneficiariesReducer, { addBeneficiary } from './beneficiariesSlice';

// Define the persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['beneficiaries'],
};

// Combine reducers
const rootReducer = combineReducers({
  beneficiaries: beneficiariesReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

// Logic to ensure default beneficiaries are always present
const ensureDefaultBeneficiaries = () => {
  const state = store.getState();
  const defaultBeneficiaries = [
    {
      id: '1',
      fullName: 'John Doe',
      address: '123 Main mumbai',
      country: 'India',
      pincode: '12345'
    },
    {
      id: '2',
      fullName: 'Jane Smith',
      address: '456 somewhere in the It world ',
      country: 'India',
      pincode: '67890'
    }
  ];

  // Check if default beneficiaries are already in the state
  defaultBeneficiaries.forEach(beneficiary => {
    if (!state.beneficiaries.beneficiaries.find(b => b.id === beneficiary.id)) {
      store.dispatch(addBeneficiary(beneficiary));
    }
  });
};

// Ensure default beneficiaries are present after the store is rehydrated
persistor.subscribe(() => {
  ensureDefaultBeneficiaries();
});

export { store, persistor };