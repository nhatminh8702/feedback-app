const HEADER_TITLE = "FB&Q";

const HEADER_TAB = [
  {
    id: 1,
    name: "Feedback",
    link: "/feedback",
    roleAccess: ["student", "teacher"],
  },
  {
    id: 2,
    name: "Question",
    link: "/question",
    roleAccess: ["student", "teacher"],
  },
  {
    id: 3,
    name: "Account Management",
    link: "/account",
    roleAccess: ["admin"],
  },
];

export { HEADER_TAB, HEADER_TITLE };
