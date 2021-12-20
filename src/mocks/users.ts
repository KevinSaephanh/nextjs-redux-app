import { User } from "../models/User";
import pepe from "../assets/pepe-box.png";

export const mockUser: User = {
  id: 1,
  username: "Kevco",
  email: "Kevco@CoolBeans.com",
  avatar: pepe,
  darkMode: true,
};

export const mockUsers: User[] = [
  {
    id: 2,
    username: "Kevcoolio",
    email: "Kevcoolio@bomb.com",
    darkMode: true,
  },
  {
    id: 3,
    username: "Otto",
    email: "Otto@bots.com",
    darkMode: false,
  },
  {
    id: 4,
    username: "Michelle",
    email: "MichelleLin@star.com",
    darkMode: false,
  },
  {
    id: 5,
    username: "SillyWilly",
    email: "SillyWilly@WillyNilly.com",
    darkMode: false,
  },
];
