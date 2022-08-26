import './index.css';

// ---------------共用 lsit---------------
const me = {
    name: '浩安',
    imageUrl: require('./assets/images/logo/Me.jpg'),
};

const friend = [
    {
        name: 'CofCat',
        online: true,
        imageUrl: require('./assets/images/logo/CofCat.jpg'),
        isStory: true,
        storyImageUrl: require('./assets/images/logo/CofCat.jpg'),
        isMsg: true,
        msg: {
            text: 'Tailwind 讚！ · 1分鐘前',
        },
    },
    {
        name: '阿勳',
        online: true,
        imageUrl: require('./assets/images/logo/阿勳.jpg'),
        isStory: true,
        storyImageUrl: require('./assets/images/story/遺落的篇章_story.jpg'),
        isMsg: true,
        msg: {
            text: '我新片了看了嗎？ · 5分鐘前',
        },
    },
    {
        name: 'Odokawa',
        online: true,
        imageUrl: require('./assets/images/logo/Odokawa.jpeg'),
        isStory: false,
        isMsg: true,
        msg: {
            text: '阿Ｚ癢你喜歡喝雪碧還是黑松沙士 · 5分鐘前',
        },
    },
    {
        name: 'HOWDIE',
        online: true,
        imageUrl: require('./assets/images/logo/HOWDIE.png'),
        isStory: false,
        isMsg: true,
        msg: {
            text: '浩安今天打 LOL 嗎？ · 30分鐘前',
        },
    },
    {
        name: 'Clutsa14',
        online: true,
        imageUrl: require('./assets/images/logo/clutsa14.jpg'),
        isStory: true,
        storyImageUrl: require('./assets/images/story/clutsa14_story.png'),
        isMsg: true,
        msg: {
            text: '會長 辛苦你了！ · 3天前',
        },
    },
    {
        name: 'CofCute_photo',
        online: false,
        imageUrl: require('./assets/images/logo/catcute_photo.jpg'),
        isStory: true,
        storyImageUrl: require('./assets/images/story/catcute_photo_story.png'),
        isMsg: false,
    },
    {
        name: '五條悟',
        online: false,
        imageUrl: require('./assets/images/logo/五條悟.jpg'),
        isStory: false,
        isMsg: false,
    },
    {
        name: '金木研',
        online: false,
        imageUrl: require('./assets/images/logo/金木研.jpeg'),
        isStory: false,
        isMsg: false,
    },
    {
        name: '椎名真白',
        online: true,
        imageUrl: require('./assets/images/logo/椎名真白.png'),
        isStory: false,
        isMsg: true,
        msg: {
            text: '吶，你想變成什麼顏色？ · 1天前',
        },
    },
    {
        name: '苗木誠',
        online: true,
        imageUrl: require('./assets/images/logo/苗木誠.jpg'),
        isStory: false,
        isMsg: false,
    },
    {
        name: '霧切響子',
        online: false,
        imageUrl: require('./assets/images/logo/霧切響子.jpg'),
        isStory: false,
        isMsg: true,
        msg: {
            text: '不斷的尋找希望，這才是真正的希望 · 6天前',
        },
    },
    {
        name: '赤坂龍之介',
        online: true,
        imageUrl: require('./assets/images/logo/赤坂龍之介.jpeg'),
        isStory: false,
        isMsg: true,
        msg: {
            text: '愛情，對我來說僅僅隻是腦電波活動中產生的bug而已 · 10分鐘前',
        },
    },
    {
        name: '殺老師',
        online: false,
        imageUrl: require('./assets/images/logo/殺老師.jpg'),
        isStory: false,
        isMsg: false,
    },
    {
        name: '薇爾莉特·伊芙加登',
        online: false,
        imageUrl: require('./assets/images/logo/伊芙加登.jpeg'),
        isStory: false,
        isMsg: false,
    },
];

// ---------------Message---------------

const msgBlock = document.getElementById('msg-panel');

function renderMsgBlock() {
    let htmlStr = ` 
    <p class="mb-3 text-2xl text-white">聊天室</p>
    <div class="flex items-center mb-4 px-3 py-1 rounded-full bg-fb-input">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[18px] h-[18px] mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#9ba3af"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
        <input
            type="text"
            class="w-full focus:outline-none bg-transparent text-white"
            placeholder="搜尋 Messenger"
        />
    </div>`;

    friend.forEach((item) => {
        const { name, imageUrl, isMsg } = item;
        if (isMsg) {
            htmlStr += renderMsg(name, imageUrl, item.msg);
        }
    });

    msgBlock.innerHTML = htmlStr;
}

function renderMsg(name, imageUrl, msg) {
    const { text } = msg;
    const msgTemplate = `
      <div class="flex items-center mb-2 p-1 rounded-lg hover:bg-fb-input cursor-pointer duration-100 group">
        <div class="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
            <img
                class="w-full object-cover"
                src="${imageUrl}"
                alt="${name}"
            />
        </div>
        <div class="flex-1">
            <p class="mb-[2px] text-base text-white">${name}</p>
            <p class="text-sm text-gray-400">
                ${text}
            </p>
        </div>
        <button
            class="popover-btn mr-2 outline outline-1 outline-zinc-800/30 opacity-0 group-hover:opacity-100 duration-100 z-50"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
            </svg>
        </button>

        <div
            class="w-[16px] h-[16px] rounded-full overflow-hidden"
        >
            <img
                class="w-full object-cover"
                src="${imageUrl}"
                alt=${name}"
            />
        </div>
    </div>
    `;

    return msgTemplate;
}

renderMsgBlock();

// ---------------Panel---------------
const btnList = ['plus-btn', 'msg-btn', 'notification-btn', 'more-btn'];
const panelList = [
    'plus-panel',
    'msg-panel',
    'notification-panel',
    'more-panel',
];

btnList.forEach((btn, index) => {
    document.getElementById(btn).addEventListener('click', function (e) {
        e.stopPropagation();
        openPanel(index);
        activeBtn(index);
    });
});

function openPanel(index) {
    panelList.forEach((panel, idx) => {
        const panelDom = document.getElementById(panel);

        if (panelDom === false) return;

        if (index === idx) {
            document.getElementById(panel).classList.remove('hidden');
            return;
        }

        if (panelDom.classList.contains('hidden')) return;

        panelDom.classList.add('hidden');
    });
}

function activeBtn(index) {
    btnList.forEach((btn, idx) => {
        const btnDom = document.getElementById(btn);

        if (btnDom === false) return;

        if (index === idx) {
            document.getElementById(btn).classList.add('bg-fb');
            return;
        }

        if (btnDom.classList.contains('bg-fb')) {
            btnDom.classList.remove('bg-fb');
        }

        btnDom.classList.remove('bg-fb');
    });
}

window.addEventListener('click', function (e) {
    openPanel(-1);
});

// ---------------資訊欄---------------

const infoBlock = document.getElementById('info-block');

const infoList = [
    {
        name: '浩安',
        imageUrl: require('./assets/images/logo/Me.jpg'),
    },
    {
        name: '活動',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/activity.svg',
    },
    {
        name: '天氣',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/cloudy.png',
    },
    {
        name: '災害應變中心',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/dynamic.svg',
    },
    {
        name: '新冠病毒資訊中心',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/facemask.svg',
    },
    {
        name: '社團',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/friend.svg',
    },
    {
        name: '企業管理平台',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/job.png',
    },
    {
        name: 'Messenger',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/messenger.svg',
    },
    {
        name: '近期廣告動態',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/sale.png',
    },
    {
        name: '朋友名單',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/star.svg',
    },
    {
        name: '最愛',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/store.svg',
    },
    {
        name: 'Marketplace',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/facemask.svg',
    },
    {
        name: 'Watch',
        imageUrl: 'https://bruce-fe-fb.web.app/image/left/watchingTv.svg',
    },
];

function renderInfoBlock() {
    let htmlStr = '';

    infoList.forEach((item) => {
        const { name, imageUrl } = item;
        htmlStr += renderInfo(name, imageUrl);
    });

    infoBlock.innerHTML = htmlStr;
}

function renderInfo(name, imageUrl) {
    const infoTemplate = `
      <div class="w-full flex items-center mb-1 p-2 rounded hover:bg-fb-input cursor-pointer">
          <div class="w-[32px] rounded-full mr-4 overflow-hidden">
              <img
                  class="w-full object-cover"
                  src="${imageUrl}"
                  alt="${name}"
              />
          </div>
          <p class="text-white text-[.9rm]">${name}</p>
      </div>
    `;

    return infoTemplate;
}

renderInfoBlock();

// ---------------聯絡人---------------

const contactBlock = document.getElementById('contact-block');

function renderContactBlock() {
    let htmlStr = '<p class="mb-2 text-lg text-gray-400">聯絡人</p>';

    friend.forEach((item) => {
        const { name, imageUrl, online } = item;
        htmlStr += renderContact(name, imageUrl, online);
    });

    contactBlock.innerHTML = htmlStr;
}

function renderContact(name, imageUrl, online) {
    let lamp = 'bg-gray-500';
    if (online) lamp = 'bg-green-500';
    const contactTemplate = `
    <div class="w-full flex items-center px-1 py-2 rounded hover:bg-fb-input cursor-pointer">
      <div class="w-[45px]">
          <div class="relative w-[32px] cursor-pointer">
              <div class="rounded-full overflow-hidden">
                  <img
                      src="${imageUrl}"
                      alt="${name}"
                  />
              </div>
              <div
                  class="w-[8px] h-[8px] absolute bottom-0 right-0 rounded-full ${lamp} ring ring-gray-900"
              ></div>
          </div>
      </div>
      <p class="text-white text-[.9rem]">${name}</p>
    </div>`;

    return contactTemplate;
}

renderContactBlock();

// ---------------限時動態--------------

const storyList = document.getElementById('story-list');

function renderStoryList() {
    const defaultBox = document.createElement('div');

    defaultBox.classList.add('story');

    defaultBox.innerHTML = `
    <div class="h-full flex flex-col rounded-xl overflow-hidden">
        <div class="h-full overflow-hidden">
            <img
                class="story-image hover:scale-105"
                src="${me.imageUrl}"
                alt="我的照片"
            />
        </div>
        <div class="relative pt-6 pb-2 px-2 bg-fb-card">
            <button
                class="w-[32px] h-[32px] absolute -top-4 left-[calc(50%-16px)] flex justify-center items-center p-2 rounded-full focus:outline-none ring ring-fb-card bg-fb"
            >
                <img
                    src="https://bruce-fe-fb.web.app/image/plus.svg"
                    alt="plus圖片"
                />
            </button>
            <p class="w-full text-center text-white text-sm">
                建立限時動態
            </p>
        </div>
    </div>`;

    storyList.appendChild(defaultBox);

    friend.forEach((item) => {
        const { name, imageUrl, isStory, storyImageUrl } = item;
        if (isStory) {
            storyList.appendChild(renderStory(name, imageUrl, storyImageUrl));
        }
    });
}

function renderStory(name, imageUrl, storyImageUrl) {
    const divBox = document.createElement('div');

    divBox.classList.add('story');

    divBox.innerHTML = `
    <div class="h-full relative">
        <div
            class="w-[32px] h-[32px] absolute top-4 left-4 flex justify-center items-center rounded-full overflow-hidden ring-4 ring-fb bg-fb-card z-10"
        >
            <img
            class="w-full object-cover"
            src="${imageUrl}"
            alt="${name}的照片"
        />
        </div>
        <div id="story-mask-${name}" class="w-full h-full absolute top-0 left-0 hidden bg-black/20 duration-300 z-10"></div>
        <div class="w-full h-full rounded-xl overflow-hidden">
            <img
                id="story-image-${name}"
                class="story-image"
                src="${storyImageUrl}"
                alt="${name}的照片"
            />
        </div>
        <p
            class="absolute bottom-2 left-2 text-white text-sm z-10"
        >
            ${name}
        </p>
    </div>`;

    divBox.addEventListener('mouseover', function () {
        const mask = document.getElementById(`story-mask-${name}`);
        const image = document.getElementById(`story-image-${name}`);

        mask.classList.remove('hidden');
        image.classList.add('scale-105');
    });

    divBox.addEventListener('mouseout', function () {
        const mask = document.getElementById(`story-mask-${name}`);
        const image = document.getElementById(`story-image-${name}`);

        mask.classList.add('hidden');
        image.classList.remove('scale-105');
    });

    return divBox;
}

renderStoryList();

// ---------------包廂---------------

function renderLiveItem() {
    const swiperWrapperLive = document.getElementById('swiper-wrapper-live');

    friend.forEach((item) => {
        const { name, imageUrl, online } = item;
        swiperWrapperLive.appendChild(renderLive(name, imageUrl, online));
    });

    var swiper = new Swiper('.fb-live', {
        slidesPreView: '1',
        loop: false,
        spaceBetween: 30,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    });
}

function renderLive(name, imageUrl, online) {
    const divBox = document.createElement('div');

    divBox.classList.add('swiper-slide');

    let lamp = 'bg-gray-500';
    if (online) lamp = 'bg-green-500';

    divBox.innerHTML = `
    <div class="w-[55px]">
        <div
            class="w-[40px] relative cursor-pointer"
        >
            <div
                class="rounded-full overflow-hidden"
            >
                <img
                    src="${imageUrl}"
                    alt="${name}"
                />
            </div>
            <div
                class="w-[10px] h-[10px] absolute bottom-0 right-0 rounded-full ${lamp} ring ring-gray-900"
            ></div>
        </div>
    </div>`;

    return divBox;
}

renderLiveItem();
