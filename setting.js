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
    }
];

// 广告数据
let ADS = [...DEFAULT_ADS];

// 徽章数据
const BADGE_MILESTONES = [10, 50, 100, 200, 300, 500, 1000, 5000, 10000, 100000];

const BADGE_NAMES = {
    10: '披星戴月',
    50: '新手宝宝',
    100: '机敏之狐',
    200: '可爱赤兔',
    300: '跳跃袋鼠',
    500: '忠诚狗狗',
    1000: '聪慧海豚',
    5000: '喵了个咪',
    10000: '森林之鹿',
    100000: '知行合一'
};

const BADGE_ICONS = {
    10: '⭐',
    50: '🎈',
    100: '🦊',
    200: '🐰',
    300: '🦘',
    500: '🐕',
    1000: '🐬',
    5000: '🐱',
    10000: '🦌',
    100000: '🏆'
};

// 从ads.json加载广告数据
async function loadAds() {
    try {
        const response = await fetch('ads.json');
        if (response.ok) {
            const parsedAds = await response.json();
            if (Array.isArray(parsedAds) && parsedAds.length > 0) {
                ADS = parsedAds;
                console.log('成功从ads.json加载广告数据:', ADS);
            }
        } else {
            console.warn('无法加载ads.json，使用默认广告数据');
            // 如果加载失败，尝试从localStorage加载作为备用
            loadAdsFromLocalStorage();
        }
    } catch (e) {
        console.warn('加载ads.json失败，使用默认广告数据:', e);
        // 如果加载失败，尝试从localStorage加载作为备用
        loadAdsFromLocalStorage();
    }
}

// 从localStorage加载广告数据（备用方案）
function loadAdsFromLocalStorage() {
    try {
        const savedAds = localStorage.getItem('dodo-kanban-ads');
        if (savedAds) {
            const parsedAds = JSON.parse(savedAds);
            if (Array.isArray(parsedAds) && parsedAds.length > 0) {
                ADS = parsedAds;
                console.log('从localStorage加载广告数据:', ADS);
            }
        }
    } catch (e) {
        console.error('加载广告数据失败:', e);
    }
}

// 下载ads.json文件
function downloadAdsJson() {
    try {
        const jsonStr = JSON.stringify(ADS, null, 4);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ads.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showMessage('ads.json已下载，请替换原文件！');
    } catch (e) {
        console.error('下载ads.json失败:', e);
        showMessage('下载失败，请重试！');
    }
}

// 渲染广告列表
function renderAdList() {
    const container = document.getElementById('ad-list-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    ADS.forEach((ad, index) => {
        const div = document.createElement('div');
        div.className = 'ad-item-edit';
        
        div.innerHTML = `
            <h4>广告 ${index + 1}</h4>
            <div class="form-group">
                <label>广告文字：</label>
                <input type="text" id="ad-text-${index}" value="${ad.text}" placeholder="输入广告文字">
            </div>
            <div class="form-group">
                <label>链接地址：</label>
                <input type="text" id="ad-link-${index}" value="${ad.link}" placeholder="输入链接地址">
            </div>
        `;
        
        container.appendChild(div);
    });
}

// 保存广告设置
function saveAdSettings() {
    ADS = ADS.map((ad, index) => {
        const textInput = document.getElementById(`ad-text-${index}`);
        const linkInput = document.getElementById(`ad-link-${index}`);
        
        return {
            text: textInput ? textInput.value : ad.text,
            link: linkInput ? linkInput.value : ad.link
        };
    });
    
    // 同时保存到localStorage和下载文件
    try {
        localStorage.setItem('dodo-kanban-ads', JSON.stringify(ADS));
    } catch (e) {
        console.error('保存到localStorage失败:', e);
    }
    
    // 提示用户下载
    if (confirm('广告设置已修改！是否下载新的ads.json文件？')) {
        downloadAdsJson();
    } else {
        showMessage('广告设置已保存到本地存储！');
    }
}

// 重置广告
function resetAds() {
    if (confirm('确定要恢复默认广告设置吗？')) {
        ADS = [...DEFAULT_ADS];
        try {
            localStorage.setItem('dodo-kanban-ads', JSON.stringify(ADS));
        } catch (e) {
            console.error('保存到localStorage失败:', e);
        }
        renderAdList();
        if (confirm('是否下载默认的ads.json文件？')) {
            downloadAdsJson();
        } else {
            showMessage('广告设置已恢复默认！');
        }
    }
}

// 加载徽章数据
function loadBadgeData() {
    try {
        const savedData = localStorage.getItem('dodo-kanban-data');
        if (savedData) {
            const data = JSON.parse(savedData);
            return {
                earnedBadges: data.earnedBadges || [],
                totalCompletedCards: data.totalCompletedCards || 0
            };
        }
    } catch (e) {
        console.error('加载徽章数据失败:', e);
    }
    return { earnedBadges: [], totalCompletedCards: 0 };
}

// 保存徽章数据
function saveBadgeData(earnedBadges, totalCompletedCards) {
    try {
        const savedData = localStorage.getItem('dodo-kanban-data');
        let data = {};
        if (savedData) {
            data = JSON.parse(savedData);
        }
        data.earnedBadges = earnedBadges;
        data.totalCompletedCards = totalCompletedCards;
        localStorage.setItem('dodo-kanban-data', JSON.stringify(data));
    } catch (e) {
        console.error('保存徽章数据失败:', e);
    }
}

// 渲染徽章列表
function renderBadgeList() {
    const container = document.getElementById('badge-list-container');
    if (!container) return;
    
    const { earnedBadges, totalCompletedCards } = loadBadgeData();
    
    container.innerHTML = '';
    
    BADGE_MILESTONES.forEach(milestone => {
        const isEarned = earnedBadges.includes(milestone);
        const div = document.createElement('div');
        div.className = `badge-item${isEarned ? '' : ' locked'}`;
        div.dataset.milestone = milestone;
        
        div.innerHTML = `
            <div class="badge-icon">${BADGE_ICONS[milestone]}</div>
            <div class="badge-name">${BADGE_NAMES[milestone]}</div>
            <div class="badge-milestone">
                ${isEarned ? `已达成 ${milestone} 任务` : `需要 ${milestone} 任务解锁`}
            </div>
        `;
        
        div.onclick = function() {
            toggleBadge(milestone);
        };
        
        container.appendChild(div);
    });
}

// 切换徽章解锁/锁定状态
function toggleBadge(milestone) {
    let { earnedBadges, totalCompletedCards } = loadBadgeData();
    
    const index = earnedBadges.indexOf(milestone);
    if (index > -1) {
        earnedBadges.splice(index, 1);
        showMessage(`徽章「${BADGE_NAMES[milestone]}」已锁定`);
    } else {
        earnedBadges.push(milestone);
        if (totalCompletedCards < milestone) {
            totalCompletedCards = milestone;
        }
        showMessage(`徽章「${BADGE_NAMES[milestone]}」已解锁`);
    }
    
    saveBadgeData(earnedBadges, totalCompletedCards);
    renderBadgeList();
}

// 解锁全部徽章
function unlockAllBadges() {
    const { totalCompletedCards } = loadBadgeData();
    const newEarnedBadges = [...BADGE_MILESTONES];
    const newTotal = Math.max(totalCompletedCards, BADGE_MILESTONES[BADGE_MILESTONES.length - 1]);
    
    saveBadgeData(newEarnedBadges, newTotal);
    renderBadgeList();
    showMessage('所有徽章已解锁！');
}

// 重置全部徽章
function resetAllBadges() {
    if (confirm('确定要重置所有徽章吗？')) {
        saveBadgeData([], 0);
        renderBadgeList();
        showMessage('所有徽章已重置！');
    }
}

// 显示消息
function showMessage(text) {
    const existing = document.querySelector('.message-popup');
    if (existing) existing.remove();
    
    const popup = document.createElement('div');
    popup.className = 'message-popup';
    popup.textContent = text;
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// 初始化
async function init() {
    // 加载广告数据
    await loadAds();
    
    // 渲染广告列表
    renderAdList();
    
    // 渲染徽章列表
    renderBadgeList();
    
    // 绑定返回按钮
    const backBtn = document.getElementById('back-to-index-btn');
    if (backBtn) {
        backBtn.onclick = function() {
            window.location.href = 'index.html';
        };
    }
    
    // 绑定广告相关按钮
    const saveAdsBtn = document.getElementById('save-ads-btn');
    const resetAdsBtn = document.getElementById('reset-ads-btn');
    
    if (saveAdsBtn) {
        saveAdsBtn.onclick = saveAdSettings;
    }
    
    if (resetAdsBtn) {
        resetAdsBtn.onclick = resetAds;
    }
    
    // 绑定徽章相关按钮
    const unlockAllBtn = document.getElementById('unlock-all-badges-btn');
    const resetAllBtn = document.getElementById('reset-all-badges-btn');
    
    if (unlockAllBtn) {
        unlockAllBtn.onclick = unlockAllBadges;
    }
    
    if (resetAllBtn) {
        resetAllBtn.onclick = resetAllBadges;
    }
}

document.addEventListener('DOMContentLoaded', init);
