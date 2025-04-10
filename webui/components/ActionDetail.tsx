import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Action Type</Text>
          <Text style={styles.actionType}>{action.action}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Store</Text>
          <Text style={styles.jsonData}>{JSON.stringify(action.store, null, 2)}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Action Data</Text>
          <Text style={styles.jsonData}>{JSON.stringify(action.actionData, null, 2)}</Text>
        </View>
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
