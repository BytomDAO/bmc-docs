// 导航菜单 中文
const zh = [
  {
    title: '快速入门',
    children: [
      { title: '简介', link: '/zh/guide/01_introduction.html' },
      { title: '主网快速入门', link: '/zh/guide/01_mainnet_quick_start.html' },
      { title: '测试网快速入门', link: '/zh/guide/01_testnet_quick_start.html' },
      { title: '基本概念', link: '/zh/guide/01_basics.html' },
      { title: '工具', link: '/zh/guide/01_tools.html' },
      { title: 'BAP20资产', link: '/zh/guide/01_bap20_token.html' }
    ]
  }
];
const en = [
    {
      title: 'Getting Started',
      children: [
       { title: 'Introduction', link: '/guide/01_introduction.html' },
      { title: 'Mainnet Quick Start', link: '/guide/01_mainnet_quick_start.html' },
      { title: 'Testnet Quick Start', link: '/guide/01_testnet_quick_start.html' },
      { title: 'Basics', link: '/guide/01_basics.html' },
      { title: 'Tools', link: '/guide/01_tools.html' },
      { title: 'BAP20 Token', link: '/guide/01_bap20_token.html' }
    ]
  }
];
export default {
  'zh-CN': zh,
  'en-US': en,
}