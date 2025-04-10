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
      <ScrollView style={styles.scrollView}>
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.actionItem, selectedActionIndex === index && styles.selectedActionItem]}
            onPress={() => onSelectAction && onSelectAction(action, index)}
          >
            <Text style={styles.actionType}>{action.action}</Text>
            <Text style={styles.actionData}>{JSON.stringify(action.actionData, null, 2)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  actionItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  selectedActionItem: {
    backgroundColor: '#e6f2ff',
    borderLeftColor: '#0056b3',
  },
  actionType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  actionData: {
    fontSize: 14,
    fontFamily: 'monospace',
  },
});

export default ActionList;
