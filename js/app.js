// PoE2 Companion - Unified Web Application Script (No CORS / file:/// Compatible)
// Supports: English (en), Tiếng Việt (vi), 简体中文 (zh), 한국어 (ko), Русский (ru), ไทย (th)

(function () {
  'use strict';

  const LOCALES = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'zh', label: '简体中文', flag: '🇨🇳' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'th', label: 'ไทย', flag: '🇹🇭' }
  ];

  const translations = {
    en: {
      navAutomation: 'Automation',
      navFeatures: 'Features',
      navPricing: 'Plans',
      navHowItWorks: 'Setup',
      navDownload: 'Download',

      heroTitle: 'Your In-Game Companion for Path of Exile 2',
      heroSubtitle: 'Price checker, waystone checker, build tracker, loot tracker, inventory search bar, sort suggestions, trade assistant, and more. Use at your own risk. While built for convenience, third-party utilities may not comply with GGG Terms of Service.',
      heroDownloadBtn: 'Download for Windows',
      heroPlatform: 'Windows Only · Windows 10 / 11 · Auto-updates via Cloudflare',
      heroViewFeatures: 'Explore Features',

      pricingSectionBadge: 'ACCESS PLANS',
      pricingSectionTitle: 'Choose Your Access Plan',
      pricingSectionSubtitle: 'Instant access to all features, auto-crafting, and updates.',
      pricingCommunityBadge: 'COMMUNITY PERKS',
      pricingCommunityTitle: 'Free Weekends & Redeem Codes',
      pricingCommunityDesc: 'The developer frequently hosts free weekend access and drops code giveaways in our Discord community!',
      pricingCommunityBtn: 'JOIN DISCORD FOR NEWS!',
      planPopularBadge: 'BEST VALUE',
      planBuyBtn: 'Get Access',
      freeUntil: 'Free Until',
      freeTimeLeft: 'Free time left:',

      autoSectionBadge: 'HANDS-FREE UTILITIES',
      autoSectionTitle: 'Simple Automation',
      autoSectionSubtitle: "We've made some simple automations to help your journey easier, but please use them at your own risk. We will never make auto bots or intrusive automation.",

      flaskTitle: 'Auto-Flask',
      flaskDesc: 'Drinks Life, Ward, or Mana flasks automatically when your HP or mana drops below your chosen threshold. Includes human-like delays so it never feels robotic.',
      flaskTag1: 'Life & Ward',
      flaskTag2: 'Mana Trigger',
      flaskTag3: 'Human Timing Delays',

      craftTitle: 'Auto-Crafting Engine',
      craftDesc: 'Pick the mods you want, set a currency budget, and hit roll. Automatically stops on high-tier rolls so you never accidentally roll over something valuable.',
      craftTag1: 'Target Mod Selection',
      craftTag2: 'Valuable Roll Protection',
      craftTag3: 'Budget Cap Limits',

      sortTitle: 'Auto-Sort & Stash Packing',
      sortDesc: 'One click organizes your bags and stash tabs. Automatically fills empty slots based on your item category preferences without tedious dragging.',
      sortTag1: '1-Click Clean Bags',
      sortTag2: 'Custom Priority Order',
      sortTag3: 'Stash Tab Packing',

      featureSectionBadge: 'FEATURES',
      featureSectionTitle: 'In-Game Features',
      featureSectionSubtitle: 'Useful tools that give you what you need without getting in the way.',

      mapOverlayTitle: 'Map Overlay',
      mapOverlayDesc: 'Shows bosses, rare monsters, chests, exits, and waypoints on your map, with the quickest path to your objective.',

      fpsTitle: 'More FPS',
      fpsDesc: 'Turn off fog, shadows, weather, and heavy particles to boost FPS and clean up the screen in busy fights.',

      priceCheckTitle: 'Price Check',
      priceCheckDesc: 'Hover an item and press Ctrl+C to see its stats and current trade listings instantly.',

      runeshapeTitle: 'Runeshape Price Check',
      runeshapeDesc: 'Automatically checks market prices whenever you open the Runeshape Combinations window.',

      campaignTitle: 'Campaign Route Guide',
      campaignDesc: 'Auto-detects your current zone and quest objectives. Shows the quickest route through the story acts so you never get lost.',

      treeTitle: 'PoB Build & Tree HUD',
      treeDesc: 'Import your build share code from Path of Building. Overlays your planned passive tree directly over the game so you know what node to pick next.',

      lootTitle: 'Loot & Net Worth Tracker',
      lootDesc: 'Tracks valuable drops and calculates your hourly currency rate in real time while you farm.',

      waystoneTitle: 'Waystone Mod Checker',
      waystoneDesc: 'Warns you about dangerous map modifiers before you open the portal, saving you from reflect, no-regen, or bricked maps.',

      tradeTitle: 'Trade Whisper Helper',
      tradeDesc: 'Shows trade whisper alerts on your screen with 1-click buttons to invite, trade, or reply without typing commands into chat.',

      howSectionBadge: 'QUICK START',
      howSectionTitle: 'Up and Running in 3 Steps',
      howStep1Title: '1. Download & Install',
      howStep1Desc: 'Download and run the installer from the button above.',
      howStep2Title: '2. Launch Companion',
      howStep2Desc: 'Open PoE2 Companion. Overlays connect automatically.',
      howStep3Title: '3. Start Path of Exile 2',
      howStep3Desc: 'Launch Path of Exile 2 and load into your character.',

      ctaTitle: 'Ready to Level Up Your PoE2 Journey?',
      ctaSubtitle: 'Lightweight, safe, and built specifically for Path of Exile 2 players.',
      ctaDownloadBtn: 'Download PoE2 Companion',

      footerDisclaimer: 'Path of Exile 2 is a registered trademark of Grinding Gear Games. PoE2 Companion is an independent third-party tool and is not affiliated with or endorsed by Grinding Gear Games.',
      footerPlatform: 'Windows 64-bit'
    },

    vi: {
      navAutomation: 'Tự động',
      navFeatures: 'Tính năng',
      navPricing: 'Bảng giá',
      navHowItWorks: 'Cài đặt',
      navDownload: 'Tải về',

      heroTitle: 'Công Cụ Hỗ Trợ Chơi Path of Exile 2 Tối Ưu',
      heroSubtitle: 'Tra cứu giá thị trường, kiểm tra waystone, theo dõi build, thống kê loot, thanh tìm kiếm túi đồ, gợi ý sắp xếp, hỗ trợ giao dịch và nhiều tính năng khác. Sử dụng có trách nhiệm và tự chịu rủi ro. Dù được phát triển nhằm tối ưu trải nghiệm, các tiện ích bên thứ ba có thể không hoàn toàn tuân thủ điều khoản dịch vụ của GGG.',
      heroDownloadBtn: 'Tải về cho Windows',
      heroPlatform: 'Dành cho Windows · Windows 10 / 11 · Tự động cập nhật qua Cloudflare',
      heroViewFeatures: 'Xem tính năng',

      pricingSectionBadge: 'GÓI TRUY CẬP',
      pricingSectionTitle: 'Lựa Chọn Gói Phù Hợp',
      pricingSectionSubtitle: 'Truy cập đầy đủ toàn bộ tính năng, tự craft đồ và cập nhật tự động.',
      pricingCommunityBadge: 'ĐẶC QUYỀN CỘNG ĐỒNG',
      pricingCommunityTitle: 'Cuối Tuần Miễn Phí & Mã Kích Hoạt',
      pricingCommunityDesc: 'Nhà phát triển thường xuyên mở ngày chơi thử miễn phí và tặng mã kích hoạt quà tặng trong kênh Discord!',
      pricingCommunityBtn: 'THAM GIA DISCORD CẬP NHẬT TIN TỨC!',
      planPopularBadge: 'TIẾT KIỆM NHẤT',
      planBuyBtn: 'Nhận Gói',
      freeUntil: 'Miễn Phí Đến',
      freeTimeLeft: 'Thời gian còn lại:',

      autoSectionBadge: 'TIỆN ÍCH TỰ ĐỘNG',
      autoSectionTitle: 'Tự Động Đơn Giản',
      autoSectionSubtitle: 'Chúng tôi tạo ra một số tính năng tự động đơn giản để hành trình của bạn dễ dàng hơn, nhưng hãy tự chịu rủi ro khi sử dụng. Chúng tôi không bao giờ tạo bot cày cuốc hay can thiệp sâu vào game.',

      flaskTitle: 'Tự Động Bấm Bình (Auto-Flask)',
      flaskDesc: 'Tự động uống bình Máu, Ward hoặc Mana khi tụt dưới mức quy định. Có độ trễ ngẫu nhiên tự nhiên như người chơi bấm thật.',
      flaskTag1: 'Máu & Ward',
      flaskTag2: 'Kích hoạt Mana',
      flaskTag3: 'Độ trễ ngẫu nhiên',

      craftTitle: 'Tự Động Roll Đồ (Auto-Craft)',
      craftDesc: 'Chọn dòng chỉ số bạn cần, đặt giới hạn tiền và bắt đầu roll. Tự dừng lại nếu ra đồ ngon có nhiều dòng T1 để bạn không roll đè mất đồ xịn.',
      craftTag1: 'Chọn dòng cần tìm',
      craftTag2: 'Bảo vệ dòng giá trị',
      craftTag3: 'Giới hạn số lượng tiền',

      sortTitle: 'Tự Sắp Xếp Hòm & Túi Đồ',
      sortDesc: 'Một nút bấm để gom gọn túi đồ và hòm chứa. Tự động lấp các ô trống theo thứ tự ưu tiên mà không cần kéo thả tay từng món.',
      sortTag1: '1-click dọn gọn túi',
      sortTag2: 'Ưu tiên theo loại đồ',
      sortTag3: 'Xếp hòm thông minh',

      featureSectionBadge: 'TÍNH NĂNG',
      featureSectionTitle: 'Tính Năng Trong Game',
      featureSectionSubtitle: 'Các công cụ hữu ích, cung cấp đúng thông tin bạn cần mà không che mắt.',

      mapOverlayTitle: 'Lớp Phủ Bản Đồ (Map Overlay)',
      mapOverlayDesc: 'Hiển thị boss, quái hiếm, rương, lối ra và waypoint trên bản đồ, kèm đường đi ngắn nhất tới mục tiêu.',

      fpsTitle: 'Tăng FPS',
      fpsDesc: 'Tắt sương mù, bóng đổ, thời tiết và hiệu ứng hạt nặng để tăng FPS và giúp màn hình gọn gàng hơn khi đánh đông quái.',

      priceCheckTitle: 'Check Giá',
      priceCheckDesc: 'Rê chuột vào vật phẩm và nhấn Ctrl+C để xem ngay chỉ số và các món đang bán trên chợ trade.',

      runeshapeTitle: 'Tự Động Check Giá Runeshape',
      runeshapeDesc: 'Tự động kiểm tra giá thị trường ngay khi bạn mở bảng kết hợp Runeshape trong game.',

      campaignTitle: 'Chỉ Đường Đi Cốt Truyện',
      campaignDesc: 'Tự nhận biết map và nhiệm vụ hiện tại. Chỉ đường ngắn nhất qua các Act để bạn lên cấp nhanh nhất mà không bị lạc.',

      treeTitle: 'Xem Cây Kỹ Năng PoB',
      treeDesc: 'Nhập mã build từ Path of Building. Hiển thị đè các điểm kỹ năng cần cộng lên màn hình game để bạn biết ngay nên cộng điểm nào tiếp theo.',

      lootTitle: 'Theo Dõi Đồ Rơi & Thu Nhập',
      lootDesc: 'Tự ghi lại đồ có giá trị vừa nhặt và tính lượng tiền kiếm được mỗi giờ theo thời gian thực khi chạy map.',

      waystoneTitle: 'Kiểm Tra Mod Bản Đồ Waystone',
      waystoneDesc: 'Cảnh báo ngay các dòng mod nguy hiểm (như phản dame, không hồi phục) trước khi bạn mở map để tránh chết oan.',

      tradeTitle: 'Hỗ Trợ Mua Bán (Trade Whisper)',
      tradeDesc: 'Hiện thông báo tin nhắn mua đồ trên màn hình kèm nút bấm 1-click để mời vào party, mở giao dịch hoặc trả lời nhanh mà không cần gõ lệnh.',

      howSectionBadge: 'BẮT ĐẦU NHANH',
      howSectionTitle: 'Sử Dụng Dễ Dàng Với 3 Bước',
      howStep1Title: '1. Tải về & Cài đặt',
      howStep1Desc: 'Nhấn nút tải bộ cài đặt ở phía trên và tiến hành cài đặt.',
      howStep2Title: '2. Khởi Động Companion',
      howStep2Desc: 'Mở PoE2 Companion. Các giao diện hỗ trợ sẽ tự động kết nối.',
      howStep3Title: '3. Mở Path of Exile 2',
      howStep3Desc: 'Khởi động Path of Exile 2 và đăng nhập vào nhân vật của bạn.',

      ctaTitle: 'Sẵn Sàng Chinh Phục Path of Exile 2?',
      ctaSubtitle: 'Gọn nhẹ, an toàn và tối ưu riêng cho game thủ Path of Exile 2.',
      ctaDownloadBtn: 'Tải PoE2 Companion Ngay',

      footerDisclaimer: 'Path of Exile 2 là thương hiệu đã đăng ký của Grinding Gear Games. PoE2 Companion là công cụ bên thứ ba độc lập, không thuộc sở hữu hay quản lý của Grinding Gear Games.',
      footerPlatform: 'Windows 64-bit'
    },

    zh: {
      navAutomation: '自动化',
      navFeatures: '功能',
      navPricing: '价格与计划',
      navHowItWorks: '使用指南',
      navDownload: '立即下载',

      heroTitle: '流亡黯道 2 全能游戏辅助工具',
      heroSubtitle: '实时查价、异界地图词缀检查、BD 构建追踪、掉落统计、背包搜索栏、整理建议、交易助手等丰富功能。请自行承担使用风险。虽然本工具旨在提供游戏便利，但第三方辅助工具可能未完全符合 GGG 服务条款。',
      heroDownloadBtn: '下载 Windows 版',
      heroPlatform: '仅限 Windows · 支持 Windows 10 / 11 · Cloudflare 高速自动更新',
      heroViewFeatures: '浏览功能',

      pricingSectionBadge: '访问计划',
      pricingSectionTitle: '选择适合你的计划',
      pricingSectionSubtitle: '完整解锁全部功能、自动打造及自动更新。',
      pricingCommunityBadge: '社区福利',
      pricingCommunityTitle: '免费周末与礼包兑换码',
      pricingCommunityDesc: '作者定期在官方 Discord 社区举办免费体验周末并派发时长兑换码！',
      pricingCommunityBtn: '加入 DISCORD 获取最新动态！',
      planPopularBadge: '超值推荐',
      planBuyBtn: '获取使用权',
      freeUntil: '限时免费至',
      freeTimeLeft: '剩余免费时间：',

      autoSectionBadge: '解放双手',
      autoSectionTitle: '简单自动化辅助',
      autoSectionSubtitle: '我们制作了一些简单的自动化功能让您的游戏旅程更轻松，但请自行承担使用风险。我们绝不开发自动挂机脚本或破坏平衡的程序。',

      flaskTitle: '自动喝药 (Auto-Flask)',
      flaskDesc: '当生命值、护佑或魔力低于设定阈值时自动使用药水。内置拟人随机延迟，操作自然。',
      flaskTag1: '生命与护佑',
      flaskTag2: '魔力触发',
      flaskTag3: '拟人延迟',

      craftTitle: '自动洗装备 (Auto-Craft)',
      craftDesc: '设定所需词条与通货预算一键自动洗。命中多条高阶 T1 词条自动停止，防止洗掉极品属性。',
      craftTag1: '目标词条筛选',
      craftTag2: '极品词条保护',
      craftTag3: '通货上限保护',

      sortTitle: '一键背包与仓库整理',
      sortDesc: '一键整理杂乱的背包和仓库页。根据分类优先级自动紧凑填满空格，免去手动拖拽。',
      sortTag1: '一键背包整理',
      sortTag2: '自定义优先级',
      sortTag3: '仓库紧凑排列',

      featureSectionBadge: '核心功能',
      featureSectionTitle: '游戏内功能',
      featureSectionSubtitle: '实用工具，提供关键情报而不遮挡战斗视野。',

      mapOverlayTitle: '地图覆盖',
      mapOverlayDesc: '在地图上标出首领、稀有怪物、宝箱、出口与传送点，并显示前往目标的最短路线。',

      fpsTitle: '提升帧数 (FPS)',
      fpsDesc: '关闭雾效、阴影、天气与大量粒子特效，提升帧数，让激烈战斗画面更清爽。',

      priceCheckTitle: '物品查价',
      priceCheckDesc: '鼠标悬停在物品上并按 Ctrl+C，即可立即查看属性与当前交易市场挂单。',

      runeshapeTitle: '符文组合自动查价',
      runeshapeDesc: '在游戏内打开符文组合 (Runeshape Combinations) 界面时，自动查询并显示当前市场实时价格。',

      campaignTitle: '剧情通关导航',
      campaignDesc: '自动侦测当前区域与任务目标，标注试炼与传送点，带你最快速度跑完剧情章节。',

      treeTitle: 'PoB 天赋树游戏内覆盖',
      treeDesc: '直接导入 Path of Building 构建码，将规划好的天赋路线悬浮在游戏界面上，加点一目了然。',

      lootTitle: '掉落统计与实时收益',
      lootDesc: '实时记录掉落的高价值物品，精确计算刷图时的每小时通货收益率。',

      waystoneTitle: '异界地图词缀检查器',
      waystoneDesc: '在开启传送门前标出反伤、无法回复等致命词缀，避免意外暴毙浪费门票。',

      tradeTitle: '交易私聊快捷助手',
      tradeDesc: '屏幕弹窗提示买家私聊，支持一键组队、交易、回复或踢出，无需手动输入指令。',

      howSectionBadge: '三步上手',
      howSectionTitle: '简单 3 步即可使用',
      howStep1Title: '1. 下载与安装',
      howStep1Desc: '点击上方按钮下载并完成安装。',
      howStep2Title: '2. 开启 Companion',
      howStep2Desc: '启动 PoE2 Companion，悬浮界面将自动连接。',
      howStep3Title: '3. 启动 Path of Exile 2',
      howStep3Desc: '开启游戏并载入你的角色。',

      ctaTitle: '准备好提升你的流放之旅了吗？',
      ctaSubtitle: '轻量、安全，专为流亡黯道 2 玩家打造。',
      ctaDownloadBtn: '下载 PoE2 Companion',

      footerDisclaimer: 'Path of Exile 2 是 Grinding Gear Games 的注册商标。PoE2 Companion 是独立的第三方工具，与 Grinding Gear Games 无任何隶属关系。',
      footerPlatform: 'Windows 64位'
    },

    ko: {
      navAutomation: '자동화',
      navFeatures: '기능',
      navPricing: '이용권 플랜',
      navHowItWorks: '설치 가이드',
      navDownload: '다운로드',

      heroTitle: '패스 오브 엑자일 2를 위한 최고의 동반자 도구',
      heroSubtitle: '시세 검색, 지도(Waystone) 옵션 확인, 빌드 트래커, 전리품 기록, 인벤토리 검색창, 정렬 제안, 거래 도우미 등 다양한 편의 기능. 이용에 따른 위험은 사용자가 감수해야 합니다. 편의를 위해 제작되었으나, 서드파티 도구는 GGG 서비스 이용약관을 완전히 준수하지 않을 수 있습니다.',
      heroDownloadBtn: 'Windows용 다운로드',
      heroPlatform: 'Windows 전용 · Windows 10 / 11 지원 · Cloudflare 초고속 업데이트',
      heroViewFeatures: '기능 둘러보기',

      pricingSectionBadge: '이용권 플랜',
      pricingSectionTitle: '나에게 맞는 플랜 선택',
      pricingSectionSubtitle: '모든 인게임 기능, 자동 제작 및 최신 업데이트 지원.',
      pricingCommunityBadge: '커뮤니티 혜택',
      pricingCommunityTitle: '주말 무료 체험 & 리딤 코드',
      pricingCommunityDesc: '개발자가 공식 Discord에서 주말 무료 이용 이벤트 및 이용권 리딤 코드를 수시로 배포합니다!',
      pricingCommunityBtn: '최신 소식 확인하러 DISCORD 참여!',
      planPopularBadge: '최고 가성비',
      planBuyBtn: '이용권 구매',
      freeUntil: '무료 이용 기한:',
      freeTimeLeft: '남은 무료 시간:',

      autoSectionBadge: '편의 자동화',
      autoSectionTitle: '간편 편의 자동화',
      autoSectionSubtitle: '모험을 조금 더 수월하게 즐기실 수 있도록 간단한 편의 기능을 제공하지만, 사용에 따른 위험은 본인 책임입니다. 저희는 자동 사냥 봇이나 악의적인 매크로를 절대 제작하지 않습니다.',

      flaskTitle: '자동 물약 (Auto-Flask)',
      flaskDesc: '생명력, 보호막 또는 마나가 설정한 수치 이하로 떨어지면 자동으로 물약을 사용합니다. 자연스러운 딜레이가 적용되어 있습니다.',
      flaskTag1: '생명력 & 보호막',
      flaskTag2: '마나 트리거',
      flaskTag3: '자연스러운 딜레이',

      craftTitle: '자동 제작 (Auto-Craft)',
      craftDesc: '원하는 옵션과 예산을 설정하고 시작하세요. 높은 티어의 유효 옵션이 나오면 자동으로 멈춰 중요한 아이템을 날리는 일을 막아줍니다.',
      craftTag1: '목표 옵션 지정',
      craftTag2: '고티어 옵션 보호',
      craftTag3: '화폐 예산 제한',

      sortTitle: '인벤토리 및 보관함 자동 정리',
      sortDesc: '클릭 한 번으로 흩어진 아이템을 카테고리 우선순위에 맞춰 자동으로 깔끔하게 정리합니다.',
      sortTag1: '1클릭 인벤토리 정리',
      sortTag2: '카테고리별 우선순위',
      sortTag3: '보관함 자동 정렬',

      featureSectionBadge: '주요 기능',
      featureSectionTitle: '게임 내 기능',
      featureSectionSubtitle: '플레이를 방해하지 않고 필요한 정보만 깔끔하게 전달합니다.',

      mapOverlayTitle: '맵 오버레이',
      mapOverlayDesc: '보스, 희귀 몬스터, 상자, 출구, 웨이포인트를 지도에 표시하고 목표까지 가장 빠른 경로를 안내합니다.',

      fpsTitle: 'FPS 향상',
      fpsDesc: '안개, 그림자, 날씨, 과도한 파티클 효과를 꺼서 FPS를 높이고 복잡한 전투 화면을 깔끔하게 만듭니다.',

      priceCheckTitle: '시세 확인',
      priceCheckDesc: '아이템에 마우스를 올리고 Ctrl+C를 누르면 옵션과 현재 거래소 매물을 바로 확인할 수 있습니다.',

      runeshapeTitle: '룬 조합(Runeshape) 자동 시세 확인',
      runeshapeDesc: '게임 내에서 룬 조합(Runeshape Combinations) 창을 열면 자동으로 시장 시세를 확인하여 표시합니다.',

      campaignTitle: '캠페인 길잡이',
      campaignDesc: '현재 지역과 퀘스트를 자동으로 감지하여 액트를 가장 빠르게 돌파할 수 있는 경로를 안내합니다.',

      treeTitle: 'PoB 빌드 & 패시브 트리 HUD',
      treeDesc: 'Path of Building 빌드 코드를 불러와 게임 화면 위에 찍어야 할 패시브 노드를 바로 띄워줍니다.',

      lootTitle: '전리품 기록 및 시급 계산',
      lootDesc: '파밍 중 드롭된 가치 있는 아이템을 기록하고 시간당 화폐 획득량을 실시간으로 계산합니다.',

      waystoneTitle: '지도(Waystone) 위험 옵션 경고',
      waystoneDesc: '반사 데미지나 재생 불가 등 캐릭터를 위협하는 모드를 포탈을 열기 전에 미리 경고해 줍니다.',

      tradeTitle: '거래 귓속말 도우미',
      tradeDesc: '거래 귓속말이 오면 1클릭 파티 초대, 거래 신청, 빠른 답장을 화면에서 바로 처리할 수 있습니다.',

      howSectionBadge: '간단 시작',
      howSectionTitle: '단 3단계로 시작하기',
      howStep1Title: '1. 다운로드 및 설치',
      howStep1Desc: '상단 버튼을 눌러 설치 파일을 다운로드하고 설치합니다.',
      howStep2Title: '2. Companion 실행',
      howStep2Desc: 'PoE2 Companion을 켜면 오버레이가 자동으로 연동됩니다.',
      howStep3Title: '3. Path of Exile 2 실행',
      howStep3Desc: '게임을 켜고 캐릭터에 접속합니다.',

      ctaTitle: '더 편안한 PoE2 플레이를 시작할 준비가 되셨나요?',
      ctaSubtitle: '가볍고 안전하며 패스 오브 엑자일 2 유저를 위해 설계되었습니다.',
      ctaDownloadBtn: 'PoE2 Companion 다운로드',

      footerDisclaimer: 'Path of Exile 2는 Grinding Gear Games의 등록 상표입니다. PoE2 Companion은 독립적인 서드파티 프로그램이며 Grinding Gear Games와 공식 제휴 관계가 아닙니다.',
      footerPlatform: 'Windows 64비트'
    },

    ru: {
      navAutomation: 'Автоматизация',
      navFeatures: 'Функции',
      navPricing: 'Тарифы',
      navHowItWorks: 'Установка',
      navDownload: 'Скачать',

      heroTitle: 'Ваш главный игровой помощник в Path of Exile 2',
      heroSubtitle: 'Оценка цен, проверка карт (Waystone), трекер билда, учет лута, поиск по инвентарю, подсказки по сортировке, помощник в торговле и многое другое. Используйте на свой страх и риск. Несмотря на удобство, сторонние утилиты могут не полностью соответствовать условиям обслуживания GGG.',
      heroDownloadBtn: 'Скачать для Windows',
      heroPlatform: 'Только для Windows · Windows 10 / 11 · Автообновление через Cloudflare',
      heroViewFeatures: 'Все функции',

      pricingSectionBadge: 'ПЛАНЫ ДОСТУПА',
      pricingSectionTitle: 'Выберите Тариф Доступа',
      pricingSectionSubtitle: 'Полный доступ ко всем функциям, авто-крафту и автоматическим обновлениям.',
      pricingCommunityBadge: 'БОНУСЫ СООБЩЕСТВА',
      pricingCommunityTitle: 'Бесплатные Выходные и Промокоды',
      pricingCommunityDesc: 'Разработчик регулярно устраивает дни бесплатного доступа и раздает промокоды в Discord!',
      pricingCommunityBtn: 'НАШ DISCORD С НОВОСТЯМИ!',
      planPopularBadge: 'ВЫГОДНЫЙ ВЫБОР',
      planBuyBtn: 'Получить Доступ',
      freeUntil: 'Бесплатно до',
      freeTimeLeft: 'Осталось времени:',

      autoSectionBadge: 'АВТОМАТИЗАЦИЯ',
      autoSectionTitle: 'Простая Автоматизация',
      autoSectionSubtitle: 'Мы добавили несколько простых удобств, чтобы облегчить ваше путешествие, но используйте их на свой страх и риск. Мы никогда не будем делать авто-ботов или навязчивую автоматизацию.',

      flaskTitle: 'Авто-Флаконы (Auto-Flask)',
      flaskDesc: 'Автоматически пьет флаконы здоровья, защиты или маны, когда их уровень падает ниже заданного. С естественными задержками кликов.',
      flaskTag1: 'Здоровье и Защита',
      flaskTag2: 'Триггер Маны',
      flaskTag3: 'Плавные задержки',

      craftTitle: 'Авто-Крафт (Auto-Craft)',
      craftDesc: 'Выберите нужные свойства, задайте лимит валюты и запустите ролл. Автоматически останавливается при выпадении редких Т1 свойств, чтобы вы случайно не сбросили ценную вещь.',
      craftTag1: 'Выбор нужных модов',
      craftTag2: 'Защита ценных свойств',
      craftTag3: 'Ограничение бюджета',

      sortTitle: 'Авто-Сортировка Инвентаря и Сундука',
      sortDesc: 'В один клик наводит порядок в инвентаре и вкладках сундука, заполняя пустые слоты по вашим приоритетам.',
      sortTag1: '1 клик для порядка',
      sortTag2: 'Приоритеты категорий',
      sortTag3: 'Умная укладка в сундук',

      featureSectionBadge: 'ФУНКЦИИ',
      featureSectionTitle: 'Игровые Функции',
      featureSectionSubtitle: 'Полезные инструменты, которые показывают главное и не закрывают обзор.',

      mapOverlayTitle: 'Оверлей Карты',
      mapOverlayDesc: 'Показывает боссов, редких монстров, сундуки, выходы и точки телепортации на карте, а также кратчайший путь к цели.',

      fpsTitle: 'Больше FPS',
      fpsDesc: 'Отключает туман, тени, погоду и тяжелые эффекты частиц, повышая FPS и убирая визуальный шум в напряженных боях.',

      priceCheckTitle: 'Оценка Цен',
      priceCheckDesc: 'Наведите курсор на предмет и нажмите Ctrl+C, чтобы сразу увидеть его свойства и актуальные лоты на торговой площадке.',

      runeshapeTitle: 'Авто-Оценка Комбинаций Рун (Runeshape)',
      runeshapeDesc: 'Автоматически проверяет актуальные рыночные цены при открытии окна комбинаций рун (Runeshape) в игре.',

      campaignTitle: 'Гайд по Сюжетной Кампании',
      campaignDesc: 'Автоматически определяет локацию и квесты. Ведет по самому быстрому маршруту через акты, отмечая испытания и порталы.',

      treeTitle: 'Оверлей Дерева из PoB',
      treeDesc: 'Импортируйте код сборки из Path of Building. Дерево умений накладывается прямо на экран игры, подсказывая следующие очки.',

      lootTitle: 'Учет Добычи и Доход в Час',
      lootDesc: 'Фиксирует ценный лут и рассчитывает средний доход валюты в час прямо во время фарма карт.',

      waystoneTitle: 'Проверка Опасных Модов Карт',
      waystoneDesc: 'Предупреждает об опасных модификаторах (отражение урона, запрет регенерации) до открытия портала, спасая от глупых смертей.',

      tradeTitle: 'Помощник Торговли (Trade Whisper)',
      tradeDesc: 'Уведомления о покупателях на экране с кнопками в 1 клик для приглашения в группу, трейда или быстрого ответа.',

      howSectionBadge: 'БЫСТРЫЙ СТАРТ',
      howSectionTitle: 'Всего 3 Простых Шага',
      howStep1Title: '1. Скачайте установщик',
      howStep1Desc: 'Нажмите кнопку загрузки вверху страницы и установите программу.',
      howStep2Title: '2. Запустите Companion',
      howStep2Desc: 'Откройте PoE2 Companion — оверлеи подключатся автоматически.',
      howStep3Title: '3. Запустите Path of Exile 2',
      howStep3Desc: 'Откройте игру и зайдите на своего персонажа.',

      ctaTitle: 'Готовы сделать игру в PoE2 удобнее?',
      ctaSubtitle: 'Быстрый, безопасный и сделанный специально для игроков Path of Exile 2.',
      ctaDownloadBtn: 'Скачать PoE2 Companion',

      footerDisclaimer: 'Path of Exile 2 является зарегистрированным товарным знаком Grinding Gear Games. PoE2 Companion — независимый сторонний инструмент, не связанный с Grinding Gear Games.',
      footerPlatform: 'Windows 64-bit'
    },

    th: {
      navAutomation: 'ระบบอัตโนมัติ',
      navFeatures: 'ฟีเจอร์',
      navPricing: 'ราคา',
      navHowItWorks: 'วิธีติดตั้ง',
      navDownload: 'ดาวน์โหลด',

      heroTitle: 'โปรแกรมช่วยเล่น Path of Exile 2',
      heroSubtitle: 'เช็คราคาตลาด, ตรวจสอบม็อด Waystone, ติดตามบิลด์, บันทึกไอเทมดรอป, ช่องค้นหากระเป๋า, แนะนำจัดของ, ตัวช่วยซื้อขาย และอื่นๆ โปรดใช้งานโดยยอมรับความเสี่ยงด้วยตนเอง แม้ถูกสร้างขึ้นเพื่ออำนวยความสะดวก แต่โปรแกรมภายนอกอาจไม่สอดคล้องกับข้อกำหนดการใช้งานของ GGG',
      heroDownloadBtn: 'ดาวน์โหลดสำหรับ Windows',
      heroPlatform: 'เฉพาะ Windows · รองรับ Windows 10 / 11 · อัปเดตอัตโนมัติผ่าน Cloudflare',
      heroViewFeatures: 'ดูฟีเจอร์ทั้งหมด',

      pricingSectionBadge: 'แพ็กเกจใช้งาน',
      pricingSectionTitle: 'เลือกแพ็กเกจของคุณ',
      pricingSectionSubtitle: 'เข้าถึงทุกฟีเจอร์ ออโต้คราฟต์ และการอัปเดตใหม่ๆ ได้ทันที',
      pricingCommunityBadge: 'กิจกรรมคอมมูนิตี้',
      pricingCommunityTitle: 'เล่นฟรีสุดสัปดาห์ & แจกโค้ด',
      pricingCommunityDesc: 'ผู้พัฒนาเปิดให้เล่นฟรีช่วงวันหยุดสุดสัปดาห์บ่อยๆ และมีแจกโค้ดใน Discord อยู่เรื่อยๆ!',
      pricingCommunityBtn: 'เข้า DISCORD เพื่อรับข่าวสาร!',
      planPopularBadge: 'คุ้มค่าที่สุด',
      planBuyBtn: 'ซื้อแพ็กเกจ',
      freeUntil: 'เปิดให้ใช้ฟรีถึง',
      freeTimeLeft: 'เวลาฟรีที่เหลือ:',

      autoSectionBadge: 'ระบบช่วยเล่น',
      autoSectionTitle: 'ระบบอัตโนมัติที่เรียบง่าย',
      autoSectionSubtitle: 'เราทำระบบช่วยเล่นง่ายๆ เพื่อให้เล่นสบายขึ้น แต่โปรดรับความเสี่ยงด้วยตัวเอง เราจะไม่ทำบอทฟาร์มอัตโนมัติหรือระบบที่รบกวนเกมเด็ดขาด',

      flaskTitle: 'กดยาอัตโนมัติ (Auto-Flask)',
      flaskDesc: 'กดยาเลือด ยาวอร์ด หรือยามานาให้อัตโนมัติเมื่อเลือดหรือมานาลดต่ำกว่าที่ตั้งไว้ มีหน่วงเวลาแบบธรรมชาติเหมือนคนกดจริง',
      flaskTag1: 'เลือด & วอร์ด',
      flaskTag2: 'กดตามมานา',
      flaskTag3: 'หน่วงเวลาเหมือนคนกด',

      craftTitle: 'ระบบช่วยคราฟต์ของ (Auto-Craft)',
      craftDesc: 'เลือกออปชันที่ต้องการ ตั้งงบเงินคราฟต์ แล้วกดสุ่มได้เลย ระบบจะหยุดให้อัตโนมัติเมื่อได้ออปชันเทียร์สูง ป้องกันการสุ่มทับของมีค่า',
      craftTag1: 'เลือกออปชันที่ต้องการ',
      craftTag2: 'กันสุ่มทับของดี',
      craftTag3: 'จำกัดงบเงินคราฟต์',

      sortTitle: 'จัดกระเป๋าและคลังอัตโนมัติ',
      sortDesc: 'คลิกเดียวจัดของในตัวและในคลังให้เรียบร้อย เติมช่องว่างตามหมวดหมู่ไอเทม ไม่ต้องคอยลากวางทีละชิ้น',
      sortTag1: 'คลิกเดียวจัดกระเป๋า',
      sortTag2: 'จัดเรียงตามหมวดหมู่',
      sortTag3: 'เก็บเข้าคลังเป็นระเบียบ',

      featureSectionBadge: 'ฟีเจอร์',
      featureSectionTitle: 'ฟีเจอร์ในเกม',
      featureSectionSubtitle: 'เครื่องมือที่ใช้งานง่าย เห็นข้อมูลชัด และไม่บังสายตาเวลาเล่น',

      mapOverlayTitle: 'โอเวอร์เลย์แผนที่',
      mapOverlayDesc: 'แสดงบอส มอนสเตอร์แรร์ หีบ ทางออก และเวย์พอยต์บนแผนที่ พร้อมบอกเส้นทางที่เร็วที่สุดไปยังเป้าหมาย',

      fpsTitle: 'เพิ่ม FPS',
      fpsDesc: 'ปิดหมอก เงา สภาพอากาศ และเอฟเฟกต์อนุภาคหนักๆ เพื่อเพิ่ม FPS และให้จอสะอาดตาขึ้นตอนสู้มอนเยอะๆ',

      priceCheckTitle: 'เช็คราคา',
      priceCheckDesc: 'ชี้เมาส์ที่ไอเทมแล้วกด Ctrl+C เพื่อดูค่าสเตตัสและรายการขายในตลาดเทรดได้ทันที',

      runeshapeTitle: 'เช็คราคา รูนเชป (Runeshape)',
      runeshapeDesc: 'เช็คราคาตลาดให้อัตโนมัติทันทีที่เปิดหน้าต่างผสม รูนเชป ในเกม',

      campaignTitle: 'นำทางเนื้อเรื่องและเควสต์',
      campaignDesc: 'ตรวจจับแมพและเควสต์ปัจจุบันให้อัตโนมัติ บอกเส้นทางที่เร็วที่สุดในแต่ละ Act ไม่ต้องกลัวหลง',

      treeTitle: 'แสดงผังพาสซีฟ PoB ในเกม',
      treeDesc: 'นำเข้าโค้ดบิลด์จาก Path of Building แล้วนำผังพาสซีฟมาทาบในเกมได้เลย รู้ทันทีว่าต้องอัปจุดไหนต่อ',

      lootTitle: 'ติดตามของดรอป & รายได้',
      lootDesc: 'บันทึกของมีค่าที่ดรอป พร้อมคำนวณเงินที่ฟาร์มได้ต่อชั่วโมงแบบเรียลไทม์',

      waystoneTitle: 'ตรวจม็อดอันตรายบนเวย์สโตน',
      waystoneDesc: 'เตือนม็อดแมพที่อันตรายก่อนเปิดวาร์ป เช่น ม็อดสะท้อน หรือห้ามรีเจนเลือด ช่วยไม่ให้ตายฟรี',

      tradeTitle: 'ผู้ช่วยรับข้อความซื้อขาย',
      tradeDesc: 'ขึ้นเตือนเมื่อมีคนทักซื้อของ พร้อมปุ่มคลิกเดียวเชิญปาร์ตี้ เปิดเทรด หรือตอบกลับ ไม่ต้องพิมพ์คำสั่งเอง',

      howSectionBadge: 'เริ่มต้นง่ายๆ',
      howSectionTitle: 'พร้อมใช้งานใน 3 ขั้นตอน',
      howStep1Title: '1. ดาวน์โหลดและติดตั้ง',
      howStep1Desc: 'ดาวน์โหลดตัวติดตั้งจากปุ่มด้านบนแล้วกดติดตั้ง',
      howStep2Title: '2. เปิด PoE2 Companion',
      howStep2Desc: 'เปิดโปรแกรม PoE2 Companion ตัวโอเวอร์เลย์จะเชื่อมต่อให้อัตโนมัติ',
      howStep3Title: '3. เปิดเกม Path of Exile 2',
      howStep3Desc: 'เปิดเกม Path of Exile 2 แล้วเข้าเล่นตัวละครของคุณ',

      ctaTitle: 'พร้อมเล่น PoE2 ให้สบายขึ้นแล้วหรือยัง?',
      ctaSubtitle: 'กินสเปกน้อย ปลอดภัย และสร้างมาเพื่อผู้เล่น Path of Exile 2 โดยเฉพาะ',
      ctaDownloadBtn: 'ดาวน์โหลด PoE2 Companion',

      footerDisclaimer: 'Path of Exile 2 เป็นเครื่องหมายการค้าจดทะเบียนของ Grinding Gear Games ส่วน PoE2 Companion เป็นโปรแกรมเสริมอิสระจากภายนอก และไม่มีส่วนเกี่ยวข้องหรือได้รับการรับรองจาก Grinding Gear Games',
      footerPlatform: 'Windows 64-บิต'
    }
  };

  // State
  const STORAGE_KEY = 'poe2_companion_locale';
  let currentLocale = 'en';

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) {
      currentLocale = saved;
    } else {
      const browserLang = (navigator.language || '').toLowerCase();
      if (browserLang.startsWith('vi')) currentLocale = 'vi';
      else if (browserLang.startsWith('zh')) currentLocale = 'zh';
      else if (browserLang.startsWith('ko')) currentLocale = 'ko';
      else if (browserLang.startsWith('ru')) currentLocale = 'ru';
      else if (browserLang.startsWith('th')) currentLocale = 'th';
    }
  } catch (e) {
    // localStorage may be disabled in some sandboxes
  }

  function updateLanguageDropdown() {
    const loc = LOCALES.find(l => l.code === currentLocale) || LOCALES[0];
    const flagEl = document.getElementById('lang-current-flag');
    const labelEl = document.getElementById('lang-current-label');
    if (flagEl) flagEl.textContent = loc.flag;
    if (labelEl) labelEl.textContent = loc.label;

    const select = document.getElementById('lang-select');
    if (select) select.value = currentLocale;

    document.querySelectorAll('.lang-item').forEach(item => {
      const isSelected = item.getAttribute('data-value') === currentLocale;
      item.classList.toggle('active', isSelected);
      item.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });
  }

  function applyTranslations() {
    const dict = translations[currentLocale] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.documentElement.lang = currentLocale;
    updateLanguageDropdown();
  }

  function setLocale(newLocale) {
    if (!translations[newLocale]) return;
    currentLocale = newLocale;
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch (e) {}
    applyTranslations();
    renderFreeEventOverlay();
  }

  // Version & Latest League Resolver
  async function resolveLatestVersion() {
    const MANIFEST_URL = 'https://poe2update.zonelyg.com/latest.json';
    const FALLBACK_VERSION = 'v0.1.12';
    const FALLBACK_URL = 'https://poe2update.zonelyg.com/PoE2%20Companion_0.1.12_x64-setup.exe';
    const FALLBACK_LEAGUE = 'Forbidden Rites';
    const TRADE_HASH = 'H4sIAAAAAAAACqtWKi5JLCktVrKqVsovKMnMz1OyUkosS8zMSUzKSVWq1QHLFytZRVcrlVQWpIJk81KUdJTSMnNKUotAErG1sbUA2ikBQEcAAAA';

    let version = FALLBACK_VERSION;
    let downloadUrl = FALLBACK_URL;
    let league = FALLBACK_LEAGUE;

    try {
      const res = await fetch(MANIFEST_URL, { cache: 'no-cache' });
      if (res.ok) {
        const data = await res.json();
        if (data.version) {
          version = data.version.startsWith('v') ? data.version : 'v' + data.version;
        }
        if (data.platforms && data.platforms['windows-x86_64'] && data.platforms['windows-x86_64'].url) {
          downloadUrl = data.platforms['windows-x86_64'].url;
        }
        if (data.league && typeof data.league === 'string' && data.league.trim()) {
          league = data.league.trim();
        }
      }
    } catch (e) {
      // Offline fallback
    }

    // Dynamic league check from zonelyg backend if available
    try {
      const leagueRes = await fetch('https://zonelyg.com/api/poe2companion/latest-poe2-league', {
        headers: { 'Accept': 'application/json' }
      });
      if (leagueRes.ok) {
        const leagueData = await leagueRes.json();
        if (leagueData.league && typeof leagueData.league === 'string' && leagueData.league.trim()) {
          league = leagueData.league.trim();
        }
      }
    } catch (_) {
      // Silently fall back to manifest or fallback league
    }

    document.querySelectorAll('.app-download-link').forEach(el => {
      el.setAttribute('href', downloadUrl);
    });
    document.querySelectorAll('.app-version-badge').forEach(el => {
      el.textContent = version;
    });

    const tradeUrl = `https://www.pathofexile.com/trade2/search/poe2/${encodeURIComponent(league)}/${TRADE_HASH}`;
    document.querySelectorAll('.poe2-trade-link').forEach(el => {
      el.setAttribute('href', tradeUrl);
      el.setAttribute('title', `Open PoE 2 Trade Market (${league})`);
    });
  }

  // Dynamic Pricing Plans from zonelyg.com/api/poe2companion/buy-plan
  async function fetchPricingPlans() {
    const API_URL = 'https://zonelyg.com/api/poe2companion/buy-plan';
    const grid = document.getElementById('pricing-grid');
    if (!grid) return;

    try {
      const res = await fetch(API_URL);
      if (!res.ok) return;
      const data = await res.json();
      if (!data.success || !Array.isArray(data.plans) || data.plans.length === 0) return;

      const dict = translations[currentLocale] || translations.en;
      const popularBadgeText = dict.planPopularBadge || 'BEST VALUE';
      const buyBtnText = dict.planBuyBtn || 'Get Access';

      grid.innerHTML = data.plans.map(plan => {
        const isBest = plan.id === '30_days' || plan.durationDays === 30;
        const discountBadge = plan.discountPercent > 0 
          ? `<span class="plan-discount-badge">-${plan.discountPercent}%</span>` 
          : '';
        const popularTag = isBest 
          ? `<div class="plan-best-badge">${popularBadgeText}</div>` 
          : '';

        return `
          <div class="pricing-card ${isBest ? 'pricing-card-highlight' : ''}">
            ${popularTag}
            <div class="plan-header">
              <div class="plan-title-row">
                <h3 class="plan-name">${plan.name}</h3>
                ${discountBadge}
              </div>
              <div class="plan-price-wrap">
                <span class="plan-currency">$</span>
                <span class="plan-price">${plan.priceUsdt}</span>
                <span class="plan-crypto">USDT</span>
              </div>
            </div>

            <ul class="plan-perks">
              <li><span class="perk-check">✓</span> <span>Runeshape Price Check</span></li>
              <li><span class="perk-check">✓</span> <span>Auto-Craft &amp; Stash Packing</span></li>
              <li><span class="perk-check">✓</span> <span>PoB Passive Tree Overlay</span></li>
              <li><span class="perk-check">✓</span> <span>Automatic Cloudflare Updates</span></li>
            </ul>

            <a href="https://discord.gg/yBhYEVyRgh" target="_blank" rel="noopener noreferrer" class="btn-plan-action">
              <span>${buyBtnText}</span>
              <span class="plan-btn-arrow">→</span>
            </a>
          </div>
        `;
      }).join('');
    } catch (e) {
      // Retain fallback HTML cards
    }
  }

  // Free Event Overlay on Access Plans
  let freeEventTimerInterval = null;
  let activeFreeEventEndDate = null;

  async function checkFreeEvent() {
    const PRIMARY_CONFIG_URL = 'https://zonelyg.com/api/globals/poe2-companion-config?depth=2&draft=false&locale=en-US&trash=false';
    const FALLBACK_CONFIG_URL = 'https://zonelyg.com/api/poe2companion/free-event';

    let config = null;

    try {
      const res = await fetch(PRIMARY_CONFIG_URL);
      if (res.ok) {
        config = await res.json();
      }
    } catch (_) {
      // Primary fetch failed (e.g. CORS on file:///), try companion route
    }

    if (!config) {
      try {
        const fallbackRes = await fetch(FALLBACK_CONFIG_URL);
        if (fallbackRes.ok) {
          config = await fallbackRes.json();
        }
      } catch (_) {}
    }

    if (!config || !config.freeEventEndDate) return;

    const endDate = new Date(config.freeEventEndDate);
    if (isNaN(endDate.getTime())) return;

    if (Date.now() < endDate.getTime()) {
      activeFreeEventEndDate = endDate;
      renderFreeEventOverlay();
    }
  }

  function formatCountdown(ms) {
    if (ms <= 0) return '0s';
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0 || days > 0) parts.push(`${hours}h`);
    if (minutes > 0 || hours > 0 || days > 0) parts.push(`${minutes}m`);
    parts.push(`${seconds}s`);
    return parts.join(' ');
  }

  function renderFreeEventOverlay() {
    if (!activeFreeEventEndDate) return;
    const wrapper = document.getElementById('pricing-plans-wrapper');
    if (!wrapper) return;

    const remaining = activeFreeEventEndDate.getTime() - Date.now();
    if (remaining <= 0) {
      if (freeEventTimerInterval) {
        clearInterval(freeEventTimerInterval);
        freeEventTimerInterval = null;
      }
      wrapper.classList.remove('has-free-event');
      const oldOverlay = document.getElementById('free-event-overlay');
      if (oldOverlay) oldOverlay.remove();
      return;
    }

    wrapper.classList.add('has-free-event');

    const dict = translations[currentLocale] || translations.en;
    const freeUntilText = dict.freeUntil || 'Free Until';
    const freeTimeLeftText = dict.freeTimeLeft || 'Free time left:';

    const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    const dateStr = activeFreeEventEndDate.toLocaleDateString(
      currentLocale === 'en' ? 'en-US' : (currentLocale === 'th' ? 'th-TH' : currentLocale),
      dateOptions
    );

    let overlay = document.getElementById('free-event-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'free-event-overlay';
      overlay.className = 'free-event-overlay';
      overlay.innerHTML = `
        <div class="free-event-card">
          <div class="free-event-emblem">◈</div>
          <div class="free-event-title" id="free-event-heading"></div>
          <div class="free-event-sub">
            <span class="free-event-timer-label" id="free-event-label"></span>
            <span class="free-event-countdown" id="free-event-countdown"></span>
          </div>
        </div>
      `;
      wrapper.appendChild(overlay);
    }

    const headingEl = document.getElementById('free-event-heading');
    const labelEl = document.getElementById('free-event-label');
    const countdownEl = document.getElementById('free-event-countdown');

    if (headingEl) headingEl.textContent = `${freeUntilText} ${dateStr}`;
    if (labelEl) labelEl.textContent = freeTimeLeftText;
    if (countdownEl) countdownEl.textContent = formatCountdown(remaining);

    if (!freeEventTimerInterval) {
      freeEventTimerInterval = setInterval(() => {
        const msLeft = activeFreeEventEndDate.getTime() - Date.now();
        if (msLeft <= 0) {
          clearInterval(freeEventTimerInterval);
          freeEventTimerInterval = null;
          wrapper.classList.remove('has-free-event');
          const ov = document.getElementById('free-event-overlay');
          if (ov) ov.remove();
        } else {
          const cd = document.getElementById('free-event-countdown');
          if (cd) cd.textContent = formatCountdown(msLeft);
        }
      }, 1000);
    }
  }

  function initLanguageDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const btn = document.getElementById('lang-dropdown-btn');
    const menu = document.getElementById('lang-menu');
    if (!dropdown || !btn || !menu) return;

    function closeDropdown(focusBtn = false) {
      if (!dropdown.classList.contains('open')) return;
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      if (focusBtn) btn.focus();
    }

    function openDropdown() {
      dropdown.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }

    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (dropdown.classList.contains('open')) {
        closeDropdown(false);
      } else {
        openDropdown();
      }
    });

    btn.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDropdown();
        const activeItem = menu.querySelector('.lang-item.active') || menu.querySelector('.lang-item');
        if (activeItem) activeItem.focus();
      }
    });

    menu.addEventListener('click', e => {
      const item = e.target.closest('.lang-item');
      if (!item) return;
      const val = item.getAttribute('data-value');
      if (val) {
        setLocale(val);
        fetchPricingPlans();
        closeDropdown(true);
      }
    });

    menu.addEventListener('keydown', e => {
      const items = Array.from(menu.querySelectorAll('.lang-item'));
      const currentIndex = items.indexOf(document.activeElement);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        items[prevIndex].focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (currentIndex >= 0) {
          const val = items[currentIndex].getAttribute('data-value');
          if (val) {
            setLocale(val);
            fetchPricingPlans();
            closeDropdown(true);
          }
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeDropdown(true);
      } else if (e.key === 'Tab') {
        closeDropdown(false);
      }
    });

    document.addEventListener('click', e => {
      if (!dropdown.contains(e.target)) {
        closeDropdown(false);
      }
    });
  }

  // Init DOM
  function init() {
    const select = document.getElementById('lang-select');
    if (select) {
      // Ensure options are present
      if (select.children.length === 0) {
        LOCALES.forEach(loc => {
          const opt = document.createElement('option');
          opt.value = loc.code;
          opt.textContent = `${loc.flag} ${loc.label}`;
          if (loc.code === currentLocale) opt.selected = true;
          select.appendChild(opt);
        });
      } else {
        select.value = currentLocale;
      }

      select.addEventListener('change', e => {
        setLocale(e.target.value);
        fetchPricingPlans();
      });
    }

    initLanguageDropdown();
    applyTranslations();
    resolveLatestVersion();
    fetchPricingPlans();
    checkFreeEvent();

    // Image fallback handling
    document.querySelectorAll('.card-preview-img').forEach(img => {
      img.addEventListener('error', () => {
        img.style.display = 'none';
        const fallback = img.parentElement.querySelector('.preview-mockup');
        if (fallback) fallback.style.display = 'flex';
      });
    });

    // Smooth scroll to top on nav brand click
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
      navBrand.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, null, window.location.pathname);
        }
      });
    }

    // Video Loading Indicators & Viewport Observer
    document.querySelectorAll('.hero-preview-frame, .card-preview-slot').forEach(container => {
      const video = container.querySelector('video');
      if (!video) return;

      // Inject 3-dot staggered emblem loading indicator if not pre-rendered
      if (!container.querySelector('.video-loader')) {
        const loader = document.createElement('div');
        loader.className = 'video-loader';
        loader.setAttribute('aria-label', 'Loading video preview');
        loader.innerHTML = `
          <div class="video-loader-dots">
            <span class="loader-emblem">◈</span>
            <span class="loader-emblem">◈</span>
            <span class="loader-emblem">◈</span>
          </div>
        `;
        container.appendChild(loader);
      }

      // Load animation runs only ONCE upon initial load; never re-triggers on video loop/replay
      let hasLoadedOnce = false;

      const markLoaded = () => {
        if (hasLoadedOnce) return;
        hasLoadedOnce = true;
        container.classList.add('video-loaded');

        // Permanently remove loader from DOM once faded out so it can never reappear on loop
        const loader = container.querySelector('.video-loader');
        if (loader) {
          setTimeout(() => {
            if (loader.parentNode) loader.remove();
          }, 400);
        }
      };

      const markBuffering = () => {
        if (!hasLoadedOnce) {
          container.classList.remove('video-loaded');
        }
      };

      // Native frame presentation callback (Edge 90+, Chrome 83+, Safari 15.4+)
      if ('requestVideoFrameCallback' in video) {
        video.requestVideoFrameCallback(markLoaded);
      }

      // Playing & timeupdate triggers
      video.addEventListener('playing', markLoaded);
      video.addEventListener('timeupdate', () => {
        if (video.currentTime > 0) {
          markLoaded();
        }
      });

      // Keep loader looping only during initial buffering before first load
      video.addEventListener('waiting', markBuffering);
      video.addEventListener('stalled', markBuffering);
      video.addEventListener('loadstart', markBuffering);

      // Handle codec/decode errors gracefully (e.g., Edge without HEVC extension)
      video.addEventListener('error', () => {
        if (!hasLoadedOnce) {
          markBuffering();
          if (video.poster) {
            video.style.opacity = '0';
            container.style.backgroundImage = `url('${video.poster}')`;
            container.style.backgroundSize = 'cover';
            container.style.backgroundPosition = 'center';
          }
        }
      });

      // Strict autoplay settings for Edge and mobile
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute('muted', '');
      video.playsInline = true;
      video.setAttribute('playsinline', '');

      // Attempt initial playback with autoplay policy fallback
      const tryPlay = () => {
        const p = video.play();
        if (p !== undefined) {
          p.catch(() => {
            const resumeOnGesture = () => {
              video.play().catch(() => {});
            };
            ['pointerdown', 'touchstart', 'scroll', 'keydown', 'click'].forEach(evt => {
              window.addEventListener(evt, resumeOnGesture, { once: true, passive: true });
            });
          });
        }
      };

      if (container.classList.contains('hero-preview-frame')) {
        tryPlay();
      }

      // Click to play/pause on frame
      container.addEventListener('click', () => {
        if (video.paused) {
          video.play().catch(() => {});
        }
      });

      if ((!video.paused && video.currentTime > 0) || video.readyState >= 3) {
        markLoaded();
      }
    });

    // Lazy video playback observer (plays only in viewport, pauses offscreen to save bandwidth/CPU)
    if ('IntersectionObserver' in window) {
      const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll('video').forEach(video => {
        video.muted = true;
        video.defaultMuted = true;
        videoObserver.observe(video);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
