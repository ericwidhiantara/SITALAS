import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import { Image, Alert } from "react-native";
import styles from "./styles";

class FloatingLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nim: "",
      password: "",
      hidePassword: true
    };
  }
  showHidePassword = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };
  Login = () => {
    this.setState({ loading_process: true }, () => {
      fetch("https://ericwidhiantara.000webhostapp.com/sitalas/login.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nim: this.state.nim,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          if (this.state.nim == responseJson.nim) {
            this.props.navigation.navigate("Drawer", {
              nim: responseJson.nim,
              name: responseJson.name,
              foto: responseJson.foto
            });
          } else {
            Alert.alert(responseJson.pesan);
          }
        })
        .catch(error => {
          console.error(error);

          this.setState({ loading_process: false });
        });
    });
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>NIM </Label>
              <Input
                keyboardType={"numeric"}
                onChangeText={nim => this.setState({ nim })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={this.state.hidePassword}
                onChangeText={password => this.setState({ password })}
              />
              <Icon
                active
                onPress={this.showHidePassword}
                name={this.state.hidePassword ? "ios-eye" : "ios-eye-off"}
              />
            </Item>
          </Form>
          <Button
            block
            style={{ margin: 15, marginTop: 50 }}
            onPress={this.Login}
          >
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default FloatingLabel;
