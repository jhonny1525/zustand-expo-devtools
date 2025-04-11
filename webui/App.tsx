import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ActionList from './components/ActionList';
import ActionDetail from './components/ActionDetail';
import StoreList from './components/StoreList';
import useStores from './hooks/useStores';

export default function App() {
  const { stores, storeNames } = useStores();
  const [selectedStore, setSelectedStore] = useState<string | null>(
    storeNames.length > 0 ? storeNames[0] : null,
  );
  const [selectedAction, setSelectedAction] = useState<{
    action: string;
    store: any;
    actionData: any;
  } | null>(null);
  const [selectedActionIndex, setSelectedActionIndex] = useState<number | undefined>(undefined);

  if (!(window as any)?.__REDUX_DEVTOOLS_EXTENSION__) {
    return <Text style={styles.text}>Redux Devtools extension is not present</Text>;
  }

  const handleSelectStore = (storeName: string) => {
    setSelectedStore(storeName);
    setSelectedAction(null);
    setSelectedActionIndex(undefined);
  };

  const handleSelectAction = (
    action: { action: string; store: any; actionData: any },
    index: number,
  ) => {
    setSelectedAction(action);
    setSelectedActionIndex(index);
  };

  // Automatically select the latest action when a new action is received
  useEffect(() => {
    if (selectedStore && stores[selectedStore]?.length > 0) {
      const latestActionIndex = stores[selectedStore].length - 1;
      const latestAction = stores[selectedStore][latestActionIndex];
      setSelectedAction(latestAction);
      setSelectedActionIndex(latestActionIndex);
    }
  }, [stores, selectedStore]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <StoreList
          storeNames={storeNames}
          onSelectStore={handleSelectStore}
          selectedStore={selectedStore}
        />

        <ActionList
          actions={selectedStore ? stores[selectedStore] : undefined}
          onSelectAction={handleSelectAction}
          selectedActionIndex={selectedActionIndex}
        />
        <ActionDetail action={selectedAction} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    padding: 20,
    color: '#e0e0e0', // Light text for dark background
  },
  devHint: {
    color: '#a0a0a0', // Lighter gray for dark mode
  },
  textLink: {
    color: '#4da6ff', // Lighter blue for dark mode
    textDecorationLine: 'underline',
  },
});
