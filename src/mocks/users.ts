import { Themes, User } from "../models/User";
import pepe from "../assets/pepe-box.png";

export const mockUser: User = {
  id: 1,
  username: "Kevco",
  email: "Kevco@CoolBeans.com",
  avatar: pepe,
  theme: Themes.Dark,
};

export const mockUsers: User[] = [
  {
    id: 2,
    username: "Kevcoolio",
    email: "Kevcoolio@bomb.com",
    theme: Themes.Dark,
  },
  {
    id: 3,
    username: "Otto",
    email: "Otto@bots.com",
    theme: Themes.Light,
  },
  {
    id: 4,
    username: "Michelle",
    email: "MichelleLin@star.com",
    theme: Themes.Light,
  },
  {
    id: 5,
    username: "SillyWilly",
    email: "SillyWilly@WillyNilly.com",
    theme: Themes.Dark,
  },
];
