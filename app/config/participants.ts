export interface Participant {
  id: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  image: string;
}

export const industries = ["主要嘉宾", "学术前沿 科技无界", "行业荟萃 产业实践", "饮水思源 母校情深"];

export const participants: Participant[] = [
  {
    id: "1",
    name: "张三",
    title: "创始人兼CEO",
    company: "AI科技公司",
    industry: "人工智能",
    image: "/participants/zhang-san.jpg",
  },
  // Add more participants here
];
