// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Student",
  },
  {
    icon: UilUsersAlt,
    heading: "Vendors",
  },
  {
    icon: UilUsersAlt,
    heading: "Recharge",
  },

  {
    icon: UilUsersAlt,
    heading: "Create Card",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Vendors",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "50",
    png: UilUsdSquare,
    series: [
      {
        name: "Vendors",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Students",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "300",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Students",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Total users",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "350",
    png: UilClipboardAlt,
    series: [
      {
        name: "Total Users",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
