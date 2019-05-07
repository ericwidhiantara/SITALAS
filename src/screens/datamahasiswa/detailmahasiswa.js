import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Fab,
  IconNB,
  View,
  List,
  ListItem,
  Thumbnail,
  Card,
  CardItem,
  Item,
  Label,
  ActionSheet
} from "native-base";
import { Image, Alert } from "react-native";
import styles from "./styles";
var BUTTONS = [
  { text: "Update", icon: "md-add", iconColor: "#25de5b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 1;
var CANCEL_INDEX = 2;
class DetailMhs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      data: [],
      nim: ""
    };
  }
  componentDidMount() {
    this.setState(
      {
        ActivityIndicator_Loading: true,
        nim: this.props.navigation.state.params.nim
      },
      () => {
        fetch(
          "https://ericwidhiantara.000webhostapp.com/sitalas/getDataMahasiswaNim.php",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              nim: this.state.nim
            })
          }
        )
          .then(response => response.json())
          .then(responseJson => {
            console.log("Data didapat", responseJson);
            this.setState({
              data: responseJson,
              error: responseJson.error || null,
              loading: false,
              refreshing: false,
              ActivityIndicator_Loading: false
            });
          })
          .catch(error => {
            console.error(error);
            this.setState({
              ActivityIndicator_Loading: false
            });
          });
      }
    );
  }
  update = (nim) => {
    this.props.navigation.navigate("UpdateMahasiswa", {
      nim: nim
    });
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Mahasiswa</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1 }}>
          <Content padder>
            <List
              dataArray={this.state.data}
              renderRow={item => (
                <ListItem>
                  <Body>
                    <View
                      style={{
                        flex: 1,
                        marginBottom: 25,
                        marginTop: 25,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <View
                        style={{
                          borderRadius: 100,
                          width: 150,
                          height: 150,
                          borderColor: "#000",
                          borderWidth: 1,
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Image
                          source={{
                            uri:
                              "https://ericwidhiantara.000webhostapp.com/sitalas/img/" +
                              (item.foto ? item.foto : "user.png")
                          }}
                          style={{
                            borderRadius: 100,
                            width: 150,
                            height: 150,
                            borderColor: "#000",
                            borderWidth: 1,
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        />
                      </View>
                    </View>
                  </Body>
                </ListItem>
              )}
            />
            <List
              dataArray={this.state.data}
              renderRow={item => (
                <ListItem>
                  <Body>
                    <Card>
                      <CardItem header bordered>
                        <Text>Detail Mahasiswa</Text>
                      </CardItem>
                      <CardItem header bordered>
                        <Body>
                          <Text>NIM</Text>
                        </Body>
                        <Right>
                          <Text>{item.nim}</Text>
                        </Right>
                      </CardItem>
                      <CardItem header bordered>
                        <Body>
                          <Text>Nama Mahasiswa</Text>
                        </Body>
                        <Right>
                          <Text>{item.name}</Text>
                        </Right>
                      </CardItem>
                      <CardItem header bordered>
                        <Body>
                          <Text>E-mail</Text>
                        </Body>
                        <Right>
                          <Text>{item.email}</Text>
                        </Right>
                      </CardItem>
                      <CardItem header bordered>
                        <Body>
                          <Text>No Telpon</Text>
                        </Body>
                        <Right>
                          <Text>{item.no_telp}</Text>
                        </Right>
                      </CardItem>
                      <CardItem header bordered>
                        <Body>
                          <Text>Prodi</Text>
                        </Body>
                        <Right>
                          <Text>{item.prodi}</Text>
                        </Right>
                      </CardItem>
                      <CardItem header bordered>
                        <Body>
                          <Text>Komunitas</Text>
                        </Body>
                        <Right>
                          <Text>{item.komunitas}</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  </Body>
                </ListItem>
              )}
            />
            <Body>
              <Button
                onPress={() =>
                  ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: "Pilih aksi"
                    },
                    buttonIndex => {
                      if (buttonIndex === 0) {
                        this.props.navigation.navigate("UpdateMahasiswa", {
                          nim: this.state.data[0].nim,
                          name: this.state.data[0].name,
                          email: this.state.data[0].email,
                          no_telp: this.state.data[0].no_telp,
                          komunitas: this.state.data[0].komunitas,
                          prodi: this.state.data[0].prodi,
                          image: this.state.data[0].foto
                        });
                      } else if (buttonIndex === 1) {
                        Alert.alert(
                          'Hapus Akun',
                          'Yakin ingin menghapus ' + this.state.data[0].name + ' ?',
                          [
                            { text: 'Batal', onPress: () => console.log('Cancel ditekan'), style: 'cancel' },
                            {
                              text: 'OK', onPress: () => this.setState({ Loading: true }, () => {
                                fetch('https://ericwidhiantara.000webhostapp.com/sitalas/deleteMahasiswa.php',
                                  {
                                    method: 'POST',
                                    headers:
                                    {
                                      'Accept': 'application/json',
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(
                                      {
                                        nim: this.state.data[0].nim,
                                      })

                                  }).then((response) => response.json()).then((responseJsonFromServer) => {
                                    Alert.alert(responseJsonFromServer);
                                    this.props.navigation.navigate("Mahasiswa");

                                  }).catch((error) => {
                                    console.error(error);
                                    this.setState({ Loading: false });

                                  });
                              })
                            },
                          ],
                          { cancelable: true }
                        )
                      }
                    }
                  )
                }
              >
                <Text>Aksi</Text>
              </Button>
            </Body>
          </Content>
        </View>
      </Container>
    );
  }
}

export default DetailMhs;
