import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

interface ActionListProps {
  actions:
    | Array<{
        action: string;
        store: any;
        actionData: any;
      }>
    | undefined;
  onSelectAction?: (action: { action: string; store: any; actionData: any }, index: number) => void;
  selectedActionIndex?: number;
}

const ActionList: React.FC<ActionListProps> = ({
  actions,
  onSelectAction,
  selectedActionIndex,
}) => {
  if (!actions || actions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No actions available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Actions</Text>
      <ScrollView style={styles.scrollView}>
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.actionItem, selectedActionIndex === index && styles.selectedActionItem]}
            onPress={() => onSelectAction && onSelectAction(action, index)}
          >
            <Text style={styles.actionType}>{action.action}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#1e1e1e', // Dark background
    width: 200,
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
  emptyText: {
    fontSize: 16,
    color: '#a0a0a0', // Lighter gray for dark mode
    textAlign: 'center',
    marginTop: 20,
  },
  actionItem: {
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#2d2d2d', // Darker item background
    borderRadius: 5,
    borderLeftWidth: 3,
    borderLeftColor: '#4da6ff', // Lighter blue for dark mode
  },
  selectedActionItem: {
    backgroundColor: '#777777', // Slightly lighter for selected items
    borderLeftColor: '#80bdff', // Brighter blue for selected items
  },
  actionType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#e0e0e0', // Light text for dark background
  },
  actionData: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#e0e0e0', // Light text for dark background
  },
});

export default ActionList;
