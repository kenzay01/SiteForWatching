import { use } from "react";

export const animeList = [
  {
    name: "Jujutsu Kaisen",
    img: "https://www.theouterhaven.net/wp-content/uploads/2020/10/JujutsuKaisen_16x9_Twitter-Post.png",
    logo: "https://blob.cede.ch/catalog/18313000/18313441_1_92.jpg",
    link: "jujutsu-kaisen",
    description:
      "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami, serialized in Shueisha's Weekly Shōnen Jump since March 2018.",
    epidsodes_screens: [
      "https://static.animecorner.me/2024/03/1709576548-24674-768x432.jpg",
      "https://staticg.sportskeeda.com/editor/2023/07/22f7e-16883851024546-1920.jpg?w=640",
      "https://animeblurayuk.wordpress.com/wp-content/uploads/2022/03/jujutsu-kaisen-screen.jpg",
    ],
    avg_rating: 8.7,
    genres: ["Action", "Supernatural", "Dark Fantasy", "Shounen"],
    author: "Gege Akutami",
    views: 10000,
    commentsList: [
      {
        user: "User1",
        comment: "This is a great anime",
        date: "2024-07-01",
      },
      {
        user: "User2",
        comment: "I love this anime",
        date: "2024-07-02",
      },
      {
        user: "User3",
        comment: "This is a bad anime",
        date: "2024-07-03",
      },
      {
        user: "User4",
        comment: "I hate this anime",
        date: "2024-07-04",
      },
      {
        user: "User5",
        comment: "I am in this anime",
        date: "2024-07-05",
      }
    ],
  },
  {
    name: "Naruto",
    img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/naruto-isn-t-really-an-underdog.jpg",
    logo: "https://m.media-amazon.com/images/I/81ZupeVm6vL._AC_UF1000,1000_QL80_.jpg",
    link: "naruto",
    description:
      "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage.",
    epidsodes_screens: [
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/naruto.jpg",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Naruto-Shippuden.jpg",
      "https://www.thepopverse.com/_next/image?url=https%3A%2F%2Fmedia.thepopverse.com%2Fmedia%2Fnaruto-watch-order-1-bobpip3kpzrfzgumlyynkffxqy.png&w=1280&q=75",
    ],
    avg_rating: 8.3,
    genres: ["Action", "Adventure", "Martial Arts", "Shounen"],
    author: "Masashi Kishimoto",
    views: 4597,
    commentsList: [
      {
        user
        : "User1",
        comment: "This is a great anime",
        date: "2024-07-01",
      },]
  },
  {
    name: "My Hero Academia",
    img: "https://cdn.europosters.eu/image/hp/65704.jpg",
    logo: "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "my-hero-academia",
    description:
      "My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Weekly Shōnen Jump since July 2014.",
    epidsodes_screens: [
      "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/06/my-hero-academia-season-five-ova-two-visual-e1654313420822.jpg?resize=696%2C394&ssl=1",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/my-hero-academia-season-7-visual.jpg",
      "https://pbs.twimg.com/media/GNsq_WvWYAA3LYd?format=jpg&name=4096x4096",
    ],
    avg_rating: 7.9,
    genres: ["Action", "Superhero", "School", "Shounen"],
    author: "Kōhei Horikoshi",
    views: 5000,
    commentsList:[],
  },
  {
    name: "Attack on Titan",
    img: "https://m.media-amazon.com/images/S/pv-target-images/7c1672bcbb985231df92ac310cbb162b182443f781dd4b3e66fe67b53a01f936.jpg",
    logo: "https://wildfaery.com/info/images/Attack_on_Titan/20241105_AOT_WebLFS%20(640%20x%20960)_05.jpg",
    link: "attack-on-titan",
    description:
      "Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within territories surrounded by three enormous walls that protect them from Titans.",
    epidsodes_screens: [
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/Attack-On-Titan-Season-1-Featured.jpg",
      "https://www.cnet.com/a/img/resize/0be58470ec9e81334a79039e7460c31131c6c091/hub/2023/11/02/0559a7a4-5336-4bce-ba34-26400e0e843c/attack-on-titan-series-finale.jpg?auto=webp&fit=crop&height=900&width=1200",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOawOfwxln5QbxPwTU3nbYaW0SNuuhBn5nhA&s",
    ],
    avg_rating: 9.0,
    genres: ["Action", "Drama", "Dark Fantasy", "Shounen"],
    author: "Hajime Isayama",
    views: 120,
    commentsList:[
      {
        user: "User2",
        comment: "I love this anime",
        date: "2024-07-02",
      }
    ],
  },
  {
    name: "One Piece",
    img: "https://cdn.mos.cms.futurecdn.net/NiuWfsdGS8ybpPNkdythoB-1200-80.jpg",
    link: "one-piece",
    logo: "https://i.ebayimg.com/images/g/bosAAOSwLB5egNBa/s-l1200.jpg",
    description:
      "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 100 tankōbon volumes as of September 2021.",
    epidsodes_screens: [
      "https://pbs.twimg.com/media/GMOkn7XX0AAKqwK?format=jpg&name=4096x4096",
      "https://pbs.twimg.com/media/F5EWtiDXIAAHbze?format=jpg&name=4096x4096",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxrKtjOYWaIwWiY9l_zsnOkMMY8YQ2qJXHg&s",
    ],
    avg_rating: 8.7,
    genres: ["Action", "Adventure", "Fantasy"],
    author: "Eiichiro Oda",
    views: 4980,
    commentsList:[
      {
        user: "User2",
        comment: "I love this anime",
        date: "2024-07-02",
      },
      {
        user:"User3",
        comment: "This is a bad anime",
        date: "2024-07-03",
      }
    ],
  },
  {
    name: "Demon Slayer",
    img: "https://www.thepopverse.com/_next/image?url=https%3A%2F%2Fmedia.thepopverse.com%2Fmedia%2Fdemon-slayer-movies-header-21inh2m1imjflcjo510j0sauky.png&w=1280&q=75",
    link: "demon-slayer",
    logo: "https://fr.web.img6.acsta.net/pictures/19/09/18/13/46/0198270.jpg",
    description:
      "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows Tanjiro Kamado, a 'Demon Slayer' who seeks to cure his sister Nezuko, who has been turned into a demon.",
    epidsodes_screens: [
      "https://i.redd.it/demon-slayer-screen-shots-from-episode-8-v0-slyucnksr4bd1.jpg?width=2400&format=pjpg&auto=webp&s=53b638a6e8430acbd537cb475c5d5fff104d0eba",
      "https://preview.redd.it/6biha74bzau71.jpg?width=640&crop=smart&auto=webp&s=17dac6ae68bb577269c7bd4ddb2870ea863cf200",
      "https://static01.nyt.com/images/2024/02/22/multimedia/22demonslayer-review-fglb/22demonslayer-review-fglb-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    ],
    avg_rating: 8.5,
    genres: ["Action", "Supernatural", "Drama"],
    author: "Koyoharu Gotouge",
    views: 890,
    commentsList:[
      {
        user: "User1",
        comment: "I hate this anime",
        date: "2024-07-02",
      },
      {
        user:"User3",
        comment: "This is a bad anime",
        date: "2024-07-03",
      }
    ],
  },
  {
    name: "Tokyo Revengers",
    img: "https://m.economictimes.com/thumb/msid-95891890,width-1600,height-900,resizemode-4,imgsize-87774/tokyo-revengers-season-2-anime-show-to-stream-on-disney-plus-as-walt-disney-expands-partnership-with-kodansha.jpg",
    link: "tokyo-revengers",
    logo: "https://m.media-amazon.com/images/M/MV5BNGU3YzdhMWEtMGRkMC00MzY2LThkOGEtMDFmZDE0NGQxYzFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Tokyo Revengers is a Japanese manga series written and illustrated by Ken Wakui. It has been serialized in Kodansha's Weekly Shōnen Magazine since March 2017, with its chapters collected into twenty-two tankōbon volumes as of October 2021.",
    epidsodes_screens: [
      "https://wegotthiscovered.com/wp-content/uploads/2023/11/Tokyo-Revengers-Season-1-Episode-11.jpg?w=1200",
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/01/kazutora-smiling-freakishly.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZO1u77Ap3KHqTl96njadAgQnb9UYofYQrQ&s",
    ],
    avg_rating: 7.8,
    genres: ["Action", "Drama", "Time Travel", "Shounen"],
    author: "Ken Wakui",
    views: 8500,
    commentsList:[
      {
        user: "User4",
        comment: "I love this anime",
        date: "2024-07-02",
      }
    ],
  },
  {
    name: "Black Clover",
    img: "https://a.storyblok.com/f/178900/960x540/6780300fe4/black-clover.jpg/m/filters:quality(95)format(webp)",
    link: "black-clover",
    logo: "https://preview.redd.it/why-did-they-only-make-300-episodes-why-discontinue-the-v0-icdzcb76k6pb1.jpg?auto=webp&s=4fffe0ee109b5ed0ef6ac8601e4537bf05bb3860",
    description:
      "Black Clover is a Japanese manga series written and illustrated by Yūki Tabata. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since February 2015, with its chapters collected into 31 tankōbon volumes as of July 2021.",
    epidsodes_screens: [
      "https://external-preview.redd.it/RzThVZn6E8BZV4VbNooGk5p6XfUuUqGToBxnqve_J7A.jpg?auto=webp&s=0ca57576c0215cf86179371428937054038f175e",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Asta-and-Yami-fighting-together-in-Black-Clover.jpg",
      "https://images.immediate.co.uk/production/volatile/sites/3/2023/07/Black-Clover-2-Cropped-3af38da.jpg?quality=90&resize=980,654",
    ],
    avg_rating: 8.7,
    genres: ["Action", "Adventure", "Fantasy"],
    author: "Yūki Tabata",
    views: 3896,
    commentsList:[
      {
        user: "User1",
        comment: "I hate this anime",
        date: "2024-07-04",
      },
      {
        user:"User3",
        comment: "This is a great anime",
        date: "2024-07-05",
      }
    ],
  },
  {
    name: "Dragon Ball Z",
    img: "https://media.myshows.me/shows/normal/f/c6/fc677abac1066bfd82557c2a31da2b40.jpg",
    link: "dragon-ball-z",
    logo: "https://m.media-amazon.com/images/M/MV5BNGQxZWE1ZWEtMjJkMS00OGUwLWIzYWQtYTIxODdlYjdhYjM1XkEyXkFqcGc@._V1_.jpg",
    description:
      "Dragon Ball Z is a Japanese anime television series produced by Toei Animation. It is the sequel to the Dragon Ball anime and adapts the latter 325 chapters of the original 519-chapter Dragon Ball manga series created by Akira Toriyama.",
    epidsodes_screens: [
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/gokudowndbzdvd.jpg",
      "https://64.media.tumblr.com/7f428dc65dec102736e36fb24db22f72/tumblr_oc79adeCk71qggwgeo1_1280.png",
      "https://64.media.tumblr.com/2b9f3bb049966ebefb3fe05c932528ed/caf94369f9db1995-a5/s1280x1920/f9a2a2c54e932e9a60a5b16291c258389d65765b.png",
    ],
    avg_rating: 8.9,
    genres: ["Action", "Adventure", "Martial Arts"],
    author: "Akira Toriyama",
    views: 100,
    commentsList:[
      {
        user: "User2",
        comment: "I love this anime",
        date: "2024-07-03",
      }
    ],
  },
  {
    name: "Death Note",
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202410/0412/1847e2086d7bcda0cdd7d6327c13fa9e312c1fe6b4a209da.jpg",
    link: "death-note",
    logo: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p225665_b_v8_ab.jpg",
    description:
      "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who stumbles across a mysterious otherworldly notebook: the 'Death Note', which belonged to the Shinigami Ryuk and grants the user the supernatural ability to kill anyone",
    epidsodes_screens: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIQUgGeUdN27__-gYIcwJ-MJb7zyKR6IL4Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphGwff2WN6q2A7kk7eHLV_UW_MvmVLDjNFw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFW-guqlgjIC74qxB0KSLPiX6F_Sh9wSsJw&s",
    ],
    avg_rating: 9.0,
    genres: ["Psychological", "Thriller", "Supernatural"],
    author: "Tsugumi Ohba",
    views: 7777,
    commentsList:[
      {
        user: "User1",
        comment: "I hate this anime",
        date: "2024-07-03",
      },
      {
        user:"User3",
        comment: "This is a great anime",
        date: "2024-07-04",
      }
    ],
  },
  {
    name: "Fullmetal Alchemist: Brotherhood",
    img: "https://m.media-amazon.com/images/S/pv-target-images/b743d74a9526c5f3fe7c9189c053166a453ae3000d13669e189193db60d9510a.jpg",
    link: "fullmetal-alchemist-brotherhood",
    logo: "https://i.pinimg.com/564x/26/4e/c9/264ec9d43fb4c2c4fbc0a976b42cb05a.jpg",
    description:
      "Fullmetal Alchemist: Brotherhood follows the story of two alchemist brothers, Edward and Alphonse Elric, who attempt to restore their bodies after a failed alchemical ritual. The series is renowned for its complex plot, deep themes, and excellent world-building.",
    epidsodes_screens: [
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/06/fullmetal-alchemist-brotherhood-episode-1-alphonse-edward.jpg",
      "https://img.hulu.com/user/v3/artwork/20663ad3-ba5f-4f12-9670-e94010238f39?base_image_bucket_name=image_manager&base_image=7348bc88-d08b-47d3-80fc-e6e18cd896c7&size=600x338&format=webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCW0r-e4vGvgGdjVNmr4BdwBgL3KkY8YYi-g&s",
    ],
    avg_rating: 9.2,
    genres: ["Action", "Adventure", "Fantasy"],
    author: "Hiromu Arakawa",
    views: 5,
    commentsList:[
      {
        user: "User3",
        comment: "I love this anime",
        date: "2024-07-04",
      }
    ],
  },
  {
    name: "Hunter x Hunter",
    img: "https://cdn.oneesports.gg/cdn-data/2024/04/Anime_HunterxHunter_FirstSixCharacters_NenImpact_EvoJapan2024.jpg",
    link: "hunter-x-hunter",
    logo: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Hunter × Hunter follows Gon Freecss, a young boy who discovers that his father, who left him at a young age, is actually a world-renowned Hunter. The series follows Gon and his friends as they navigate the challenging world of Hunters.",
    epidsodes_screens: [
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/gon-leorio-and-kurapika-run-to-the-airport-in-hunter-x-hunter.jpg",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/hunter-x-hunter-the-gang-s-all-here.jpg",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/the-zodiacs-gather-for-their-meeting-in-hunter-x-hunter.jpg",
    ],
    avg_rating: 8.9,
    genres: ["Action", "Adventure", "Fantasy"],
    author: "Yoshihiro Togashi",
    views: 9998,
    commentsList:[
      {
        user: "User4",
        comment: "I like this anime",
        date: "2024-07-03",
      },
      {
        user:"User3",
        comment: "This is a great anime",
        date: "2024-07-04",
      },
      {
        user:"User2",
        comment: "I love this anime",
        date: "2024-07-05",
      },
      {
        user:"User1",
        comment: "I am in this anime",
        date: "2024-07-05",
      }
    ],
  },
  {
    name: "Steins;Gate",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*qBoRNB1oMRIOsM6wZY0mHQ.jpeg",
    link: "steins-gate",
    logo: "https://m.media-amazon.com/images/M/MV5BZjI1YjZiMDUtZTI3MC00YTA5LWIzMmMtZmQ0NTZiYWM4NTYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Steins;Gate follows a self-proclaimed mad scientist who discovers the ability to send messages to the past, leading to dire consequences and a race against time to prevent tragedy.",
    epidsodes_screens: [
      "https://avvesione.wordpress.com/wp-content/uploads/2011/04/steinsgate-01-kyouma-mayuri-itaru-monitor.jpg",
      "https://i.redd.it/j3rsfmg85if61.jpg",
      "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/04/1.-Steins-Gate.jpg",
    ],
    avg_rating: 8.8,
    genres: ["Sci-Fi", "Thriller", "Psychological"],
    author: "Chiyomaru Shikura",
    views: 600,
    commentsList:[
      {
        user: "User1",
        comment: "I hate this anime",
        date: "2024-07-03",
      }
    ],
  },
  {
    name: "Code Geass",
    img: "https://m.media-amazon.com/images/S/pv-target-images/f8ab74240b5f0764f8c1970eb56094179ee6f0f534c439c2ac432dd359543842.jpg",
    link: "code-geass",
    logo: "https://m.media-amazon.com/images/I/813ek5yvX1L._AC_UF894,1000_QL80_.jpg",
    description:
      "Code Geass follows Lelouch vi Britannia, an exiled prince who gains the power to control others' minds and uses it to lead a rebellion against the tyrannical Britannian Empire.",
    epidsodes_screens: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1FsVaJe9PmbKiM1nOgwf3hCol1AqnDJoyA&s",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/code-geass-lelouch.jpg",
      "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/11525975/Screen_Shot_2018_06_12_at_4.08.35_PM.png?quality=90&strip=all&crop=7.9038997214485,0,84.192200557103,100",
    ],
    avg_rating: 8.7,
    genres: ["Action", "Mecha", "Psychological", "Thriller"],
    author: "Goro Taniguchi",
    views: 798,
    commentsList:[
      {
        user: "User1",
        comment: "I am in this anime",
        date: "2024-07-05",
      }
    ],
  },
  {
    name: "Sword Art Online",
    img: "https://static.bandainamcoent.eu/high/sword-art-online/sao-last-recollection/00-page-setup/saolr_header_mobile_2.jpg",
    link: "sword-art-online",
    logo: "https://media.2x2tv.ru/content/images/2022/04/----------------5.jpg",
    description:
      "Sword Art Online follows players trapped in a virtual reality MMORPG where death in the game means death in real life. The story focuses on Kirito, a skilled player trying to free everyone from the game.",
    epidsodes_screens: [
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Screen-Shot-2022-07-06-at-7.18.12-PM.png",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Screen-Shot-2022-07-06-at-7.17.33-PM.png",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Screen-Shot-2022-07-06-at-7.25.16-PM.png",
    ],
    avg_rating: 7.5,
    genres: ["Action", "Adventure", "Fantasy", "Romance"],
    author: "Reki Kawahara",
    views: 20,
    commentsList:[
      {
        user: "User1",
        comment: "I love this anime",
        date: "2024-07-04",
      }
    ],
  },
  {
    name: "Chainsaw Man",
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/12/c15b3193-d92b-4b66-83b7-eb49e57a1753.jpeg",
    link: "chainsaw-man",
    logo: "https://i.ebayimg.com/images/g/b70AAOSwo5Rj5HL0/s-l400.jpg",
    description:
      "Chainsaw Man follows Denji, a young man who merges with his pet devil-dog Pochita to become the powerful Chainsaw Man. The series is known for its unique blend of action, horror, and dark humor.",
    epidsodes_screens: [
      "https://static.animecorner.me/2022/08/chainsaw-man-pre-screen-anime.jpg",
      "https://animecorner.me/wp-content/uploads/2022/10/chainsaw-man-anime-opening-video.jpg",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/chainsaw-man-episode-3.jpg",
    ],
    avg_rating: 8.5,
    genres: ["Action", "Horror", "Supernatural", "Comedy"],
    author: "Tatsuki Fujimoto",
    views: 6565,
    commentsList:[
      {
        user: "User3",
        comment: "I hate this anime",
        date: "2024-07-04",
      },
      {
        user:"User2",
        comment: "This is a bad anime",
        date: "2024-07-05",
      }
    ],
  },
  {
    name: "Mob Psycho 100",
    img: "https://m.media-amazon.com/images/M/MV5BODcyZTgxNDEtMDgzYS00YTc0LThhZWQtNTNkYzQ0MTQzYzYwXkEyXkFqcGc@._V1_.jpg",
    link: "mob-psycho-100",
    logo: "https://upload.wikimedia.org/wikipedia/ru/4/4e/Mob_Psycho_100.png",
    description:
      "Mob Psycho 100 follows Shigeo 'Mob' Kageyama, a powerful esper who tries to live a normal life while keeping his psychic abilities in check. The series is acclaimed for its unique animation style and character development.",
    epidsodes_screens: [
      "https://preview.redd.it/u6ogubqvxhq21.jpg?width=640&crop=smart&auto=webp&s=44efd82052db3135d73e96d5fe4d59ba75a897fe",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/mob-psycho-100-s-mob.jpg",
      "https://animeuknews.net/app/uploads/2019/01/Mob4-1024x581.jpg",
    ],
    avg_rating: 8.6,
    genres: ["Action", "Comedy", "Supernatural", "Psychological"],
    author: "ONE",
    views: 999,
    commentsList:[
      {
        user: "User1",
        comment: "I am in this anime",
        date: "2024-07-04",
      },
      {
        user:"User2",
        comment: "I love this anime",
        date: "2024-07-05",
      }
    ],
  },
  {
    name: "Vinland Saga",
    img: "https://m.media-amazon.com/images/S/pv-target-images/9deb37cdbdb22731096e44f9df44aa3b285e3a2d5e9407f8cf4a656eb009619e.jpg",
    link: "vinland-saga",
    logo: "https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Vinland Saga tells the tale of young Thorfinn's quest for revenge in the Viking Age, evolving into a story about finding meaning beyond violence. The series is praised for its historical accuracy and character development.",
    epidsodes_screens: [
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/11/vinland-saga-5.jpg",
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/Vinland-Saga.jpg",
      "https://a.storyblok.com/f/178900/640x360/9ccad1dd4c/vinland-saga-season-2.png",
    ],
    avg_rating: 8.7,
    genres: ["Action", "Adventure", "Historical"],
    author: "Makoto Yukimura",
    views: 6,
    commentsList:[],
  },
  {
    name: "Psycho-Pass",
    img: "https://i.ytimg.com/vi/YzuJnyebc40/maxresdefault.jpg",
    link: "psycho-pass",
    logo: "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAyNTExNTIxOTM4MDIzNDM2/anime-review-psycho-pass-2012.jpg",
    description:
      "Set in a dystopian future where a powerful system measures citizens' mental states and likelihood of committing crimes, Psycho-Pass follows Akane Tsunemori as she questions the morality of this system.",
    epidsodes_screens: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3iIqAookAZoK3UbltkdFmdesnvJLl_d5bTA&s",
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/psycho-pass-banner.jpg",
      "https://theglorioblog.com/wp-content/uploads/2012/10/psychopass3screen.jpg",
    ],
    avg_rating: 8.3,
    genres: ["Psychological", "Sci-Fi", "Crime", "Thriller"],
    author: "Gen Urobuchi",
    views: 2,
    commentsList:[],
  },
];
