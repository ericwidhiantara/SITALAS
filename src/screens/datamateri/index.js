import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Thumbnail,
  Text,
  Body,
  Left,
  Right,
  View,
  Fab,
  IconNB
} from "native-base";
import styles from "./styles";

const logo = require("../../../assets/splashscreen.png");
const cover = require("../../../assets/web-cover1.png");

class Materi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Materi</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1 }}>
          <Content padder>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={styles.mb10}>Materi 1</Text>
              <Text>Materi ada di sini</Text>

              <Text style={styles.mb10}>Materi 2</Text>
              <Text>Materi 2</Text>
            </View>
          </Content>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() =>
              this.props.navigation.navigate("TambahMateri")
            }
          >
            <IconNB name="md-add" />
          </Fab>
        </View>
      </Container>
    );
  }
}

export default Materi;
