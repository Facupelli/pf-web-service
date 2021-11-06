const users = [
  {
    id: "fdf3709a-ed60-4178-8cb6-6751fc32d078",
    userImg: "https://avatars.dicebear.com/api/micah/.svg?b=%23e81111",
    name: "Admin",
    lastname: "User",
    username: "adminuser",
    password: "admin123",
    email: "admin@webservice.co.uk",
    ban: false,
    admin: true,
    createdAt: "2020-01-01T00:00:00.000Z",
  },
  {
    id: "be19f20c-36aa-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/a.svg",
    name: "Miguel",
    lastname: "Mecozzi",
    username: "mmecozzi0",
    password: "3g5APZ4fdg",
    email: "mmecozzi0@webeden.co.uk",
    ban: false,
    createdAt: "2020-06-30T11:11:03.574Z",
  },
  {
    id: "be19f554-36aa-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/a.svg?b=%2319b5fe",
    name: "Martainn",
    lastname: "Sandiford",
    username: "msandiford1",
    password: "xFi1L334gdfg",
    email: "msandiford1@businesswire.com",
    ban: false,
    createdAt: "2020-03-30T03:56:53.611Z",
  },
  {
    id: "be19f6da-36aa-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/c.svg?=%2319b5fe",
    name: "Rayner",
    lastname: "Beardall",
    username: "rbeardall2",
    password: "K2BUfq7CkoV",
    email: "rbeardall2@flickr.com",
    ban: false,
    createdAt: "2021-05-04T13:44:37.766Z",
  },
  {
    id: "be19f8e2-36aa-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/d.svg?b=%2319b5fe",
    name: "Neel",
    lastname: "Gascoyne",
    username: "ngascoyne3",
    password: "5N97iZzzrMsdfg",
    email: "ngascoyne3@angelfire.com",
    ban: false,
    createdAt: "2020-10-18T22:28:19.044Z",
  },
  {
    id: "4e218642-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/sldkm.svg?b=%23ffd91a",
    name: "Nobie",
    lastname: "Sherington",
    username: "nsherington4",
    password: "GhMqdMdfsd",
    email: "nsherington4@ning.com",
    ban: true,
    createdAt: "2020-10-18T22:28:19.044Z",
  },
  {
    id: "4e21899e-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/f.svg?b=%23ffd91a",
    name: "Bonny",
    lastname: "Boggart",
    username: "fXY3MveoT96t",
    password: "GhMqdMdfsd",
    email: "bdoggart5@microsoft.com",
    ban: false,
    createdAt: "2020-01-23T19:57:11.713Z",
  },
  {
    id: "4e218b24-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/sldkm.svg?b=%23ffd91a",
    name: "Lorrin",
    lastname: "Huburn",
    username: "lhuburn6",
    password: "9SDOUZuLK",
    email: "lhuburn6@irs.gov",
    ban: false,
    createdAt: "2020-07-09T17:02:41.378Z",
  },
  {
    id: "4e218c00-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/sl21.svg?b=%23ffd91a",
    name: "Everett",
    lastname: "Roskilly",
    username: "eroskilly7",
    password: "DJM1j7OZYlO",
    email: "eroskilly7@twitpic.com",
    ban: false,
    createdAt: "2020-04-30T15:25:12.445Z",
  },
  {
    id: "4e218d5e-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/sl2.svg?b=%23ffd91a",
    name: "Ruddie",
    lastname: "Lamerton",
    username: "rlamerton8",
    password: "I4bTZsD2JRL",
    email: "rlamerton8@lycos.com",
    ban: false,
    createdAt: "2020-04-30T15:25:12.445Z",
  },
  {
    id: "4e218e1c-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/sl.svg?b=%23ff471a",
    name: "Kinny",
    lastname: "McGinn",
    username: "kmcginn9",
    password: "oUl2b3PLV1",
    email: "kmcginn9@usgs.gov",
    ban: false,
    createdAt: "2020-03-30T03:56:53.611Z",
  },
  {
    id: "4e218f98-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/s.svg?b=%23ff471a",
    name: "Parnell",
    lastname: "Stronach",
    username: "pstronacha",
    password: "CvNbJSffOe",
    email: "pstronacha@hc360.com",
    ban: false,
    createdAt: "2020-01-23T19:57:11.713Z",
  },
  {
    id: "4e219056-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/ssd.svg?b=%23ff471a",
    name: "Eli",
    lastname: "Gozney",
    username: "egozneyb",
    password: "345qRoffhJbA",
    email: "egozneyb@cam.ac.uk",
    ban: false,
    createdAt: "2020-07-24T21:03:10.438Z",
  },
  {
    id: "4e2191dc-36ad-11ec-8d3d-0242ac230003",
    userImg: "https://avatars.dicebear.com/api/micah/g4.svg?b=%23ff471a",
    name: "Samaria",
    lastname: "Sidwell",
    username: "ssidwellc",
    password: "huCxmJfur5X",
    email: "ssidwellc@vinaora.com",
    ban: false,
    createdAt: "2021-03-04T18:11:20.621Z",
  },
  {
    id: "4e21929a-36ad-11ec-8d3d-0242ac170003",
    userImg: "https://avatars.dicebear.com/api/micah/h6.svg?b=%23ff471a",
    name: "Leeanne",
    lastname: "Pawle",
    username: "lpawled",
    password: "n88Hf8CfC4",
    email: "lpawled@hugedomains.com",
    ban: false,
    createdAt: "2020-03-10T05:42:59.530Z",
  },
  {
    id: "4e21929a-36ad-11ec-8d3d-0242ad130003",
    userImg: "https://avatars.dicebear.com/api/micah/j7.svg?b=%23ff471a",
    name: "Arlie",
    lastname: "Clowser",
    username: "aclowsere",
    password: "f1Z1g0nJ8jzD",
    email: "aclowsere@mlb.com",
    ban: false,
    createdAt: "2020-07-24T21:03:10.438Z",
  },
  {
    id: "4e219448-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/k8.svg?b=%23ff471a",
    name: "Auberta",
    lastname: "Canero",
    username: "acanerof",
    password: "JmdVh9HwJheL",
    email: "acanerof@sina.com.cn",
    ban: false,
    createdAt: "2020-02-19T00:25:38.581Z",
  },
  {
    id: "4e219510-36ad-11ec-8d3d-0242ac110003",
    userImg: "https://avatars.dicebear.com/api/micah/z2.svg?b=%23c21aff",
    name: "Karry",
    lastname: "Pittaway",
    username: "kpittawayg",
    password: "5UTtLf45gdf2",
    email: "kpittawayg@baidu.com",
    ban: false,
    createdAt: "2020-02-19T00:25:38.581Z",
  },
  {
    id: "4e2195c4-36ad-11ec-8d3d-0242ac120003",
    userImg: "https://avatars.dicebear.com/api/micah/c3.svg?b=%23c21aff",
    name: "Kaye",
    lastname: "Danilchenko",
    username: "kdanilchenkoh",
    password: "8zBBHX8sdf2",
    email: "kdanilchenkoh@sciencedirect.com",
    ban: false,
    createdAt: "2020-03-30T03:56:53.611Z",
  },
  {
    id: "4e219678-36ad-11ec-8d3d-0242ac130003",
    userImg: "https://avatars.dicebear.com/api/micah/v4.svg?b=%23c21aff",
    name: "Donia",
    lastname: "Mocher",
    username: "dmocheri",
    password: "wQkqbowWZ434fd",
    email: "dmocheri@berkeley.edu",
    ban: false,
    createdAt: "2020-04-28T14:47:25.378Z",
  },
  {
    id: "4e219812-36ad-11ec-8d3d-0242ac139003",
    userImg: "https://avatars.dicebear.com/api/micah/b3.svg?b=%23c21aff",
    name: "Moomery",
    lastname: "Montgomery",
    username: "mdomnickj",
    password: "O5x6gch7Yr5",
    email: "mdomnickj@liveinternet.ru",
    ban: false,
    createdAt: "2020-02-19T00:25:38.581Z",
  },
];

module.exports = {
  users,
};
