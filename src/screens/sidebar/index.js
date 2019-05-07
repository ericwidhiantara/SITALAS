import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Body,
  View
} from "native-base";
import { ImageBackground } from "react-native";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "Absensi",
    route: "PilihTanggal",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
  {
    name: "Master Data Mahasiswa",
    route: "Mahasiswa",
    icon: "md-person",
    bg: "#C5F442"
  }

  /*{
    name: "Master Data Materi",
    route: "Materi",
    icon: "md-book",
    bg: "#cc0000",
  },*/
  /*{
    name: "Master Data Jadwal",
    route: "NHToast",
    icon: "albums",
    bg: "#C5F442",
  }, */
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      nim: "",
      name: "",
      foto: ""
    };
  }
  componentDidMount() {
    this.setState({
      nim: this.props.navigation.state.params.nim,
      name: this.props.navigation.state.params.name,
      foto: this.props.navigation.state.params.foto
    });
  }
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <ImageBackground source={drawerCover} style={styles.drawerCover}>
            <View style={{ flex: 1, marginLeft: 20, marginRight: 10 }}>
              <Image
                square
                style={styles.drawerImage}
                source={{
                  uri:
                    "https://ericwidhiantara.000webhostapp.com/sitalas/img/" +
                    this.state.foto
                }}
              />
            </View>
            <Text style={styles.userText}>{this.state.nim}</Text>
            <Text style={styles.userText}>{this.state.name}</Text>
          </ImageBackground>
          <List
            dataArray={datas}
            renderRow={data => (
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {data.types && (
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text style={styles.badgeText}>{`${
                        data.types
                      } Types`}</Text>
                    </Badge>
                  </Right>
                )}
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
