import { useDevToolsPluginClient, type EventSubscription } from 'expo/devtools';
import {useEffect, useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const client = useDevToolsPluginClient('zustand-expo-devtools');
  const storeRefs = useRef<any>({})

  useEffect(() => {
      const extension = (window as any)?.__REDUX_DEVTOOLS_EXTENSION__
      if(extension){
          const subscriptions: EventSubscription[] = [];

          subscriptions.push(
              client?.addMessageListener('ping', (data) => {
                  if(data.type === 'CONNECT'){
                      storeRefs.current[data.name] = extension?.connect({name:data.name})
                  }
                  if(data.type === 'INIT'){
                      storeRefs.current[data.name]?.init(data.data)
                  }
                  if(data.type === 'UPDATE'){
                      storeRefs.current[data.name]?.send("UPDATE",data.data)
                  }
              })
          );

          return () => {
              for (const subscription of subscriptions) {
                  subscription?.remove();
              }
          };
      }
  }, [client]);

  if(!(window as any)?.__REDUX_DEVTOOLS_EXTENSION__){
      return <Text style={styles.text}>
          Redux Devtools extension is not present
      </Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open the redux devtools from browsers extensions and refresh the application  to start seeing changes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  devHint: {
    color: '#666',
  },
  textLink: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
