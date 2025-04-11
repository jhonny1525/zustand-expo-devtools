import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import ReactJsonViewCompare from 'react-json-view-compare';

interface ActionDetailProps {
  action: {
    action: string;
    store: any;
    actionData: any;
  } | null;
}

const ActionDetail: React.FC<ActionDetailProps> = ({ action }) => {
  const [activeTab, setActiveTab] = useState<'diff' | 'current'>('diff');

  if (!action) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No action selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'diff' && styles.activeTab]}
          onPress={() => setActiveTab('diff')}
        >
          <Text style={[styles.tabText, activeTab === 'diff' && styles.activeTabText]}>Diff</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'current' && styles.activeTab]}
          onPress={() => setActiveTab('current')}
        >
          <Text style={[styles.tabText, activeTab === 'current' && styles.activeTabText]}>Current State</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>{activeTab === 'diff' ? 'Difference' : 'Current State'}</Text>
      <ScrollView style={styles.scrollView}>
        {activeTab === 'diff' ? (
          <ReactJsonViewCompare oldData={action.store} newData={action.actionData} />
        ) : (
          <ReactJsonViewCompare oldData={{}} newData={action.actionData} />
        )}
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
    padding: 10,
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
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4da6ff', // Lighter blue for dark mode
  },
  tabText: {
    fontSize: 16,
    color: '#a0a0a0', // Lighter gray for dark mode
  },
  activeTabText: {
    color: '#4da6ff', // Lighter blue for dark mode
    fontWeight: 'bold',
  },
});

export default ActionDetail;
