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
  Text,
  View,
  Thumbnail, 
  Picker
} from "native-base";
import { Image, Alert } from "react-native";
import styles from "./styles";
import ImagePicker from "react-native-image-picker";

class FloatingLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nim: "",
      name: "",
      no_telp: "",
      prodi: "",
      komunitas: "",
      email: "",
      password: "",
      image: "",
      srcImg: "",
      uri: "",
      fileName: "",
      hidePassword: true,
      selectedItem: undefined,
    };
  }
  onValueChange(value: string) {
    this.setState({
      prodi: value
    });
  }
  onValueChange2(value: string) {
    this.setState({
      komunitas: value
    });
  }
  showHidePassword = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };
  submitData = () => {
    this.uploadPicture();
    this.setState({ loading_process: true }, () => {
      fetch(
        "https://ericwidhiantara.000webhostapp.com/sitalas/tambahMahasiswa.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nim: this.state.nim,
            name: this.state.name,
            no_telp: this.state.no_telp,
            prodi: this.state.prodi,
            komunitas: this.state.komunitas,
            email: this.state.email,
            password: this.state.password,
            image: this.state.image
          })
        }
      )
        .then(response => response.json())
        .then(responseJsonFromServer => {
          Alert.alert("SUCESS", responseJsonFromServer);

          this.props.navigation.navigate("Mahasiswa");
        })
        .catch(error => {
          console.error(error);

          this.setState({ loading_process: false });
        });
    });
  };
  submitAllData = () => {
    this.submitData();
  };

  choosePicture = () => {
    console.log("upload");
    var ImagePicker = require("react-native-image-picker");
    var options = {
      title: "Pilih Gambar",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };
        console.log(source);
        console.log(response.fileName);
        this.setState({
          srcImg: source,
          uri: response.uri,
          fileName: response.fileName,
          image: response.fileName
        });
      }
    });
  };

  uploadPicture = () => {
    console.log("mulai upload");
    this.setState({ loading: true });

    const data = new FormData();
    //data.append('name', 'Fotoku'); // you can append anyone.
    data.append("fileToUpload", {
      uri: this.state.uri,
      type: "image/jpeg", // or photo.type
      name: this.state.fileName
    });
    const url =
      "https://ericwidhiantara.000webhostapp.com/sitalas/uploadFoto.php";
    fetch(url, {
      method: "post",
      body: data
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false
        });
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
            <Title>Tambah Mahasiswa</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Body>
            <Item>
              <Label>Foto Mahasiswa</Label>
            </Item>
            <View
              style={{
                flex: 1,
                marginBottom: 35,
                marginTop: 45,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                large
                transparent
                onPress={this.choosePicture.bind(this)}
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
                  {this.state.srcImg === null ? (
                    <Icon name="camera" />
                  ) : (
                    <Image
                      source={this.state.srcImg}
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
                  )}
                </View>
              </Button>
            </View>
          </Body>
          <Form>
            <Item floatingLabel>
              <Label>NIM</Label>
              <Input
                keyboardType={"numeric"}
                onChangeText={nim => this.setState({ nim })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input
                autoCapitalize={"words"}
                onChangeText={name => this.setState({ name })}
              />
            </Item>
            <Item floatingLabel>
              <Label>E-mail</Label>
              <Input
                keyboardType={"email-address"}
                autoCapitalize={"none"}
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>No Telpon</Label>
              <Input
                keyboardType={"phone-pad"}
                onChangeText={no_telp => this.setState({ no_telp })}
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
            <Item>
              <Label>Prodi</Label>
              <Picker
                note
                mode="dropdown"
                style={{ width: 120 }}
                selectedValue={this.state.prodi}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Item
                  label="Pendidikan Teknik Informatika"
                  value="Pendidikan Teknik Informatika"
                />
                <Item
                  label="Manajemen Informatika"
                  value="Manajemen Informatika"
                />
                <Item label="Sistem Informasi" value="Sistem Informasi" />

                <Item label="Ilmu Komputer" value="Ilmu Komputer" />
              </Picker>
            </Item>
            <Item last>
              <Label>Komunitas</Label>
              <Picker
                note
                mode="dropdown"
                style={{ width: 120 }}
                selectedValue={this.state.komunitas}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Item
                  label="TKJ"
                  value="TKJ"
                />
                <Item
                  label="Multimedia"
                  value="Multimedia"
                />
                <Item label="Programming" value="Programming" />
              </Picker>
            </Item>
          </Form>
          <Button
            block
            style={{ margin: 15, marginTop: 50 }}
            onPress={this.submitAllData}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default FloatingLabel;
