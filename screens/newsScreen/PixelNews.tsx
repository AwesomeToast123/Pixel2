import { FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import PNews from '../../components/pixelNews';

const PixelNews = () => {

  const [sampleNews, setsampleNews] = useState([{
    id: '1',
    title: 'pixel bash coming soon',
    desc: 'wowowowwo'
  }, {
    id: '2',
    title: 'pixel man here!',
    desc: 'Hello world'
  }, {
    id: '3',
    title: 'Hello world',
    desc: 'Hello world'
  }]);

  return (
    <View style={styles.container}>
      <Text style={styles.pixelNews}>PIXEL NEWS</Text>
      <FlatList
        data={sampleNews}
        renderItem={({ item, index }) => (
          <PNews news={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  pixelNews: {
    fontSize: 60
  },
});

export default PixelNews;
