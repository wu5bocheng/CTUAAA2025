export interface Participant {
  id: string;
  industry: string;
  image: string;
}

export const industries = ["主要嘉宾", "学术前沿 科技无界", "行业荟萃 产业实践", "饮水思源 母校情深"];

export const participants: Participant[] = [
  {
    id: "elaine-chao",
    industry: "主要嘉宾",
    image: "/participants/elaine-chao.png",
  },
  {
    id: "james-chao",
    industry: "主要嘉宾",
    image: "/participants/james-chao.png",
  },
  {
    id: "bill-jia",
    industry: "主要嘉宾",
    image: "/participants/bill-jia.png",
  },
  {
    id: "larry-liu",
    industry: "主要嘉宾",
    image: "/participants/larry-liu.png",
  },
  {
    id: "fengmin-gong",
    industry: "主要嘉宾",
    image: "/participants/fengmin-gong.png",
  },
  {
    id: "shau-zhang",
    industry: "主要嘉宾",
    image: "/participants/shau-zhang.png",
  },
  {
    id: "more-coming",
    industry: "更多嘉宾",
    image: "/participants/more-coming.png",
  },
];
