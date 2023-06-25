import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "01",
    content: "Sasuke seeks revenge against his brother, Itachi.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768730/sasuke_rv64fq.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    views: "30k",
    comments: [],
    username: "itachiuchiha",
    createdAt: "2023-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "02",
    content: "Eren seeks freedom from the Titans.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1686765783/eren_nwllde.jpg?_s=public-apps",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    views: "40.5k",
    comments: [],
    username: "erenyeager",
    createdAt: "2023-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "03",
    content:
      "While the Love Hashira continues battling Zohakuten, she earns her Demon Slayer mark",
    links:
      "https://c4.wallpaperflare.com/wallpaper/38/526/341/mitsuri-kanroji-kimetsu-no-yaiba-hd-wallpaper-preview.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    views: "1.3m",
    comments: [],
    username: "hinatahyuga",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "04",
    content: "Light Yagami finds the Death Note and becomes Kira.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768825/deathnote_xiqvri.jpg",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    views: "90k",
    comments: [],
    username: "itachiuchiha",
    createdAt: "2023-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "05",
    content: "Naruto is a leaf village Hokage.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686765781/naruto_v2aycj.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    views: "80k",
    comments: [],
    username: "itachiuchiha",
    createdAt: "2023-03-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "06",
    content: "Luffy is on a journey to become the King of the Pirates.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768780/luffy_io8lv3.png",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    views: "1m",
    comments: [],
    username: "narutouzumaki",
    createdAt: "2023-04-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "07",
    content: "Vegeta is a proud Saiyan prince.",
    links: "",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    views: "20k",
    comments: [],
    username: "hinatahyuga",
    createdAt: "2023-05-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "08",
    content: "Mikasa is a skilled soldier in the Survey Corps.",
    links: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    views: "50k",
    comments: [],
    username: "erenyeager",
    createdAt: "2023-03-06T12:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "09",
    content: "Saitama is a powerful hero with unmatched strength.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768680/saitama_or8dlb.jpg",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    views: "70k",
    comments: [],
    username: "erenyeager",
    createdAt: "2023-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "10",
    content: "Levi is a skilled captain in the Scout Regiment.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768881/levi_kvx1vy.jpg",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    views: "1.5m",
    comments: [],
    username: "mitsurikanroji",
    createdAt: "2023-04-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "11",
    content: "Hinata is determined to become a strong ninja like Naruto.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686731469/hinata_i4kuv2.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    views: "97k",
    comments: [],
    username: "narutouzumaki",
    createdAt: "2023-05-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "12",
    content: "Roronoa Zoro is a swordsman and member of the Straw Hat Pirates.",
    links: "",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    views: "70k",
    comments: [],
    username: "nezukokamado",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "13",
    content:
      "Edward Elric is a talented alchemist on a quest for the Philosopher's Stone.",
    links: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    views: "10k",
    comments: [],
    username: "erenyeager",
    createdAt: "2023-01-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "14",
    content: "Itachi is a complex character with a tragic past.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686765781/itachi_wfu8ca.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    views: "99k",
    comments: [],
    username: "itachiuchiha",
    createdAt: "2023-01-26T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "15",
    content: "Kakashi is a former Hokage and a skilled ninja.",
    links: "",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    views: "87k",
    comments: [],
    username: "mitsurikanroji",
    createdAt: "2023-03-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];

// export const posts = [
//   {
//     _id: uuid(),
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "adarshbalika",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: uuid(),
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "shubhamsoni",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
// ];
