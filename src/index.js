import './index.css';

// ---------------Panel 相關---------------
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

window.addEventListener('click', function (e) {
    openPanel(-1);
});

// ---------------資訊欄相關---------------

const infoBlock = document.getElementById('info-block');

const infoList = [
    {
        name: 'CofCat',
        imageUrl: require('./assets/images/CofCat.jpg'),
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

// ---------------聯絡人相關---------------

const contactBlock = document.getElementById('contact-block');

const contactList = [
    {
        name: 'CofCat',
        imageUrl: require('./assets/images/CofCat.jpg'),
    },
    {
        name: '阿勳',
        imageUrl: require('./assets/images/阿勳.jpg'),
    },
];

function renderContactBlock() {
    let htmlStr = '<p class="mb-2 text-lg text-gray-400">聯絡人</p>';

    contactList.forEach((item) => {
        const { name, imageUrl } = item;
        htmlStr += renderContact(name, imageUrl);
    });

    contactBlock.innerHTML = htmlStr;
}

function renderContact(name, imageUrl) {
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
                  class="w-[8px] h-[8px] absolute bottom-0 right-0 rounded-full bg-green-500 ring ring-gray-900"
              ></div>
          </div>
      </div>
      <p class="text-white text-[.9rem]">${name}</p>
    </div>`;

    return contactTemplate;
}

renderContactBlock();
