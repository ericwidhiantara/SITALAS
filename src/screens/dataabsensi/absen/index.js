import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Text,
  Left,
  Right,
  Body,
  ListItem,
  List,
  View,
  Thumbnail,
  Radio
} from "native-base";
import { Image, Alert } from "react-native";
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import styles from "./styles";
class Absen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: false,
      radio2: true,
      radioStatus: false,
      data: [],
    };
  }
  componentDidMount() {
    this.setState({ ActivityIndicator_Loading: true }, () => {
      this.setState({ refreshing: true });
      const url =
        "https://ericwidhiantara.000webhostapp.com/sitalas/getDataMahasiswa.php";
      //this.setState({ loading: true });
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false
          });
        });
    });
    /*this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.componentDidMount.bind(this);
      }
    );*/
  }
  toggleRadio = () => {
    const { radioStatus } = this.state;
    this.setState({ radioStatus: !radioStatus });
  };

  toggleRadio1() {
    this.setState({
      radio1: true,
      radio2: false
    });
  }
  toggleRadio2() {
    this.setState({
      radio1: false,
      radio2: true
    });
  }
  getVal(val) {
    //console.warn(val);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(index, value) {
    this.setState({
      type: value
    });
  }
  render() {
    const { radioStatus } = this.state;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Absensi</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <List
            dataArray={this.state.data}
            renderRow={item => (
              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        "https://ericwidhiantara.000webhostapp.com/sitalas/img/" +
                        (item.foto ? item.foto : "user.png")
                    }}
                  />
                </Left>
                <Body>
                  <Text>{item.nim}</Text>
                  <Text numberOfLines={1} note>
                    {item.name}
                  </Text>
                </Body>
                <Right>
                  <View style={{ height: 40 }}>
                    <RadioGroup
                      size={15}
                      onSelect={(index, value) => this.onSelect(index, value)}
                    >
                      <RadioButton value={"hadir"}>
                        <Text>Hadir</Text>
                      </RadioButton>
                      <RadioButton value={"tidakhadir"}>
                        <Text>Tidak Hadir</Text>
                      </RadioButton>
                    </RadioGroup>
                  </View>
                </Right>
              </ListItem>
            )}
          />
          <Body>
            <Button onPress={()=> Alert.alert("Sukses!")}>
              <Text>Submit</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

export default Absen;
