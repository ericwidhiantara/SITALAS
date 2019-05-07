import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./screens/home";
import Mahasiswa from "./screens/datamahasiswa";
import DetailMahasiswa from "./screens/datamahasiswa/detailmahasiswa";
import Absen from "./screens/dataabsensi/absen";
import Materi from "./screens/datamateri";
import TambahMahasiswa from "./screens/form/tambahmahasiswa";
import TambahMateri from "./screens/form/tambahmateri";
import UpdateMahasiswa from "./screens/form/updatemahasiswa";
import PilihTanggal from "./screens/dataabsensi";
import SideBar from "./screens/sidebar";
import Login from "./screens/form/login";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Mahasiswa: { screen: Mahasiswa },
    PilihTanggal: { screen: PilihTanggal },
    Materi: { screen: Materi },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },

    Absen: { screen: Absen },
    TambahMahasiswa: { screen: TambahMahasiswa },
    TambahMateri: { screen: TambahMateri },
    UpdateMahasiswa: { screen: UpdateMahasiswa },
    DetailMahasiswa: { screen: DetailMahasiswa },
    Login: {screen: Login}
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
