import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import WatchingScreen from "./pages/WatchingScreen";
export default function App() {
  const animeList = [
    {
      name: "Jujutsu Kaisen",
      img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/jujutsu-kaisen-s-main-cast.jpg",
      link: "jujutsu-kaisen",
      description:
        "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami, serialized in Shueisha's Weekly Shōnen Jump since March 2018. The individual chapters are collected and published by Shueisha, with sixteen tankōbon volumes released as of October 2021.",
      epidsodes_screens: [
        "https://static.animecorner.me/2024/03/1709576548-24674-768x432.jpg",
        "https://staticg.sportskeeda.com/editor/2023/07/22f7e-16883851024546-1920.jpg?w=640",
        "https://animeblurayuk.wordpress.com/wp-content/uploads/2022/03/jujutsu-kaisen-screen.jpg",
      ],
    },
    {
      name: "Naruto",
      img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/naruto-isn-t-really-an-underdog.jpg",
      link: "naruto",
      description:
        "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
      epidsodes_screens: [
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/naruto.jpg",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Naruto-Shippuden.jpg",
        "https://www.thepopverse.com/_next/image?url=https%3A%2F%2Fmedia.thepopverse.com%2Fmedia%2Fnaruto-watch-order-1-bobpip3kpzrfzgumlyynkffxqy.png&w=1280&q=75",
      ],
    },
    {
      name: "My Hero Academia",
      img: "https://cdn.europosters.eu/image/hp/65704.jpg",
      link: "my-hero-academia",
      description:
        "My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Weekly Shōnen Jump since July 2014, with its chapters additionally collected into 30 tankōbon volumes as of April 2021.",
      epidsodes_screens: [
        "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/06/my-hero-academia-season-five-ova-two-visual-e1654313420822.jpg?resize=696%2C394&ssl=1",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/my-hero-academia-season-7-visual.jpg",
        "https://pbs.twimg.com/media/GNsq_WvWYAA3LYd?format=jpg&name=4096x4096",
        "https://www.animenewsnetwork.com/thumbnails/crop1200x630gEQ/cms/episode-review.3/173876/screenshot-5170-.png.jpg",
      ],
    },
    {
      name: "Attack on Titan",
      img: "https://m.media-amazon.com/images/S/pv-target-images/7c1672bcbb985231df92ac310cbb162b182443f781dd4b3e66fe67b53a01f936.jpg",
      link: "attack-on-titan",
      description:
        "Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within territories surrounded by three enormous walls that protect them from gigantic humanoids known as Titans.",
      epidsodes_screens: [
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/Attack-On-Titan-Season-1-Featured.jpg",
        "https://www.cnet.com/a/img/resize/0be58470ec9e81334a79039e7460c31131c6c091/hub/2023/11/02/0559a7a4-5336-4bce-ba34-26400e0e843c/attack-on-titan-series-finale.jpg?auto=webp&fit=crop&height=900&width=1200",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOawOfwxln5QbxPwTU3nbYaW0SNuuhBn5nhA&s",
      ],
    },
    {
      name: "One Piece",
      img: "https://one-piece.com/op/links_eng/assets/img/PC_OP_XRAMS_LP_animeKV.jpg",
      link: "one-piece",
      description:
        "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 100 tankōbon volumes as of September 2021.",
      epidsodes_screens: [
        "https://pbs.twimg.com/media/GMOkn7XX0AAKqwK?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/F5EWtiDXIAAHbze?format=jpg&name=4096x4096",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxrKtjOYWaIwWiY9l_zsnOkMMY8YQ2qJXHg&s",
      ],
    },
    {
      name: "Demon Slayer",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png",
      link: "demon-slayer",
      description:
        "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows Tanjiro Kamado, a 'Demon Slayer' who seeks to cure his sister Nezuko, who has been turned into a demon.",
      epidsodes_screens: [
        "https://i.redd.it/demon-slayer-screen-shots-from-episode-8-v0-slyucnksr4bd1.jpg?width=2400&format=pjpg&auto=webp&s=53b638a6e8430acbd537cb475c5d5fff104d0eba",
        "https://preview.redd.it/6biha74bzau71.jpg?width=640&crop=smart&auto=webp&s=17dac6ae68bb577269c7bd4ddb2870ea863cf200",
        "https://static01.nyt.com/images/2024/02/22/multimedia/22demonslayer-review-fglb/22demonslayer-review-fglb-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      ],
    },
    {
      name: "Tokyo Revengers",
      img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/7923a0407dbdba324c56acec9f096c13.jpg",
      link: "tokyo-revengers",
      description:
        "Tokyo Revengers is a Japanese manga series written and illustrated by Ken Wakui. It has been serialized in Kodansha's Weekly Shōnen Magazine since March 2017, with its chapters collected into twenty-two tankōbon volumes as of October 2021.",
      epidsodes_screens: [
        "https://wegotthiscovered.com/wp-content/uploads/2023/11/Tokyo-Revengers-Season-1-Episode-11.jpg?w=1200",
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/01/kazutora-smiling-freakishly.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZO1u77Ap3KHqTl96njadAgQnb9UYofYQrQ&s",
      ],
    },
    {
      name: "Black Clover",
      img: "https://a.storyblok.com/f/178900/960x540/6780300fe4/black-clover.jpg/m/filters:quality(95)format(webp)",
      link: "black-clover",
      description:
        "Black Clover is a Japanese manga series written and illustrated by Yūki Tabata. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since February 2015, with its chapters collected into 31 tankōbon volumes as of July 2021.",
      epidsodes_screens: [
        "https://external-preview.redd.it/RzThVZn6E8BZV4VbNooGk5p6XfUuUqGToBxnqve_J7A.jpg?auto=webp&s=0ca57576c0215cf86179371428937054038f175e",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Asta-and-Yami-fighting-together-in-Black-Clover.jpg",
        "https://images.immediate.co.uk/production/volatile/sites/3/2023/07/Black-Clover-2-Cropped-3af38da.jpg?quality=90&resize=980,654",
      ],
    },
    {
      name: "Dragon Ball Z",
      img: "https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/00-page-setup/dbzk_game-thumbnail.jpg?twic=v1/step=10/quality=80/max=760",
      link: "dragon-ball-z",
      description:
        "Dragon Ball Z is a Japanese anime television series produced by Toei Animation. It is the sequel to the Dragon Ball anime and adapts the latter 325 chapters of the original 519-chapter Dragon Ball manga series created by Akira Toriyama.",
      epidsodes_screens: [
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/gokudowndbzdvd.jpg",
        "https://64.media.tumblr.com/7f428dc65dec102736e36fb24db22f72/tumblr_oc79adeCk71qggwgeo1_1280.png",
        "https://64.media.tumblr.com/2b9f3bb049966ebefb3fe05c932528ed/caf94369f9db1995-a5/s1280x1920/f9a2a2c54e932e9a60a5b16291c258389d65765b.png",
      ],
    },
    {
      name: "Death Note",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202410/0412/1847e2086d7bcda0cdd7d6327c13fa9e312c1fe6b4a209da.jpg",
      link: "death-note",
      description:
        "Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who stumbles across a mysterious otherworldly notebook: the 'Death Note', which belonged to the Shinigami Ryuk and grants the user the supernatural ability to kill anyone",
      epidsodes_screens: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIQUgGeUdN27__-gYIcwJ-MJb7zyKR6IL4Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphGwff2WN6q2A7kk7eHLV_UW_MvmVLDjNFw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFW-guqlgjIC74qxB0KSLPiX6F_Sh9wSsJw&s",
      ],
    },
  ];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen animeList={animeList} />,
      children: [],
    },
    {
      path: "/anime/:animeName",
      element: <WatchingScreen />,
    },
  ]);
  return <RouterProvider router={router} />;
}
