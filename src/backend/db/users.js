import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // {
  //   _id: uuid(),
  //   firstName: "Hinata",
  //   lastName: "Hyuga",
  //   username: "adarshbalika",
  //   password: "adarshBalika123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  {
    _id: uuid(),
    firstName: "Hinata",
    lastName: "Hyuga",
    username: "hinatahyuga",
    email: "hinatahyuga@moshimoshi.com",
    password: "hinatasama",
    bookmarks: [],
    bio: "I Just Wanted To Be With You. You Changed Me! Your Smile Is What Saved Me! That Is Why I am Not Afraid To Die Protecting You!",
    avatar:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686731469/hinata_i4kuv2.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Naruto",
    lastName: "Uzumaki",
    username: "narutouzumaki",
    email: "narutouzumaki@moshimoshi.com",
    password: "narutochan",
    bookmarks: [],
    bio: "I am not gonna run away and I never go back on my word, that is my nindo !!",
    avatar:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686765781/naruto_v2aycj.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Nezuko",
    lastName: "Kamado",
    username: "nezukokamado",
    email: "nezukokamado@moshimoshi.com",
    password: "nezuko123",
    bookmarks: [],
    bio: "Humans are to be protected and saved... I will never hurt them",
    avatar:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686765781/Nezuko_lzm5yi.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Itachi",
    lastName: "Uchiha",
    username: "itachiuchiha",
    email: "itachiuchiha@moshimoshi.com",
    password: "rinrin",
    bookmarks: [],
    bio: "Those who cannot acknowledge themselves will eventually fail",
    avatar:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686765781/itachi_wfu8ca.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Eren",
    lastName: "Yeager",
    username: "erenyeager",
    email: "erenyeager@moshimoshi.com",
    password: "tataketatake",
    bookmarks: [],
    bio: "If you win, you live. If you lose, you die. If you don't fight, you can't win",
    avatar:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1686765783/eren_nwllde.jpg?_s=public-apps",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Mitsuri",
    lastName: "Kanroji",
    username: "mitsurikanroji",
    email: "mitsurikanroji@moshimoshi.com",
    password: "mitsurikanr00ji",
    bookmarks: [],
    bio: "I don't want Iguro san to die…",
    avatar:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686765782/mitsuri_qp25ho.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
