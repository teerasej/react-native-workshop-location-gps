import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { Location, Permissions } from 'expo';

export default class App extends React.Component {

  state = {
    location: null,
    errorMessage: null,
    loading: true,
  };


  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    

    return (

      <Container>
        <Header>
          <Body>
            <Title>Nextflow GPS</Title>
          </Body>
        </Header>

        <Content style={styles.content}>

          <Button block onPress={() => { this.getPosition() }}>
            <Text>
              Get GPS
            </Text>
          </Button>
          {report}
        </Content>

      </Container>

    );
  }

  async getPosition() {
    
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 10
  }
})