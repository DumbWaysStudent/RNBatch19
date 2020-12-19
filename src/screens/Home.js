import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container, Header, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import axios from 'axios';

const Home = () => {

  const [listPost, setListPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getPost = () => {
    setIsLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      setListPost(res.data);
      setIsLoading(false);
    })
    .catch(() => {
      setIsLoading(false);
      alert("Error fetching data")
    })
  }

  useEffect(() => {
    getPost()
  }, [])

  const renderItem = ({item}) => {
    return (
      <ListItem avatar key={item.id}>
        <Body>
          <Text>{item.title}</Text>
          <Text note>{item.body}</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    )
  }

  return (
    <Container>
      <Header />
      <List>
        <FlatList
          data={listPost}
          refreshing={isLoading}
          onRefresh={getPost}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </List>
    </Container>
  );
}

export default Home;