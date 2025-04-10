import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

interface StoreListProps {
  storeNames: string[];
  onSelectStore: (storeName: string) => void;
  selectedStore: string | null;
}

const StoreList: React.FC<StoreListProps> = ({ storeNames, onSelectStore, selectedStore }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {storeNames.map((storeName) => (
          <TouchableOpacity
            key={storeName}
            style={[
              styles.storeItem,
              selectedStore === storeName && styles.selectedStoreItem
            ]}
            onPress={() => onSelectStore(storeName)}
          >
            <Text 
              style={[
                styles.storeText,
                selectedStore === storeName && styles.selectedStoreText
              ]}
            >
              {storeName}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
    height: '100%',
  },
  scrollView: {
    flex: 1,
  },
  storeItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  selectedStoreItem: {
    backgroundColor: '#f0f0f0',
  },
  storeText: {
    fontSize: 16,
  },
  selectedStoreText: {
    fontWeight: 'bold',
  },
});

export default StoreList;