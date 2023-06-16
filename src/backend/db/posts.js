import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Naruto is a leaf village Hokage.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686765781/naruto_v2aycj.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "narutouzumaki",
    createdAt: "2022-05-15T12:00:28+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Luffy is on a journey to become the King of the Pirates.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768780/luffy_io8lv3.png",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "narutouzumaki",
    createdAt: "2022-07-10T18:30:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Sasuke seeks revenge against his brother, Itachi.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768730/sasuke_rv64fq.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "itachiuchiha",
    createdAt: "2022-08-05T09:15:43+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Eren seeks freedom from the Titans.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1686765783/eren_nwllde.jpg?_s=public-apps",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "erenyeager",
    createdAt: "2022-10-18T11:20:10+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Saitama is a powerful hero with unmatched strength.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768680/saitama_or8dlb.jpg",
    likes: {
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "erenyeager",
    createdAt: "2022-11-25T08:45:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Light Yagami finds the Death Note and becomes Kira.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768825/deathnote_xiqvri.jpg",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "itachiuchiha",
    createdAt: "2023-01-10T09:30:18+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Mikasa is a skilled soldier in the Survey Corps.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "erenyeager",
    createdAt: "2023-02-15T14:20:45+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Vegeta is a proud Saiyan prince.",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "hinatahyuga",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Levi is a skilled captain in the Scout Regiment.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686768881/levi_kvx1vy.jpg",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mitsurikanroji",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Hinata is determined to become a strong ninja like Naruto.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686731469/hinata_i4kuv2.jpg",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "narutouzumaki",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Roronoa Zoro is a swordsman and member of the Straw Hat Pirates.",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "nezukokamado",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Kakashi is a former Hokage and a skilled ninja.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "mitsurikanroji",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Edward Elric is a talented alchemist on a quest for the Philosopher's Stone.",

    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "erenyeager",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Itachi is a complex character with a tragic past.",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686765781/itachi_wfu8ca.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "itachiuchiha",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "While the Love Hashira continues battling Zohakuten, she earns her Demon Slayer mark",
    links:
      "https://res.cloudinary.com/dmmfomgzx/image/upload/v1686765782/mitsuri_qp25ho.png",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "hinatahyuga",
    createdAt: formatDate(),
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
