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
    borderLeftColor: '#e0e0e0',
  },
  scrollView: {
    flex: 1,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  actionType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  jsonData: {
    fontSize: 14,
    fontFamily: 'monospace',
  },
});

export default ActionDetail;
