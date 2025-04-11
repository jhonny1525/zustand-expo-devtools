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
      <Text style={styles.sectionTitle}>Stores</Text>
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
    borderRightColor: '#333333', // Darker border for dark mode
    height: '100%',
    backgroundColor: '#1e1e1e', // Dark background
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e0e0e0', // Light text for dark background
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  storeItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333333', // Darker border for dark mode
  },
  selectedStoreItem: {
    backgroundColor: '#3a3a3a', // Slightly lighter for selected items
  },
  storeText: {
    fontSize: 16,
    color: '#e0e0e0', // Light text for dark background
  },
  selectedStoreText: {
    fontWeight: 'bold',
    color: '#4da6ff', // Lighter blue for selected text
  },
});

export default StoreList;
