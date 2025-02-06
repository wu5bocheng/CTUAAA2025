export const siteConfig = {
  siteName: "CTUAAA 2025",
  siteUrl: "https://2025.ctuaaa.org/",
  event: {
    title: "第十三届交通大学美洲峰会",
    date: "2025年5月24-25日",
    location: "加州硅谷",
    ticketUrl: "https://ctuaaa.ticketbud.com/2025",
  },
  sections: [
    {
      id: "intro",
      type: "html",
      content: `
        <div class="mt-6">
          <p class="text-xl leading-relaxed text-gray-700">
            2025年5月24-25日，第十三届交通大学美洲校友联谊峰会将在创新圣地加州硅谷盛大举行。这片孕育无数颠覆性技术的土地，将成为交大校友共话未来、书写新篇章的梦想舞台。
          </p>
        </div>
      `,
    },
    {
      id: "highlights",
      type: "highlights",
      title: "峰会亮点",
      items: [
        "全球趋势探讨：聚焦AI、具身智能技术及宏观经济动向",
        "杰出校友演讲：分享前沿观点与实践经验",
        "精彩项目展示：展现交大人的创新成果",
        "畅叙情谊：新老朋友相聚，共叙交大情",
      ],
      content: `
        <div class="mt-6 -mb-4">
          <p class="text-xl leading-normal text-gray-700">
            自1964年首次举办以来，美洲校友联谊峰会已成为母校和美洲校友共同期盼的团聚时刻。在这片思想激荡、未来可期的土地上，我们将携手探讨全球贸易与产业机遇，在全球变革中寻找新的可能。
          </p>
        </div>
      `,
    },
    {
      id: "history",
      type: "html",
      content: `
        <div class="space-y-4 text-gray-700">
          <h3 class="text-3xl font-bold text-center mb-8 mt-0">传承与创新</h3>
            <p class="text-xl leading-relaxed">
              美洲交大校友会始于1943年，如今已是一棵根深叶茂的参天大树。多年来，"五校一家、同行致远"的理念指引着我们，通过无数次联谊与合作，传承交大精神，谱写校友情谊的华丽乐章。
            </p>
          </div>

          <p class="text-xl leading-relaxed">
            在硅谷这片梦想与实践交织的土地上，让我们以交大的名义相聚，共同描绘人类智慧与科技碰撞的辉煌篇章。期待与您在2025年的春末夏初，在硅谷相见，畅叙情谊，共绘梦想，让交大精神继续熠熠生辉！
          </p>
        </div>
      `,
    },
    {
      id: "conference",
      type: "tabs",
      items: [
        {
          id: "schedule",
          label: "会议日程",
          content: {
            type: "image",
            image: "/posters/agenda.png",
            alt: "第十三届交通大学美洲校友联谊峰会日程安排",
          },
        },
        // {
        //   id: "speakers",
        //   label: "特邀嘉宾",
        //   content: {
        //     type: "image",
        //     image: "/posters/participants.png",
        //     alt: "第十三届交通大学美洲校友联谊峰会参会嘉宾",
        //   },
        // },
        {
          id: "video",
          label: "峰会视频",
          content: {
            type: "video",
            videoId: "bRJxluiLFfE",
            title: "交通大学美洲校友会宣传片",
          },
        },
      ],
    },
    {
      id: "notice",
      type: "notice",
      content: "具体嘉宾名单与详细日程将陆续公布，敬请期待。",
    },
  ],
  footer: {
    links: [
      { text: "HOME", href: "http://ctuaaa.org/" },
      { text: "上海交通大学", href: "https://ctuaaa.org/about_us/sjtu/" },
      { text: "西安交通大学", href: "https://ctuaaa.org/about_us/%e8%a5%bf%e5%ae%89%e4%ba%a4%e9%80%9a%e5%a4%a7%e5%ad%a6/" },
      { text: "西南交通大学", href: "https://ctuaaa.org/about_us/%e8%a5%bf%e5%8d%97%e4%ba%a4%e9%80%9a%e5%a4%a7%e5%ad%a6/" },
      { text: "北京交通大学", href: "https://ctuaaa.org/about_us/%e5%8c%97%e4%ba%ac%e4%ba%a4%e9%80%9a%e5%a4%a7%e5%ad%a6/" },
      { text: "陽明交通大學", href: "https://ctuaaa.org/about_us/%e5%9c%8b%e7%ab%8b%e9%99%bd%e6%98%8e%e4%ba%a4%e9%80%9a%e5%a4%a7%e5%ad%b8/" },
      { text: "VI", href: "https://ctuaaa.org/about_us/vi/" },
    ],
    copyright: "2025 Copyright © CTUAAA",
  },
};
