const STORAGE_KEY = 'dodo-kanban-data';
const COLORS_STORAGE_KEY = 'dodo-kanban-colors';
const TUTORIAL_KEY = 'dodo-tutorial-completed';
const THEME_STORAGE_KEY = 'dodo-kanban-theme';
const LANG_STORAGE_KEY = 'dodo-kanban-language';

// 多语言数据
const TRANSLATIONS = {
    'zh-CN': {
        appTitle: 'TaskBoard',
        addBoard: '+ 新建看板',
        addFolder: '+ 📂 文件夹',
        moreFeatures: '⚙️ 更多功能',
        helpTutorial: '📖 帮助教程',
        exportData: '💾 导出数据',
        importData: '📥 导入数据',
        mergeData: '🔗 合并数据',
        aboutUs: 'ℹ️ 关于我们',
        clearData: '🗑️ 清空数据',
        myBoard: '我的看板',
        back: '← 返回',
        tutorialTitle: '🎉 欢迎使用 TaskBoard！',
        tutorialStep1Title: '第一步：新建看板',
        tutorialStep1Desc: '点击左侧「+ 新建看板」创建您的第一个看板',
        tutorialStep2Title: '第二步：添加卡片',
        tutorialStep2Desc: '在看板的「🎯待办」板块添加您的任务卡片',
        tutorialStep3Title: '第三步：移动卡片',
        tutorialStep3Desc: '拖拽卡片到不同板块来管理任务进度',
        tutorialStep4Title: '第四步：完成任务',
        tutorialStep4Desc: '把完成的任务拖到「✅已完成」板块，获得徽章奖励！',
        next: '下一步',
        skip: '跳过',
        tutorialComplete: '🎊 恭喜您完成教程！',
        startUsing: '开始使用',
        newTask: '新建任务',
        taskName: '任务名称',
        taskContent: '任务内容',
        cardColor: '卡片颜色',
        save: '保存',
        cancel: '取消',
        addCard: '+ 添加卡片',
        addColor: '+ 添加颜色',
        delete: '删除',
        rename: '重命名',
        moveToCompleted: '放入完成',
        moveToDiscarded: '放入舍弃',
        restore: '恢复看板',
        columnSettings: '板块设置',
        columnName: '板块名称',
        deleteColumn: '删除板块',
        addColumn: '+ 添加板块',
        themeSettings: '主题设置',
        appName: '应用名称',
        primaryColor: '主题主色',
        secondaryColor: '主题辅色',
        aboutTitle: 'ℹ️ 关于我们',
        aboutIntro: '软件介绍',
        aboutIntroText: 'TaskBoard 是一个高效的本地看板任务管理应用，帮助您更好地组织工作和生活。',
        contactUs: '联系方式',
        contactEmail: '邮箱：support@example.com',
        friendLinks: '友情链接',
        copyright: '© 2024 TaskBoard. All rights reserved.',
        version: '版本号：1.0.0',
        dragToDelete: '拖放卡片\n放入删除',
        confirmDelete: '确定要删除吗？',
        confirmClear: '确定要清空所有数据吗？此操作不可恢复！',
        dataCleared: '数据已清空',
        dataSaved: '保存成功',
        language: '🌐 语言',
        chooseLanguage: '请选择语言',
        boardView: '看板视图',
        dayView: '日视图',
        weekView: '周视图',
        monthView: '月视图',
        yearView: '年视图',
        todo: '待办',
        template: '模板',
        urgent: '紧急',
        done: '已完成',
        editCard: '编辑卡片',
        selectColor: '选择颜色：',
        createdDate: '创建日期：',
        completedDate: '完成日期：',
        badgeModalTitle: '🎉 恭喜获得「{name}」徽章！',
        badgeModalBtn: '太棒了！',
        badgeInfoTitle: '🏆 徽章介绍',
        badgeStatsTitle: '📊 我的统计',
        badgeTotalCards: '累计创建卡片：',
        badgeTotalCompleted: '累计完成卡片：',
        badgeRequirement: '获得条件：完成 {count} 个任务',
        badgeEarned: '✅ 已获得',
        badgeNotEarned: '🔒 未获得',
        badgeTooltip: '「{name}」- 完成 {count} 个任务 - 点击查看徽章介绍',
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        'en-US': 'English',
        'ja-JP': '日本語',
        'ko-KR': '한국어',
        'fr-FR': 'Français',
        'de-DE': 'Deutsch',
        'es-ES': 'Español',
        'pt-BR': 'Português',
        'ru-RU': 'Русский'
    },
    'zh-TW': {
        appTitle: 'TaskBoard',
        addBoard: '+ 新建看板',
        addFolder: '+ 📂 資料夾',
        moreFeatures: '⚙️ 更多功能',
        helpTutorial: '📖 幫助教學',
        exportData: '💾 匯出資料',
        importData: '📥 匯入資料',
        mergeData: '🔗 合併資料',
        aboutUs: 'ℹ️ 關於我們',
        clearData: '🗑️ 清空資料',
        myBoard: '我的看板',
        back: '← 返回',
        tutorialTitle: '🎉 歡迎使用 TaskBoard！',
        tutorialStep1Title: '第一步：新建看板',
        tutorialStep1Desc: '點擊左側「+ 新建看板」建立您的第一個看板',
        tutorialStep2Title: '第二步：新增卡片',
        tutorialStep2Desc: '在看板的「🎯待辦」板塊新增您的任務卡片',
        tutorialStep3Title: '第三步：移動卡片',
        tutorialStep3Desc: '拖曳卡片到不同板塊來管理任務進度',
        tutorialStep4Title: '第四步：完成任務',
        tutorialStep4Desc: '把完成的任務拖到「✅已完成」板塊，獲得徽章獎勵！',
        next: '下一步',
        skip: '跳過',
        tutorialComplete: '🎊 恭喜您完成教學！',
        startUsing: '開始使用',
        newTask: '新建任務',
        taskName: '任務名稱',
        taskContent: '任務內容',
        cardColor: '卡片顏色',
        save: '儲存',
        cancel: '取消',
        addCard: '+ 新增卡片',
        addColor: '+ 新增顏色',
        delete: '刪除',
        rename: '重新命名',
        moveToCompleted: '放入完成',
        moveToDiscarded: '放入捨棄',
        restore: '恢復看板',
        columnSettings: '板塊設定',
        columnName: '板塊名稱',
        deleteColumn: '刪除板塊',
        addColumn: '+ 新增板塊',
        themeSettings: '主題設定',
        appName: '應用名稱',
        primaryColor: '主題主色',
        secondaryColor: '主題輔色',
        aboutTitle: 'ℹ️ 關於我們',
        aboutIntro: '軟體介紹',
        aboutIntroText: 'TaskBoard 是一個高效的本地看板任務管理應用，幫助您更好地組織工作和生活。',
        contactUs: '聯絡方式',
        contactEmail: '信箱：support@example.com',
        friendLinks: '友情連結',
        copyright: '© 2024 TaskBoard. All rights reserved.',
        version: '版本號：1.0.0',
        dragToDelete: '拖放卡片\n放入刪除',
        confirmDelete: '確定要刪除嗎？',
        confirmClear: '確定要清空所有資料嗎？此操作不可復原！',
        dataCleared: '資料已清空',
        dataSaved: '儲存成功',
        language: '🌐 語言',
        chooseLanguage: '請選擇語言',
        boardView: '看板視圖',
        dayView: '日視圖',
        weekView: '週視圖',
        monthView: '月視圖',
        yearView: '年視圖',
        todo: '待辦',
        template: '範本',
        urgent: '緊急',
        done: '已完成',
        editCard: '編輯卡片',
        selectColor: '選擇顏色：',
        createdDate: '創建日期：',
        completedDate: '完成日期：',
        badgeModalTitle: '🎉 恭喜獲得「{name}」徽章！',
        badgeModalBtn: '太棒了！',
        badgeInfoTitle: '🏆 徽章介紹',
        badgeStatsTitle: '📊 我的統計',
        badgeTotalCards: '累計創建卡片：',
        badgeTotalCompleted: '累計完成卡片：',
        badgeRequirement: '獲得條件：完成 {count} 個任務',
        badgeEarned: '✅ 已獲得',
        badgeNotEarned: '🔒 未獲得',
        badgeTooltip: '「{name}」- 完成 {count} 個任務 - 點擊查看徽章介紹',
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        'en-US': 'English',
        'ja-JP': '日本語',
        'ko-KR': '한국어',
        'fr-FR': 'Français',
        'de-DE': 'Deutsch',
        'es-ES': 'Español',
        'pt-BR': 'Português',
        'ru-RU': 'Русский'
    },
    'en-US': {
        appTitle: 'TaskBoard',
        addBoard: '+ New Board',
        addFolder: '+ 📂 Folder',
        moreFeatures: '⚙️ More',
        helpTutorial: '📖 Tutorial',
        exportData: '💾 Export',
        importData: '📥 Import',
        mergeData: '🔗 Merge',
        aboutUs: 'ℹ️ About',
        clearData: '🗑️ Clear',
        myBoard: 'My Board',
        back: '← Back',
        tutorialTitle: '🎉 Welcome to TaskBoard!',
        tutorialStep1Title: 'Step 1: Create a Board',
        tutorialStep1Desc: 'Click「+ New Board」on the left to create your first board',
        tutorialStep2Title: 'Step 2: Add Cards',
        tutorialStep2Desc: 'Add your task cards in the「🎯To Do」section',
        tutorialStep3Title: 'Step 3: Move Cards',
        tutorialStep3Desc: 'Drag cards between sections to manage progress',
        tutorialStep4Title: 'Step 4: Complete Tasks',
        tutorialStep4Desc: 'Drag completed tasks to「✅Done」to earn badges!',
        next: 'Next',
        skip: 'Skip',
        tutorialComplete: '🎊 Great job!',
        startUsing: 'Get Started',
        newTask: 'New Task',
        taskName: 'Task Name',
        taskContent: 'Task Content',
        cardColor: 'Card Color',
        save: 'Save',
        cancel: 'Cancel',
        addCard: '+ Add Card',
        addColor: '+ Add Color',
        delete: 'Delete',
        rename: 'Rename',
        moveToCompleted: 'Move to Completed',
        moveToDiscarded: 'Move to Discarded',
        restore: 'Restore Board',
        columnSettings: 'Column Settings',
        columnName: 'Column Name',
        deleteColumn: 'Delete Column',
        addColumn: '+ Add Column',
        themeSettings: 'Theme',
        appName: 'App Name',
        primaryColor: 'Primary Color',
        secondaryColor: 'Secondary Color',
        aboutTitle: 'ℹ️ About',
        aboutIntro: 'About',
        aboutIntroText: 'TaskBoard is an efficient local kanban task manager to organize your work and life.',
        contactUs: 'Contact',
        contactEmail: 'Email: support@example.com',
        friendLinks: 'Links',
        copyright: '© 2024 TaskBoard. All rights reserved.',
        version: 'Version: 1.0.0',
        dragToDelete: 'Drag cards\nto delete',
        confirmDelete: 'Are you sure?',
        confirmClear: 'Clear all data? This cannot be undone!',
        dataCleared: 'Data cleared',
        dataSaved: 'Saved',
        language: '🌐 Language',
        chooseLanguage: 'Choose Language',
        boardView: 'Board View',
        dayView: 'Day View',
        weekView: 'Week View',
        monthView: 'Month View',
        yearView: 'Year View',
        todo: 'To Do',
        template: 'Template',
        urgent: 'Urgent',
        done: 'Done',
        editCard: 'Edit Card',
        selectColor: 'Select Color:',
        createdDate: 'Created Date:',
        completedDate: 'Completed Date:',
        badgeModalTitle: '🎉 Congratulations! You earned the 「{name}」badge!',
        badgeModalBtn: 'Awesome!',
        badgeInfoTitle: '🏆 Badge Info',
        badgeStatsTitle: '📊 My Stats',
        badgeTotalCards: 'Total Created:',
        badgeTotalCompleted: 'Total Completed:',
        badgeRequirement: 'Requirement: Complete {count} tasks',
        badgeEarned: '✅ Earned',
        badgeNotEarned: '🔒 Not Earned',
        badgeTooltip: '「{name}」- Complete {count} tasks - Click for badge info',
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        'en-US': 'English',
        'ja-JP': '日本語',
        'ko-KR': '한국어',
        'fr-FR': 'Français',
        'de-DE': 'Deutsch',
        'es-ES': 'Español',
        'pt-BR': 'Português',
        'ru-RU': 'Русский'
    },
    'ja-JP': {
        appTitle: 'TaskBoard',
        addBoard: '+ 新規ボード',
        addFolder: '+ 📂 フォルダ',
        moreFeatures: '⚙️ その他',
        helpTutorial: '📖 チュートリアル',
        exportData: '💾 エクスポート',
        importData: '📥 インポート',
        mergeData: '🔗 マージ',
        aboutUs: 'ℹ️ このアプリについて',
        clearData: '🗑️ データ消去',
        myBoard: 'マイボード',
        back: '← 戻る',
        tutorialTitle: '🎉 TaskBoard へようこそ！',
        tutorialStep1Title: 'ステップ1：ボードを作成',
        tutorialStep1Desc: '左の「+ 新規ボード」から最初のボードを作成',
        tutorialStep2Title: 'ステップ2：カードを追加',
        tutorialStep2Desc: '「🎯やること」セクションにタスクカードを追加',
        tutorialStep3Title: 'ステップ3：カードを移動',
        tutorialStep3Desc: 'カードをセクション間でドラッグして進捗管理',
        tutorialStep4Title: 'ステップ4：タスク完了',
        tutorialStep4Desc: '完了したタスクを「✅完了」へドラッグしてバッジ獲得！',
        next: '次へ',
        skip: 'スキップ',
        tutorialComplete: '🎊 おめでとう！',
        startUsing: '使い始める',
        newTask: '新規タスク',
        taskName: 'タスク名',
        taskContent: 'タスク内容',
        cardColor: 'カードカラー',
        save: '保存',
        cancel: 'キャンセル',
        addCard: '+ カード追加',
        addColor: '+ 色追加',
        delete: '削除',
        rename: '名前変更',
        moveToCompleted: '完了へ移動',
        moveToDiscarded: '破棄へ移動',
        restore: 'ボードを復元',
        columnSettings: '列設定',
        columnName: '列名',
        deleteColumn: '列を削除',
        addColumn: '+ 列追加',
        themeSettings: 'テーマ',
        appName: 'アプリ名',
        primaryColor: 'メインカラー',
        secondaryColor: 'サブカラー',
        aboutTitle: 'ℹ️ このアプリについて',
        aboutIntro: 'アプリ紹介',
        aboutIntroText: 'TaskBoard は仕事と生活を整理する効率的なローカルカンバンタスク管理アプリです。',
        contactUs: '連絡先',
        contactEmail: 'メール：support@example.com',
        friendLinks: 'リンク',
        copyright: '© 2024 TaskBoard. All rights reserved.',
        version: 'バージョン：1.0.0',
        dragToDelete: 'カードをドロップ\nして削除',
        confirmDelete: '削除しますか？',
        confirmClear: 'すべてのデータを消去しますか？この操作は取り消せません！',
        dataCleared: 'データを消去しました',
        dataSaved: '保存しました',
        language: '🌐 言語',
        chooseLanguage: '言語を選択',
        boardView: 'ボードビュー',
        dayView: '日ビュー',
        weekView: '週ビュー',
        monthView: '月ビュー',
        yearView: '年ビュー',
        todo: 'やること',
        template: 'テンプレート',
        urgent: '緊急',
        done: '完了',
        editCard: 'カードを編集',
        selectColor: '色を選択：',
        createdDate: '作成日：',
        completedDate: '完了日：',
        badgeModalTitle: '🎉 おめでとう！「{name}」バッジを獲得しました！',
        badgeModalBtn: 'すごい！',
        badgeInfoTitle: '🏆 バッジ紹介',
        badgeStatsTitle: '📊 私の統計',
        badgeTotalCards: '累計作成カード：',
        badgeTotalCompleted: '累計完了カード：',
        badgeRequirement: '獲得条件：{count} タスクを完了',
        badgeEarned: '✅ 獲得済み',
        badgeNotEarned: '🔒 未獲得',
        badgeTooltip: '「{name}」- {count} タスクを完了 - クリックでバッジ情報を表示',
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        'en-US': 'English',
        'ja-JP': '日本語',
        'ko-KR': '한국어',
        'fr-FR': 'Français',
        'de-DE': 'Deutsch',
        'es-ES': 'Español',
        'pt-BR': 'Português',
        'ru-RU': 'Русский'
    },
    'ko-KR': {
        appTitle: 'TaskBoard',
        addBoard: '+ 새 보드',
        addFolder: '+ 📂 폴더',
        moreFeatures: '⚙️ 더보기',
        helpTutorial: '📖 튜토리얼',
        exportData: '💾 내보내기',
        importData: '📥 가져오기',
        mergeData: '🔗 병합',
        aboutUs: 'ℹ️ 정보',
        clearData: '🗑️ 데이터 삭제',
        myBoard: '내 보드',
        back: '← 뒤로',
        tutorialTitle: '🎉 TaskBoard에 오신 것을 환영합니다!',
        tutorialStep1Title: '1단계: 보드 만들기',
        tutorialStep1Desc: '왼쪽「+ 새 보드」를 클릭하여 첫 번째 보드 만들기',
        tutorialStep2Title: '2단계: 카드 추가하기',
        tutorialStep2Desc: '「🎯할 일」섹션에 작업 카드 추가하기',
        tutorialStep3Title: '3단계: 카드 이동하기',
        tutorialStep3Desc: '카드를 섹션 간에 드래그하여 진행 상황 관리하기',
        tutorialStep4Title: '4단계: 작업 완료하기',
        tutorialStep4Desc: '완료된 작업을「✅완료」로 드래그하여 배지 획득!',
        next: '다음',
        skip: '건너뛰기',
        tutorialComplete: '🎊 축하합니다!',
        startUsing: '시작하기',
        newTask: '새 작업',
        taskName: '작업 이름',
        taskContent: '작업 내용',
        cardColor: '카드 색상',
        save: '저장',
        cancel: '취소',
        addCard: '+ 카드 추가',
        addColor: '+ 색상 추가',
        delete: '삭제',
        rename: '이름 변경',
        moveToCompleted: '완료로 이동',
        moveToDiscarded: '폐기로 이동',
        restore: '보드 복원',
        columnSettings: '열 설정',
        columnName: '열 이름',
        deleteColumn: '열 삭제',
        addColumn: '+ 열 추가',
        themeSettings: '테마',
        appName: '앱 이름',
        primaryColor: '주 색상',
        secondaryColor: '보조 색상',
        aboutTitle: 'ℹ️ 정보',
        aboutIntro: '소개',
        aboutIntroText: 'TaskBoard는 작업과 생활을 정리하는 효율적인 로컬 칸반 작업 관리 앱입니다.',
        contactUs: '연락처',
        contactEmail: '이메일: support@example.com',
        friendLinks: '링크',
        copyright: '© 2024 TaskBoard. All rights reserved.',
        version: '버전: 1.0.0',
        dragToDelete: '카드 드롭\n하여 삭제',
        confirmDelete: '삭제하시겠습니까?',
        confirmClear: '모든 데이터를 삭제하시겠습니까? 이 작업은 취소할 수 없습니다!',
        dataCleared: '데이터가 삭제되었습니다',
        dataSaved: '저장되었습니다',
        language: '🌐 언어',
        chooseLanguage: '언어 선택',
        boardView: '보드 뷰',
        dayView: '일 뷰',
        weekView: '주 뷰',
        monthView: '월 뷰',
        yearView: '년 뷰',
        todo: '할 일',
        template: '템플릿',
        urgent: '긴급',
        done: '완료',
        editCard: '카드 편집',
        selectColor: '색상 선택:',
        createdDate: '생성 날짜:',
        completedDate: '완료 날짜:',
        badgeModalTitle: '🎉 축하합니다!「{name}」배지를 획득했어요!',
        badgeModalBtn: '대단해요!',
        badgeInfoTitle: '🏆 배지 소개',
        badgeStatsTitle: '📊 내 통계',
        badgeTotalCards: '누적 생성 카드:',
        badgeTotalCompleted: '누적 완료 카드:',
        badgeRequirement: '획득 조건: {count} 개 작업 완료',
        badgeEarned: '✅ 획득 완료',
        badgeNotEarned: '🔒 미획득',
        badgeTooltip: '「{name}」- {count} 개 작업 완료 - 클릭으로 배지 정보 표시',
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        'en-US': 'English',
        'ja-JP': '日本語',
        'ko-KR': '한국어',
        'fr-FR': 'Français',
        'de-DE': 'Deutsch',
        'es-ES': 'Español',
        'pt-BR': 'Português',
        'ru-RU': 'Русský'
    }
};

// 当前语言
let currentLang = 'zh-CN';

// 获取翻译文本
function t(key) {
    return TRANSLATIONS[currentLang][key] || key;
}

// 设置语言
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    applyTranslations();
}

// 应用翻译到页面
function applyTranslations() {
    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    // 更新所有带 data-i18n-placeholder 属性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    
    // 更新视图选择标签
    const viewLabels = {
        'board': t('boardView'),
        'day': t('dayView'),
        'week': t('weekView'),
        'month': t('monthView'),
        'year': t('yearView')
    };
    const viewCurrentLabel = document.getElementById('view-current-label');
    if (viewCurrentLabel) {
        viewCurrentLabel.textContent = viewLabels[data.currentView] || t('boardView');
    }
    
    // 根据当前视图重新渲染
    if (data.currentView === 'board') {
        renderCurrentBoard();
    } else if (data.currentView === 'day') {
        renderDayView();
    } else if (data.currentView === 'week') {
        renderWeekView();
    } else if (data.currentView === 'month') {
        renderMonthView();
    } else if (data.currentView === 'year') {
        renderYearView();
    }
    
    // 重新渲染徽章
    renderBadges();
}

// 判断卡片背景色应该使用黑色还是白色文本
function getContrastColor(hexColor) {
    if (!hexColor || hexColor === '#ffffff') {
        return '#000000'; // 默认黑色
    }
    
    // 移除#号
    let r, g, b;
    if (hexColor.startsWith('#')) {
        hexColor = hexColor.slice(1);
    }
    
    // 解析RGB值
    if (hexColor.length === 3) {
        r = parseInt(hexColor[0] + hexColor[0], 16);
        g = parseInt(hexColor[1] + hexColor[1], 16);
        b = parseInt(hexColor[2] + hexColor[2], 16);
    } else if (hexColor.length === 6) {
        r = parseInt(hexColor.slice(0, 2), 16);
        g = parseInt(hexColor.slice(2, 4), 16);
        b = parseInt(hexColor.slice(4, 6), 16);
    } else {
        return '#000000'; // 默认黑色
    }
    
    // 计算亮度 (YIQ公式)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    
    // 如果亮度大于128，使用黑色文本，否则使用白色文本
    return yiq >= 128 ? '#000000' : '#ffffff';
}

const BADGE_MILESTONES = [10, 50, 100, 200, 300, 500, 1000, 5000, 10000, 100000];

// 徽章多语言名称
const BADGE_NAMES = {
    'zh-CN': {
        10: "披星戴月",
        50: "新手宝宝",
        100: "机敏之狐",
        200: "可爱赤兔",
        300: "跳跃袋鼠",
        500: "忠诚狗狗",
        1000: "聪慧海豚",
        5000: "喵了个咪",
        10000: "森林之鹿",
        100000: "知行合一"
    },
    'zh-TW': {
        10: "披星戴月",
        50: "新手寶寶",
        100: "機敏之狐",
        200: "可愛赤兔",
        300: "跳躍袋鼠",
        500: "忠誠狗狗",
        1000: "聰慧海豚",
        5000: "喵了個咪",
        10000: "森林之鹿",
        100000: "知行合一"
    },
    'en-US': {
        10: "Night Owl",
        50: "Newbie Champion",
        100: "Clever Fox",
        200: "Lovely Rabbit",
        300: "Jumping Kangaroo",
        500: "Loyal Dog",
        1000: "Smart Dolphin",
        5000: "Meow Master",
        10000: "Forest Deer",
        100000: "Unity Master"
    },
    'ja-JP': {
        10: "月夜のフクロウ",
        50: "初心者チャンピオン",
        100: "賢いキツネ",
        200: "可愛いウサギ",
        300: "跳躍カンガルー",
        500: "忠実な犬",
        1000: "スマートイルカ",
        5000: "ニャンマスター",
        10000: "森のシカ",
        100000: "知行合一マスター"
    },
    'ko-KR': {
        10: "달빛 올빼미",
        50: "초보 챔피언",
        100: "영리한 여우",
        200: "귀여운 토끼",
        300: "점핑 캥거루",
        500: "충성스러운 개",
        1000: "스마트 돌고래",
        5000: "야옹 마스터",
        10000: "숲의 사슴",
        100000: "지행합일 마스터"
    }
};

// 徽章多语言鼓励语
const BADGE_ENCOURAGEMENT = {
    'zh-CN': {
        10: "太棒了！你已经完成了10个任务，这是一个很好的开始！继续加油！\n\n千里之行，始于足下。-- 老子《道德经》",
        50: "50个任务完成！你真的很棒！坚持下去，你会做得更好！\n\n不积跬步，无以至千里；不积小流，无以成江海。-- 荀子《劝学》",
        100: "100个任务！这是一个重要的里程碑！你的坚持让人佩服！\n\n锲而不舍，金石可镂。-- 荀子《劝学》",
        200: "200个任务完成！你已经是一位任务达人了！继续保持！\n\n功崇惟志，业广惟勤。-- 《尚书》",
        300: "300个任务！跳跃前行，势不可挡！你的进步有目共睹！\n\n天行健，君子以自强不息。-- 《周易》",
        500: "500个任务！这太不可思议了！你是我们的榜样！\n\n宝剑锋从磨砺出，梅花香自苦寒来。-- 《警世贤文》",
        1000: "1000个任务！你是真正的任务大师！向你致敬！\n\n路漫漫其修远兮，吾将上下而求索。-- 屈原《离骚》",
        5000: "5000个任务！这是一个传奇！你是最棒的！\n\n水滴石穿，绳锯木断。-- 罗大经《鹤林玉露》",
        10000: "10000个任务！你已经站在巅峰！无人能敌！\n\n会当凌绝顶，一览众山小。-- 杜甫《望岳》",
        100000: "100000个任务！这是一个神话！你是永恒的传说！\n\n业精于勤，荒于嬉；行成于思，毁于随。-- 韩愈《进学解》"
    },
    'zh-TW': {
        10: "太棒了！你已經完成了10個任務，這是一個很好的開始！繼續加油！\n\n千里之行，始於足下。-- 老子《道德經》",
        50: "50個任務完成！你真的很棒！堅持下去，你會做得更好！\n\n不積蹞步，無以至千里；不積小流，無以成江海。-- 荀子《勸學》",
        100: "100個任務！這是一個重要的里程碑！你的堅持讓人佩服！\n\n鍥而不捨，金石可鏤。-- 荀子《勸學》",
        200: "200個任務完成！你已經是一位任務達人了！繼續保持！\n\n功崇惟志，業廣惟勤。-- 《尚書》",
        300: "300個任務！跳躍前行，勢不可擋！你的進步有目共睹！\n\n天行健，君子以自強不息。-- 《周易》",
        500: "500個任務！這太不可思議了！你是我們的榜樣！\n\n寶劍鋒從磨礪出，梅花香自苦寒來。-- 《警世賢文》",
        1000: "1000個任務！你是真正的任務大師！向你致敬！\n\n路漫漫其修遠兮，吾將上下而求索。-- 屈原《離騷》",
        5000: "5000個任務！這是一個傳奇！你是最棒的！\n\n水滴石穿，繩鋸木斷。-- 羅大經《鶴林玉露》",
        10000: "10000個任務！你已經站在巔峰！無人能敵！\n\n會當凌絕頂，一覽眾山小。-- 杜甫《望岳》",
        100000: "100000個任務！這是一個神話！你是永恆的傳說！\n\n業精於勤，荒於嬉；行成於思，毀於隨。-- 韓愈《進學解》"
    },
    'en-US': {
        10: "Excellent! You've completed 10 tasks, that's a great start! Keep it up!\n\nA journey of a thousand miles begins with a single step.",
        50: "50 tasks completed! You're amazing! Keep going, you'll do even better!\n\nSmall steps accumulate to great distances.",
        100: "100 tasks! That's a major milestone! Your persistence is admirable!\n\nPerseverance wears away even stone.",
        200: "200 tasks completed! You're a task master! Keep it up!\n\nAchievement comes from ambition; greatness from diligence.",
        300: "300 tasks! Leaping forward, unstoppable! Your progress is clear for all to see!\n\nAs Heaven maintains vigor through movement, the gentleman strives constantly for self-improvement.",
        500: "500 tasks! That's incredible! You're our role model!\n\nSharp blades come from grinding; plum blossom fragrance comes from the cold.",
        1000: "1000 tasks! You're a true task master! Salute!\n\nThe road ahead is long and winding; I shall search up and down.",
        5000: "5000 tasks! That's legendary! You're the best!\n\nConstant dripping wears away the stone.",
        10000: "10000 tasks! You're at the peak! Unmatched!\n\nWhen I stand on the mountain top, all other mountains appear small.",
        100000: "100000 tasks! That's a myth! You're an eternal legend!\n\nAchievement comes from diligence; ruin comes from idleness; success comes from thinking; failure comes from thoughtlessness."
    },
    'ja-JP': {
        10: "素晴らしい！10個のタスクを完了しました。これは素晴らしいスタートです！頑張ってください！\n\n千里の道も一歩から。",
        50: "50個のタスク完了！あなたは本当に素晴らしいです！続ければ、もっと良くなります！\n\n小さなステップが大きな距離につながります。",
        100: "100個のタスク！これは重要なマイルストーンです！あなたの粘り強さには感服します！\n\n諦めなければ、石にも穴をあけられます。",
        200: "200個のタスク完了！あなたはタスクマスターです！この調子でいきましょう！\n\n達成は志から、偉大さは勤勉から。",
        300: "300個のタスク！跳躍して前進し、誰も止められません！あなたの進歩は誰の目にも明らかです！\n\n天の健やかな動きに習い、君子は常に自己研鑽に励みます。",
        500: "500個のタスク！信じられません！あなたは私たちの模範です！\n\n鋭い刃は研ぎから、梅の香りは寒さから。",
        1000: "1000個のタスク！あなたは真のタスクマスターです！敬意を表します！\n\n前の道は長く曲がりくねっています。私は上下に探し求めます。",
        5000: "5000個のタスク！これは伝説的です！あなたが一番です！\n\n水の滴りが石を穿ちます。",
        10000: "10000個のタスク！あなたは頂点にいます！誰も敵いません！\n\n山の頂上に立つと、他の山は小さく見えます。",
        100000: "100000個のタスク！これは神話です！あなたは永遠の伝説です！\n\n達成は勤勉から、破滅は怠けから。成功は思考から、失敗は無思慮から。"
    },
    'ko-KR': {
        10: "대단해요! 10개의 작업을 완료했어요. 좋은 시작이에요! 계속 화이팅하세요!\n\n천리의 길도 한 걸음부터.",
        50: "50개의 작업 완료! 정말 대단해요! 계속하면 더 잘할 거예요!\n\n작은 발자국이 큰 거리로 이어집니다.",
        100: "100개의 작업! 이것은 중요한 이정표에요! 당신의 끈기에 감탄해요!\n\n끈기 있게 하면 돌에도 구멍을 뚫을 수 있죠.",
        200: "200개의 작업 완료! 당신은 작업 마스터에요! 계속 유지하세요!\n\n성취는 의지에서, 위대함은 부지런함에서.",
        300: "300개의 작업! 도약하며 전진하고 누구도 막을 수 없어요! 당신의 발전은 누구나 알 수 있죠!\n\n하늘의 건강한 움직임에 따라 군자는 끊임없이 자기 계발에 노력해요.",
        500: "500개의 작업! 믿을 수 없어요! 당신은 우리의 롤 모델이에요!\n\n날카로운 칼은 연마에서, 매화 향기는 추위에서.",
        1000: "1000개의 작업! 당신은 진정한 작업 마스터에요! 경의를 표해요!\n\n앞길은 길고 구불구불해요. 나는 위아래로 찾아볼 거예요.",
        5000: "5000개의 작업! 이것은 전설적이에요! 당신이 최고예요!\n\n물방울이 돌을 뚫어요.",
        10000: "10000개의 작업! 당신은 정상에 있어요! 누구도 대적할 수 없어요!\n\n산 정상에 서면 다른 산들은 작게 보여요.",
        100000: "100000개의 작업! 이것은 신화예요! 당신은 영원한 전설이에요!\n\n성취는 부지런함에서, 파멸은 게으름에서. 성공은 생각에서, 실패는 무사려에서."
    }
};

// 获取当前语言的徽章名称
function getBadgeName(milestone) {
    const names = BADGE_NAMES[currentLang] || BADGE_NAMES['zh-CN'];
    return names[milestone] || milestone;
}

// 获取当前语言的徽章鼓励语
function getBadgeEncouragement(milestone) {
    const encouragements = BADGE_ENCOURAGEMENT[currentLang] || BADGE_ENCOURAGEMENT['zh-CN'];
    return encouragements[milestone] || '';
}

// ====================== 默认颜色配置 ======================
// 扩充后的默认卡片颜色（包含主题颜色）
const DEFAULT_COLORS = [
    '#ffffff', '#ffcccc', '#ffe0b2', '#fff9c4', '#dcedc8',
    '#b2ebf2', '#bbdefb', '#e1bee7', '#f8bbd9', '#e0e0e0',
    '#1abc9c', '#2ecc71', '#e74c3c', '#e67e22', '#f1c40f',
    '#9b59b6', '#667eea', '#3498db', '#34495e', '#8e44ad',
    '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff',
    '#e0bbE4', '#ffcdd2', '#f3e5f5', '#ffb6c1'
];

// 扩充后的默认主题颜色（包含卡片颜色）
const DEFAULT_THEME_COLORS = [
    '#1abc9c', '#2ecc71', '#e74c3c', '#e67e22', '#f1c40f',
    '#9b59b6', '#667eea', '#3498db', '#34495e', '#8e44ad',
    '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff',
    '#e0bbE4', '#ffcdd2', '#f3e5f5', '#ffb6c1',
    '#ffffff', '#ffcccc', '#ffe0b2', '#fff9c4', '#dcedc8',
    '#b2ebf2', '#bbdefb', '#e1bee7', '#f8bbd9', '#e0e0e0'
];

let themeData = {
    appName: 'TaskBoard',
    primaryColor: '#1abc9c',
    secondaryColor: '#764ba2',
    availableColors: [...DEFAULT_THEME_COLORS]
};

let currentThemeColor = null;
let currentEditingColumn = null;

let data = {
    boardItems: [], // 左侧列表项，可以是看板或文件夹
    folders: [], // 文件夹列表
    boards: [], // 普通看板列表（保持兼容性）
    completedBoards: [], // 完成看板列表
    discardedBoards: [], // 舍弃看板列表
    currentBoardId: null,
    currentView: 'board',
    currentListType: 'normal', // 'normal' | 'completed' | 'discarded' - 当前显示的列表类型
    expandedFolders: [], // 展开的文件夹ID列表
    templatePinned: true, // 模板板块是否固定（true=编辑模式，false=模板模式）
    earnedBadges: [], // 已获得的徽章
    totalCompletedCards: 0 // 累计完成卡片数
};

let singleColumnView = {
    active: false,
    columnId: null,
    previousView: null,
    currentPage: 1,
    pageSize: 50 // 每页5列10行共50个卡片
};

let availableColors = [];
let currentEditingCard = null;
let currentSelectedColor = null;
let currentLongPressBoardId = null;
let draggedCard = null;
let longPressTimer = null;
let tutorialStep = 0;
let currentEditingFolderId = null; // 当前编辑的文件夹ID
let currentLongPressFolderId = null; // 当前长按的文件夹ID
let isDraggingBoardListItem = false; // 是否正在拖拽列表项
let draggedBoardListItem = null; // 当前拖拽的列表项
let boardListDropIndicator = null; // 拖放指示器
let draggedColumn = null; // 当前拖拽的板块
let columnDropIndicator = null; // 板块拖放指示器

// 板块排序状态
let columnSortStates = {};
// 默认排序字段
const SORT_FIELDS = {
    'todo': 'createdAt',
    'template': 'createdAt',
    'emergence': 'createdAt',
    'done': 'completedAt'
};

// 日视图当前选择的板块
let dayViewCurrentColumn = 'done';

// 各视图的日期导航
let dayViewDate = new Date(); // 日视图当前查看的年月
let weekViewDate = new Date(); // 周视图当前查看的周
let monthViewDate = new Date(); // 月视图当前查看的月份
let yearViewDate = new Date(); // 年视图当前查看的年份

// 默认板块配置
const DEFAULT_COLUMNS = [
    { id: '1', name: '🎯待办', isDone: false, isPinned: true },
    { id: '2', name: '🧩模板', isDone: false, isPinned: true },
    { id: '3', name: '🚨紧急', isDone: false, isPinned: true },
    { id: '4', name: '✅已完成', isDone: true, isPinned: true }
];

// 页面加载完成后的初始化
window.onload = function() {
    console.log('页面加载完成，开始初始化...');
    
    // 强制清除旧数据，重新开始（临时调试用）
    // localStorage.clear();
    
    // 加载保存的语言
    const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (savedLang && TRANSLATIONS[savedLang]) {
        currentLang = savedLang;
    }
    
    setupAllEventListeners();
    loadFromStorage();
    loadThemeFromStorage();
    
    // 应用语言翻译
    applyTranslations();
    
    console.log('数据加载完成:', data);
    
    const tutorialCompleted = localStorage.getItem(TUTORIAL_KEY);
    if (!tutorialCompleted) {
        console.log('教程未完成，显示教程');
        showTutorial();
    } else {
        console.log('教程已完成，渲染界面');
        renderAll();
    }
};

function setupAllEventListeners() {
    console.log('设置所有事件监听器...');
    
    // 标题点击 - 主题设置
    const appTitle = document.getElementById('app-title');
    if (appTitle) {
        appTitle.onclick = function() {
            console.log('标题点击 - 打开主题设置');
            openThemeModal();
        };
    }
    
    // 主题设置按钮
    const saveThemeBtn = document.getElementById('save-theme-btn');
    if (saveThemeBtn) {
        saveThemeBtn.onclick = function() {
            console.log('保存主题按钮点击');
            saveTheme();
        };
    }
    
    const addCustomThemeColorBtn = document.getElementById('add-custom-theme-color-btn');
    if (addCustomThemeColorBtn) {
        addCustomThemeColorBtn.onclick = function() {
            console.log('添加自定义主题颜色按钮点击');
            addCustomThemeColor();
        };
    }
    
    // 板块设置按钮
    const saveColumnBtn = document.getElementById('save-column-btn');
    if (saveColumnBtn) {
        saveColumnBtn.onclick = function() {
            console.log('保存板块按钮点击');
            saveColumn();
        };
    }
    
    const deleteColumnBtn = document.getElementById('delete-column-btn');
    if (deleteColumnBtn) {
        deleteColumnBtn.onclick = function() {
            console.log('删除板块按钮点击');
            deleteColumn();
        };
    }
    
    // 教程按钮
    const tutorialNextBtn = document.getElementById('tutorial-next-btn');
    if (tutorialNextBtn) {
        tutorialNextBtn.onclick = function() {
            console.log('教程下一步按钮点击');
            nextTutorialStep();
        };
    }
    
    const tutorialCloseBtn = document.getElementById('tutorial-close-btn');
    if (tutorialCloseBtn) {
        tutorialCloseBtn.onclick = function() {
            console.log('教程关闭按钮点击');
            closeTutorial();
        };
    }
    
    // 主应用按钮
    const addBoardBtn = document.getElementById('add-board-btn-sidebar');
    if (addBoardBtn) {
        addBoardBtn.onclick = function() {
            console.log('新建看板按钮点击');
            openBoardModal(false);
        };
    }
    
    // 新建文件夹按钮
    const addFolderBtn = document.getElementById('add-folder-btn-sidebar');
    if (addFolderBtn) {
        addFolderBtn.onclick = function() {
            console.log('新建文件夹按钮点击');
            openFolderModal();
        };
    }

    // 视图下拉菜单事件
    const viewDropdownBtn = document.getElementById('view-dropdown-btn');
    if (viewDropdownBtn) {
        viewDropdownBtn.onclick = function(e) {
            e.stopPropagation();
            console.log('视图下拉按钮点击');
            toggleViewDropdown();
        };
    }
    
    const viewDropdownItems = document.querySelectorAll('#view-dropdown-menu .dropdown-item');
    viewDropdownItems.forEach(function(item) {
        item.onclick = function() {
            console.log('视图选择点击:', item.dataset.view);
            data.currentView = item.dataset.view;
            saveToStorage();
            closeViewDropdown();
            renderView();
        };
    });
    
    // 板块下拉菜单事件
    const columnDropdownBtn = document.getElementById('column-dropdown-btn');
    if (columnDropdownBtn) {
        columnDropdownBtn.onclick = function(e) {
            e.stopPropagation();
            console.log('板块下拉按钮点击');
            toggleColumnDropdown();
        };
    }

    document.querySelectorAll('.close').forEach(function(closeBtn) {
        closeBtn.onclick = function() {
            console.log('关闭按钮点击');
            closeModals();
        };
    });

    window.onclick = function(e) {
        if (e.target.classList.contains('modal')) {
            console.log('模态框背景点击');
            closeModals();
        } else if (!e.target.closest('.view-switcher') && !e.target.closest('.day-view-filter')) {
            // 点击其他地方关闭下拉菜单
            closeViewDropdown();
            closeColumnDropdown();
        }
    };

    const saveBoardBtn = document.getElementById('save-board-btn');
    if (saveBoardBtn) {
        saveBoardBtn.onclick = function() {
            console.log('保存看板按钮点击');
            saveBoard();
        };
    }

    const saveCardBtn = document.getElementById('save-card-btn');
    if (saveCardBtn) {
        saveCardBtn.onclick = function() {
            console.log('保存卡片按钮点击');
            saveCard();
        };
    }

    const deleteCardBtn = document.getElementById('delete-card-btn');
    if (deleteCardBtn) {
        deleteCardBtn.onclick = function() {
            console.log('删除卡片按钮点击');
            deleteCard();
        };
    }

    const addCustomColorBtn = document.getElementById('add-custom-color-btn');
    if (addCustomColorBtn) {
        addCustomColorBtn.onclick = function() {
            console.log('添加自定义颜色按钮点击');
            addCustomColor();
        };
    }

    const editBoardNameBtn = document.getElementById('edit-board-name-btn');
    if (editBoardNameBtn) {
        editBoardNameBtn.onclick = function() {
            console.log('修改看板名称按钮点击');
            const modal = document.getElementById('long-press-modal');
            if (modal) {
                modal.classList.remove('show');
            }
            openBoardModal(true);
        };
    }

    const deleteBoardBtn = document.getElementById('delete-board-btn');
    if (deleteBoardBtn) {
        deleteBoardBtn.onclick = function() {
            console.log('删除看板按钮点击');
            deleteCurrentBoard();
            closeModals();
        };
    }

    const rightDeleteBoardBtn = document.getElementById('right-delete-board-btn');
    if (rightDeleteBoardBtn) {
        rightDeleteBoardBtn.onclick = function() {
            console.log('右边删除看板按钮点击');
            deleteCurrentBoard();
            closeRightLongPressModal();
        };
    }

    const moreBtn = document.getElementById('more-btn');
    if (moreBtn) {
        moreBtn.onclick = function() {
            console.log('更多功能按钮点击');
            toggleMoreMenu();
        };
    }

    // 新菜单：完成看板、舍弃看板
    const menuCompleted = document.getElementById('menu-completed');
    if (menuCompleted) {
        menuCompleted.onclick = function() {
            console.log('菜单-完成看板点击');
            closeMoreMenu();
            renderCompletedBoardsList();
            showCompletedBoardsView();
        };
    }
    
    const menuDiscarded = document.getElementById('menu-discarded');
    if (menuDiscarded) {
        menuDiscarded.onclick = function() {
            console.log('菜单-舍弃看板点击');
            closeMoreMenu();
            renderDiscardedBoardsList();
            showDiscardedBoardsView();
        };
    }
    
    const menuTutorial = document.getElementById('menu-tutorial');
    if (menuTutorial) {
        menuTutorial.onclick = function() {
            console.log('菜单-帮助教程点击');
            closeMoreMenu();
            showTutorial();
        };
    }

    const menuExport = document.getElementById('menu-export');
    if (menuExport) {
        menuExport.onclick = function() {
            console.log('菜单-导出数据点击');
            closeMoreMenu();
            exportData();
        };
    }

    const menuImport = document.getElementById('menu-import');
    if (menuImport) {
        menuImport.onclick = function() {
            console.log('菜单-导入数据点击');
            closeMoreMenu();
            importData();
        };
    }

    const menuMerge = document.getElementById('menu-merge');
    if (menuMerge) {
        menuMerge.onclick = function() {
            console.log('菜单-合并数据点击');
            closeMoreMenu();
            mergeData();
        };
    }

    const menuClear = document.getElementById('menu-clear');
    if (menuClear) {
        menuClear.onclick = function() {
            console.log('菜单-清空数据点击');
            closeMoreMenu();
            clearData();
        };
    }
    
    const menuLanguage = document.getElementById('menu-language');
    if (menuLanguage) {
        menuLanguage.onclick = function() {
            console.log('菜单-语言点击');
            closeMoreMenu();
            openLanguageModal();
        };
    }

    const fileInput = document.getElementById('file-input');
    if (fileInput) {
        fileInput.onchange = handleFileSelect;
    }
    
    // 下拉菜单事件阻止冒泡
    const columnDropdownMenu = document.getElementById('column-dropdown-menu');
    if (columnDropdownMenu) {
        columnDropdownMenu.onclick = function(e) {
            e.stopPropagation();
        };
        columnDropdownMenu.onmousedown = function(e) {
            e.stopPropagation();
        };
    }
    
    // 日视图日期导航
    setupDateNavListener('day-prev-year', () => { dayViewDate.setFullYear(dayViewDate.getFullYear() - 1); renderDayView(); });
    setupDateNavListener('day-prev-month', () => { dayViewDate.setMonth(dayViewDate.getMonth() - 1); renderDayView(); });
    setupDateNavListener('day-next-month', () => { dayViewDate.setMonth(dayViewDate.getMonth() + 1); renderDayView(); });
    setupDateNavListener('day-next-year', () => { dayViewDate.setFullYear(dayViewDate.getFullYear() + 1); renderDayView(); });
    
    // 周视图日期导航
    setupDateNavListener('week-prev-year', () => { weekViewDate.setFullYear(weekViewDate.getFullYear() - 1); renderWeekView(); });
    setupDateNavListener('week-prev-week', () => { weekViewDate.setDate(weekViewDate.getDate() - 7); renderWeekView(); });
    setupDateNavListener('week-next-week', () => { weekViewDate.setDate(weekViewDate.getDate() + 7); renderWeekView(); });
    setupDateNavListener('week-next-year', () => { weekViewDate.setFullYear(weekViewDate.getFullYear() + 1); renderWeekView(); });
    
    // 月视图日期导航
    setupDateNavListener('month-prev-year', () => { monthViewDate.setFullYear(monthViewDate.getFullYear() - 1); renderMonthView(); });
    setupDateNavListener('month-prev-month', () => { monthViewDate.setMonth(monthViewDate.getMonth() - 1); renderMonthView(); });
    setupDateNavListener('month-next-month', () => { monthViewDate.setMonth(monthViewDate.getMonth() + 1); renderMonthView(); });
    setupDateNavListener('month-next-year', () => { monthViewDate.setFullYear(monthViewDate.getFullYear() + 1); renderMonthView(); });
    
    // 文件夹事件
    const saveFolderBtn = document.getElementById('save-folder-btn');
    if (saveFolderBtn) {
        saveFolderBtn.onclick = function() {
            console.log('保存文件夹按钮点击');
            saveFolder();
        };
    }
    
    const deleteFolderBtn = document.getElementById('delete-folder-btn');
    if (deleteFolderBtn) {
        deleteFolderBtn.onclick = function() {
            console.log('删除文件夹按钮点击');
            deleteFolder();
        };
    }
    
    const folderRenameBtn = document.getElementById('folder-rename-btn');
    if (folderRenameBtn) {
        folderRenameBtn.onclick = function() {
            console.log('文件夹重命名按钮点击');
            closeFolderLongPressModal();
            openFolderModal(true);
        };
    }
    
    const folderDeleteBtn = document.getElementById('folder-delete-btn');
    if (folderDeleteBtn) {
        folderDeleteBtn.onclick = function() {
            console.log('文件夹删除按钮点击（从长按菜单）');
            closeFolderLongPressModal();
            deleteFolderWithConfirm();
        };
    }
    
    // 年视图日期导航
    setupDateNavListener('year-prev', () => { yearViewDate.setFullYear(yearViewDate.getFullYear() - 1); renderYearView(); });
    setupDateNavListener('year-next', () => { yearViewDate.setFullYear(yearViewDate.getFullYear() + 1); renderYearView(); });
    
    // 单个板块视图返回按钮
    const backFromColumnBtn = document.getElementById('back-from-column-btn');
    if (backFromColumnBtn) {
        backFromColumnBtn.onclick = function() {
            closeSingleColumnView();
        };
    }
}

function setupDateNavListener(id, callback) {
    const btn = document.getElementById(id);
    if (btn) {
        btn.onclick = function(e) {
            e.stopPropagation();
            callback();
        };
    }
}

function openSingleColumnView(columnId, page = 1) {
    console.log('打开单个板块视图:', columnId, '页码:', page);
    
    // 保存当前视图状态
    singleColumnView.active = true;
    singleColumnView.columnId = columnId;
    singleColumnView.currentPage = page;
    
    // 从所有列表查找当前看板
    let currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) {
        currentBoard = data.completedBoards.find(function(b) { return b.id === data.currentBoardId; });
    }
    if (!currentBoard) {
        currentBoard = data.discardedBoards.find(function(b) { return b.id === data.currentBoardId; });
    }
    if (!currentBoard) {
        console.error('找不到当前看板:', data.currentBoardId);
        return;
    }
    
    // 获取板块信息
    const columnConfig = currentBoard.columnConfig.find(function(col) { return col.id === columnId; });
    if (!columnConfig) {
        console.error('找不到板块配置:', columnId);
        return;
    }
    
    // 更新标题
    const titleEl = document.getElementById('single-column-title');
    if (titleEl) {
        titleEl.textContent = columnConfig.name;
    }
    
    // 渲染完整的板块
    const contentEl = document.getElementById('single-column-content');
    if (!contentEl) return;
    contentEl.innerHTML = '';
    
    let allCards = currentBoard.columns[columnId] || [];
    // 排序卡片
    allCards = sortCards(allCards, columnId);
    
    // 分页计算
    const pageSize = singleColumnView.pageSize;
    const totalCards = allCards.length;
    const totalPages = Math.ceil(totalCards / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const cards = allCards.slice(startIndex, endIndex);
    
    // 创建完整的板块容器
    const columnEl = document.createElement('div');
    columnEl.className = 'column';
    columnEl.style.minWidth = '100%';
    
    const headerEl = document.createElement('div');
    headerEl.className = 'column-header';
    
    const nameEl = document.createElement('h3');
    nameEl.textContent = columnConfig.name;
    nameEl.onclick = function() {
        openColumnModal(columnId);
    };
    
    const rightContainer = document.createElement('div');
    rightContainer.className = 'column-header-right';
    // 这里不添加点击事件，因为统计数字在详情页不可点击
    
    const countEl = document.createElement('span');
    countEl.className = 'card-count';
    countEl.textContent = totalCards;
    
    // 添加排序按钮
    const sortBtn = document.createElement('button');
    sortBtn.className = 'sort-btn';
    sortBtn.dataset.columnId = columnId;
    // 根据排序状态显示不同图标
    const currentState = columnSortStates[columnId];
    if (currentState === 'asc') {
        sortBtn.innerHTML = '↑';
        sortBtn.title = '升序排列（最旧在顶部），点击切换';
    } else if (currentState === 'desc') {
        sortBtn.innerHTML = '↓';
        sortBtn.title = '降序排列（最新在顶部），点击切换';
    } else {
        sortBtn.innerHTML = '⇅';
        sortBtn.title = '自由排序（卡片可随意拖放改变顺序），点击排序';
    }
    sortBtn.onclick = function(e) {
        e.stopPropagation();
        e.preventDefault();
        const btnColumnId = this.dataset.columnId;
        console.log('排序按钮被点击了:', btnColumnId, columnId);
        toggleSort(btnColumnId);
        // 重新打开视图来更新显示
        openSingleColumnView(columnId, page);
    };
    
    rightContainer.appendChild(sortBtn);
    rightContainer.appendChild(countEl);
    
    headerEl.appendChild(nameEl);
    headerEl.appendChild(rightContainer);
    
    // 创建卡片容器
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    cardsContainer.id = columnId + '-cards';
    
    cards.forEach(function(card) {
        const cardEl = createCardElement(card, columnId);
        // 单个板块视图里不需要拖放功能
        cardEl.draggable = false;
        cardsContainer.appendChild(cardEl);
    });
    
    columnEl.appendChild(headerEl);
    columnEl.appendChild(cardsContainer);
    
    // 只有非完成板块才显示添加卡片按钮
    console.log('columnConfig.isDone:', columnConfig.isDone, 'columnId:', columnId);
    if (!columnConfig.isDone) {
        console.log('添加按钮应该显示');
        const addBtn = document.createElement('button');
        addBtn.className = 'add-card-btn';
        addBtn.dataset.column = columnId;
        addBtn.textContent = t('addCard');
        addBtn.onclick = function() {
            addCard(columnId);
        };
        // 把添加卡片按钮也放在卡片容器里，这样它会自动适应网格布局
        cardsContainer.appendChild(addBtn);
    }
    
    // 添加分页导航
    if (totalPages > 1) {
        const paginationEl = document.createElement('div');
        paginationEl.className = 'pagination';
        
        // 上一页按钮
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.textContent = '←';
        prevBtn.disabled = page <= 1;
        prevBtn.onclick = function() {
            if (page > 1) {
                openSingleColumnView(columnId, page - 1);
            }
        };
        paginationEl.appendChild(prevBtn);
        
        // 页码按钮
        const maxVisiblePages = 5;
        let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        if (startPage > 1) {
            const firstBtn = document.createElement('button');
            firstBtn.className = 'pagination-btn';
            firstBtn.textContent = '1';
            firstBtn.onclick = function() {
                openSingleColumnView(columnId, 1);
            };
            paginationEl.appendChild(firstBtn);
            
            if (startPage > 2) {
                const ellipsis1 = document.createElement('span');
                ellipsis1.textContent = '...';
                paginationEl.appendChild(ellipsis1);
            }
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'pagination-btn' + (i === page ? ' active' : '');
            pageBtn.textContent = i;
            pageBtn.onclick = function() {
                openSingleColumnView(columnId, i);
            };
            paginationEl.appendChild(pageBtn);
        }
        
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis2 = document.createElement('span');
                ellipsis2.textContent = '...';
                paginationEl.appendChild(ellipsis2);
            }
            
            const lastBtn = document.createElement('button');
            lastBtn.className = 'pagination-btn';
            lastBtn.textContent = totalPages;
            lastBtn.onclick = function() {
                openSingleColumnView(columnId, totalPages);
            };
            paginationEl.appendChild(lastBtn);
        }
        
        // 下一页按钮
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.textContent = '→';
        nextBtn.disabled = page >= totalPages;
        nextBtn.onclick = function() {
            if (page < totalPages) {
                openSingleColumnView(columnId, page + 1);
            }
        };
        paginationEl.appendChild(nextBtn);
        
        // 页码信息
        const pageInfo = document.createElement('span');
        pageInfo.className = 'page-info';
        pageInfo.textContent = `第 ${page} / ${totalPages} 页`;
        paginationEl.appendChild(pageInfo);
        
        columnEl.appendChild(paginationEl);
    }
    
    contentEl.appendChild(columnEl);
    
    // 隐藏其他视图，显示单个板块视图
    const singleColumnViewEl = document.getElementById('single-column-view');
    if (singleColumnViewEl) {
        singleColumnViewEl.classList.remove('hidden');
    }
    
    const boardViewEl = document.getElementById('board-view');
    if (boardViewEl) {
        boardViewEl.classList.add('hidden');
    }
    
    const dayViewEl = document.getElementById('day-view');
    if (dayViewEl) {
        dayViewEl.classList.add('hidden');
    }
    
    const weekViewEl = document.getElementById('week-view');
    if (weekViewEl) {
        weekViewEl.classList.add('hidden');
    }
    
    const monthViewEl = document.getElementById('month-view');
    if (monthViewEl) {
        monthViewEl.classList.add('hidden');
    }
    
    const yearViewEl = document.getElementById('year-view');
    if (yearViewEl) {
        yearViewEl.classList.add('hidden');
    }
    
    const completedBoardsView = document.getElementById('completed-boards-view');
    if (completedBoardsView) {
        completedBoardsView.classList.add('hidden');
    }
    
    const discardedBoardsView = document.getElementById('discarded-boards-view');
    if (discardedBoardsView) {
        discardedBoardsView.classList.add('hidden');
    }
}

function closeSingleColumnView() {
    console.log('关闭单个板块视图');
    singleColumnView.active = false;
    singleColumnView.columnId = null;
    
    // 隐藏单个板块视图，显示原来的视图
    const singleColumnViewEl = document.getElementById('single-column-view');
    if (singleColumnViewEl) {
        singleColumnViewEl.classList.add('hidden');
    }
    
    renderView();
}

function loadFromStorage() {
    console.log('从本地存储加载数据...');
    
    let shouldCreateDefault = false;
    const storedData = localStorage.getItem(STORAGE_KEY);
    
    if (storedData) {
        try {
            const loadedData = JSON.parse(storedData);
            console.log('解析数据:', loadedData);
            
            // 验证数据结构
            if (loadedData && Array.isArray(loadedData.boards)) {
                data = {
                    boardItems: [], // 初始化列表项
                    folders: loadedData.folders || [],
                    boards: [],
                    completedBoards: [],
                    discardedBoards: [],
                    currentBoardId: null,
                    currentView: loadedData.currentView || 'board',
                    currentListType: loadedData.currentListType || 'normal',
                    expandedFolders: loadedData.expandedFolders || [],
                    templatePinned: loadedData.templatePinned !== undefined ? loadedData.templatePinned : true,
                    earnedBadges: loadedData.earnedBadges || [],
                    totalCompletedCards: loadedData.totalCompletedCards || 0
                };
                
                // 迁移每个普通看板的数据
                loadedData.boards.forEach(function(board) {
                    const migratedBoard = validateAndMigrateBoard(board);
                    if (migratedBoard) {
                        data.boards.push(migratedBoard);
                    }
                });
                
                // 迁移完成看板（如果有）
                if (loadedData.completedBoards && Array.isArray(loadedData.completedBoards)) {
                    loadedData.completedBoards.forEach(function(board) {
                        const migratedBoard = validateAndMigrateBoard(board);
                        if (migratedBoard) {
                            data.completedBoards.push(migratedBoard);
                        }
                    });
                }
                
                // 迁移舍弃看板（如果有）
                if (loadedData.discardedBoards && Array.isArray(loadedData.discardedBoards)) {
                    loadedData.discardedBoards.forEach(function(board) {
                        const migratedBoard = validateAndMigrateBoard(board);
                        if (migratedBoard) {
                            data.discardedBoards.push(migratedBoard);
                        }
                    });
                }
                
                // 初始化boardItems（如果没有）
                if (!loadedData.boardItems || !Array.isArray(loadedData.boardItems)) {
                    // 从boards创建默认的boardItems
                    data.boardItems = data.boards.map((board, index) => ({
                        type: 'board',
                        id: board.id,
                        order: index,
                        parentFolderId: null
                    }));
                } else {
                    data.boardItems = loadedData.boardItems;
                }
                
                // 检查是否还有任何看板
                const hasAnyBoards = data.boards.length > 0 || data.completedBoards.length > 0 || data.discardedBoards.length > 0;
                
                if (!hasAnyBoards) {
                    console.log('无任何看板数据，创建默认数据');
                    shouldCreateDefault = true;
                } else {
                    // 尝试恢复当前看板，根据当前列表类型查找
                    let foundBoard = null;
                    let targetList = null;
                    
                    if (data.currentListType === 'normal') {
                        targetList = data.boards;
                    } else if (data.currentListType === 'completed') {
                        targetList = data.completedBoards;
                    } else {
                        targetList = data.discardedBoards;
                    }
                    
                    if (loadedData.currentBoardId && targetList.length > 0) {
                        foundBoard = targetList.find(b => b.id === loadedData.currentBoardId);
                    }
                    
                    // 如果没找到，使用默认值
                    if (!foundBoard) {
                        if (data.boards.length > 0) {
                            data.currentBoardId = data.boards[0].id;
                            data.currentListType = 'normal';
                        } else if (data.completedBoards.length > 0) {
                            data.currentBoardId = data.completedBoards[0].id;
                            data.currentListType = 'completed';
                        } else {
                            data.currentBoardId = data.discardedBoards[0].id;
                            data.currentListType = 'discarded';
                        }
                    } else {
                        data.currentBoardId = foundBoard.id;
                    }
                }
            } else {
                console.log('数据结构不正确，创建默认数据');
                shouldCreateDefault = true;
            }
        } catch (e) {
            console.error('解析数据失败:', e);
            shouldCreateDefault = true;
        }
    } else {
        console.log('无存储数据，创建默认数据');
        shouldCreateDefault = true;
    }
    
    if (shouldCreateDefault) {
        createDefaultData();
    } else {
        // 确保数据同步
        ensureBoardItemsSync();
        console.log('加载后已有徽章:', data.earnedBadges);
        console.log('加载后保存的总完成数:', data.totalCompletedCards);
        // 检查并更新徽章（不清除已有徽章）
        checkAndUpdateBadges();
    }

    const storedColors = localStorage.getItem(COLORS_STORAGE_KEY);
    if (storedColors) {
        try {
            availableColors = JSON.parse(storedColors);
        } catch (e) {
            console.error('解析颜色数据失败:', e);
            availableColors = [...DEFAULT_COLORS];
            saveColorsToStorage();
        }
    } else {
        availableColors = [...DEFAULT_COLORS];
        saveColorsToStorage();
    }
}

// 判断看板是否完全完成（所有卡片都在done板块）
function isBoardFullyCompleted(board) {
    if (!board || !board.columns) return false;
    
    let totalCards = 0;
    let doneCards = 0;
    
    board.columnConfig.forEach(function(col) {
        const cards = board.columns[col.id] || [];
        totalCards += cards.length;
        if (col.isDone) {
            doneCards += cards.length;
        }
    });
    
    return totalCards > 0 && totalCards === doneCards;
}

// 获取看板统计信息（总卡片数、完成卡片数）
function getBoardStats(board) {
    let totalCards = 0;
    let doneCards = 0;
    
    if (board && board.columns) {
        board.columnConfig.forEach(function(col) {
            const cards = board.columns[col.id] || [];
            totalCards += cards.length;
            if (col.isDone) {
                doneCards += cards.length;
            }
        });
    }
    
    return { total: totalCards, done: doneCards };
}

function validateAndMigrateBoard(board) {
    if (!board || !board.id || !board.name) return null;
    
    // 复制默认配置，并保留用户已有的配置
    const migrated = {
        id: board.id,
        name: board.name,
        columnConfig: [...DEFAULT_COLUMNS],
        columns: {},
        parentFolderId: board.parentFolderId || null
    };
    
    // 如果旧数据有 columnConfig，保留它的 isPinned 状态
    if (board.columnConfig && Array.isArray(board.columnConfig)) {
        board.columnConfig.forEach(function(oldCol) {
            let targetId = oldCol.id;
            // 把旧的id映射到新的序号
            if (oldCol.id === 'todo') {
                targetId = '1';
            } else if (oldCol.id === 'template' || oldCol.id === 'paused') {
                targetId = '2';
            } else if (oldCol.id === 'emergence' || oldCol.id === 'inprogress') {
                targetId = '3';
            } else if (oldCol.id === 'done') {
                targetId = '4';
            }
            const newCol = migrated.columnConfig.find(c => c.id === targetId);
            if (newCol && typeof oldCol.isPinned !== 'undefined') {
                newCol.isPinned = oldCol.isPinned;
            }
        });
    }
    
    // 迁移旧格式的数据
    if (board.columns) {
        if (Array.isArray(board.columns)) {
            // 旧格式转换
            const oldColumns = board.columns;
            migrated.columnConfig.forEach(function(col) {
                migrated.columns[col.id] = [];
            });
            console.log('转换旧数组格式看板数据:', board.name);
        } else {
            // 已有对象格式
            if (typeof board.columns === 'object') {
                Object.keys(board.columns).forEach(function(key) {
                    if (Array.isArray(board.columns[key])) {
                        let targetKey = key;
                        // 把旧的id映射到新的序号
                        if (key === 'todo') {
                            targetKey = '1';
                        } else if (key === 'template' || key === 'paused') {
                            targetKey = '2';
                        } else if (key === 'emergence' || key === 'inprogress') {
                            targetKey = '3';
                        } else if (key === 'done') {
                            targetKey = '4';
                        }
                        // 去除卡片中的pausedAt字段
                        const cards = board.columns[key].map(card => {
                            const { pausedAt, ...rest } = card;
                            return rest;
                        });
                        migrated.columns[targetKey] = cards;
                    }
                });
            }
            // 确保所有columnConfig都有对应的columns
            migrated.columnConfig.forEach(function(col) {
                if (!migrated.columns[col.id]) {
                    migrated.columns[col.id] = [];
                }
            });
        }
    } else {
        // 没有columns数据，初始化空数据
        migrated.columnConfig.forEach(function(col) {
            migrated.columns[col.id] = [];
        });
    }
    
    return migrated;
}

// 移动看板到指定列表
function moveBoardToList(boardId, fromListType, toListType) {
    console.log('移动看板:', boardId, '从', fromListType, '到', toListType);
    
    let fromList = null;
    let toList = null;
    
    // 获取源列表和目标列表
    if (fromListType === 'normal') fromList = data.boards;
    else if (fromListType === 'completed') fromList = data.completedBoards;
    else fromList = data.discardedBoards;
    
    if (toListType === 'normal') toList = data.boards;
    else if (toListType === 'completed') toList = data.completedBoards;
    else toList = data.discardedBoards;
    
    if (!fromList || !toList) return false;
    
    // 从源列表中找到并移除看板
    const boardIndex = fromList.findIndex(b => b.id === boardId);
    if (boardIndex === -1) {
        console.log('未找到看板:', boardId);
        return false;
    }
    
    const board = fromList.splice(boardIndex, 1)[0];
    // 添加到目标列表
    toList.push(board);
    
    // 更新boardItems
    if (fromListType === 'normal' && toListType !== 'normal') {
        // 从普通列表移动到完成或舍弃，从boardItems中移除
        data.boardItems = data.boardItems.filter(item => item.id !== boardId);
    } else if (fromListType !== 'normal' && toListType === 'normal') {
        // 从完成或舍弃移动回普通列表，添加到boardItems
        const maxOrder = Math.max(...data.boardItems.map(i => i.order), -1);
        data.boardItems.push({
            type: 'board',
            id: boardId,
            order: maxOrder + 1,
            parentFolderId: board.parentFolderId || null
        });
    }
    
    saveToStorage();
    renderAll();
    
    // 移动后显示相应的视图
    if (fromListType === 'completed' && fromList.length > 0) {
        renderCompletedBoardsList();
        showCompletedBoardsView();
    } else if (fromListType === 'discarded' && fromList.length > 0) {
        renderDiscardedBoardsList();
        showDiscardedBoardsView();
    } else {
        showBoardView();
    }
    
    return true;
}


function createDefaultData() {
    console.log('创建默认数据...');
    
    // 创建年度目标看板
    const annualGoalBoard = {
        id: generateId(),
        name: '🎯年度目标',
        columnConfig: JSON.parse(JSON.stringify(DEFAULT_COLUMNS)),
        columns: {},
        parentFolderId: null
    };
    annualGoalBoard.columns['1'] = [
        { id: generateId(), content: '完成年度财务目标', color: '#ffcccc', createdAt: getTodayString(), completedAt: null },
        { id: generateId(), content: '读完12本书', color: '#fff3cd', createdAt: getTodayString(), completedAt: null }
    ];
    
    // 创建紧急事项看板
    const urgentBoard = {
        id: generateId(),
        name: '🔥紧急事项',
        columnConfig: JSON.parse(JSON.stringify(DEFAULT_COLUMNS)),
        columns: {},
        parentFolderId: null
    };
    urgentBoard.columns['1'] = [
        { id: generateId(), content: '处理紧急工作邮件', color: '#ffcdd2', createdAt: getTodayString(), completedAt: null }
    ];
    
    // 创建文件夹
    const exerciseFolder = { id: generateId(), name: '运动' };
    const studyFolder = { id: generateId(), name: '学习' };
    const workFolder = { id: generateId(), name: '工作' };
    const familyFolder = { id: generateId(), name: '家庭' };
    const completedTasksFolder = { id: generateId(), name: '完成任务' };
    const discardedTasksFolder = { id: generateId(), name: '舍弃任务' };
    
    data.boards = [annualGoalBoard, urgentBoard];
    data.folders = [exerciseFolder, studyFolder, workFolder, familyFolder, completedTasksFolder, discardedTasksFolder];
    
    // 初始化boardItems - 左侧列表项
    data.boardItems = [
        { type: 'board', id: annualGoalBoard.id, order: 0, parentFolderId: null },
        { type: 'board', id: urgentBoard.id, order: 1, parentFolderId: null },
        { type: 'folder', id: exerciseFolder.id, order: 2, parentFolderId: null },
        { type: 'folder', id: studyFolder.id, order: 3, parentFolderId: null },
        { type: 'folder', id: workFolder.id, order: 4, parentFolderId: null },
        { type: 'folder', id: familyFolder.id, order: 5, parentFolderId: null },
        { type: 'folder', id: completedTasksFolder.id, order: 6, parentFolderId: null },
        { type: 'folder', id: discardedTasksFolder.id, order: 7, parentFolderId: null }
    ];
    
    data.expandedFolders = [];
    data.earnedBadges = [];
    data.totalCompletedCards = 0;
    data.currentBoardId = annualGoalBoard.id;
    data.currentView = 'board';
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function saveColorsToStorage() {
    localStorage.setItem(COLORS_STORAGE_KEY, JSON.stringify(availableColors));
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getTodayString() {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

function renderAll() {
    console.log('开始渲染所有内容...');
    renderBoardList();
    renderCurrentBoard();
    renderView();
    renderCompletedBoardsList();
    renderDiscardedBoardsList();
    renderBadges();
    // 更新菜单中的看板计数
    const completedCountEl = document.getElementById('menu-completed-count');
    const discardedCountEl = document.getElementById('menu-discarded-count');
    if (completedCountEl) completedCountEl.textContent = data.completedBoards.length;
    if (discardedCountEl) discardedCountEl.textContent = data.discardedBoards.length;
}

function showBoardView() {
    const boardView = document.getElementById('board-view');
    const weekView = document.getElementById('week-view');
    const monthView = document.getElementById('month-view');
    const yearView = document.getElementById('year-view');
    const dayView = document.getElementById('day-view');
    const completedView = document.getElementById('completed-boards-view');
    const discardedView = document.getElementById('discarded-boards-view');
    
    if (boardView) boardView.classList.remove('hidden');
    if (weekView) weekView.classList.add('hidden');
    if (monthView) monthView.classList.add('hidden');
    if (yearView) yearView.classList.add('hidden');
    if (dayView) dayView.classList.add('hidden');
    if (completedView) completedView.classList.add('hidden');
    if (discardedView) discardedView.classList.add('hidden');
}

function showCompletedBoardsView() {
    const boardView = document.getElementById('board-view');
    const weekView = document.getElementById('week-view');
    const monthView = document.getElementById('month-view');
    const yearView = document.getElementById('year-view');
    const dayView = document.getElementById('day-view');
    const completedView = document.getElementById('completed-boards-view');
    const discardedView = document.getElementById('discarded-boards-view');
    
    if (boardView) boardView.classList.add('hidden');
    if (weekView) weekView.classList.add('hidden');
    if (monthView) monthView.classList.add('hidden');
    if (yearView) yearView.classList.add('hidden');
    if (dayView) dayView.classList.add('hidden');
    if (completedView) completedView.classList.remove('hidden');
    if (discardedView) discardedView.classList.add('hidden');
}

function showDiscardedBoardsView() {
    const boardView = document.getElementById('board-view');
    const weekView = document.getElementById('week-view');
    const monthView = document.getElementById('month-view');
    const yearView = document.getElementById('year-view');
    const dayView = document.getElementById('day-view');
    const completedView = document.getElementById('completed-boards-view');
    const discardedView = document.getElementById('discarded-boards-view');
    
    if (boardView) boardView.classList.add('hidden');
    if (weekView) weekView.classList.add('hidden');
    if (monthView) monthView.classList.add('hidden');
    if (yearView) yearView.classList.add('hidden');
    if (dayView) dayView.classList.add('hidden');
    if (completedView) completedView.classList.add('hidden');
    if (discardedView) discardedView.classList.remove('hidden');
}

function showMainView() {
    const boardView = document.getElementById('board-view');
    const weekView = document.getElementById('week-view');
    const monthView = document.getElementById('month-view');
    const yearView = document.getElementById('year-view');
    const dayView = document.getElementById('day-view');
    const completedView = document.getElementById('completed-boards-view');
    const discardedView = document.getElementById('discarded-boards-view');
    
    if (boardView) boardView.classList.remove('hidden');
    if (weekView) weekView.classList.remove('hidden');
    if (monthView) monthView.classList.remove('hidden');
    if (yearView) yearView.classList.remove('hidden');
    if (dayView) dayView.classList.remove('hidden');
    if (completedView) completedView.classList.add('hidden');
    if (discardedView) discardedView.classList.add('hidden');
}

function clearData() {
    if (confirm('确认清空数据吗？建议先导出数据备份')) {
        // 清空 localStorage
        localStorage.removeItem('kanbanData');
        
        // 重新初始化数据
        createDefaultData();
        
        alert('数据已清空！');
        
        renderAll();
    }
}

function openRightBoardLongPressModal(sourceType) {
    const modal = document.getElementById('right-board-long-press-modal');
    const moveButtonsContainer = document.getElementById('right-move-board-buttons');
    if (!modal || !moveButtonsContainer) return;
    
    // 清空并重建移动按钮
    moveButtonsContainer.innerHTML = '';
    
    // 创建按钮组
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'modal-button-group';
    
    if (sourceType === 'completed') {
        // 完成看板：显示恢复、放入舍弃
        const restoreBtn = document.createElement('button');
        restoreBtn.className = 'btn btn-primary';
        restoreBtn.textContent = '↩️ 恢复看板';
        restoreBtn.onclick = function() {
            moveBoardToList(currentLongPressBoardId, 'completed', 'normal');
            closeRightLongPressModal();
        };
        
        const discardBtn = document.createElement('button');
        discardBtn.className = 'btn btn-secondary';
        discardBtn.textContent = '🗑️ 放入舍弃';
        discardBtn.onclick = function() {
            moveBoardToList(currentLongPressBoardId, 'completed', 'discarded');
            closeRightLongPressModal();
        };
        
        buttonGroup.appendChild(restoreBtn);
        buttonGroup.appendChild(discardBtn);
        
    } else {
        // 舍弃看板：显示恢复、放入完成
        const restoreBtn = document.createElement('button');
        restoreBtn.className = 'btn btn-primary';
        restoreBtn.textContent = '↩️ 恢复看板';
        restoreBtn.onclick = function() {
            moveBoardToList(currentLongPressBoardId, 'discarded', 'normal');
            closeRightLongPressModal();
        };
        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'btn btn-secondary';
        completeBtn.textContent = '✅ 放入完成';
        completeBtn.onclick = function() {
            moveBoardToList(currentLongPressBoardId, 'discarded', 'completed');
            closeRightLongPressModal();
        };
        
        buttonGroup.appendChild(restoreBtn);
        buttonGroup.appendChild(completeBtn);
    }
    
    moveButtonsContainer.appendChild(buttonGroup);
    modal.classList.add('show');
}

function closeRightLongPressModal() {
    const modal = document.getElementById('right-board-long-press-modal');
    if (modal) {
        modal.classList.remove('show');
    }
}



function renderCompletedBoardsList() {
    const container = document.getElementById('completed-boards-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    data.completedBoards.forEach(function(board) {
        const item = document.createElement('div');
        item.className = 'boards-list-item';
        item.dataset.boardId = board.id;
        
        const nameEl = document.createElement('div');
        nameEl.className = 'boards-list-item-name';
        nameEl.textContent = board.name;
        
        const { total, done } = getBoardStats(board);
        const statsEl = document.createElement('div');
        statsEl.className = 'boards-list-item-stats';
        statsEl.textContent = `${done}/${total}`;
        
        item.appendChild(nameEl);
        item.appendChild(statsEl);
        
        let itemLongPressTimer = null;
        
        item.onmousedown = function() {
            itemLongPressTimer = setTimeout(function() {
                currentLongPressBoardId = board.id;
                openRightBoardLongPressModal('completed');
            }, 800);
        };
        
        item.onmouseup = function() {
            if (itemLongPressTimer) {
                clearTimeout(itemLongPressTimer);
                itemLongPressTimer = null;
                // 点击时显示看板详情
                data.currentBoardId = board.id;
                renderCurrentBoard();
                showBoardView();
            }
        };
        
        item.onmouseleave = function() {
            if (itemLongPressTimer) {
                clearTimeout(itemLongPressTimer);
                itemLongPressTimer = null;
            }
        };
        
        container.appendChild(item);
    });
}

function renderDiscardedBoardsList() {
    const container = document.getElementById('discarded-boards-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    data.discardedBoards.forEach(function(board) {
        const item = document.createElement('div');
        item.className = 'boards-list-item';
        item.dataset.boardId = board.id;
        
        const nameEl = document.createElement('div');
        nameEl.className = 'boards-list-item-name';
        nameEl.textContent = board.name;
        
        const { total, done } = getBoardStats(board);
        const statsEl = document.createElement('div');
        statsEl.className = 'boards-list-item-stats';
        statsEl.textContent = `${done}/${total}`;
        
        item.appendChild(nameEl);
        item.appendChild(statsEl);
        
        let itemLongPressTimer = null;
        
        item.onmousedown = function() {
            itemLongPressTimer = setTimeout(function() {
                currentLongPressBoardId = board.id;
                openRightBoardLongPressModal('discarded');
            }, 800);
        };
        
        item.onmouseup = function() {
            if (itemLongPressTimer) {
                clearTimeout(itemLongPressTimer);
                itemLongPressTimer = null;
                // 点击时显示看板详情
                data.currentBoardId = board.id;
                renderCurrentBoard();
                showBoardView();
            }
        };
        
        item.onmouseleave = function() {
            if (itemLongPressTimer) {
                clearTimeout(itemLongPressTimer);
                itemLongPressTimer = null;
            }
        };
        
        container.appendChild(item);
    });
}

function getBoardCardCount(board) {
    let total = 0;
    let done = 0;
    
    board.columnConfig.forEach(function(col) {
        const cards = board.columns[col.id] || [];
        total += cards.length;
        if (col.isDone) {
            done += cards.length;
        }
    });
    
    return { total, done };
}

function switchBoard(boardId) {
    data.currentBoardId = boardId;
    saveToStorage();
    renderBoardList();
    renderCurrentBoard();
    renderView();
}

function renderCurrentBoard() {
    // 从所有列表中查找当前看板
    let currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) {
        currentBoard = data.completedBoards.find(function(b) { return b.id === data.currentBoardId; });
    }
    if (!currentBoard) {
        currentBoard = data.discardedBoards.find(function(b) { return b.id === data.currentBoardId; });
    }
    if (!currentBoard) {
        console.error('找不到当前看板:', data.currentBoardId);
        return;
    }

    const titleEl = document.getElementById('current-board-title');
    if (titleEl) {
        titleEl.textContent = currentBoard.name;
    }

    const container = document.getElementById('columns-container');
    if (!container) return;
    container.innerHTML = '';

    // 获取删除位置，去重排序
    let deletedPositions = currentBoard.deletedColumnPositions || [];
    deletedPositions = [...new Set(deletedPositions)].sort((a, b) => a - b);

    // 渲染所有板块和占位符
    let hasDoneColumn = false;
    let originalIndex = 0;
    let displayIndex = 0;
    
    while (displayIndex < 100) { // 防止无限循环
        // 检查是否有删除位置在当前位置
        const hasPlaceholderHere = deletedPositions.includes(displayIndex);
        
        if (hasPlaceholderHere) {
            // 添加+新建板块占位符
            const placeholder = document.createElement('div');
            placeholder.className = 'add-column-placeholder';
            placeholder.dataset.position = displayIndex;
            placeholder.innerHTML = `
                <div class="plus-icon">+</div>
                <div class="placeholder-text">新建板块</div>
            `;
            placeholder.onclick = function() {
                const pos = parseInt(this.dataset.position);
                addNewColumnAtPosition(pos);
            };
            
            // 占位符也能接收板块拖放
            placeholder.ondragover = function(e) {
                if (!draggedColumn) return;
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                
                // 给占位符也添加红色闪烁边框
                this.classList.add('drag-over');
            };
            
            placeholder.ondragleave = function(e) {
                if (!draggedColumn) return;
                // 检查鼠标是否还在占位符内部
                const rect = this.getBoundingClientRect();
                if (e.clientX < rect.left || e.clientX > rect.right || 
                    e.clientY < rect.top || e.clientY > rect.bottom) {
                    this.classList.remove('drag-over');
                }
            };
            
            placeholder.ondrop = function(e) {
                if (!draggedColumn) return;
                e.preventDefault();
                
                this.classList.remove('drag-over');
                
                const pos = parseInt(this.dataset.position);
                const currentBoard = data.boards.find(b => b.id === data.currentBoardId);
                if (currentBoard) {
                    // 找到被拖动板块的原始位置
                    const draggedId = draggedColumn.dataset.column;
                    const fromIndex = currentBoard.columnConfig.findIndex(c => c.id === draggedId);
                    if (fromIndex === -1) return;
                    
                    // 计算板块原来的显示位置
                    let originalDisplayIndex = 0;
                    let tempIdx = 0;
                    while (tempIdx < currentBoard.columnConfig.length) {
                        if (currentBoard.deletedColumnPositions.includes(originalDisplayIndex)) {
                            originalDisplayIndex++;
                        } else {
                            if (tempIdx === fromIndex) {
                                break;
                            }
                            tempIdx++;
                            originalDisplayIndex++;
                        }
                    }
                    
                    // 移除占位符
                    currentBoard.deletedColumnPositions = currentBoard.deletedColumnPositions.filter(p => p !== pos);
                    
                    // 计算插入位置（在占位符的位置插入）
                    let actualInsertIndex = 0;
                    let displayIdx = 0;
                    
                    while (displayIdx < pos && actualInsertIndex < currentBoard.columnConfig.length) {
                        if (currentBoard.deletedColumnPositions.includes(displayIdx)) {
                            displayIdx++;
                        } else {
                            if (actualInsertIndex !== fromIndex) {
                                actualInsertIndex++;
                            }
                            displayIdx++;
                        }
                    }
                    
                    // 处理被拖动板块本身的位置影响
                    if (fromIndex < actualInsertIndex) {
                        actualInsertIndex--;
                    }
                    
                    // 移动板块到占位符的位置
                    const [removed] = currentBoard.columnConfig.splice(fromIndex, 1);
                    currentBoard.columnConfig.splice(actualInsertIndex, 0, removed);
                    
                    // 在板块原来的显示位置添加新的占位符
                    if (!currentBoard.deletedColumnPositions.includes(originalDisplayIndex)) {
                        currentBoard.deletedColumnPositions.push(originalDisplayIndex);
                    }
                    currentBoard.deletedColumnPositions.sort((a, b) => a - b);
                    
                    // 同步columns数据
                    const columnsData = {};
                    currentBoard.columnConfig.forEach(cfg => {
                        columnsData[cfg.id] = currentBoard.columns[cfg.id] || [];
                    });
                    currentBoard.columns = columnsData;
                    
                    saveToStorage();
                    renderCurrentBoard();
                }
            };
            
            container.appendChild(placeholder);
            displayIndex++;
        } else if (originalIndex < currentBoard.columnConfig.length) {
            // 渲染正常板块
            const colConfig = currentBoard.columnConfig[originalIndex];
            const columnEl = createColumnElement(colConfig, currentBoard);
            container.appendChild(columnEl);
            if (colConfig.isDone) {
                hasDoneColumn = true;
            }
            originalIndex++;
            displayIndex++;
        } else {
            // 没有更多内容了
            break;
        }
    }
    
    // 如果有已完成板块，添加删除区域
    if (hasDoneColumn) {
        // 添加删除区域
        const deleteZone = document.createElement('div');
        deleteZone.className = 'delete-card-zone';
        const deleteText = t('dragToDelete');
        const textLines = deleteText.split('\n');
        deleteZone.innerHTML = `
            <div class="delete-icon">🗑</div>
            ${textLines.map(line => `<div>${line}</div>`).join('')}
        `;
        
        // 拖放事件
        deleteZone.ondragover = function(e) {
            e.preventDefault();
            
            // 只有拖动卡片时才显示拖放提示
            if (draggedCard) {
                e.dataTransfer.dropEffect = 'move';
                deleteZone.classList.add('drag-over');
            }
        };
        
        deleteZone.ondragleave = function(e) {
            if (!deleteZone.contains(e.relatedTarget)) {
                deleteZone.classList.remove('drag-over');
            }
        };
        
        deleteZone.ondrop = function(e) {
            e.preventDefault();
            deleteZone.classList.remove('drag-over');
            
            if (draggedCard) {
                const cardId = draggedCard.dataset.cardId;
                // 查找并删除卡片
                let deleted = false;
                currentBoard.columnConfig.forEach(function(colConfig) {
                    const cards = currentBoard.columns[colConfig.id] || [];
                    const index = cards.findIndex(function(c) { return c.id === cardId; });
                    if (index !== -1) {
                        cards.splice(index, 1);
                        deleted = true;
                    }
                });
                
                if (deleted) {
                    saveToStorage();
                    renderBoardList();
                    // 检查并更新徽章
                    checkAndUpdateBadges();
                    renderCurrentBoard();
                }
            }
        };
        
        container.appendChild(deleteZone);
    }
    
    // 渲染徽章
    renderBadges();
}

function createColumnElement(colConfig, board) {
    const columnEl = document.createElement('div');
    columnEl.className = 'column';
    columnEl.dataset.column = colConfig.id;
    
    const headerEl = document.createElement('div');
    headerEl.className = 'column-header';
    
    const nameEl = document.createElement('h3');
    nameEl.textContent = colConfig.name;
    nameEl.onclick = function() {
        openColumnModal(colConfig.id);
    };
    
    const countEl = document.createElement('span');
    countEl.className = 'card-count';
    let cards = board.columns[colConfig.id] || [];
    countEl.textContent = cards.length;
    
    // 添加模式切换按钮（每个板块都有）
    let pinBtn = null;
    pinBtn = document.createElement('button');
    pinBtn.className = 'pin-btn';
    pinBtn.title = colConfig.isPinned ? '编辑模式（点击切换为模板模式）' : '模板模式（点击切换为编辑模式）';
    pinBtn.innerHTML = colConfig.isPinned ? '📄' : '🗃️';
    pinBtn.onclick = function(e) {
        e.stopPropagation();
        e.preventDefault();
        colConfig.isPinned = !colConfig.isPinned;
        saveToStorage();
        renderCurrentBoard();
    };
    
    // 添加排序按钮
    const sortBtn = document.createElement('button');
    sortBtn.className = 'sort-btn';
    sortBtn.dataset.columnId = colConfig.id; // 保存板块 id 以便调试
    // 根据排序状态显示不同图标
    const currentState = columnSortStates[colConfig.id];
    if (currentState === 'asc') {
        sortBtn.innerHTML = '↑';
        sortBtn.title = '升序排列（最旧在顶部），点击切换';
    } else if (currentState === 'desc') {
        sortBtn.innerHTML = '↓';
        sortBtn.title = '降序排列（最新在顶部），点击切换';
    } else {
        sortBtn.innerHTML = '⇅';
        sortBtn.title = '自由排序（卡片可随意拖放改变顺序），点击排序';
    }
    sortBtn.onclick = function(e) {
        e.stopPropagation(); // 阻止事件冒泡
        e.preventDefault(); // 阻止默认行为
        const btnColumnId = this.dataset.columnId;
        console.log('排序按钮被点击了:', btnColumnId, colConfig.id);
        toggleSort(btnColumnId);
    };
    
    // 创建右侧容器，放置固定按钮、排序按钮和统计数量
    const rightContainer = document.createElement('div');
    rightContainer.className = 'column-header-right';
    rightContainer.title = '点击进入板块详情页';
    rightContainer.appendChild(pinBtn);
    rightContainer.appendChild(sortBtn);
    rightContainer.appendChild(countEl);
    
    // 点击右侧容器打开单个板块详情
    rightContainer.onclick = function(e) {
        if (e.target === sortBtn || e.target === pinBtn) {
            return; // 如果点击的是排序按钮或图钉按钮，不触发
        }
        openSingleColumnView(colConfig.id);
    };
    
    headerEl.appendChild(nameEl);
    headerEl.appendChild(rightContainer);
    
    // 根据排序状态排序卡片
    cards = sortCards(cards, colConfig.id);
    
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    cardsContainer.id = colConfig.id + '-cards';
    
    cards.forEach(function(card) {
        cardsContainer.appendChild(createCardElement(card, colConfig.id));
    });
    
    setupDragAndDrop(cardsContainer, colConfig.id);
    
    columnEl.appendChild(headerEl);
    columnEl.appendChild(cardsContainer);
    
    // 只有完成板块不显示添加卡片按钮
    if (!colConfig.isDone) {
        const addBtn = document.createElement('button');
        addBtn.className = 'add-card-btn';
        addBtn.dataset.column = colConfig.id;
        addBtn.textContent = t('addCard');
        addBtn.onclick = function() {
            addCard(colConfig.id);
        };
        columnEl.appendChild(addBtn);
    }
    
    // 添加板块拖放功能
    columnEl.draggable = true;
    
    // 让子元素不阻止拖放（按钮除外）
    const childElements = [headerEl, nameEl, countEl, rightContainer];
    childElements.forEach(el => {
        if (el) {
            el.draggable = false;
            el.ondragstart = (e) => {
                // 如果点击的是按钮，不触发板块拖放
                if (e.target === pinBtn || e.target === sortBtn || e.target.tagName === 'BUTTON') {
                    return;
                }
                e.stopPropagation();
                // 触发板块的拖放
                draggedColumn = columnEl;
                e.dataTransfer.effectAllowed = 'move';
                columnEl.classList.add('dragging');
            };
        }
    });
    
    columnEl.ondragstart = function(e) {
        draggedColumn = columnEl;
        e.dataTransfer.effectAllowed = 'move';
        columnEl.classList.add('dragging');
    };
    
    columnEl.ondragend = function() {
        columnEl.classList.remove('dragging');
        // 清除所有板块的drag-over类
        document.querySelectorAll('.column.drag-over').forEach(el => {
            el.classList.remove('drag-over');
        });
        draggedColumn = null;
    };
    
    columnEl.ondragover = function(e) {
        if (!draggedColumn || draggedColumn === columnEl) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        // 给被覆盖的板块添加红色闪烁虚线边框
        document.querySelectorAll('.column.drag-over').forEach(el => {
            el.classList.remove('drag-over');
        });
        columnEl.classList.add('drag-over');
    };
    
    columnEl.ondragleave = function(e) {
        if (!draggedColumn) return;
        // 检查鼠标是否还在板块内部
        const rect = columnEl.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || 
            e.clientY < rect.top || e.clientY > rect.bottom) {
            columnEl.classList.remove('drag-over');
        }
    };
    
    columnEl.ondrop = function(e) {
        if (!draggedColumn || draggedColumn === columnEl) return;
        e.preventDefault();
        
        columnEl.classList.remove('drag-over');
        
        const currentBoard = data.boards.find(b => b.id === data.currentBoardId);
        if (currentBoard) {
            // 获取两个板块的位置
            const draggedId = draggedColumn.dataset.column;
            const targetId = colConfig.id;
            
            const draggedIndex = currentBoard.columnConfig.findIndex(c => c.id === draggedId);
            const targetIndex = currentBoard.columnConfig.findIndex(c => c.id === targetId);
            
            if (draggedIndex !== -1 && targetIndex !== -1) {
                // 交换两个板块的位置
                const temp = currentBoard.columnConfig[draggedIndex];
                currentBoard.columnConfig[draggedIndex] = currentBoard.columnConfig[targetIndex];
                currentBoard.columnConfig[targetIndex] = temp;
                
                // 同步columns数据
                const columnsData = {};
                currentBoard.columnConfig.forEach(cfg => {
                    columnsData[cfg.id] = currentBoard.columns[cfg.id] || [];
                });
                currentBoard.columns = columnsData;
                
                saveToStorage();
                renderCurrentBoard();
            }
        }
    };
    
    return columnEl;
}

function toggleSort(columnId) {
    console.log('toggleSort 被调用:', columnId);
    console.log('当前 board:', data.currentBoardId);
    console.log('所有 boards:', data.boards);
    
    // 获取当前排序状态，循环顺序：null(自由排序) -> desc(降序) -> asc(升序) -> null(自由排序)
    if (!columnSortStates[columnId]) {
        columnSortStates[columnId] = 'desc'; // 自由排序 -> 降序（最新在顶部）
    } else if (columnSortStates[columnId] === 'desc') {
        columnSortStates[columnId] = 'asc'; // 降序 -> 升序（最旧在顶部）
    } else {
        columnSortStates[columnId] = null; // 升序 -> 自由排序
    }
    
    console.log('新的排序状态:', columnSortStates[columnId]);
    
    // 保存排序后的数据
    const currentBoard = data.boards.find(b => b.id === data.currentBoardId);
    console.log('找到的 board:', currentBoard);
    console.log('columns:', currentBoard ? currentBoard.columns : 'none');
    if (currentBoard && currentBoard.columns && currentBoard.columns[columnId]) {
        const cards = [...currentBoard.columns[columnId]];
        console.log('排序前卡片数:', cards.length);
        const sortedCards = sortCards(cards, columnId);
        currentBoard.columns[columnId] = sortedCards;
        console.log('排序后卡片数:', sortedCards.length);
        saveToStorage();
    }
    
    renderCurrentBoard();
}

function sortCards(cards, columnId) {
    // 复制卡片数组避免修改原数组
    const sortedCards = [...cards];
    
    // 获取排序字段
    let sortField = SORT_FIELDS[columnId] || 'createdAt';
    
    // 如果是自定义板块且没有特殊字段，则默认使用 createdAt
    if (!SORT_FIELDS[columnId]) {
        sortField = 'createdAt';
    }
    
    console.log('排序字段:', sortField, '排序方向:', columnSortStates[columnId]);
    
    sortedCards.sort(function(a, b) {
        const dateA = a[sortField] || '0000-00-00';
        const dateB = b[sortField] || '0000-00-00';
        
        console.log('比较:', dateA, dateB);
        
        // 根据排序状态排序
        if (columnSortStates[columnId] === 'desc') {
            return dateB.localeCompare(dateA); // 倒序
        } else {
            return dateA.localeCompare(dateB); // 正序
        }
    });
    
    return sortedCards;
}

function createCardElement(card, columnId) {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.dataset.cardId = card.id;
    const bgColor = card.color || '#ffffff';
    cardEl.style.backgroundColor = bgColor;
    cardEl.style.color = getContrastColor(bgColor);

    let dateInfo = '';
    if (columnId === '2') {
        if (card.createdAt) {
            dateInfo += '<div class="card-date">创建：' + card.createdAt + '</div>';
        }
    } else if (columnId === '4') {
        dateInfo += '<div class="card-dates-row">';
        if (card.createdAt) {
            dateInfo += '<div class="card-date card-date-left">创建：' + card.createdAt + '</div>';
        }
        if (card.completedAt) {
            dateInfo += '<div class="card-date card-date-right">完成：' + card.completedAt + '</div>';
        }
        dateInfo += '</div>';
    } else {
        if (card.createdAt) {
            dateInfo += '<div class="card-date">创建：' + card.createdAt + '</div>';
        }
        if (card.completedAt) {
            dateInfo += '<div class="card-date">完成：' + card.completedAt + '</div>';
        }
    }

    cardEl.innerHTML = '<div>' + escapeHtml(card.content) + '</div>' + dateInfo;

    cardEl.onclick = function() {
        console.log('卡片点击:', card.id);
        openCardModal(card.id);
    };
    cardEl.setAttribute('draggable', 'true');

    return cardEl;
}

function setupDragAndDrop(container, columnId) {
    let currentDropIndicator = null;

    function removeDropIndicator() {
        if (currentDropIndicator) {
            currentDropIndicator.remove();
            currentDropIndicator = null;
        }
    }

    function showDropIndicator(insertPosition) {
        removeDropIndicator();
        
        const cards = container.querySelectorAll('.card:not(.dragging)');
        currentDropIndicator = document.createElement('div');
        currentDropIndicator.className = 'card-drop-indicator';
        
        if (insertPosition >= cards.length) {
            container.appendChild(currentDropIndicator);
        } else {
            container.insertBefore(currentDropIndicator, cards[insertPosition]);
        }
    }

    container.ondragstart = function(e) {
        if (e.target.classList.contains('card')) {
            e.stopPropagation();
            draggedCard = e.target;
            e.target.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        } else {
            // 空白区域，触发板块拖放
            // 先找到板块元素
            let columnEl = container;
            while (columnEl && !columnEl.classList.contains('column')) {
                columnEl = columnEl.parentElement;
            }
            if (columnEl) {
                e.stopPropagation();
                draggedColumn = columnEl;
                e.dataTransfer.effectAllowed = 'move';
                columnEl.classList.add('dragging');
            }
        }
    };

    container.ondragend = function(e) {
        if (e.target.classList.contains('card')) {
            e.target.classList.remove('dragging');
            draggedCard = null;
        } else {
            // 板块拖放结束
            let columnEl = container;
            while (columnEl && !columnEl.classList.contains('column')) {
                columnEl = columnEl.parentElement;
            }
            if (columnEl) {
                columnEl.classList.remove('dragging');
                draggedColumn = null;
            }
        }
        removeDropIndicator();
    };

    container.ondragover = function(e) {
        e.preventDefault();
        
        // 如果正在拖动板块，不显示卡片拖放提示
        if (draggedColumn) {
            return;
        }
        
        e.dataTransfer.dropEffect = 'move';
        container.classList.add('drag-over');
        
        if (draggedCard) {
            const rect = container.getBoundingClientRect();
            const offsetY = e.clientY - rect.top;
            
            // 计算插入位置
            const cards = container.querySelectorAll('.card:not(.dragging)');
            let insertIndex = cards.length;
            
            for (let i = 0; i < cards.length; i++) {
                const cardRect = cards[i].getBoundingClientRect();
                const cardCenterY = cardRect.top - rect.top + cardRect.height / 2;
                if (offsetY < cardCenterY) {
                    insertIndex = i;
                    break;
                }
            }
            
            showDropIndicator(insertIndex);
        }
    };

    container.ondragleave = function(e) {
        // 如果正在拖动板块，不处理卡片拖放的离开
        if (draggedColumn) {
            return;
        }
        
        if (!container.contains(e.relatedTarget)) {
            container.classList.remove('drag-over');
            removeDropIndicator();
        }
    };

    container.ondrop = function(e) {
        e.preventDefault();
        
        // 如果正在拖动板块，不处理卡片拖放
        if (draggedColumn) {
            return;
        }
        
        container.classList.remove('drag-over');
        removeDropIndicator();
        
        if (draggedCard) {
            const cardId = draggedCard.dataset.cardId;
            const rect = container.getBoundingClientRect();
            const offsetY = e.clientY - rect.top;
            
            // 计算插入位置
            const cards = container.querySelectorAll('.card:not(.dragging)');
            let insertIndex = cards.length;
            
            for (let i = 0; i < cards.length; i++) {
                const cardRect = cards[i].getBoundingClientRect();
                const cardCenterY = cardRect.top - rect.top + cardRect.height / 2;
                if (offsetY < cardCenterY) {
                    insertIndex = i;
                    break;
                }
            }
            
            console.log('卡片拖放:', cardId, '->', columnId, '插入位置:', insertIndex);
            moveCard(cardId, columnId, insertIndex);
        }
    };
}

function moveCard(cardId, targetColumnId, insertIndex = -1) {
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return;

    let cardToMove = null;
    let sourceColumnId = null;
    let sourceCards = null;
    let sourceIndex = -1;

    // 先查找卡片但不删除
    currentBoard.columnConfig.forEach(function(colConfig) {
        const cards = currentBoard.columns[colConfig.id] || [];
        const index = cards.findIndex(function(c) { return c.id === cardId; });
        if (index !== -1) {
            cardToMove = cards[index];
            sourceColumnId = colConfig.id;
            sourceCards = cards;
            sourceIndex = index;
        }
    });

    if (cardToMove && sourceCards) {
        // 获取源和目标板块的配置
        const sourceColumnConfig = currentBoard.columnConfig.find(c => c.id === sourceColumnId);
        const targetColumnConfig = currentBoard.columnConfig.find(c => c.id === targetColumnId);
        
        // 检查：如果目标板块是模板模式，拒绝移动
        if (targetColumnConfig && !targetColumnConfig.isPinned) {
            alert('模板模式下该板块拒绝其它卡片，请切换为编辑模式后移动。');
            return;
        }
        
        // 处理模板模式的特殊逻辑
        if (sourceColumnConfig && !sourceColumnConfig.isPinned) {
            // 模板模式下：复制卡片而不是移动，保留原卡片在原板块
            const newCard = {
                id: generateId(),
                content: cardToMove.content,
                color: cardToMove.color,
                createdAt: getTodayString(),
                completedAt: null
            };
            
            // 如果目标板块是已完成板块，设置完成日期
            if (targetColumnConfig && targetColumnConfig.isDone) {
                newCard.completedAt = getTodayString();
            }
            
            // 不修改原卡片，只复制并添加到目标板块
            const targetCards = currentBoard.columns[targetColumnId] || [];
            if (insertIndex === -1 || insertIndex >= targetCards.length) {
                targetCards.push(newCard);
            } else {
                targetCards.splice(insertIndex, 0, newCard);
            }
            currentBoard.columns[targetColumnId] = targetCards;
        } else {
            // 编辑模式：正常移动
            // 先从原位置删除
            sourceCards.splice(sourceIndex, 1);
            
            // 更新日期（只有跨板块移动时才更新）
            if (sourceColumnId !== targetColumnId) {
                if (targetColumnConfig && targetColumnConfig.isDone) {
                    // 只有之前未完成的卡片才算完成
                    if (!cardToMove.completedAt) {
                        cardToMove.completedAt = getTodayString();
                    }
                } else {
                    cardToMove.completedAt = null;
                }
            }

            const targetCards = currentBoard.columns[targetColumnId] || [];
            if (insertIndex === -1 || insertIndex >= targetCards.length) {
                targetCards.push(cardToMove);
            } else {
                targetCards.splice(insertIndex, 0, cardToMove);
            }
            currentBoard.columns[targetColumnId] = targetCards;
        }
        
        saveToStorage();
        renderBoardList();  // 更新任务列表统计
        renderCurrentBoard();
        // 检查并更新徽章（放在最后，确保数据已保存并渲染完成）
        checkAndUpdateBadges();
    }
}

function renderView() {
    const boardView = document.getElementById('board-view');
    const weekView = document.getElementById('week-view');
    const monthView = document.getElementById('month-view');
    const yearView = document.getElementById('year-view');
    const dayView = document.getElementById('day-view');
    const completedView = document.getElementById('completed-boards-view');
    const discardedView = document.getElementById('discarded-boards-view');

    if (boardView) boardView.classList.add('hidden');
    if (weekView) weekView.classList.add('hidden');
    if (monthView) monthView.classList.add('hidden');
    if (yearView) yearView.classList.add('hidden');
    if (dayView) dayView.classList.add('hidden');
    if (completedView) completedView.classList.add('hidden');
    if (discardedView) discardedView.classList.add('hidden');

    // 更新视图选择标签
    const viewLabels = {
        'board': '看板视图',
        'day': '日视图',
        'week': '周视图',
        'month': '月视图',
        'year': '年视图'
    };
    const viewCurrentLabel = document.getElementById('view-current-label');
    if (viewCurrentLabel) {
        viewCurrentLabel.textContent = viewLabels[data.currentView] || '看板视图';
    }

    if (data.currentView === 'board') {
        if (boardView) boardView.classList.remove('hidden');
    } else if (data.currentView === 'day') {
        if (dayView) {
            dayView.classList.remove('hidden');
            renderDayView();
        }
    } else if (data.currentView === 'week') {
        if (weekView) {
            weekView.classList.remove('hidden');
            renderWeekView();
        }
    } else if (data.currentView === 'month') {
        if (monthView) {
            monthView.classList.remove('hidden');
            renderMonthView();
        }
    } else if (data.currentView === 'year') {
        if (yearView) {
            yearView.classList.remove('hidden');
            renderYearView();
        }
    }
}

function renderWeekView() {
    const stats = getWeekStats();
    const statsContainer = document.getElementById('week-stats');
    const dateDisplay = document.getElementById('week-date-display');
    if (!statsContainer || !dateDisplay) return;
    
    // 更新日期显示
    const weekStart = new Date(weekViewDate);
    const dayOfWeek = weekStart.getDay();
    weekStart.setDate(weekStart.getDate() - dayOfWeek);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    const weekNum = getWeekNumber(weekStart);
    dateDisplay.textContent = `${weekStart.getFullYear()}年第${weekNum}周`;

    let html = '<div class="stats-summary">' +
        '<div class="stat-card todo"><h4 data-i18n="todo">' + t('todo') + '</h4><div class="stat-number ' + (stats.totalTodo === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTodo + '</div></div>' +
        '<div class="stat-card template"><h4 data-i18n="template">' + t('template') + '</h4><div class="stat-number ' + (stats.totalTemplate === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTemplate + '</div></div>' +
        '<div class="stat-card urgent"><h4 data-i18n="urgent">' + t('urgent') + '</h4><div class="stat-number ' + (stats.totalEmergence === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalEmergence + '</div></div>' +
        '<div class="stat-card done"><h4 data-i18n="done">' + t('done') + '</h4><div class="stat-number ' + (stats.totalDone === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalDone + '</div></div>' +
        '</div>' +
        '<div class="week-days-list">';

    stats.days.forEach(function(day) {
        html += `<div class="day-item" onclick="viewDayDetails('${day.date}', 'todo')">
            <div class="day-header">${day.label}</div>
            <div class="day-stats">
                <div class="day-stat"><span class="label">新建：</span><span class="value ${day.created === 0 ? 'value-zero' : 'value-non-zero'}">${day.created}</span></div>
                <div class="day-stat"><span class="label">完成：</span><span class="value ${day.completed === 0 ? 'value-zero' : 'value-non-zero'}">${day.completed}</span></div>
            </div></div>`;
    });

    html += '</div>';
    statsContainer.innerHTML = html;
}

function renderMonthView() {
    const stats = getMonthStats();
    const statsContainer = document.getElementById('month-stats');
    const dateDisplay = document.getElementById('month-date-display');
    if (!statsContainer || !dateDisplay) return;
    
    // 更新日期显示
    dateDisplay.textContent = `${monthViewDate.getFullYear()}年${monthViewDate.getMonth() + 1}月`;

    let html = '<div class="stats-summary">' +
        '<div class="stat-card todo"><h4 data-i18n="todo">' + t('todo') + '</h4><div class="stat-number ' + (stats.totalTodo === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTodo + '</div></div>' +
        '<div class="stat-card template"><h4 data-i18n="template">' + t('template') + '</h4><div class="stat-number ' + (stats.totalTemplate === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTemplate + '</div></div>' +
        '<div class="stat-card urgent"><h4 data-i18n="urgent">' + t('urgent') + '</h4><div class="stat-number ' + (stats.totalEmergence === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalEmergence + '</div></div>' +
        '<div class="stat-card done"><h4 data-i18n="done">' + t('done') + '</h4><div class="stat-number ' + (stats.totalDone === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalDone + '</div></div>' +
        '</div>' +
        '<div class="weeks-list">';

    stats.weeks.forEach(function(week, index) {
        html += `<div class="week-item" onclick="viewMonthDetails(${index})">
            <div class="week-header">${week.label}</div>
            <div class="week-stats-detail">
                <div class="week-stat"><span class="label">新建：</span><span class="value ${week.created === 0 ? 'value-zero' : 'value-non-zero'}">${week.created}</span></div>
                <div class="week-stat"><span class="label">完成：</span><span class="value ${week.completed === 0 ? 'value-zero' : 'value-non-zero'}">${week.completed}</span></div>
            </div></div>`;
    });

    html += '</div>';
    statsContainer.innerHTML = html;
}

function renderYearView() {
    const stats = getYearStats();
    const statsContainer = document.getElementById('year-stats');
    const dateDisplay = document.getElementById('year-date-display');
    if (!statsContainer || !dateDisplay) return;
    
    // 更新日期显示
    dateDisplay.textContent = `${yearViewDate.getFullYear()}年`;

    let html = '<div class="stats-summary">' +
        '<div class="stat-card todo"><h4 data-i18n="todo">' + t('todo') + '</h4><div class="stat-number ' + (stats.totalTodo === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTodo + '</div></div>' +
        '<div class="stat-card template"><h4 data-i18n="template">' + t('template') + '</h4><div class="stat-number ' + (stats.totalTemplate === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTemplate + '</div></div>' +
        '<div class="stat-card urgent"><h4 data-i18n="urgent">' + t('urgent') + '</h4><div class="stat-number ' + (stats.totalEmergence === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalEmergence + '</div></div>' +
        '<div class="stat-card done"><h4 data-i18n="done">' + t('done') + '</h4><div class="stat-number ' + (stats.totalDone === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalDone + '</div></div>' +
        '</div>' +
        '<div class="months-list">';

    stats.months.forEach(function(month, index) {
        html += `<div class="month-item" onclick="viewMonthDetails(${index})">
            <div class="month-header">${month.label}</div>
            <div class="month-stats-detail">
                <div class="month-stat"><span class="label">新建：</span><span class="value ${month.created === 0 ? 'value-zero' : 'value-non-zero'}">${month.created}</span></div>
                <div class="month-stat"><span class="label">完成：</span><span class="value ${month.completed === 0 ? 'value-zero' : 'value-non-zero'}">${month.completed}</span></div>
            </div></div>`;
    });

    html += '</div>';
    statsContainer.innerHTML = html;
}

function getWeekStats() {
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return { totalTodo: 0, totalTemplate:0, totalEmergence:0, totalDone: 0, days: [] };

    let totalTodo = 0, totalTemplate = 0, totalEmergence = 0, totalDone = 0;
    currentBoard.columnConfig.forEach(function(colConfig, index) {
        const count = (currentBoard.columns[colConfig.id] || []).length;
        if (index === 0) totalTodo = count;
        else if (index === 1) totalTemplate = count;
        else if (index === 2) totalEmergence = count;
        else if (index === 3) totalDone = count;
    });

    const days = [];
    const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    
    // 找到周的开始
    const weekStart = new Date(weekViewDate);
    const dayOfWeek = weekStart.getDay();
    weekStart.setDate(weekStart.getDate() - dayOfWeek);

    for (let i = 0; i < 7; i++) {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        
        let created = 0;
        let completed = 0;

        currentBoard.columnConfig.forEach(function(colConfig) {
            const cards = currentBoard.columns[colConfig.id] || [];
            cards.forEach(function(card) {
                if (card.createdAt === dateStr) created++;
                if (card.completedAt === dateStr) completed++;
            });
        });

        days.push({
            label: dayNames[date.getDay()] + ' (' + (date.getMonth() + 1) + '/' + date.getDate() + ')',
            date: dateStr,
            created: created,
            completed: completed
        });
    }

    return { totalTodo, totalTemplate, totalEmergence, totalDone, days };
}

function getMonthStats() {
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return { totalTodo: 0, totalTemplate:0, totalEmergence:0, totalDone: 0, weeks: [] };

    let totalTodo = 0, totalTemplate = 0, totalEmergence = 0, totalDone = 0;
    currentBoard.columnConfig.forEach(function(colConfig, index) {
        const count = (currentBoard.columns[colConfig.id] || []).length;
        if (index === 0) totalTodo = count;
        else if (index === 1) totalTemplate = count;
        else if (index === 2) totalEmergence = count;
        else if (index === 3) totalDone = count;
    });

    const weeks = [];
    const year = monthViewDate.getFullYear();
    const month = monthViewDate.getMonth();
    
    // 找到当月的第一天
    const firstDay = new Date(year, month, 1);
    const firstDayOfWeek = firstDay.getDay();
    const weekStart = new Date(year, month, 1 - firstDayOfWeek);
    
    // 生成6周
    for (let i = 0; i < 6; i++) {
        const currentWeekStart = new Date(weekStart);
        currentWeekStart.setDate(weekStart.getDate() + (i * 7));
        const currentWeekEnd = new Date(currentWeekStart);
        currentWeekEnd.setDate(currentWeekStart.getDate() + 6);

        let created = 0;
        let completed = 0;

        currentBoard.columnConfig.forEach(function(colConfig) {
            const cards = currentBoard.columns[colConfig.id] || [];
            cards.forEach(function(card) {
                if (card.createdAt) {
                    const cardDate = new Date(card.createdAt);
                    if (cardDate >= currentWeekStart && cardDate <= currentWeekEnd) created++;
                }
                if (card.completedAt) {
                    const cardDate = new Date(card.completedAt);
                    if (cardDate >= currentWeekStart && cardDate <= currentWeekEnd) completed++;
                }
            });
        });

        weeks.push({
            label: (i + 1) + '周 (' + 
                (currentWeekStart.getMonth() + 1) + '/' + currentWeekStart.getDate() + ' - ' + 
                (currentWeekEnd.getMonth() + 1) + '/' + currentWeekEnd.getDate() + ')',
            created: created,
            completed: completed
        });
    }

    return { totalTodo, totalTemplate, totalEmergence, totalDone, weeks };
}

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(( (d - yearStart) / 86400000 + 1) / 7);
}

function viewMonthDetails(monthIndex) {
    console.log('查看月详情:', monthIndex);
    data.currentView = 'board';
    saveToStorage();
    renderView();
}

function getYearStats() {
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return { totalTodo: 0, totalTemplate:0, totalEmergence:0, totalDone: 0, months: [] };

    let totalTodo = 0, totalTemplate = 0, totalEmergence = 0, totalDone = 0;
    currentBoard.columnConfig.forEach(function(colConfig, index) {
        const count = (currentBoard.columns[colConfig.id] || []).length;
        if (index === 0) totalTodo = count;
        else if (index === 1) totalTemplate = count;
        else if (index === 2) totalEmergence = count;
        else if (index === 3) totalDone = count;
    });

    const months = [];
    const today = new Date();
    const currentYear = today.getFullYear();
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', 
                       '七月', '八月', '九月', '十月', '十一月', '十二月'];

    for (let i = 0; i < 12; i++) {
        let created = 0;
        let completed = 0;

        currentBoard.columnConfig.forEach(function(colConfig) {
            const cards = currentBoard.columns[colConfig.id] || [];
            cards.forEach(function(card) {
                if (card.createdAt) {
                    const cardDate = new Date(card.createdAt);
                    if (cardDate.getFullYear() === currentYear && cardDate.getMonth() === i) {
                        created++;
                    }
                }
                if (card.completedAt) {
                    const cardDate = new Date(card.completedAt);
                    if (cardDate.getFullYear() === currentYear && cardDate.getMonth() === i) {
                        completed++;
                    }
                }
            });
        });

        months.push({
            label: monthNames[i] + ' (' + (i + 1) + '月)',
            month: i,
            created: created,
            completed: completed
        });
    }

    return { totalTodo, totalTemplate, totalEmergence, totalDone, months };
}

// 视图下拉菜单控制
function toggleViewDropdown() {
    const menu = document.getElementById('view-dropdown-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
    closeColumnDropdown();
}

function closeViewDropdown() {
    const menu = document.getElementById('view-dropdown-menu');
    if (menu) {
        menu.classList.add('hidden');
    }
}

// 板块下拉菜单控制
function toggleColumnDropdown() {
    // 渲染板块选项
    renderColumnDropdownOptions();
    
    const menu = document.getElementById('column-dropdown-menu');
    const btn = document.getElementById('column-dropdown-btn');
    if (menu && btn) {
        if (menu.classList.contains('hidden')) {
            // 打开菜单 - 设置位置
            const rect = btn.getBoundingClientRect();
            menu.style.position = 'fixed';
            menu.style.top = (rect.bottom + 5) + 'px';
            menu.style.left = rect.left + 'px';
            menu.style.minWidth = rect.width + 'px';
            menu.style.right = 'auto';
            menu.classList.remove('hidden');
        } else {
            // 关闭菜单
            menu.classList.add('hidden');
        }
    }
    closeViewDropdown();
}

function closeColumnDropdown() {
    const menu = document.getElementById('column-dropdown-menu');
    if (menu) {
        menu.classList.add('hidden');
        menu.style.position = '';
        menu.style.top = '';
        menu.style.left = '';
        menu.style.minWidth = '';
        menu.style.right = '';
    }
}

// 渲染板块下拉菜单选项
function renderColumnDropdownOptions() {
    const menu = document.getElementById('column-dropdown-menu');
    if (!menu) return;
    
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return;
    
    menu.innerHTML = '';
    currentBoard.columnConfig.forEach(function(colConfig) {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.textContent = colConfig.name;
        item.dataset.columnId = colConfig.id;
        item.onclick = function(e) {
            e.stopPropagation();
            console.log('板块选择:', colConfig.name);
            dayViewCurrentColumn = colConfig.id;
            
            const labelEl = document.getElementById('column-current-label');
            if (labelEl) labelEl.textContent = colConfig.name;
            
            closeColumnDropdown();
            renderDayView();
        };
        menu.appendChild(item);
    });
}

// 渲染日视图
function renderDayView() {
    const stats = getDayStats();
    const statsContainer = document.getElementById('day-stats');
    const dateDisplay = document.getElementById('day-date-display');
    if (!statsContainer || !dateDisplay) return;
    
    // 更新日期显示
    dateDisplay.textContent = `${dayViewDate.getFullYear()}年${dayViewDate.getMonth() + 1}月`;
    
    // 初始化板块标签（如果需要）
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (currentBoard) {
        const defaultCol = currentBoard.columnConfig.find(function(c) { return c.id === dayViewCurrentColumn; });
        if (defaultCol) {
            const labelEl = document.getElementById('column-current-label');
            if (labelEl) labelEl.textContent = defaultCol.name;
        }
    }
    
    // 日历头部 - 星期
    const dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    let html = '<div class="calendar-header">';
    dayNames.forEach(function(name) {
        html += `<div class="calendar-day-name">${name}</div>`;
    });
    html += '</div>';
    
    // 日历网格
    html += '<div class="day-grid">';
    stats.forEach(function(day) {
        const countClass = day.count === 0 ? 'value-zero' : 'value-non-zero';
        const clickHandler = `onclick="viewDayDetails('${day.date}', '${dayViewCurrentColumn}')"`;
        html += `<div class="day-cell ${day.otherMonth ? 'other-month' : ''} ${day.isToday ? 'today' : ''}" ${clickHandler}>
            <div class="day-cell-date">${day.label}</div>
            <div class="day-cell-count ${countClass}">${day.count}</div>
            ${day.isToday ? '<div class="today-bottom-line"></div>' : ''}
        </div>`;
    });
    html += '</div>';
    
    statsContainer.innerHTML = html;
}

// 获取日视图统计数据（完整日历）
function getDayStats() {
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return [];
    
    const days = [];
    const today = new Date();
    
    const year = dayViewDate.getFullYear();
    const month = dayViewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();
    
    // 确定排序字段
    const sortField = SORT_FIELDS[dayViewCurrentColumn] || 'createdAt';
    
    // 添加上月的最后几天
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        const day = prevMonthLastDay - i;
        const date = new Date(year, month - 1, day);
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        days.push({
            label: `${date.getMonth() + 1}/${day}`,
            date: dateStr,
            count: countCardsOnDate(currentBoard, dateStr, sortField),
            otherMonth: true,
            isToday: isSameDay(date, today)
        });
    }
    
    // 添加当月的天数
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(year, month, i);
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        
        days.push({
            label: `${month + 1}/${i}`,
            date: dateStr,
            count: countCardsOnDate(currentBoard, dateStr, sortField),
            otherMonth: false,
            isToday: isSameDay(date, today)
        });
    }
    
    // 填充下个月的天数以完成网格
    const remainingDays = 42 - days.length; // 6行x7列
    for (let i = 1; i <= remainingDays; i++) {
        const date = new Date(year, month + 1, i);
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        
        days.push({
            label: `${date.getMonth() + 1}/${i}`,
            date: dateStr,
            count: countCardsOnDate(currentBoard, dateStr, sortField),
            otherMonth: true,
            isToday: isSameDay(date, today)
        });
    }
    
    return days;
}

// 统计指定日期的卡片数量
function countCardsOnDate(board, dateStr, sortField) {
    let count = 0;
    const cards = board.columns[dayViewCurrentColumn] || [];
    cards.forEach(function(card) {
        if (card[sortField] === dateStr) {
            count++;
        }
    });
    return count;
}

// 判断两天是否是同一天
function isSameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
}

// 查看日详情 - 跳转到看板视图
function viewDayDetails(dateStr, columnId) {
    console.log('查看日详情:', dateStr, columnId);
    data.currentView = 'board';
    saveToStorage();
    renderView();
}

function openBoardModal(isEdit) {
    const modal = document.getElementById('board-modal');
    const titleEl = document.getElementById('board-modal-title');
    const input = document.getElementById('board-name-input');

    if (!modal) return;
    
    if (isEdit && currentLongPressBoardId) {
        const board = data.boards.find(function(b) { return b.id === currentLongPressBoardId; });
        titleEl.textContent = '修改看板名称';
        input.value = board ? board.name : '';
    } else {
        titleEl.textContent = '新建任务';
        input.value = '';
    }

    modal.classList.add('show');
    input.focus();
}

function openLongPressModal() {
    const modal = document.getElementById('long-press-modal');
    const moveButtonsContainer = document.getElementById('move-board-buttons');
    if (!modal || !moveButtonsContainer) return;
    
    // 清空并重建移动按钮
    moveButtonsContainer.innerHTML = '';
    
    // 只查找正常看板
    let board = data.boards.find(b => b.id === currentLongPressBoardId);
    if (!board) {
        console.error('未找到正常看板:', currentLongPressBoardId);
        return;
    }
    
    // 创建按钮组
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'modal-button-group';
    
    // 添加置顶按钮
    const toTopBtn = document.createElement('button');
    toTopBtn.className = 'btn btn-secondary';
    toTopBtn.textContent = '📌 置顶';
    toTopBtn.onclick = function() {
        pinBoardToTop(currentLongPressBoardId);
        closeModals();
    };
    buttonGroup.appendChild(toTopBtn);
    
    // 显示放入完成（如果完成）、放入舍弃
    if (isBoardFullyCompleted(board)) {
        const toCompletedBtn = document.createElement('button');
        toCompletedBtn.className = 'btn btn-secondary';
        toCompletedBtn.textContent = '✅ 放入完成';
        toCompletedBtn.onclick = function() {
            moveBoardToList(currentLongPressBoardId, 'normal', 'completed');
            closeModals();
        };
        buttonGroup.appendChild(toCompletedBtn);
    }
    
    const toDiscardedBtn = document.createElement('button');
    toDiscardedBtn.className = 'btn btn-secondary';
    toDiscardedBtn.textContent = '🗑️ 放入舍弃';
    toDiscardedBtn.onclick = function() {
        moveBoardToList(currentLongPressBoardId, 'normal', 'discarded');
        closeModals();
    };
    buttonGroup.appendChild(toDiscardedBtn);
    
    moveButtonsContainer.appendChild(buttonGroup);
    modal.classList.add('show');
}

function pinBoardToTop(boardId) {
    // 找到看板在数组中的索引
    const boardIndex = data.boards.findIndex(b => b.id === boardId);
    if (boardIndex === -1) {
        console.error('未找到看板:', boardId);
        return;
    }
    
    // 移除看板
    const [board] = data.boards.splice(boardIndex, 1);
    
    // 插入到开头
    data.boards.unshift(board);
    
    saveToStorage();
    renderAll();
}



function saveBoard() {
    const input = document.getElementById('board-name-input');
    const name = input.value.trim();

    if (!name) {
        alert('请输入看板名称');
        return;
    }

    if (currentLongPressBoardId) {
        // 从所有列表中查找
        let board = data.boards.find(function(b) { return b.id === currentLongPressBoardId; });
        if (!board) board = data.completedBoards.find(function(b) { return b.id === currentLongPressBoardId; });
        if (!board) board = data.discardedBoards.find(function(b) { return b.id === currentLongPressBoardId; });
        
        if (board) {
            board.name = name;
        }
    } else {
        const newBoard = {
            id: generateId(),
            name: name,
            columnConfig: JSON.parse(JSON.stringify(DEFAULT_COLUMNS)),
            columns: {},
            parentFolderId: null // 默认在根目录
        };
        newBoard.columnConfig.forEach(function(col) {
            newBoard.columns[col.id] = [];
        });
        data.boards.push(newBoard);
        
        // 添加到boardItems
        const maxOrder = Math.max(...data.boardItems.map(i => i.order), -1);
        data.boardItems.push({
            type: 'board',
            id: newBoard.id,
            order: maxOrder + 1,
            parentFolderId: null
        });
        
        data.currentBoardId = newBoard.id;
        data.currentListType = 'normal';
    }

    saveToStorage();
    renderAll();
    closeModals();
}

function deleteCurrentBoard() {
    if (!currentLongPressBoardId) return;
    
    // 先检查是否还有任何看板
    const totalBoards = data.boards.length + data.completedBoards.length + data.discardedBoards.length;
    if (totalBoards <= 1) {
        alert('至少需要保留一个看板');
        return;
    }

    if (confirm('确定要删除这个看板吗？所有卡片都会被删除。')) {
        // 从所有列表删除
        data.boards = data.boards.filter(function(board) { return board.id !== currentLongPressBoardId; });
        data.completedBoards = data.completedBoards.filter(function(board) { return board.id !== currentLongPressBoardId; });
        data.discardedBoards = data.discardedBoards.filter(function(board) { return board.id !== currentLongPressBoardId; });
        
        // 从boardItems中删除
        data.boardItems = data.boardItems.filter(item => item.id !== currentLongPressBoardId);
        
        // 更新当前看板
        if (data.currentBoardId === currentLongPressBoardId) {
            if (data.boards.length > 0) {
                data.currentBoardId = data.boards[0].id;
                data.currentListType = 'normal';
            } else if (data.completedBoards.length > 0) {
                data.currentBoardId = data.completedBoards[0].id;
                data.currentListType = 'completed';
            } else {
                data.currentBoardId = data.discardedBoards[0].id;
                data.currentListType = 'discarded';
            }
        }
        saveToStorage();
        renderAll();
        closeModals();
    }
}

function addCard(columnId) {
    openCardModal(null, columnId);
}

function openCardModal(cardId, columnId = null) {
    const modal = document.getElementById('card-modal');
    const textarea = document.getElementById('card-content-input');
    const createdDateEl = document.getElementById('card-created-date');
    const completedDateEl = document.getElementById('card-completed-date');
    const deleteBtn = document.getElementById('delete-card-btn');
    const titleEl = document.getElementById('card-modal-title');

    if (!modal) return;
    
    // 先应用翻译，确保所有文本都是正确的语言
    applyTranslations();
    
    if (cardId) {
        // 编辑现有卡片
        let card = null;
        const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
        if (currentBoard) {
            for (let i = 0; i < currentBoard.columnConfig.length; i++) {
                const colConfig = currentBoard.columnConfig[i];
                const cards = currentBoard.columns[colConfig.id] || [];
                const found = cards.find(function(c) { return c.id === cardId; });
                if (found) {
                    card = found;
                    break;
                }
            }
        }

        if (card) {
            currentEditingCard = { cardId: cardId, card: card, isNew: false, columnId: null };
            currentSelectedColor = card.color || '#ffffff';
            textarea.value = card.content;
            
            if (createdDateEl) createdDateEl.textContent = card.createdAt || '-';
            if (completedDateEl) completedDateEl.textContent = card.completedAt || '-';
            
            if (deleteBtn) deleteBtn.style.display = 'inline-block';
            if (titleEl) titleEl.textContent = t('editCard');

            renderColorOptions();

            modal.classList.add('show');
            textarea.focus();
        }
    } else if (columnId) {
        // 新建卡片
        currentEditingCard = { cardId: null, card: null, isNew: true, columnId: columnId };
        currentSelectedColor = '#ffffff';
        textarea.value = '';
        
        if (createdDateEl) createdDateEl.textContent = getTodayString();
        if (completedDateEl) completedDateEl.textContent = '-';
        
        if (deleteBtn) deleteBtn.style.display = 'none';
        if (titleEl) titleEl.textContent = t('addCard');

        renderColorOptions();

        modal.classList.add('show');
        textarea.focus();
    }
}

function renderColorOptions() {
    const container = document.getElementById('color-options');
    if (!container) return;
    container.innerHTML = '';

    availableColors.forEach(function(color) {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-option';
        colorDiv.style.backgroundColor = color;
        colorDiv.dataset.color = color;
        
        if (color === currentSelectedColor) {
            colorDiv.classList.add('selected');
        }

        colorDiv.onclick = function() {
            selectColor(color);
        };
        container.appendChild(colorDiv);
    });
}

function selectColor(color) {
    currentSelectedColor = color;
    renderColorOptions();
}

function addCustomColor() {
    const colorPicker = document.getElementById('custom-color-picker');
    if (!colorPicker) return;
    const color = colorPicker.value;

    if (!availableColors.includes(color)) {
        availableColors.push(color);
        saveColorsToStorage();
        renderColorOptions();
    }
}

function saveCard() {
    const textarea = document.getElementById('card-content-input');
    if (!textarea) return;
    const content = textarea.value.trim();

    if (!content) {
        alert('请输入卡片内容');
        return;
    }

    if (currentEditingCard) {
        if (currentEditingCard.isNew) {
            // 保存新建卡片
            const columnId = currentEditingCard.columnId;
            // 从所有列表查找当前看板
            let currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
            if (!currentBoard) {
                currentBoard = data.completedBoards.find(function(b) { return b.id === data.currentBoardId; });
            }
            if (!currentBoard) {
                currentBoard = data.discardedBoards.find(function(b) { return b.id === data.currentBoardId; });
            }
            if (currentBoard) {
                const newCard = {
                    id: generateId(),
                    content: content.trim(),
                    color: currentSelectedColor,
                    createdAt: getTodayString(),
                    completedAt: null
                };
                
                const colConfig = currentBoard.columnConfig.find(function(c) { return c.id === columnId; });
                if (colConfig && colConfig.isDone) {
                    newCard.completedAt = getTodayString();
                }
                
                if (!currentBoard.columns[columnId]) {
                    currentBoard.columns[columnId] = [];
                }
                currentBoard.columns[columnId].push(newCard);
                
                saveToStorage();
                renderBoardList();  // 更新统计
                renderCurrentBoard();
                // 检查并更新徽章
                checkAndUpdateBadges();
                
                // 如果是在单个板块视图中，重新打开视图来更新显示
                if (singleColumnView.active) {
                    openSingleColumnView(columnId);
                }
            }
        } else {
            // 保存编辑的卡片
            currentEditingCard.card.content = content;
            currentEditingCard.card.color = currentSelectedColor;
            saveToStorage();
            renderCurrentBoard();
            
            // 如果是在单个板块视图中，重新打开视图来更新显示
            if (singleColumnView.active) {
                openSingleColumnView(singleColumnView.columnId);
            }
        }
        closeModals();
    }
}

function deleteCard() {
    if (currentEditingCard && !currentEditingCard.isNew && confirm('确定要删除这个卡片吗？')) {
        const cardId = currentEditingCard.cardId;
        // 从所有列表查找当前看板
        let currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
        if (!currentBoard) {
            currentBoard = data.completedBoards.find(function(b) { return b.id === data.currentBoardId; });
        }
        if (!currentBoard) {
            currentBoard = data.discardedBoards.find(function(b) { return b.id === data.currentBoardId; });
        }
        if (currentBoard) {
            for (let i = 0; i < currentBoard.columnConfig.length; i++) {
                const colConfig = currentBoard.columnConfig[i];
                if (currentBoard.columns[colConfig.id]) {
                    currentBoard.columns[colConfig.id] = currentBoard.columns[colConfig.id].filter(function(card) { 
                        return card.id !== cardId; 
                    });
                }
            }
            saveToStorage();
            renderBoardList();  // 更新统计
            renderCurrentBoard();
        }
        closeModals();
        
        // 如果是在单个板块视图中，重新打开视图来更新显示
        if (singleColumnView.active) {
            openSingleColumnView(singleColumnView.columnId);
        }
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============ 板块管理函数 ============

function openColumnModal(columnId) {
    const modal = document.getElementById('column-modal');
    const titleEl = document.getElementById('column-modal-title');
    const input = document.getElementById('column-name-input');
    const deleteBtn = document.getElementById('delete-column-btn');

    if (!modal) return;
    
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return;
    
    const colConfig = currentBoard.columnConfig.find(function(c) { return c.id === columnId; });
    if (!colConfig) return;
    
    currentEditingColumn = columnId;
    titleEl.textContent = '编辑板块';
    input.value = colConfig.name;
    
    // 允许删除所有板块
    deleteBtn.style.display = 'inline-block';
    
    modal.classList.add('show');
    input.focus();
}

function saveColumn() {
    const input = document.getElementById('column-name-input');
    const name = input.value.trim();

    if (!name) {
        alert('请输入板块名称');
        return;
    }

    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard || !currentEditingColumn) return;
    
    const colConfig = currentBoard.columnConfig.find(function(c) { return c.id === currentEditingColumn; });
    if (colConfig) {
        colConfig.name = name;
    }

    saveToStorage();
    renderCurrentBoard();
    closeModals();
}

function deleteColumn() {
    if (!currentEditingColumn) return;
    
    if (confirm('确定要删除这个板块吗？板块内的所有卡片都会被删除。')) {
        const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
        if (!currentBoard) return;
        
        // 记录删除位置
        const deleteIndex = currentBoard.columnConfig.findIndex(c => c.id === currentEditingColumn);
        
        // 删除配置和数据
        currentBoard.columnConfig = currentBoard.columnConfig.filter(function(c) { 
            return c.id !== currentEditingColumn; 
        });
        delete currentBoard.columns[currentEditingColumn];
        
        // 保存删除位置标记
        if (!currentBoard.deletedColumnPositions) {
            currentBoard.deletedColumnPositions = [];
        }
        currentBoard.deletedColumnPositions.push(deleteIndex);
        
        saveToStorage();
        renderBoardList();  // 更新统计
        renderCurrentBoard();
        closeModals();
    }
}

function addNewColumn() {
    const name = prompt('请输入新板块名称：');
    if (!name || !name.trim()) return;
    
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return;
    
    const newId = 'col_' + generateId();
    const newConfig = {
        id: newId,
        name: name.trim(),
        isDone: false,
        isPinned: true
    };
    
    currentBoard.columnConfig.push(newConfig);
    currentBoard.columns[newId] = [];
    
    saveToStorage();
    renderCurrentBoard();
}

function addNewColumnAtPosition(position) {
    const name = prompt('请输入新板块名称：');
    if (!name || !name.trim()) return;
    
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return;
    
    const newId = 'col_' + generateId();
    const newConfig = {
        id: newId,
        name: name.trim(),
        isDone: false,
        isPinned: true
    };
    
    // 计算真实的插入位置（跳过其他占位符）
    let actualInsertIndex = 0;
    let displayIndex = 0;
    const deletedPositions = currentBoard.deletedColumnPositions || [];
    
    while (displayIndex < position && actualInsertIndex < currentBoard.columnConfig.length) {
        if (deletedPositions.includes(displayIndex)) {
            displayIndex++;
        } else {
            actualInsertIndex++;
            displayIndex++;
        }
    }
    
    // 插入新板块
    currentBoard.columnConfig.splice(actualInsertIndex, 0, newConfig);
    currentBoard.columns[newId] = [];
    
    // 移除这个位置的删除标记
    if (currentBoard.deletedColumnPositions) {
        currentBoard.deletedColumnPositions = currentBoard.deletedColumnPositions.filter(p => p !== position);
    }
    
    saveToStorage();
    renderCurrentBoard();
}

// ============ 主题相关函数 ============

function loadThemeFromStorage() {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme) {
        try {
            const loaded = JSON.parse(storedTheme);
            themeData = { ...themeData, ...loaded };
            // 如果存储的颜色数量与默认不一致，使用默认颜色列表（确保包含所有新颜色）
            if (!themeData.availableColors || themeData.availableColors.length !== DEFAULT_THEME_COLORS.length) {
                themeData.availableColors = [...DEFAULT_THEME_COLORS];
            }
        } catch (e) {
            console.error('解析主题数据失败:', e);
        }
    }
    applyTheme();
}

function saveThemeToStorage() {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(themeData));
}

function isLightColor(color) {
    // 将颜色转换为RGB并计算亮度
    let r, g, b;
    if (color.startsWith('#')) {
        if (color.length === 4) {
            r = parseInt(color[1] + color[1], 16);
            g = parseInt(color[2] + color[2], 16);
            b = parseInt(color[3] + color[3], 16);
        } else if (color.length === 7) {
            r = parseInt(color[1] + color[2], 16);
            g = parseInt(color[3] + color[4], 16);
            b = parseInt(color[5] + color[6], 16);
        }
    }
    
    // 计算相对亮度
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155; // 如果亮度大于155，认为是浅色
}

function applyTheme() {
    // 更新CSS变量
    document.documentElement.style.setProperty('--primary-color', themeData.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', themeData.secondaryColor);
    document.documentElement.style.setProperty('--theme-gradient', 
        `linear-gradient(135deg, ${themeData.primaryColor} 0%, ${themeData.secondaryColor} 100%)`);
    
    // 判断主题色是否为浅色，决定下拉按钮的文字颜色
    const textColor = isLightColor(themeData.primaryColor) ? 'black' : themeData.primaryColor;
    
    // 更新所有下拉按钮的文字颜色
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(btn => {
        btn.style.color = textColor;
    });
    
    // 更新标题
    const titleEl = document.getElementById('app-title');
    if (titleEl) {
        titleEl.textContent = themeData.appName;
    }
    
    // 根据主题色深浅设置汉堡菜单颜色
    updateHamburgerColor();
}

function openThemeModal() {
    const modal = document.getElementById('theme-modal');
    if (!modal) return;
    
    const nameInput = document.getElementById('app-name-input');
    if (nameInput) {
        nameInput.value = themeData.appName;
    }
    
    currentThemeColor = themeData.primaryColor;
    renderThemeColorOptions();
    
    modal.classList.add('show');
}

function renderThemeColorOptions() {
    const container = document.getElementById('theme-color-options');
    if (!container) return;
    container.innerHTML = '';
    
    themeData.availableColors.forEach(function(color) {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-option';
        colorDiv.style.backgroundColor = color;
        colorDiv.dataset.color = color;
        
        if (color === currentThemeColor) {
            colorDiv.classList.add('selected');
        }
        
        colorDiv.onclick = function() {
            selectThemeColor(color);
        };
        container.appendChild(colorDiv);
    });
}

function selectThemeColor(color) {
    currentThemeColor = color;
    renderThemeColorOptions();
}

function addCustomThemeColor() {
    const colorPicker = document.getElementById('custom-theme-color-picker');
    if (!colorPicker) return;
    const color = colorPicker.value;
    
    if (!themeData.availableColors.includes(color)) {
        themeData.availableColors.push(color);
        saveThemeToStorage();
        renderThemeColorOptions();
    }
}

function saveTheme() {
    const nameInput = document.getElementById('app-name-input');
    const name = nameInput ? nameInput.value.trim() : '';
    
    if (name) {
        themeData.appName = name;
    }
    
    if (currentThemeColor) {
        themeData.primaryColor = currentThemeColor;
        // 自动生成一个稍深的secondary color
        themeData.secondaryColor = adjustColor(currentThemeColor, -20);
    }
    
    saveThemeToStorage();
    applyTheme();
    closeModals();
}

function adjustColor(color, amount) {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

// ============ 教程相关函数 ============

function showTutorial() {
    tutorialStep = 0;
    updateTutorialContent();
    const tutorialModal = document.getElementById('tutorial-modal');
    if (tutorialModal) {
        tutorialModal.classList.add('show');
    }
}

function closeTutorial() {
    const tutorialModal = document.getElementById('tutorial-modal');
    if (tutorialModal) {
        tutorialModal.classList.remove('show');
    }
    localStorage.setItem(TUTORIAL_KEY, 'true');
    renderAll();
}

function nextTutorialStep() {
    tutorialStep++;
    if (tutorialStep >= 4) {
        closeTutorial();
        return;
    }
    updateTutorialContent();
}

function updateTutorialContent() {
    const contents = [
        {
            title: '欢迎来到TaskBoard！',
            text: 'TaskBoard 是一个简单高效的项目管理工具，帮助您更好地组织任务和追踪进度。',
            image: './images/1.png'
        },
        {
            title: '管理您的任务看板',
            text: '左侧侧边栏显示您的所有任务，您可以拖动调序，也可以长按进行重命名或删除。点击顶部标题可以修改主题颜色！',
            image: './images/2.png'
        },
        {
            title: '添加和移动卡片',
            text: '点击"+添加卡片"按钮可以创建新卡片，然后可以通过拖拽来移动卡片到不同板块。移动到"完成"板块会自动记录完成日期！点击板块标题可以重命名板块！',
            image: './images/3.png'
        },
        {
            title: '查看统计和添加板块',
            text: '点击顶部的"周视图"或"月视图"可以查看任务统计。在所有板块的最后有"+添加板块"按钮，点击后可以添加新的自定义板块！',
            image: './images/4.png'
        }
    ];

    const titleEl = document.getElementById('tutorial-title');
    const textEl = document.getElementById('tutorial-text');
    const imageEl = document.getElementById('tutorial-image');
    
    if (titleEl) titleEl.textContent = contents[tutorialStep].title;
    if (textEl) textEl.textContent = contents[tutorialStep].text;
    if (imageEl) imageEl.src = contents[tutorialStep].image;
    
    const nextBtn = document.getElementById('tutorial-next-btn');
    if (nextBtn) {
        if (tutorialStep === 3) {
            nextBtn.textContent = '完成';
        } else {
            nextBtn.textContent = '下一步';
        }
    }

    const indicators = document.querySelectorAll('.tutorial-step');
    indicators.forEach(function(indicator, index) {
        indicator.classList.toggle('active', index === tutorialStep);
    });
}

// ============ 更多功能和数据管理函数 ============

let pendingImportData = null;
let dataOperationMode = null; // 'import' or 'merge'

function toggleMoreMenu() {
    const menu = document.getElementById('more-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

function closeMoreMenu() {
    const menu = document.getElementById('more-menu');
    if (menu) {
        menu.classList.add('hidden');
    }
}

// 导出所有数据
function exportData() {
    const exportObj = {
        version: '1.0',
        exportedAt: new Date().toISOString(),
        data: data,
        themeData: themeData,
        availableColors: availableColors
    };

    const jsonStr = JSON.stringify(exportObj, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    const dateStr = new Date().toISOString().slice(0, 10);
    a.download = `dodo-kanban-backup-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 导入数据 - 打开文件选择
function importData() {
    dataOperationMode = 'import';
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
        fileInput.value = '';
        fileInput.click();
    }
}

// 合并数据 - 打开文件选择
function mergeData() {
    dataOperationMode = 'merge';
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
        fileInput.value = '';
        fileInput.click();
    }
}

// 处理文件选择
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedObj = JSON.parse(e.target.result);
            pendingImportData = importedObj;
            
            if (dataOperationMode === 'import') {
                showImportPreview();
            } else if (dataOperationMode === 'merge') {
                showMergePreview();
            }
        } catch (err) {
            alert('无法解析文件，请选择有效的JSON文件！');
            console.error(err);
        }
    };
    reader.readAsText(file);
}

// 显示导入数据预览
function showImportPreview() {
    const modal = document.getElementById('data-modal');
    const titleEl = document.getElementById('data-modal-title');
    const contentEl = document.getElementById('data-modal-content');
    
    if (!modal || !pendingImportData) return;
    
    titleEl.textContent = '导入数据';
    
    let previewHTML = '<p style="color: #666; margin-bottom: 15px;">以下是选择的数据预览：</p>';
    previewHTML += generateDataPreview(pendingImportData);
    previewHTML += '<div style="margin-top: 20px; display: flex; gap: 10px;">';
    previewHTML += '<button id="confirm-import" class="btn btn-primary">导入数据</button>';
    previewHTML += '<button id="cancel-import" class="btn btn-secondary">取消</button>';
    previewHTML += '</div>';
    
    contentEl.innerHTML = previewHTML;
    
    const confirmBtn = document.getElementById('confirm-import');
    if (confirmBtn) confirmBtn.onclick = confirmImport;
    const cancelBtn = document.getElementById('cancel-import');
    if (cancelBtn) cancelBtn.onclick = closeDataModal;
    
    modal.classList.add('show');
}

// 确认导入
function confirmImport() {
    if (!pendingImportData) return;
    
    if (confirm('导入前需要保存当前数据吗？')) {
        exportData();
    }
    
    if (pendingImportData.data) data = pendingImportData.data;
    if (pendingImportData.themeData) themeData = pendingImportData.themeData;
    if (pendingImportData.availableColors) availableColors = pendingImportData.availableColors;
    
    saveToStorage();
    saveColorsToStorage();
    saveThemeToStorage();
    applyTheme();
    renderAll();
    closeDataModal();
    alert('数据导入成功！');
}

// 显示合并数据预览
function showMergePreview() {
    const modal = document.getElementById('data-modal');
    const titleEl = document.getElementById('data-modal-title');
    const contentEl = document.getElementById('data-modal-content');
    
    if (!modal || !pendingImportData) return;
    
    titleEl.textContent = '合并数据';
    
    let previewHTML = '<p style="color: #666; margin-bottom: 15px;">以下是选择的数据预览（将合并到当前数据）：</p>';
    previewHTML += generateDataPreview(pendingImportData);
    previewHTML += '<div style="margin-top: 20px; display: flex; gap: 10px;">';
    previewHTML += '<button id="confirm-merge" class="btn btn-primary">合并数据</button>';
    previewHTML += '<button id="cancel-merge" class="btn btn-secondary">取消</button>';
    previewHTML += '</div>';
    
    contentEl.innerHTML = previewHTML;
    
    const confirmBtn = document.getElementById('confirm-merge');
    if (confirmBtn) confirmBtn.onclick = confirmMerge;
    const cancelBtn = document.getElementById('cancel-merge');
    if (cancelBtn) cancelBtn.onclick = closeDataModal;
    
    modal.classList.add('show');
}

// 确认合并
function confirmMerge() {
    if (!pendingImportData || !pendingImportData.data || !pendingImportData.data.boards) {
        alert('合并数据格式不正确！');
        return;
    }
    
    const allCards = [];
    
    // 收集当前数据的所有卡片
    data.boards.forEach(board => {
        board.columnConfig.forEach(col => {
            const cards = board.columns[col.id] || [];
            cards.forEach(card => {
                allCards.push({
                    ...card,
                    _sourceBoard: board.name
                });
            });
        });
    });
    
    // 收集导入数据的所有卡片
    if (pendingImportData.data && pendingImportData.data.boards) {
        pendingImportData.data.boards.forEach(board => {
            const colConfig = board.columnConfig || [];
            colConfig.forEach(col => {
                const cards = board.columns && board.columns[col.id] ? board.columns[col.id] : [];
                cards.forEach(card => {
                    allCards.push({
                        ...card,
                        id: generateId(), // 生成新ID防止冲突
                        _sourceBoard: board.name
                    });
                });
            });
        });
    }
    
    // 按日期排序
    allCards.sort((a, b) => {
        const dateA = a.createdAt || '';
        const dateB = b.createdAt || '';
        return dateA.localeCompare(dateB);
    });
    
    // 创建合并后的看板
    const mergedBoard = {
        id: generateId(),
        name: '合并看板',
        columnConfig: JSON.parse(JSON.stringify(DEFAULT_COLUMNS)),
        columns: {}
    };
    mergedBoard.columnConfig.forEach(col => {
        mergedBoard.columns[col.id] = [];
    });
    
    // 分配卡片到板块
    allCards.forEach(card => {
        let targetCol = '1';
        if (card.completedAt) {
            targetCol = '4';
        }
        
        // 保留原始卡片的来源信息（可选）
        const cardCopy = { ...card };
        delete cardCopy._sourceBoard;
        mergedBoard.columns[targetCol].push(cardCopy);
    });
    
    // 添加合并后的看板
    data.boards.push(mergedBoard);
    data.currentBoardId = mergedBoard.id;
    
    saveToStorage();
    renderAll();
    closeDataModal();
    alert('数据合并成功！');
}

// 生成数据预览HTML
function generateDataPreview(importObj) {
    let html = '<div class="data-preview">';
    
    // 预览普通看板
    if (importObj.data && importObj.data.boards) {
        html += '<h3 style="margin-bottom: 10px; color: #333;">任务列表</h3>';
        importObj.data.boards.forEach(board => {
            let totalCards = 0;
            if (board.columnConfig) {
                board.columnConfig.forEach(col => {
                    const cards = board.columns && board.columns[col.id] ? board.columns[col.id] : [];
                    totalCards += cards.length;
                });
            } else if (board.columns) {
                Object.values(board.columns).forEach(cards => {
                    totalCards += Array.isArray(cards) ? cards.length : 0;
                });
            }
            
            html += `<div class="board-preview">
                <h4>${board.name || '未命名看板'}</h4>
                <p>卡片总数: ${totalCards}</p>
            </div>`;
        });
    }
    
    // 预览完成看板
    if (importObj.data && importObj.data.completedBoards && importObj.data.completedBoards.length > 0) {
        html += '<h3 style="margin-bottom: 10px; margin-top: 15px; color: #333;">✅ 完成看板</h3>';
        importObj.data.completedBoards.forEach(board => {
            let totalCards = 0;
            if (board.columnConfig) {
                board.columnConfig.forEach(col => {
                    const cards = board.columns && board.columns[col.id] ? board.columns[col.id] : [];
                    totalCards += cards.length;
                });
            }
            
            html += `<div class="board-preview">
                <h4>${board.name || '未命名看板'}</h4>
                <p>卡片总数: ${totalCards}</p>
            </div>`;
        });
    }
    
    // 预览舍弃看板
    if (importObj.data && importObj.data.discardedBoards && importObj.data.discardedBoards.length > 0) {
        html += '<h3 style="margin-bottom: 10px; margin-top: 15px; color: #333;">🗑️ 舍弃看板</h3>';
        importObj.data.discardedBoards.forEach(board => {
            let totalCards = 0;
            if (board.columnConfig) {
                board.columnConfig.forEach(col => {
                    const cards = board.columns && board.columns[col.id] ? board.columns[col.id] : [];
                    totalCards += cards.length;
                });
            }
            
            html += `<div class="board-preview">
                <h4>${board.name || '未命名看板'}</h4>
                <p>卡片总数: ${totalCards}</p>
            </div>`;
        });
    }
    
    if (importObj.exportedAt) {
        html += `<p style="margin-top: 10px; color: #999; font-size: 12px;">导出时间: ${new Date(importObj.exportedAt).toLocaleString()}</p>`;
    }
    
    html += '</div>';
    return html;
}

function closeDataModal() {
    const modal = document.getElementById('data-modal');
    if (modal) {
        modal.classList.remove('show');
    }
    pendingImportData = null;
    dataOperationMode = null;
}

function closeModals() {
    closeMoreMenu();
    closeViewDropdown();
    closeColumnDropdown();
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        modal.classList.remove('show');
    });
    currentEditingCard = null;
    currentSelectedColor = null;
    currentLongPressBoardId = null;
    currentEditingColumn = null;
    pendingImportData = null;
    dataOperationMode = null;
    currentEditingFolderId = null;
    currentLongPressFolderId = null;
}

// ====================== 文件夹相关函数 ======================

function openFolderModal(isEdit = false) {
    const modal = document.getElementById('folder-modal');
    const title = document.getElementById('folder-modal-title');
    const input = document.getElementById('folder-name-input');
    const deleteBtn = document.getElementById('delete-folder-btn');
    
    if (isEdit && currentLongPressFolderId) {
        const folder = data.folders.find(f => f.id === currentLongPressFolderId);
        if (folder) {
            currentEditingFolderId = folder.id;
            title.textContent = '编辑文件夹';
            input.value = folder.name;
            deleteBtn.style.display = 'inline-block';
        }
    } else {
        currentEditingFolderId = null;
        title.textContent = '新建文件夹';
        input.value = '';
        deleteBtn.style.display = 'none';
    }
    
    if (modal) {
        modal.classList.add('show');
        input.focus();
    }
}

function saveFolder() {
    const input = document.getElementById('folder-name-input');
    const name = input.value.trim();
    
    if (!name) {
        alert('请输入文件夹名称');
        return;
    }
    
    if (currentEditingFolderId) {
        // 编辑现有文件夹
        const folder = data.folders.find(f => f.id === currentEditingFolderId);
        if (folder) {
            folder.name = name;
        }
    } else {
        // 新建文件夹
        const newFolder = {
            id: generateId(),
            name: name
        };
        data.folders.push(newFolder);
        
        // 添加到boardItems
        const maxOrder = Math.max(...data.boardItems.map(i => i.order), -1);
        data.boardItems.push({
            type: 'folder',
            id: newFolder.id,
            order: maxOrder + 1,
            parentFolderId: null
        });
    }
    
    saveToStorage();
    renderAll();
    closeModals();
}

function deleteFolder() {
    if (!currentEditingFolderId) return;
    deleteFolderWithConfirm();
}

function deleteFolderWithConfirm() {
    const folderId = currentEditingFolderId || currentLongPressFolderId;
    if (!folderId) return;
    
    // 计算文件夹内的看板数量
    const count = getFolderBoardCount(folderId);
    
    if (count > 0) {
        if (confirm(`这个文件夹里有 ${count} 个看板。\n确定要删除文件夹并同时删除里面的看板吗？\n点击"取消"可以将看板移动到根目录。`)) {
            // 删除文件夹及里面的看板
            deleteFolderAndContents(folderId);
        } else {
            // 将看板移动到根目录，然后删除文件夹
            moveFolderContentsToRoot(folderId);
            deleteFolderOnly(folderId);
        }
    } else {
        if (confirm('确定要删除这个文件夹吗？')) {
            deleteFolderOnly(folderId);
        }
    }
}

function deleteFolderOnly(folderId) {
    // 从folders中删除
    data.folders = data.folders.filter(f => f.id !== folderId);
    
    // 从boardItems中删除
    data.boardItems = data.boardItems.filter(item => item.id !== folderId);
    
    // 从expandedFolders中删除
    data.expandedFolders = data.expandedFolders.filter(id => id !== folderId);
    
    saveToStorage();
    renderAll();
    closeModals();
}

function deleteFolderAndContents(folderId) {
    // 获取所有要删除的项目（文件夹内的看板和子文件夹）
    const itemsToDelete = getAllItemsInFolder(folderId);
    
    // 删除相关的看板
    const boardIdsToDelete = itemsToDelete
        .filter(item => item.type === 'board')
        .map(item => item.id);
    
    data.boards = data.boards.filter(board => !boardIdsToDelete.includes(board.id));
    
    // 删除相关的文件夹
    const folderIdsToDelete = itemsToDelete
        .filter(item => item.type === 'folder')
        .map(item => item.id);
    folderIdsToDelete.push(folderId); // 加上文件夹本身
    
    data.folders = data.folders.filter(folder => !folderIdsToDelete.includes(folder.id));
    
    // 从boardItems中删除
    data.boardItems = data.boardItems.filter(item => !folderIdsToDelete.includes(item.id) && !boardIdsToDelete.includes(item.id));
    
    // 从expandedFolders中删除
    data.expandedFolders = data.expandedFolders.filter(id => !folderIdsToDelete.includes(id));
    
    // 更新当前看板
    if (boardIdsToDelete.includes(data.currentBoardId)) {
        if (data.boards.length > 0) {
            data.currentBoardId = data.boards[0].id;
            data.currentListType = 'normal';
        } else if (data.completedBoards.length > 0) {
            data.currentBoardId = data.completedBoards[0].id;
            data.currentListType = 'completed';
        } else if (data.discardedBoards.length > 0) {
            data.currentBoardId = data.discardedBoards[0].id;
            data.currentListType = 'discarded';
        }
    }
    
    saveToStorage();
    renderAll();
    closeModals();
}

function moveFolderContentsToRoot(folderId) {
    // 获取文件夹内所有项目
    const items = data.boardItems.filter(item => item.parentFolderId === folderId);
    
    // 将它们的parentFolderId设置为null
    items.forEach(item => {
        item.parentFolderId = null;
    });
    
    // 递归处理子文件夹的内容
    const childFolders = items.filter(item => item.type === 'folder');
    childFolders.forEach(child => {
        moveFolderContentsToRoot(child.id);
    });
}

function getAllItemsInFolder(folderId) {
    const result = [];
    
    // 获取直接子项
    const children = data.boardItems.filter(item => item.parentFolderId === folderId);
    result.push(...children);
    
    // 递归获取子文件夹的内容
    const childFolders = children.filter(item => item.type === 'folder');
    childFolders.forEach(child => {
        result.push(...getAllItemsInFolder(child.id));
    });
    
    return result;
}

function openFolderLongPressModal(folderId) {
    currentLongPressFolderId = folderId;
    const modal = document.getElementById('folder-long-press-modal');
    if (modal) {
        modal.classList.add('show');
    }
}

function closeFolderLongPressModal() {
    const modal = document.getElementById('folder-long-press-modal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function renderBoardList() {
    const boardList = document.getElementById('board-list');
    const boardListTitle = document.getElementById('board-list-title');
    if (!boardList) return;
    
    // 标题始终显示"任务列表"
    if (boardListTitle) {
        boardListTitle.textContent = '任务列表';
    }
    
    // 检查并修复 boardItems 和 boards 不同步的问题
    ensureBoardItemsSync();
    
    boardList.innerHTML = '';
    
    // 渲染根级别的项目（文件夹和看板）
    renderBoardItems(boardList, null, 0);
    
    // 设置拖放功能
    setupBoardListDragAndDrop();
}

// 确保 boardItems 和 boards 数据同步
function ensureBoardItemsSync() {
    // 收集所有有效的看板 ID
    const validBoardIds = new Set(
        data.boards.map(b => b.id)
    );
    
    // 过滤掉无效的 boardItems
    data.boardItems = data.boardItems.filter(item => {
        if (item.type === 'board') {
            return validBoardIds.has(item.id);
        }
        // 文件夹暂时不检查
        return true;
    });
    
    // 检查是否有看板不在 boardItems 中，如果有就添加
    const existingBoardItemIds = new Set(
        data.boardItems.filter(item => item.type === 'board').map(item => item.id)
    );
    
    data.boards.forEach((board, index) => {
        if (!existingBoardItemIds.has(board.id)) {
            data.boardItems.push({
                type: 'board',
                id: board.id,
                order: data.boardItems.length,
                parentFolderId: null
            });
            console.log('修复 boardItems：添加缺失的看板', board.name);
        }
    });
    
    // 如果 boardItems 还是空的，但 boards 有数据，重新创建
    if (data.boardItems.length === 0 && data.boards.length > 0) {
        console.log('boardItems 为空，从 boards 重新创建');
        data.boardItems = data.boards.map((board, index) => ({
            type: 'board',
            id: board.id,
            order: index,
            parentFolderId: null
        }));
    }
}

function renderBoardItems(container, parentFolderId, level) {
    // 获取指定文件夹下的所有项目
    let items = data.boardItems.filter(item => item.parentFolderId === parentFolderId);
    // 按order排序
    items.sort((a, b) => a.order - b.order);
    
    items.forEach(function(item) {
        if (item.type === 'folder') {
            renderFolderItem(container, item, level);
        } else if (item.type === 'board') {
            renderBoardItem(container, item, level);
        }
    });
}

function renderFolderItem(container, item, level) {
    const folder = data.folders.find(f => f.id === item.id);
    if (!folder) return;
    
    const folderItem = document.createElement('div');
    folderItem.className = 'folder-item';
    folderItem.dataset.folderId = folder.id;
    folderItem.dataset.itemType = 'folder';
    folderItem.style.paddingLeft = (8 + level * 16) + 'px';
    folderItem.setAttribute('draggable', 'true');
    
    // 展开/收起箭头
    const arrowSpan = document.createElement('span');
    const isExpanded = data.expandedFolders.includes(folder.id);
    arrowSpan.className = 'folder-arrow';
    arrowSpan.textContent = isExpanded ? '▼' : '▶';
    arrowSpan.onclick = function(e) {
        e.stopPropagation();
        toggleFolder(folder.id);
    };
    
    // 文件夹图标和名称
    const nameSpan = document.createElement('span');
    nameSpan.className = 'folder-name';
    nameSpan.textContent = '📁 ' + folder.name;
    
    // 统计文件夹下的看板数量
    const count = getFolderBoardCount(folder.id);
    const countSpan = document.createElement('span');
    countSpan.className = 'folder-count';
    countSpan.textContent = count > 0 ? `(${count})` : '';
    
    folderItem.appendChild(arrowSpan);
    folderItem.appendChild(nameSpan);
    folderItem.appendChild(countSpan);
    
    // 长按事件 - 文件夹
    let folderLongPressTimer = null;
    let folderLongPressTriggered = false;
    
    folderItem.onmousedown = function(e) {
        isDraggingBoardListItem = false;
        folderLongPressTriggered = false;
        folderLongPressTimer = setTimeout(function() {
            // 只有在没有拖动的情况下才弹出操作窗口
            if (!isDraggingBoardListItem) {
                folderLongPressTriggered = true;
                openFolderLongPressModal(folder.id);
            }
        }, 800);
    };
    
    folderItem.onmouseup = function() {
        clearTimeout(folderLongPressTimer);
        folderLongPressTimer = null;
    };
    
    folderItem.onmouseleave = function() {
        clearTimeout(folderLongPressTimer);
        folderLongPressTimer = null;
    };
    
    container.appendChild(folderItem);
    
    // 如果文件夹展开，渲染子项目
    if (isExpanded) {
        renderBoardItems(container, folder.id, level + 1);
    }
}

function renderBoardItem(container, item, level) {
    const board = data.boards.find(b => b.id === item.id);
    if (!board) return;
    
    const boardItem = document.createElement('div');
    boardItem.className = 'board-item' + (board.id === data.currentBoardId ? ' active' : '');
    boardItem.dataset.boardId = board.id;
    boardItem.dataset.itemType = 'board';
    boardItem.style.paddingLeft = (8 + level * 16) + 'px';
    boardItem.setAttribute('draggable', 'true');
    
    // 看板名称
    const nameSpan = document.createElement('span');
    nameSpan.textContent = board.name;
    
    // 计算完成数/总数
    const { total, done } = getBoardStats(board);
    const countSpan = document.createElement('span');
    countSpan.className = 'board-count';
    countSpan.textContent = `${done}/${total}`;
    
    boardItem.appendChild(nameSpan);
    boardItem.appendChild(countSpan);
    
    boardItem.onclick = function() {
        if (!longPressTimer && !isDraggingBoardListItem) {
            switchBoard(board.id);
        }
    };
    
    boardItem.onmousedown = function() {
        isDraggingBoardListItem = false;
        longPressTimer = setTimeout(function() {
            // 只有在没有拖动的情况下才弹出操作窗口
            if (!isDraggingBoardListItem) {
                currentLongPressBoardId = board.id;
                openLongPressModal();
            }
        }, 800);
    };
    
    boardItem.onmouseup = function() {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    };
    
    boardItem.onmouseleave = function() {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    };
    
    container.appendChild(boardItem);
}

function getFolderBoardCount(folderId) {
    let count = 0;
    // 直接子看板
    const directBoards = data.boardItems.filter(item => 
        item.parentFolderId === folderId && item.type === 'board'
    );
    count += directBoards.length;
    
    // 递归统计子文件夹
    const childFolders = data.boardItems.filter(item => 
        item.parentFolderId === folderId && item.type === 'folder'
    );
    childFolders.forEach(childFolder => {
        count += getFolderBoardCount(childFolder.id);
    });
    
    return count;
}

function toggleFolder(folderId) {
    const index = data.expandedFolders.indexOf(folderId);
    if (index === -1) {
        data.expandedFolders.push(folderId);
    } else {
        data.expandedFolders.splice(index, 1);
    }
    saveToStorage();
    renderBoardList();
}

function setupBoardListDragAndDrop() {
    const boardList = document.getElementById('board-list');
    if (!boardList) return;

    let currentHighlightedFolder = null;

    function ensureDropIndicator() {
        if (!boardListDropIndicator) {
            boardListDropIndicator = document.createElement('div');
            boardListDropIndicator.className = 'board-list-drop-indicator';
        }
    }

    function removeDropIndicator() {
        if (boardListDropIndicator && boardListDropIndicator.parentNode) {
            boardListDropIndicator.remove();
        }
        // 清除文件夹高亮
        clearFolderHighlight();
    }

    function clearFolderHighlight() {
        if (currentHighlightedFolder) {
            currentHighlightedFolder.classList.remove('folder-drop-highlight');
            currentHighlightedFolder = null;
        }
    }

    let lastDropState = { insertIndex: -1, isFolderDrop: false, folderId: null };

    function showDropIndicator(container, insertPosition, targetFolderId, targetFolderElement) {
        ensureDropIndicator();
        
        const isFolderDrop = !!targetFolderId;
        
        if (lastDropState.insertIndex === insertPosition && 
            lastDropState.isFolderDrop === isFolderDrop && 
            lastDropState.folderId === targetFolderId) {
            return;
        }
        lastDropState.insertIndex = insertPosition;
        lastDropState.isFolderDrop = isFolderDrop;
        lastDropState.folderId = targetFolderId;
        
        boardListDropIndicator.className = 'board-list-drop-indicator';
        
        if (isFolderDrop) {
            // 拖入文件夹：不显示分隔线，而是高亮文件夹本身
            boardListDropIndicator.textContent = '';
            if (targetFolderElement) {
                targetFolderElement.classList.add('folder-drop-highlight');
                currentHighlightedFolder = targetFolderElement;
            }
        } else {
            // 普通插入：显示分隔线，清除文件夹高亮
            clearFolderHighlight();
        }
        
        const items = Array.from(container.querySelectorAll('.folder-item, .board-item'))
            .filter(el => el !== boardListDropIndicator);
        
        if (boardListDropIndicator.parentNode) {
            boardListDropIndicator.remove();
        }
        
        if (!isFolderDrop) {
            if (insertPosition >= items.length) {
                container.appendChild(boardListDropIndicator);
            } else if (items[insertPosition]) {
                container.insertBefore(boardListDropIndicator, items[insertPosition]);
            }
        }
    }

    function getItemParentFolderId(itemEl) {
        let parent = itemEl.previousElementSibling;
        let folderId = null;
        
        while (parent) {
            if (parent.classList.contains('folder-item')) {
                folderId = parent.dataset.folderId;
                break;
            }
            parent = parent.previousElementSibling;
        }
        
        return folderId;
    }

    function moveBoardListItem(sourceId, sourceType, targetFolderId, insertIndex) {
        const sourceItem = data.boardItems.find(item => item.id === sourceId);
        if (!sourceItem) return;
        
        const sourceIndex = data.boardItems.indexOf(sourceItem);
        if (sourceIndex > -1) {
            data.boardItems.splice(sourceIndex, 1);
        }
        
        sourceItem.parentFolderId = targetFolderId;
        
        let targetItems = data.boardItems.filter(item => item.parentFolderId === targetFolderId);
        targetItems.sort((a, b) => a.order - b.order);
        
        if (insertIndex < 0 || insertIndex >= targetItems.length) {
            const maxOrder = targetItems.length > 0 ? Math.max(...targetItems.map(t => t.order)) : -1;
            sourceItem.order = maxOrder + 1;
        } else {
            const afterItem = targetItems[insertIndex];
            sourceItem.order = afterItem.order;
            for (let i = insertIndex; i < targetItems.length; i++) {
                targetItems[i].order += 1;
            }
        }
        
        data.boardItems.push(sourceItem);
        
        saveToStorage();
        renderBoardList();
    }

    boardList.ondragstart = function(e) {
        if (e.target.classList.contains('folder-item') || e.target.classList.contains('board-item')) {
            clearTimeout(longPressTimer);
            longPressTimer = null;
            
            isDraggingBoardListItem = true;
            draggedBoardListItem = e.target;
            e.target.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            
            lastDropState = { insertIndex: -1, isFolderDrop: false, folderId: null };
        }
    };

    boardList.ondragend = function(e) {
        if (draggedBoardListItem) {
            draggedBoardListItem.classList.remove('dragging');
            draggedBoardListItem = null;
        }
        isDraggingBoardListItem = false;
        removeDropIndicator();
        lastDropState = { insertIndex: -1, isFolderDrop: false, folderId: null };
    };

    boardList.ondragover = function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        if (draggedBoardListItem) {
            const rect = boardList.getBoundingClientRect();
            const offsetY = e.clientY - rect.top;
            
            const items = Array.from(boardList.querySelectorAll('.folder-item, .board-item'))
                .filter(el => el !== boardListDropIndicator);
            
            let insertIndex = items.length;
            let targetFolderId = null;
            let dropInFolder = false;
            let targetFolderElement = null;
            
            for (let i = 0; i < items.length; i++) {
                const itemRect = items[i].getBoundingClientRect();
                const itemCenterY = itemRect.top - rect.top + itemRect.height / 2;
                
                if (items[i].classList.contains('folder-item')) {
                    const itemTop = itemRect.top - rect.top;
                    const itemBottom = itemTop + itemRect.height;
                    
                    if (offsetY >= itemTop && offsetY <= itemBottom) {
                        const topThreshold = itemTop + itemRect.height * 0.15;
                        const bottomThreshold = itemTop + itemRect.height * 0.85;
                        
                        if (offsetY < topThreshold) {
                            insertIndex = i;
                            targetFolderId = null;
                        } else if (offsetY > bottomThreshold) {
                            insertIndex = i + 1;
                            targetFolderId = null;
                        } else {
                            dropInFolder = true;
                            targetFolderId = items[i].dataset.folderId;
                            targetFolderElement = items[i];
                            insertIndex = i;
                        }
                        break;
                    }
                }
                
                if (offsetY < itemCenterY) {
                    insertIndex = i;
                    break;
                }
            }
            
            showDropIndicator(boardList, insertIndex, targetFolderId, targetFolderElement);
        }
    };

    boardList.ondragleave = function(e) {
        if (!boardList.contains(e.relatedTarget)) {
            removeDropIndicator();
        }
    };

    boardList.ondrop = function(e) {
        e.preventDefault();
        removeDropIndicator();
        
        if (draggedBoardListItem) {
            const sourceId = draggedBoardListItem.dataset.folderId || draggedBoardListItem.dataset.boardId;
            const sourceType = draggedBoardListItem.dataset.itemType;
            
            const rect = boardList.getBoundingClientRect();
            const offsetY = e.clientY - rect.top;
            
            const items = Array.from(boardList.querySelectorAll('.folder-item, .board-item'))
                .filter(el => el !== boardListDropIndicator);
            
            let insertIndex = items.length;
            let targetFolderId = null;
            let dropInFolder = false;
            
            for (let i = 0; i < items.length; i++) {
                const itemRect = items[i].getBoundingClientRect();
                const itemCenterY = itemRect.top - rect.top + itemRect.height / 2;
                
                if (items[i].classList.contains('folder-item')) {
                    const itemTop = itemRect.top - rect.top;
                    const itemBottom = itemTop + itemRect.height;
                    
                    if (offsetY >= itemTop && offsetY <= itemBottom) {
                        const topThreshold = itemTop + itemRect.height * 0.15;
                        const bottomThreshold = itemTop + itemRect.height * 0.85;
                        
                        if (offsetY < topThreshold) {
                            insertIndex = i;
                            targetFolderId = null;
                        } else if (offsetY > bottomThreshold) {
                            insertIndex = i + 1;
                            targetFolderId = null;
                        } else {
                            dropInFolder = true;
                            targetFolderId = items[i].dataset.folderId;
                            insertIndex = -1;
                        }
                        break;
                    }
                }
                
                if (offsetY < itemCenterY) {
                    insertIndex = i;
                    break;
                }
            }
            
            if (sourceId === targetFolderId) {
                return;
            }
            
            if (sourceType === 'folder' && dropInFolder && isDescendantFolder(sourceId, targetFolderId)) {
                return;
            }
            
            moveBoardListItem(sourceId, sourceType, targetFolderId, insertIndex);
        }
    };
}

function isDescendantFolder(parentId, childId) {
    // 检查 childId 是否是 parentId 的子文件夹
    if (!parentId || !childId) return false;
    
    let currentId = childId;
    while (currentId) {
        const item = data.boardItems.find(i => i.id === currentId && i.type === 'folder');
        if (!item) break;
        if (item.parentFolderId === parentId) return true;
        currentId = item.parentFolderId;
    }
    return false;
}

// ===== Mobile Functions =====

// 移动端变量
let isSidebarOpen = false;
let touchStartX = 0;
let touchStartY = 0;
let touchCurrentX = 0;
let touchCurrentY = 0;
let isSwiping = false;
let swipeThreshold = 50; // 滑动阈值

// 侧边栏开关
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (isSidebarOpen) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    isSidebarOpen = !isSidebarOpen;
}

// 关闭侧边栏
function closeSidebar() {
    if (isSidebarOpen) {
        toggleSidebar();
    }
}

// 触摸事件处理 - 滑动切换看板
function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isSwiping = true;
}

function handleTouchMove(e) {
    if (!isSwiping) return;
    
    touchCurrentX = e.touches[0].clientX;
    touchCurrentY = e.touches[0].clientY;
}

function handleTouchEnd() {
    if (!isSwiping) return;
    
    const deltaX = touchCurrentX - touchStartX;
    const deltaY = touchCurrentY - touchStartY;
    
    // 只有水平滑动且距离足够时才切换看板
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
        if (deltaX > 0) {
            // 向右滑动 - 上一个看板
            switchToPrevBoard();
        } else {
            // 向左滑动 - 下一个看板
            switchToNextBoard();
        }
    }
    
    isSwiping = false;
}

// 切换到上一个看板
function switchToPrevBoard() {
    const boardIds = data.boards.map(b => b.id);
    const currentIndex = boardIds.indexOf(data.currentBoardId);
    
    if (currentIndex > 0) {
        switchBoard(boardIds[currentIndex - 1]);
    }
}

// 切换到下一个看板
function switchToNextBoard() {
    const boardIds = data.boards.map(b => b.id);
    const currentIndex = boardIds.indexOf(data.currentBoardId);
    
    if (currentIndex < boardIds.length - 1) {
        switchBoard(boardIds[currentIndex + 1]);
    }
}

// 设置移动端事件监听
function setupMobileEvents() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const mainContent = document.querySelector('.main-content');
    
    // 汉堡菜单按钮
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleSidebar);
    }
    
    // 关闭侧边栏按钮
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    
    // 侧边栏遮罩层
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // 触摸滑动切换看板
    if (mainContent) {
        mainContent.addEventListener('touchstart', handleTouchStart, { passive: true });
        mainContent.addEventListener('touchmove', handleTouchMove, { passive: true });
        mainContent.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
}

// 根据主题色深浅设置汉堡菜单颜色
function updateHamburgerColor() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    if (!hamburgerBtn) return;
    
    // 移除之前的主题类
    hamburgerBtn.classList.remove('light-theme', 'dark-theme');
    
    // 判断主题色是否为浅色
    const isLight = isLightColor(themeData.primaryColor);
    
    // 添加对应的主题类（反转逻辑）
    if (isLight) {
        // 浅色主题 → 黑色汉堡菜单
        hamburgerBtn.classList.add('dark-theme');
    } else {
        // 深色主题 → 白色汉堡菜单
        hamburgerBtn.classList.add('light-theme');
    }
}

// 页面加载完成后设置移动端事件
document.addEventListener('DOMContentLoaded', function() {
    setupMobileEvents();
    // 页面加载时也需要设置一次汉堡菜单颜色
    updateHamburgerColor();
    
    // 初始化广告轮播
    initAdCarousel();
    
    // 绑定关于我们按钮事件
    const menuAboutBtn = document.getElementById('menu-about');
    if (menuAboutBtn) {
        menuAboutBtn.onclick = function() {
            closeMoreMenu();
            openAboutModal();
        };
    }
    
    // 监听页面可见性变化，防止页面失去焦点后数据消失
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            console.log('页面重新可见，重新渲染');
            renderAll();
            // 重新启动广告轮播
            if (adInterval) clearInterval(adInterval);
            startAdCarousel();
        } else {
            // 页面不可见时停止轮播，节省资源
            if (adInterval) clearInterval(adInterval);
        }
    });
    
    // 监听窗口获得焦点
    window.addEventListener('focus', function() {
        console.log('窗口获得焦点，确保数据显示正常');
        renderAll();
        // 重新启动广告轮播
        if (adInterval) clearInterval(adInterval);
        startAdCarousel();
    });
});

// 计算累计完成的卡片数量
function calculateTotalCompletedCards() {
    let total = 0;
    const allBoards = [...data.boards, ...data.completedBoards, ...data.discardedBoards];
    
    allBoards.forEach((board) => {
        if (board.columnConfig) {
            board.columnConfig.forEach(col => {
                const cards = board.columns[col.id] || [];
                cards.forEach(card => {
                    // 如果板块是isDone，无论有没有completedAt都算完成
                    if (col.isDone || card.completedAt) {
                        total++;
                    }
                });
            });
        }
    });
    
    return total;
}

// 检查并更新徽章
function checkAndUpdateBadges() {
    const currentTotal = calculateTotalCompletedCards();
    data.totalCompletedCards = currentTotal;
    
    console.log('检查徽章 - 当前完成总数:', currentTotal);
    console.log('检查徽章 - 已获得徽章:', data.earnedBadges);
    
    // 当完成6个任务时，开始预加载徽章图片
    if (currentTotal >= 6 && !badgeImagesPreloaded) {
        console.log('完成6个任务，开始预加载徽章图片');
        preloadBadgeImages();
    }
    
    const newBadges = [];
    
    for (const milestone of BADGE_MILESTONES) {
        if (currentTotal >= milestone && !data.earnedBadges.includes(milestone)) {
            data.earnedBadges.push(milestone);
            newBadges.push(milestone);
            console.log('获得新徽章:', milestone);
        }
    }
    
    console.log('检查徽章 - 新获得徽章:', newBadges);
    
    // 只要有徽章变化就保存
    saveToStorage();
    
    if (newBadges.length > 0) {
        // 按从小到大的顺序依次显示弹窗
        showBadgeModalSequence(newBadges.sort((a, b) => a - b), 0);
    } else {
        // 如果没有新徽章，直接渲染
        renderBadges();
    }
}

// 依次显示徽章弹窗
function showBadgeModalSequence(badges, index) {
    if (index >= badges.length) {
        renderBadges();
        return;
    }
    
    const modal = document.getElementById('badge-modal');
    const badgeIconContainer = document.getElementById('badge-modal-icon');
    const badgeTitle = document.getElementById('badge-modal-title');
    const badgeText = document.getElementById('badge-modal-text');
    const closeBtn = document.getElementById('badge-close-btn');
    const closeSpan = modal.querySelector('.close');
    
    const milestone = badges[index];
    badgeIconContainer.innerHTML = `<img src="${getBadgeImageUrl(milestone)}" alt="${milestone}徽章">`;
    const badgeName = getBadgeName(milestone);
    badgeTitle.innerHTML = t('badgeModalTitle').replace('{name}', badgeName);
    badgeText.innerHTML = getBadgeEncouragement(milestone).replace(/\n/g, '<br>');
    closeBtn.innerHTML = t('badgeModalBtn');
    
    modal.classList.add('show');
    
    const closeHandler = function() {
        modal.classList.remove('show');
        // 移除事件监听器
        closeBtn.removeEventListener('click', closeHandler);
        closeSpan.removeEventListener('click', closeHandler);
        window.removeEventListener('click', windowClickHandler);
        
        // 显示下一个徽章
        setTimeout(() => {
            showBadgeModalSequence(badges, index + 1);
        }, 100);
    };
    
    const windowClickHandler = function(event) {
        if (event.target === modal) {
            closeHandler();
        }
    };
    
    closeBtn.addEventListener('click', closeHandler);
    closeSpan.addEventListener('click', closeHandler);
    window.addEventListener('click', windowClickHandler);
}

// 显示徽章弹窗（保留用于单个徽章的情况）
function showBadgeModal(milestone) {
    showBadgeModalSequence([milestone], 0);
}

// 渲染已获得的徽章
function renderBadges() {
    const badgesContainer = document.getElementById('badges-container');
    
    console.log('渲染徽章 - 容器:', badgesContainer);
    console.log('渲染徽章 - data.earnedBadges:', data.earnedBadges);
    
    if (!badgesContainer) return;
    
    badgesContainer.innerHTML = '';
    
    // 按从大到小的顺序显示（从左到右是100、50、10），也就是从右到左是10、50、100
    const sortedBadges = [...data.earnedBadges].sort((a, b) => b - a);
    
    console.log('渲染徽章 - 排序后的徽章:', sortedBadges);
    
    sortedBadges.forEach(milestone => {
        const badgeImg = document.createElement('img');
        badgeImg.className = 'badge-icon';
        badgeImg.src = getBadgeImageUrl(milestone);
        const badgeName = getBadgeName(milestone);
        badgeImg.alt = badgeName;
        badgeImg.title = t('badgeTooltip').replace('{name}', badgeName).replace('{count}', milestone);
        badgeImg.style.cursor = 'pointer';
        badgeImg.addEventListener('click', showBadgeInfoModal);
        badgesContainer.appendChild(badgeImg);
    });
}

// 预加载所有徽章图片到localStorage
let badgeImagesPreloaded = false; // 标记是否已经预加载过

function preloadBadgeImages() {
    if (badgeImagesPreloaded) {
        return;
    }
    
    badgeImagesPreloaded = true;
    
    BADGE_MILESTONES.forEach(function(milestone) {
        const storageKey = `badge_img_${milestone}`;
        
        // 检查是否已经预加载过
        if (localStorage.getItem(storageKey)) {
            return; // 已经存在，跳过
        }
        
        // 加载图片并转为base64存储
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const base64 = canvas.toDataURL('image/png');
                localStorage.setItem(storageKey, base64);
            } catch (e) {
                console.log('徽章图片预加载失败:', milestone, e);
            }
        };
        img.onerror = function() {
            console.log('徽章图片加载失败:', milestone);
        };
        img.src = `images/${milestone}.png`;
    });
}

// 获取徽章图片URL，优先使用预加载的
function getBadgeImageUrl(milestone) {
    const storageKey = `badge_img_${milestone}`;
    const cached = localStorage.getItem(storageKey);
    if (cached) {
        return cached;
    }
    return `images/${milestone}.png`;
}

// 计算所有看板的总卡片数
function calculateTotalCards() {
    let totalCards = 0;
    
    // 遍历所有普通看板
    data.boards.forEach(board => {
        if (board.columns) {
            Object.values(board.columns).forEach(cards => {
                totalCards += cards.length;
            });
        }
    });
    
    // 遍历完成看板
    data.completedBoards.forEach(board => {
        if (board.columns) {
            Object.values(board.columns).forEach(cards => {
                totalCards += cards.length;
            });
        }
    });
    
    // 遍历舍弃看板
    data.discardedBoards.forEach(board => {
        if (board.columns) {
            Object.values(board.columns).forEach(cards => {
                totalCards += cards.length;
            });
        }
    });
    
    return totalCards;
}

// 显示徽章介绍弹窗
function showBadgeInfoModal() {
    const modal = document.getElementById('badge-info-modal');
    const badgeInfoList = document.getElementById('badge-info-list');
    
    if (!modal || !badgeInfoList) return;
    
    badgeInfoList.innerHTML = '';
    
    // 添加统计信息
    const totalCards = calculateTotalCards();
    const totalCompleted = calculateTotalCompletedCards();
    
    const statsDiv = document.createElement('div');
    statsDiv.className = 'badge-stats';
    
    const statsTitle = document.createElement('h3');
    statsTitle.className = 'badge-stats-title';
    statsTitle.innerHTML = t('badgeStatsTitle');
    
    const totalCardsDiv = document.createElement('div');
    totalCardsDiv.className = 'badge-stat-item';
    totalCardsDiv.innerHTML = `<span class="stat-label">${t('badgeTotalCards')}</span><span class="stat-value">${totalCards}</span>`;
    
    const totalCompletedDiv = document.createElement('div');
    totalCompletedDiv.className = 'badge-stat-item';
    totalCompletedDiv.innerHTML = `<span class="stat-label">${t('badgeTotalCompleted')}</span><span class="stat-value">${totalCompleted}</span>`;
    
    statsDiv.appendChild(statsTitle);
    statsDiv.appendChild(totalCardsDiv);
    statsDiv.appendChild(totalCompletedDiv);
    badgeInfoList.appendChild(statsDiv);
    
    BADGE_MILESTONES.forEach(milestone => {
        const isEarned = data.earnedBadges.includes(milestone);
        
        const itemDiv = document.createElement('div');
        itemDiv.className = `badge-info-item ${isEarned ? 'earned' : 'not-earned'}`;
        
        const iconImg = document.createElement('img');
        iconImg.className = 'badge-info-icon';
        iconImg.src = getBadgeImageUrl(milestone);
        iconImg.alt = `${milestone}徽章`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'badge-info-content';
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'badge-info-header';
        
        const titleH3 = document.createElement('h3');
        titleH3.className = 'badge-info-title';
        titleH3.innerHTML = getBadgeName(milestone);
        
        const statusSpan = document.createElement('span');
        statusSpan.className = `badge-info-status ${isEarned ? 'earned' : 'not-earned'}`;
        statusSpan.innerHTML = isEarned ? t('badgeEarned') : t('badgeNotEarned');
        
        headerDiv.appendChild(titleH3);
        headerDiv.appendChild(statusSpan);
        
        const requirementP = document.createElement('p');
        requirementP.className = 'badge-info-requirement';
        requirementP.innerHTML = t('badgeRequirement').replace('{count}', milestone);
        
        const encouragementP = document.createElement('p');
        encouragementP.className = 'badge-info-encouragement';
        encouragementP.innerHTML = getBadgeEncouragement(milestone).replace(/\n/g, '<br>');
        
        contentDiv.appendChild(headerDiv);
        contentDiv.appendChild(requirementP);
        contentDiv.appendChild(encouragementP);
        
        itemDiv.appendChild(iconImg);
        itemDiv.appendChild(contentDiv);
        
        badgeInfoList.appendChild(itemDiv);
    });
    
    modal.classList.add('show');
    
    // 添加关闭事件
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.classList.remove('show');
        };
    }
    
    // 点击遮罩关闭
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    };
}

// ====================== 广告轮播相关 ======================
let currentAdIndex = 0;
let adInterval = null;

// 默认广告数据
const DEFAULT_ADS = [
    {
        text: '🎉 欢迎使用 TaskBoard - 您的高效任务管理工具！',
        link: 'https://www.bilibili.com'
    },
    {
        text: '💡 提示：创建多个看板可以更好地组织工作和生活',
        link: 'https://www.bilibili.com'
    },
    {
        text: '🚀 建议：使用主题颜色让您的看板更加个性化',
        link: 'https://www.bilibili.com'
    },
    {
        text: '🌟 提示：完成任务可以获得精美徽章奖励！',
        link: 'https://www.bilibili.com'
    },
    {
        text: '📱 移动端支持：在手机上也能顺畅使用',
        link: 'https://www.bilibili.com'
    },
    {
        text: '🎯 目标：每天完成几个小任务，实现大目标',
        link: 'https://www.bilibili.com'
    },
    {
        text: '🔄 同步：您的数据安全保存在浏览器本地存储中',
        link: 'https://www.bilibili.com'
    },
    {
        text: '💪 加油：坚持使用，效率提升看得见！',
        link: 'https://www.bilibili.com'
    },
    {
        text: '✨ 技巧：可以拖动卡片到不同的看板中',
        link: 'https://www.bilibili.com'
    },
    {
        text: '🎨 配色：选择合适的颜色让工作心情更愉悦',
        link: 'https://www.bilibili.com'
    }
];

// 广告数据
let ADS = [...DEFAULT_ADS];

// 加载广告数据
function loadAds() {
    try {
        const savedAds = localStorage.getItem('dodo-kanban-ads');
        if (savedAds) {
            const parsedAds = JSON.parse(savedAds);
            if (Array.isArray(parsedAds) && parsedAds.length > 0) {
                ADS = parsedAds;
            }
        }
    } catch (e) {
        console.error('加载广告数据失败:', e);
    }
}

// 保存广告数据
function saveAds() {
    try {
        localStorage.setItem('dodo-kanban-ads', JSON.stringify(ADS));
    } catch (e) {
        console.error('保存广告数据失败:', e);
    }
}

function initAdCarousel() {
    // 加载保存的广告数据
    loadAds();
    
    const adTrack = document.getElementById('ad-track');
    if (!adTrack) return;
    
    // 渲染广告
    adTrack.innerHTML = '';
    ADS.forEach(ad => {
        const div = document.createElement('div');
        div.className = 'ad-item';
        
        const a = document.createElement('a');
        a.href = ad.link;
        a.target = '_blank';
        a.textContent = ad.text;
        
        div.appendChild(a);
        adTrack.appendChild(div);
    });
    
    // 开始轮播
    startAdCarousel();
}

function startAdCarousel() {
    if (adInterval) clearInterval(adInterval);
    
    adInterval = setInterval(() => {
        currentAdIndex = (currentAdIndex + 1) % ADS.length;
        updateAdCarousel();
    }, 5000);
}

function updateAdCarousel() {
    const adTrack = document.getElementById('ad-track');
    if (!adTrack) return;
    adTrack.style.transform = `translateY(-${currentAdIndex * 40}px)`;
}

// ====================== 语言选择相关 ======================
function openLanguageModal() {
    const modal = document.getElementById('language-modal');
    if (!modal) return;
    
    // 渲染语言列表
    renderLanguageList();
    
    modal.classList.add('show');
    
    // 绑定关闭事件
    const closeBtn = modal.querySelector('.close');
    const backBtn = document.getElementById('back-from-language-btn');
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.classList.remove('show');
        };
    }
    
    if (backBtn) {
        backBtn.onclick = function() {
            modal.classList.remove('show');
        };
    }
    
    // 点击遮罩关闭
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    };
}

function renderLanguageList() {
    const container = document.getElementById('language-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    const languages = ['zh-CN', 'zh-TW', 'en-US', 'ja-JP', 'ko-KR', 'fr-FR', 'de-DE', 'es-ES'];
    
    languages.forEach(lang => {
        const div = document.createElement('div');
        div.className = 'language-option' + (lang === currentLang ? ' active' : '');
        div.textContent = t(lang);
        div.onclick = function() {
            setLanguage(lang);
            document.getElementById('language-modal').classList.remove('show');
        };
        container.appendChild(div);
    });
}

// ====================== 关于我们相关 ======================
function openAboutModal() {
    const modal = document.getElementById('about-modal');
    if (!modal) return;
    modal.classList.add('show');
    
    // 绑定关闭事件
    const closeBtn = modal.querySelector('.close');
    const backBtn = document.getElementById('back-from-about-btn');
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.classList.remove('show');
        };
    }
    
    if (backBtn) {
        backBtn.onclick = function() {
            modal.classList.remove('show');
        };
    }
    
    // 点击遮罩关闭
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    };
}

// ====================== 事件绑定扩展 ======================
// 这个函数保留用于向后兼容，但实际初始化在DOMContentLoaded中完成
function setupEventListeners() {
    // 关于我们按钮
    const menuAboutBtn = document.getElementById('menu-about');
    if (menuAboutBtn) {
        menuAboutBtn.onclick = function() {
            closeMoreMenu();
            openAboutModal();
        };
    }
}
