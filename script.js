const STORAGE_KEY = 'dodo-kanban-data';
const COLORS_STORAGE_KEY = 'dodo-kanban-colors';
const TUTORIAL_KEY = 'dodo-tutorial-completed';
const THEME_STORAGE_KEY = 'dodo-kanban-theme';

const DEFAULT_COLORS = [
    '#ffffff', '#ffcccc', '#ffe0b2', '#fff9c4', '#dcedc8',
    '#b2ebf2', '#bbdefb', '#e1bee7', '#f8bbd9', '#e0e0e0'
];

const DEFAULT_THEME_COLORS = [
    '#667eea', '#9b59b6', '#e74c3c', '#e67e22', '#f1c40f',
    '#2ecc71', '#1abc9c', '#3498db', '#34495e', '#8e44ad'
];

let themeData = {
    appName: 'Dodo Kanban',
    primaryColor: '#667eea',
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
    templatePinned: true // 模板板块是否固定
};

let singleColumnView = {
    active: false,
    columnId: null,
    previousView: null
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

// 板块排序状态
let columnSortStates = {};
// 默认排序字段
const SORT_FIELDS = {
    'todo': 'createdAt',
    'template': 'createdAt',
    'inprogress': 'createdAt',
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
    { id: 'todo', name: '🎯待办', isDone: false },
    { id: 'template', name: '🧩模板', isDone: false },
    { id: 'inprogress', name: '🔥进行中', isDone: false },
    { id: 'done', name: '✅已完成', isDone: true }
];

// 页面加载完成后的初始化
window.onload = function() {
    console.log('页面加载完成，开始初始化...');
    
    // 强制清除旧数据，重新开始（临时调试用）
    // localStorage.clear();
    
    setupAllEventListeners();
    loadFromStorage();
    loadThemeFromStorage();
    
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

    const backFromCompletedBtn = document.getElementById('back-from-completed-btn');
    if (backFromCompletedBtn) {
        backFromCompletedBtn.onclick = function() {
            console.log('从完成看板返回');
            showMainView();
        };
    }

    const backFromDiscardedBtn = document.getElementById('back-from-discarded-btn');
    if (backFromDiscardedBtn) {
        backFromDiscardedBtn.onclick = function() {
            console.log('从舍弃看板返回');
            showMainView();
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

function openSingleColumnView(columnId) {
    console.log('打开单个板块视图:', columnId);
    
    // 保存当前视图状态
    singleColumnView.active = true;
    singleColumnView.columnId = columnId;
    
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
    
    let cards = currentBoard.columns[columnId] || [];
    // 排序卡片
    cards = sortCards(cards, columnId);
    
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
    countEl.textContent = cards.length;
    
    // 添加排序按钮
    const sortBtn = document.createElement('button');
    sortBtn.className = 'sort-btn';
    sortBtn.dataset.columnId = columnId;
    // 根据排序状态显示不同图标
    const currentState = columnSortStates[columnId];
    if (currentState === 'asc') {
        sortBtn.innerHTML = '↑';
        sortBtn.title = '正序排列（点击切换）';
    } else if (currentState === 'desc') {
        sortBtn.innerHTML = '↓';
        sortBtn.title = '倒序排列（点击切换）';
    } else {
        sortBtn.innerHTML = '⇅';
        sortBtn.title = '点击排序';
    }
    sortBtn.onclick = function(e) {
        e.stopPropagation();
        e.preventDefault();
        const btnColumnId = this.dataset.columnId;
        console.log('排序按钮被点击了:', btnColumnId, columnId);
        toggleSort(btnColumnId);
        // 重新打开视图来更新显示
        openSingleColumnView(columnId);
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
        addBtn.textContent = '+ 添加卡片';
        addBtn.onclick = function() {
            addCard(columnId);
        };
        // 把添加卡片按钮也放在卡片容器里，这样它会自动适应网格布局
        cardsContainer.appendChild(addBtn);
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
                    templatePinned: loadedData.templatePinned !== undefined ? loadedData.templatePinned : true
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
        // 保存迁移后的数据
        saveToStorage();
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
    
    const migrated = {
        id: board.id,
        name: board.name,
        columnConfig: [...DEFAULT_COLUMNS],
        columns: {},
        parentFolderId: board.parentFolderId || null // 保留文件夹关系
    };
    
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
                        // 如果是paused板块，迁移到template
                        if (key === 'paused') {
                            migrated.columns['template'] = board.columns[key];
                        } else {
                            migrated.columns[key] = board.columns[key];
                        }
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
    
    // 创建阅读看板
    const readingBoard = {
        id: generateId(),
        name: '阅读',
        columnConfig: JSON.parse(JSON.stringify(DEFAULT_COLUMNS)),
        columns: {},
        parentFolderId: null // 看板所在的文件夹ID
    };
    
    // 初始化各板块卡片
    readingBoard.columns['todo'] = [
        { id: generateId(), content: '读完《JavaScript高级程序设计》', color: '#ffcccc', createdAt: getTodayString(), pausedAt: null, completedAt: null },
        { id: generateId(), content: '学习CSS Grid布局', color: '#fff3cd', createdAt: getTodayString(), pausedAt: null, completedAt: null }
    ];
    readingBoard.columns['template'] = [
        { id: generateId(), content: '每天阅读30分钟', color: '#ffe0b2', createdAt: '2026-05-18', pausedAt: null, completedAt: null }
    ];
    readingBoard.columns['inprogress'] = [
        { id: generateId(), content: '学习React Hooks', color: '#fff9c4', createdAt: '2026-05-19', pausedAt: null, completedAt: null }
    ];
    readingBoard.columns['done'] = [
        { id: generateId(), content: '完成HTML基础学习', color: '#d4edda', createdAt: '2026-05-15', pausedAt: null, completedAt: '2026-05-18' }
    ];
    
    // 创建运动看板
    const exerciseBoard = {
        id: generateId(),
        name: '运动',
        columnConfig: JSON.parse(JSON.stringify(DEFAULT_COLUMNS)),
        columns: {},
        parentFolderId: null // 看板所在的文件夹ID
    };
    
    exerciseBoard.columns['todo'] = [
        { id: generateId(), content: '跑步5公里', color: '#dcedc8', createdAt: getTodayString(), pausedAt: null, completedAt: null },
        { id: generateId(), content: '做30个俯卧撑', color: '#b2ebf2', createdAt: getTodayString(), pausedAt: null, completedAt: null }
    ];
    exerciseBoard.columns['template'] = [
        { id: generateId(), content: '晨跑3公里', color: '#e1bee7', createdAt: '2026-05-19', pausedAt: null, completedAt: null },
        { id: generateId(), content: '俯卧撑30个', color: '#e1bee7', createdAt: '2026-05-19', pausedAt: null, completedAt: null }
    ];
    exerciseBoard.columns['inprogress'] = [
        { id: generateId(), content: '跳绳1000下', color: '#e1bee7', createdAt: '2026-05-19', pausedAt: null, completedAt: null }
    ];
    exerciseBoard.columns['done'] = [
        { id: generateId(), content: '完成晨跑3公里', color: '#d4edda', createdAt: '2026-05-17', pausedAt: null, completedAt: '2026-05-18' }
    ];
    
    data.boards = [readingBoard, exerciseBoard];
    // 初始化boardItems - 左侧列表项
    data.boardItems = [
        { type: 'board', id: readingBoard.id, order: 0, parentFolderId: null },
        { type: 'board', id: exerciseBoard.id, order: 1, parentFolderId: null }
    ];
    data.folders = [];
    data.expandedFolders = [];
    data.templatePinned = true;
    data.currentBoardId = readingBoard.id;
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

    // 渲染所有板块
    currentBoard.columnConfig.forEach(function(colConfig) {
        const columnEl = createColumnElement(colConfig, currentBoard);
        container.appendChild(columnEl);
    });
    
    // 添加新板块的按钮
    const addBtn = document.createElement('div');
    addBtn.className = 'add-column-btn';
    addBtn.innerHTML = `
        <div class="add-icon">+</div>
        <div>添加板块</div>
    `;
    addBtn.onclick = function() {
        addNewColumn();
    };
    container.appendChild(addBtn);
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
    
    // 添加图钉按钮（仅在模板板块上）
    let pinBtn = null;
    if (colConfig.id === 'template') {
        pinBtn = document.createElement('button');
        pinBtn.className = 'pin-btn';
        pinBtn.title = data.templatePinned ? '固定模式（点击取消固定）' : '非固定模式（点击固定）';
        pinBtn.innerHTML = data.templatePinned ? '📍' : '📌';
        pinBtn.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
            data.templatePinned = !data.templatePinned;
            saveToStorage();
            renderCurrentBoard();
        };
    }
    
    // 添加排序按钮
    const sortBtn = document.createElement('button');
    sortBtn.className = 'sort-btn';
    sortBtn.dataset.columnId = colConfig.id; // 保存板块 id 以便调试
    // 根据排序状态显示不同图标
    const currentState = columnSortStates[colConfig.id];
    if (currentState === 'asc') {
        sortBtn.innerHTML = '↑';
        sortBtn.title = '正序排列（点击切换）';
    } else if (currentState === 'desc') {
        sortBtn.innerHTML = '↓';
        sortBtn.title = '倒序排列（点击切换）';
    } else {
        sortBtn.innerHTML = '⇅';
        sortBtn.title = '点击排序';
    }
    sortBtn.onclick = function(e) {
        e.stopPropagation(); // 阻止事件冒泡
        e.preventDefault(); // 阻止默认行为
        const btnColumnId = this.dataset.columnId;
        console.log('排序按钮被点击了:', btnColumnId, colConfig.id);
        toggleSort(btnColumnId);
    };
    
    // 创建右侧容器，放置图钉按钮（如果有）、排序按钮和统计数量
    const rightContainer = document.createElement('div');
    rightContainer.className = 'column-header-right';
    if (pinBtn) {
        rightContainer.appendChild(pinBtn);
    }
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
        addBtn.textContent = '+ 添加卡片';
        addBtn.onclick = function() {
            addCard(colConfig.id);
        };
        columnEl.appendChild(addBtn);
    }
    
    return columnEl;
}

function toggleSort(columnId) {
    console.log('toggleSort 被调用:', columnId);
    console.log('当前 board:', data.currentBoardId);
    console.log('所有 boards:', data.boards);
    
    // 获取当前排序状态
    if (!columnSortStates[columnId]) {
        columnSortStates[columnId] = 'desc'; // 默认倒序
    } else if (columnSortStates[columnId] === 'desc') {
        columnSortStates[columnId] = 'asc'; // 切换为正序
    } else {
        columnSortStates[columnId] = 'desc'; // 切换为倒序
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
    cardEl.style.backgroundColor = card.color || '#ffffff';

    let dateInfo = '';
    if (columnId === 'template') {
        // 模板板块只显示创建时间
        if (card.createdAt) {
            dateInfo += '<div class="card-date">创建：' + card.createdAt + '</div>';
        }
    } else {
        // 其他板块显示所有时间
        if (card.createdAt) {
            dateInfo += '<div class="card-date">创建：' + card.createdAt + '</div>';
        }
        if (card.pausedAt) {
            dateInfo += '<div class="card-date">暂停：' + card.pausedAt + '</div>';
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
            draggedCard = e.target;
            e.target.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        }
    };

    container.ondragend = function(e) {
        if (e.target.classList.contains('card')) {
            e.target.classList.remove('dragging');
            draggedCard = null;
        }
        removeDropIndicator();
    };

    container.ondragover = function(e) {
        e.preventDefault();
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
        if (!container.contains(e.relatedTarget)) {
            container.classList.remove('drag-over');
            removeDropIndicator();
        }
    };

    container.ondrop = function(e) {
        e.preventDefault();
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
        // 检查：如果目标是模板板块且是固定模式，拒绝移动
        if (targetColumnId === 'template' && data.templatePinned) {
            alert('固定模式下该板块拒绝其它卡片，请转为非固定模式后移动。');
            return;
        }

        // 处理模板板块的特殊逻辑
        if (sourceColumnId === 'template' && data.templatePinned) {
            // 固定模式下：复制卡片而不是移动，保留原卡片在模板板块
            const newCard = {
                id: generateId(),
                content: cardToMove.content,
                color: cardToMove.color,
                createdAt: getTodayString(),
                completedAt: null,
                pausedAt: null
            };
            
            // 不修改原卡片，只复制并添加到目标板块
            const targetCards = currentBoard.columns[targetColumnId] || [];
            if (insertIndex === -1 || insertIndex >= targetCards.length) {
                targetCards.push(newCard);
            } else {
                targetCards.splice(insertIndex, 0, newCard);
            }
            currentBoard.columns[targetColumnId] = targetCards;
        } else {
            // 非固定模式或非模板板块：正常移动
            // 先从原位置删除
            sourceCards.splice(sourceIndex, 1);
            
            // 更新日期（只有跨板块移动时才更新）
            if (sourceColumnId !== targetColumnId) {
                const targetConfig = currentBoard.columnConfig.find(function(c) { return c.id === targetColumnId; });
                if (targetConfig) {
                    if (targetConfig.isDone) {
                        cardToMove.completedAt = getTodayString();
                        cardToMove.pausedAt = null;
                    } else if (targetColumnId === 'template') {
                        // 移动到模板板块
                        cardToMove.pausedAt = null;
                        cardToMove.completedAt = null;
                    } else {
                        cardToMove.pausedAt = null;
                        cardToMove.completedAt = null;
                    }
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
        renderBoardList();  // 更新看板列表统计
        renderCurrentBoard();
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
        '<div class="stat-card todo"><h4>待办</h4><div class="stat-number ' + (stats.totalTodo === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTodo + '</div></div>' +
        '<div class="stat-card paused"><h4>模板</h4><div class="stat-number ' + (stats.totalTemplate === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTemplate + '</div></div>' +
        '<div class="stat-card inprogress"><h4>进行中</h4><div class="stat-number ' + (stats.totalInprogress === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalInprogress + '</div></div>' +
        '<div class="stat-card done"><h4>已完成</h4><div class="stat-number ' + (stats.totalDone === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalDone + '</div></div>' +
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
        '<div class="stat-card todo"><h4>待办</h4><div class="stat-number ' + (stats.totalTodo === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTodo + '</div></div>' +
        '<div class="stat-card paused"><h4>模板</h4><div class="stat-number ' + (stats.totalTemplate === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTemplate + '</div></div>' +
        '<div class="stat-card inprogress"><h4>进行中</h4><div class="stat-number ' + (stats.totalInprogress === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalInprogress + '</div></div>' +
        '<div class="stat-card done"><h4>已完成</h4><div class="stat-number ' + (stats.totalDone === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalDone + '</div></div>' +
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
        '<div class="stat-card todo"><h4>待办</h4><div class="stat-number ' + (stats.totalTodo === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTodo + '</div></div>' +
        '<div class="stat-card paused"><h4>模板</h4><div class="stat-number ' + (stats.totalTemplate === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalTemplate + '</div></div>' +
        '<div class="stat-card inprogress"><h4>进行中</h4><div class="stat-number ' + (stats.totalInprogress === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalInprogress + '</div></div>' +
        '<div class="stat-card done"><h4>已完成</h4><div class="stat-number ' + (stats.totalDone === 0 ? 'value-zero' : 'value-non-zero') + '">' + stats.totalDone + '</div></div>' +
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
    if (!currentBoard) return { totalTodo: 0, totalTemplate:0, totalInprogress:0, totalDone: 0, days: [] };

    let totalTodo = 0, totalTemplate = 0, totalInprogress = 0, totalDone = 0;
    currentBoard.columnConfig.forEach(function(colConfig) {
        const count = (currentBoard.columns[colConfig.id] || []).length;
        if (colConfig.id === 'todo') totalTodo = count;
        else if (colConfig.id === 'template') totalTemplate = count;
        else if (colConfig.id === 'inprogress') totalInprogress = count;
        else if (colConfig.id === 'done') totalDone = count;
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

    return { totalTodo, totalTemplate, totalInprogress, totalDone, days };
}

function getMonthStats() {
    const currentBoard = data.boards.find(function(b) { return b.id === data.currentBoardId; });
    if (!currentBoard) return { totalTodo: 0, totalTemplate:0, totalInprogress:0, totalDone: 0, weeks: [] };

    let totalTodo = 0, totalTemplate = 0, totalInprogress = 0, totalDone = 0;
    currentBoard.columnConfig.forEach(function(colConfig) {
        const count = (currentBoard.columns[colConfig.id] || []).length;
        if (colConfig.id === 'todo') totalTodo = count;
        else if (colConfig.id === 'template') totalTemplate = count;
        else if (colConfig.id === 'inprogress') totalInprogress = count;
        else if (colConfig.id === 'done') totalDone = count;
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

    return { totalTodo, totalTemplate, totalInprogress, totalDone, weeks };
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
    if (!currentBoard) return { totalTodo: 0, totalTemplate:0, totalInprogress:0, totalDone: 0, months: [] };

    let totalTodo = 0, totalTemplate = 0, totalInprogress = 0, totalDone = 0;
    currentBoard.columnConfig.forEach(function(colConfig) {
        const count = (currentBoard.columns[colConfig.id] || []).length;
        if (colConfig.id === 'todo') totalTodo = count;
        else if (colConfig.id === 'template') totalTemplate = count;
        else if (colConfig.id === 'inprogress') totalInprogress = count;
        else if (colConfig.id === 'done') totalDone = count;
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

    return { totalTodo, totalTemplate, totalInprogress, totalDone, months };
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
        titleEl.textContent = '新建看板';
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
    const pausedDateEl = document.getElementById('card-paused-date');
    const completedDateEl = document.getElementById('card-completed-date');
    const deleteBtn = document.getElementById('delete-card-btn');
    const titleEl = modal.querySelector('h2');

    if (!modal) return;
    
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
            if (pausedDateEl) pausedDateEl.textContent = card.pausedAt || '-';
            if (completedDateEl) completedDateEl.textContent = card.completedAt || '-';
            
            if (deleteBtn) deleteBtn.style.display = 'inline-block';
            if (titleEl) titleEl.textContent = '编辑卡片';

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
        if (pausedDateEl) pausedDateEl.textContent = columnId === 'paused' ? getTodayString() : '-';
        if (completedDateEl) completedDateEl.textContent = '-';
        
        if (deleteBtn) deleteBtn.style.display = 'none';
        if (titleEl) titleEl.textContent = '添加卡片';

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
                    pausedAt: columnId === 'paused' ? getTodayString() : null,
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
        
        // 删除配置和数据
        currentBoard.columnConfig = currentBoard.columnConfig.filter(function(c) { 
            return c.id !== currentEditingColumn; 
        });
        delete currentBoard.columns[currentEditingColumn];
        
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
        isDone: false
    };
    
    currentBoard.columnConfig.push(newConfig);
    currentBoard.columns[newId] = [];
    
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
            title: '欢迎来到Dodo Kanban！',
            text: 'Dodo Kanban 是一个简单高效的项目管理工具，帮助您更好地组织任务和追踪进度。',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text-to-image?prompt=friendly%20project%20management%20dashboard%20interface&image-size=square'
        },
        {
            title: '管理您的看板',
            text: '左侧侧边栏显示您的所有看板，您可以点击切换，也可以长按进行重命名或删除。点击顶部标题可以修改主题！',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text-to-image?prompt=sidebar%20with%20kanban%20board%20list&image-size=square'
        },
        {
            title: '添加和移动卡片',
            text: '点击"+添加卡片"按钮可以创建新卡片，然后可以通过拖拽来移动卡片到不同板块。移动到"完成"板块会自动记录完成日期！点击板块标题可以重命名板块！',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text-to-image?prompt=drag%20and%20drop%20cards%20between%20kanban%20columns&image-size=square'
        },
        {
            title: '查看统计和添加板块',
            text: '点击顶部的"周视图"或"月视图"可以查看任务统计。在所有板块的最后有"+添加板块"按钮，点击后可以添加新的自定义板块！',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text-to-image?prompt=weekly%20and%20monthly%20statistics%20dashboard&image-size=square'
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
        let targetCol = 'todo';
        if (card.completedAt) {
            targetCol = 'done';
        } else if (card.pausedAt) {
            targetCol = 'paused';
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
        html += '<h3 style="margin-bottom: 10px; color: #333;">看板列表</h3>';
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
    
    // 标题始终显示"看板列表"
    if (boardListTitle) {
        boardListTitle.textContent = '看板列表';
    }
    
    boardList.innerHTML = '';
    
    // 渲染根级别的项目（文件夹和看板）
    renderBoardItems(boardList, null, 0);
    
    // 设置拖放功能
    setupBoardListDragAndDrop();
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
    folderItem.style.paddingLeft = (level * 16) + 'px';
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
    
    // 长按事件
    let folderLongPressTimer = null;
    folderItem.onmousedown = function(e) {
        isDraggingBoardListItem = false;
        folderLongPressTimer = setTimeout(function() {
            openFolderLongPressModal(folder.id);
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
    boardItem.style.paddingLeft = (level * 16) + 'px';
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
            currentLongPressBoardId = board.id;
            openLongPressModal();
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
});
