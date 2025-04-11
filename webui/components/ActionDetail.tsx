import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ReactJsonViewCompare from 'react-json-view-compare';

interface ActionDetailProps {
  action: {
    action: string;
    store: any;
    actionData: any;
  } | null;
}

const ActionDetail: React.FC<ActionDetailProps> = ({ action }) => {
  if (!action) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No action selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ReactJsonViewCompare oldData={action.store} newData={action.actionData} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#333333', // Darker border for dark mode
    backgroundColor: '#1e1e1e', // Dark background
  },
  scrollView: {
    flex: 1,
  },
  emptyText: {
    fontSize: 16,
    color: '#a0a0a0', // Lighter gray for dark mode
    textAlign: 'center',
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#2d2d2d', // Darker section background
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e0e0e0', // Light text for dark background
  },
  actionType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4da6ff', // Lighter blue for dark mode
  },
  jsonData: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#e0e0e0', // Light text for dark background
  },
});

export default ActionDetail;
