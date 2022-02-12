import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation, { BottomTabNavigator } from './navigation';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import SigninScreen from './screens/authentication/SigninScreen';
import { NativeScreenContainer } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './screens/Profile/profile';
import DrawerComponent from './components/Drawer';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://localhost:6969/graphql',
  cache: new InMemoryCache()
});

export default function App() {

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    );
  }
}
