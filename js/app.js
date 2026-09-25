// PoE2 Companion - Unified Web Application Script (No CORS / file:/// Compatible)
// Supports: English (en), Tiếng Việt (vi), 简体中文 (zh), 한국어 (ko), Русский (ru)

(function () {
  'use strict';

  const LOCALES = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'zh', label: '简体中文', flag: '🇨🇳' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' }
  ];

  const translations = {
    en: {
      navAutomation: 'Automation',
      navOverlays: 'Overlays',
      navPricing: 'Plans',
      navHowItWorks: 'Setup',
      navDownload: 'Download',

      heroTitle: 'Your In-Game Companion for Path of Exile 2',
      heroSubtitle: 'Real-time map radar, campaign pathfinding, auto-flasks, auto-crafting, and PoB passive tree overlay.',
      heroDownloadBtn: 'Download for Windows',
      heroPlatform: 'Windows Only · Windows 10 / 11 · Auto-updates via Cloudflare',
      heroViewFeatures: 'Explore Features',

      pricingSectionBadge: 'ACCESS PLANS',
      pricingSectionTitle: 'Choose Your Access Plan',
      pricingSectionSubtitle: 'Instant access to all overlays, radar, auto-crafting, and updates.',
      pricingCommunityBadge: 'COMMUNITY PERKS',
      pricingCommunityTitle: 'Free Weekends & Redeem Codes',
      pricingCommunityDesc: 'The developer frequently hosts free weekend access and drops code giveaways in our Discord community!',
      pricingCommunityBtn: 'JOIN DISCORD FOR NEWS!',
      planPopularBadge: 'BEST VALUE',
      planBuyBtn: 'Get Access',

      autoSectionBadge: 'HANDS-FREE UTILITIES',
      autoSectionTitle: 'Automation Tools',
      autoSectionSubtitle: 'Save your hands from wrist pain and avoid dying to missed flask timings.',

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

      overlaySectionBadge: 'GAME OVERLAYS',
      overlaySectionTitle: 'In-Game Overlays',
      overlaySectionSubtitle: 'Clean overlays that give you what you need without getting in the way.',

      radarTitle: 'Map & Minimap Radar',
      radarDesc: 'See bosses, rare monsters, chests, and shrines through the fog of war, with direct pathfinding lines to your next quest or exit.',

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
      howStep2Title: '2. Start Path of Exile 2',
      howStep2Desc: 'Launch Path of Exile 2 and load into your character.',
      howStep3Title: '3. Launch Companion',
      howStep3Desc: 'Open PoE2 Companion. Overlays and radar connect automatically.',

      ctaTitle: 'Ready to Level Up Your PoE2 Journey?',
      ctaSubtitle: 'Lightweight, safe, and built specifically for Path of Exile 2 players.',
      ctaDownloadBtn: 'Download PoE2 Companion',

      footerDisclaimer: 'Path of Exile 2 is a registered trademark of Grinding Gear Games. PoE2 Companion is an independent third-party tool and is not affiliated with or endorsed by Grinding Gear Games.',
      footerPlatform: 'Windows 64-bit'
    },

    vi: {
      navAutomation: 'Tự động',
      navOverlays: 'Giao diện HUD',
      navPricing: 'Bảng giá',
      navHowItWorks: 'Cài đặt',
      navDownload: 'Tải về',

      heroTitle: 'Công Cụ Hỗ Trợ Chơi Path of Exile 2 Tối Ưu',
      heroSubtitle: 'Radar bản đồ thời gian thực, dẫn đường làm nhiệm vụ, tự bấm bình máu/mana, tự craft đồ và hiển thị cây kỹ năng PoB trực tiếp trong game.',
      heroDownloadBtn: 'Tải về cho Windows',
      heroPlatform: 'Dành cho Windows · Windows 10 / 11 · Tự động cập nhật qua Cloudflare',
      heroViewFeatures: 'Xem tính năng',

      pricingSectionBadge: 'GÓI TRUY CẬP',
      pricingSectionTitle: 'Lựa Chọn Gói Phù Hợp',
      pricingSectionSubtitle: 'Truy cập đầy đủ toàn bộ radar, tự bấm bình, tự craft đồ và cập nhật tự động.',
      pricingCommunityBadge: 'ĐẶC QUYỀN CỘNG ĐỒNG',
      pricingCommunityTitle: 'Cuối Tuần Miễn Phí & Mã Kích Hoạt',
      pricingCommunityDesc: 'Nhà phát triển thường xuyên mở ngày chơi thử miễn phí và tặng mã kích hoạt quà tặng trong kênh Discord!',
      pricingCommunityBtn: 'THAM GIA DISCORD CẬP NHẬT TIN TỨC!',
      planPopularBadge: 'TIẾT KIỆM NHẤT',
      planBuyBtn: 'Nhận Gói',

      autoSectionBadge: 'TIỆN ÍCH TỰ ĐỘNG',
      autoSectionTitle: 'Tính Năng Tự Động',
      autoSectionSubtitle: 'Giảm mỏi tay khi bấm chuột liên tục và tránh chết oan do quên bấm bình.',

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

      overlaySectionBadge: 'GIAO DIỆN PHỦ IN-GAME',
      overlaySectionTitle: 'Giao Diện Phủ In-Game',
      overlaySectionSubtitle: 'Các bảng hiển thị gọn gàng, cung cấp đúng thông tin bạn cần mà không che mắt.',

      radarTitle: 'Radar Bản Đồ & Minimap',
      radarDesc: 'Nhìn thấy boss, quái hiếm, rương đồ và đền qua màn sương mù, kèm đường chỉ dẫn thẳng đến cửa ra hoặc nhiệm vụ tiếp theo.',

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
      howStep2Title: '2. Mở Path of Exile 2',
      howStep2Desc: 'Khởi động Path of Exile 2 và đăng nhập vào nhân vật của bạn.',
      howStep3Title: '3. Khởi Động Companion',
      howStep3Desc: 'Mở PoE2 Companion. Radar và các giao diện hỗ trợ sẽ tự động kết nối.',

      ctaTitle: 'Sẵn Sàng Chinh Phục Path of Exile 2?',
      ctaSubtitle: 'Gọn nhẹ, an toàn và tối ưu riêng cho game thủ Path of Exile 2.',
      ctaDownloadBtn: 'Tải PoE2 Companion Ngay',

      footerDisclaimer: 'Path of Exile 2 là thương hiệu đã đăng ký của Grinding Gear Games. PoE2 Companion là công cụ bên thứ ba độc lập, không thuộc sở hữu hay quản lý của Grinding Gear Games.',
      footerPlatform: 'Windows 64-bit'
    },

    zh: {
      navAutomation: '自动化',
      navOverlays: '游戏覆盖',
      navPricing: '价格与计划',
      navHowItWorks: '使用指南',
      navDownload: '立即下载',

      heroTitle: '流亡黯道 2 全能游戏辅助工具',
      heroSubtitle: '实时小地图雷达、剧情跑图导航、自动喝药、自动洗装备以及 PoB 天赋树游戏内覆盖。',
      heroDownloadBtn: '下载 Windows 版',
      heroPlatform: '仅限 Windows · 支持 Windows 10 / 11 · Cloudflare 高速自动更新',
      heroViewFeatures: '浏览功能',

      pricingSectionBadge: '访问计划',
      pricingSectionTitle: '选择适合你的计划',
      pricingSectionSubtitle: '完整解锁全部小地图雷达、自动喝药、自动打造及自动更新。',
      pricingCommunityBadge: '社区福利',
      pricingCommunityTitle: '免费周末与礼包兑换码',
      pricingCommunityDesc: '作者定期在官方 Discord 社区举办免费体验周末并派发时长兑换码！',
      pricingCommunityBtn: '加入 DISCORD 获取最新动态！',
      planPopularBadge: '超值推荐',
      planBuyBtn: '获取使用权',

      autoSectionBadge: '解放双手',
      autoSectionTitle: '自动化辅助',
      autoSectionSubtitle: '告别繁琐连点，避免因漏喝药水而意外倒地。',

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

      overlaySectionBadge: 'HUD 界面',
      overlaySectionTitle: '游戏内悬浮界面',
      overlaySectionSubtitle: '轻量简洁，提供关键情报而不遮挡战斗视野。',

      radarTitle: '地图与小地图雷达',
      radarDesc: '穿透战争迷雾标记首领、稀有怪、宝箱与神殿，并提供通往传送点或出口的最佳路径。',

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
      howStep2Title: '2. 启动 Path of Exile 2',
      howStep2Desc: '开启游戏并载入你的角色。',
      howStep3Title: '3. 开启 Companion',
      howStep3Desc: '启动 PoE2 Companion，雷达与悬浮界面将自动连接。',

      ctaTitle: '准备好提升你的流放之旅了吗？',
      ctaSubtitle: '轻量、安全，专为流亡黯道 2 玩家打造。',
      ctaDownloadBtn: '下载 PoE2 Companion',

      footerDisclaimer: 'Path of Exile 2 是 Grinding Gear Games 的注册商标。PoE2 Companion 是独立的第三方工具，与 Grinding Gear Games 无任何隶属关系。',
      footerPlatform: 'Windows 64位'
    },

    ko: {
      navAutomation: '자동화',
      navOverlays: '게임 오버레이',
      navPricing: '이용권 플랜',
      navHowItWorks: '설치 가이드',
      navDownload: '다운로드',

      heroTitle: '패스 오브 엑자일 2를 위한 최고의 동반자 도구',
      heroSubtitle: '실시간 미니맵 레이더, 캠페인 길찾기, 자동 물약, 자동 제작, 그리고 PoB 패시브 노드 오버레이까지 한 번에.',
      heroDownloadBtn: 'Windows용 다운로드',
      heroPlatform: 'Windows 전용 · Windows 10 / 11 지원 · Cloudflare 초고속 업데이트',
      heroViewFeatures: '기능 둘러보기',

      pricingSectionBadge: '이용권 플랜',
      pricingSectionTitle: '나에게 맞는 플랜 선택',
      pricingSectionSubtitle: '모든 레이더 오버레이, 자동 물약, 자동 제작 및 최신 업데이트 지원.',
      pricingCommunityBadge: '커뮤니티 혜택',
      pricingCommunityTitle: '주말 무료 체험 & 리딤 코드',
      pricingCommunityDesc: '개발자가 공식 Discord에서 주말 무료 이용 이벤트 및 이용권 리딤 코드를 수시로 배포합니다!',
      pricingCommunityBtn: '최신 소식 확인하러 DISCORD 참여!',
      planPopularBadge: '최고 가성비',
      planBuyBtn: '이용권 구매',

      autoSectionBadge: '편의 자동화',
      autoSectionTitle: '자동화 기능',
      autoSectionSubtitle: '손목 피로를 줄이고 물약 타이밍을 놓쳐 사망하는 상황을 방지하세요.',

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

      overlaySectionBadge: 'HUD 오버레이',
      overlaySectionTitle: '게임 내 오버레이',
      overlaySectionSubtitle: '플레이를 방해하지 않고 필요한 정보만 깔끔하게 전달합니다.',

      radarTitle: '지도 및 미니맵 레이더',
      radarDesc: '안개 속의 보스, 희귀 몬스터, 상자, 성소를 표시하고 다음 퀘스트나 출구까지의 최적 경로를 보여줍니다.',

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
      howStep2Title: '2. Path of Exile 2 실행',
      howStep2Desc: '게임을 켜고 캐릭터에 접속합니다.',
      howStep3Title: '3. Companion 실행',
      howStep3Desc: 'PoE2 Companion을 켜면 오버레이와 레이더가 자동으로 연동됩니다.',

      ctaTitle: '더 편안한 PoE2 플레이를 시작할 준비가 되셨나요?',
      ctaSubtitle: '가볍고 안전하며 패스 오브 엑자일 2 유저를 위해 설계되었습니다.',
      ctaDownloadBtn: 'PoE2 Companion 다운로드',

      footerDisclaimer: 'Path of Exile 2는 Grinding Gear Games의 등록 상표입니다. PoE2 Companion은 독립적인 서드파티 프로그램이며 Grinding Gear Games와 공식 제휴 관계가 아닙니다.',
      footerPlatform: 'Windows 64비트'
    },

    ru: {
      navAutomation: 'Автоматизация',
      navOverlays: 'Оверлеи',
      navPricing: 'Тарифы',
      navHowItWorks: 'Установка',
      navDownload: 'Скачать',

      heroTitle: 'Ваш главный игровой помощник в Path of Exile 2',
      heroSubtitle: 'Радар карты в реальном времени, навигация по сюжету, авто-флаконы, авто-крафт и оверлей дерева пассивок из PoB.',
      heroDownloadBtn: 'Скачать для Windows',
      heroPlatform: 'Только для Windows · Windows 10 / 11 · Автообновление через Cloudflare',
      heroViewFeatures: 'Все функции',

      pricingSectionBadge: 'ПЛАНЫ ДОСТУПА',
      pricingSectionTitle: 'Выберите Тариф Доступа',
      pricingSectionSubtitle: 'Полный доступ ко всем оверлеям, радару, авто-крафту и автоматическим обновлениям.',
      pricingCommunityBadge: 'БОНУСЫ СООБЩЕСТВА',
      pricingCommunityTitle: 'Бесплатные Выходные и Промокоды',
      pricingCommunityDesc: 'Разработчик регулярно устраивает дни бесплатного доступа и раздает промокоды в Discord!',
      pricingCommunityBtn: 'НАШ DISCORD С НОВОСТЯМИ!',
      planPopularBadge: 'ВЫГОДНЫЙ ВЫБОР',
      planBuyBtn: 'Получить Доступ',

      autoSectionBadge: 'АВТОМАТИЗАЦИЯ',
      autoSectionTitle: 'Инструменты Автоматизации',
      autoSectionSubtitle: 'Берегите руки от лишних кликов и избегайте смертей из-за забытых флаконов.',

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

      overlaySectionBadge: 'ИГРОВЫЕ ОВЕРЛЕИ',
      overlaySectionTitle: 'Игровые Оверлеи',
      overlaySectionSubtitle: 'Аккуратные панели, которые показывают главное и не закрывают обзор.',

      radarTitle: 'Радар Карты и Миникарты',
      radarDesc: 'Показывает боссов, редких монстров, сундуки и алтари сквозь туман войны, прокладывая линию пути к выходу или квесту.',

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
      howStep2Title: '2. Запустите Path of Exile 2',
      howStep2Desc: 'Откройте игру и зайдите на своего персонажа.',
      howStep3Title: '3. Запустите Companion',
      howStep3Desc: 'Откройте PoE2 Companion — оверлеи подключатся автоматически.',

      ctaTitle: 'Готовы сделать игру в PoE2 удобнее?',
      ctaSubtitle: 'Быстрый, безопасный и сделанный специально для игроков Path of Exile 2.',
      ctaDownloadBtn: 'Скачать PoE2 Companion',

      footerDisclaimer: 'Path of Exile 2 является зарегистрированным товарным знаком Grinding Gear Games. PoE2 Companion — независимый сторонний инструмент, не связанный с Grinding Gear Games.',
      footerPlatform: 'Windows 64-bit'
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
    }
  } catch (e) {
    // localStorage may be disabled in some sandboxes
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

    const select = document.getElementById('lang-select');
    if (select) {
      select.value = currentLocale;
    }
  }

  function setLocale(newLocale) {
    if (!translations[newLocale]) return;
    currentLocale = newLocale;
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch (e) {}
    applyTranslations();
  }

  // Version Resolver from Cloudflare
  async function resolveLatestVersion() {
    const MANIFEST_URL = 'https://poe2update.zonelyg.com/latest.json';
    const FALLBACK_VERSION = 'v0.1.6';
    const FALLBACK_URL = 'https://poe2update.zonelyg.com/PoE2%20Companion_0.1.6_x64-setup.exe';

    let version = FALLBACK_VERSION;
    let downloadUrl = FALLBACK_URL;

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
      }
    } catch (e) {
      // Offline fallback
    }

    document.querySelectorAll('.app-download-link').forEach(el => {
      el.setAttribute('href', downloadUrl);
    });
    document.querySelectorAll('.app-version-badge').forEach(el => {
      el.textContent = version;
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
              <li><span class="perk-check">✓</span> <span>Full Map &amp; Minimap Radar</span></li>
              <li><span class="perk-check">✓</span> <span>Auto-Flask &amp; Auto-Craft</span></li>
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

    applyTranslations();
    resolveLatestVersion();
    fetchPricingPlans();

    // Image fallback handling
    document.querySelectorAll('.card-preview-img').forEach(img => {
      img.addEventListener('error', () => {
        img.style.display = 'none';
        const fallback = img.parentElement.querySelector('.preview-mockup');
        if (fallback) fallback.style.display = 'flex';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
