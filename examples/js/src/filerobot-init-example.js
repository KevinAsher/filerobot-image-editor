import '../../../projects/js/index';


const buttonEditDownload = document.getElementById('edit-btn-download');
const buttonEditUpload = document.getElementById('edit-btn-upload');
const buttonEditModify = document.getElementById('edit-btn-modify');
const resultModal = document.getElementById('result-modal');
const resultLink = document.getElementById('result-link');
const responseMessage = document.getElementById('success-message');


let ImageEditorDownload, ImageEditorUpload, ImageEditorModify;

// Image Editor to download images

const customThemeColors = {
  primaryBg: '#ffffff',
  primaryBgHover: '#f2f2f2',
  secondaryBg: '#F8FAFB',
  secondaryBgHover: '#DFE7ED',
  secondaryBgOpacity: 'rgba(255,255,255, 0.75)',
  text: '#5D6D7E',
  textHover: '#1a2329',
  textMute: '#aaa',
  textWarn: '#f7931e',
  accent: '#D5D8DC',
  button: {
    primary: '#6879EB',
    border: 'transparent',
    hover: '#5064ea',
    active: '#3c4ec7'
  },
  border: '#DFE7ED',
  borderLight: '#e1e1e1',
  disabledBg: 'rgba(255, 0, 0, 0.1)',
}

ImageEditorDownload = new FilerobotImageEditor({
    elementId: 'image-editor-download',
    isLowQualityPreview: true,
    colorScheme: 'dark',
    reduceBeforeEdit: {
      mode: 'manual',
      widthLimit: 2000,
      heightLimit: 2000
    },
    beginCropArea: 1,
    //cropBeforeEdit: {
    //  width: 400,
    //  height: 200
    //},
    translations: {
      en: {}
    },
    language: 'en',
    watermark: {
      url: 'https://cdn.scaleflex.it/demo/filerobot.png',
      urls: [
        { url: 'https://cdn.scaleflex.it/demo/filerobot.png', label: 'filerobot logo' },
        'https://cdn.scaleflex.it/demo/superman.png'
      ],
      lockScaleToPercentage: 0, // default: 0
      // fonts: [
      //   { label: 'Arial', value: 'Arial' }
      // ],
      position: 'right-top', // default: right-top; left-top/center-top/right-top/left-center/center/right-center/left-bottom/center-bottom/right-bottom
      opacity: 0.7,
      applyByDefault: false,
      handleOpacity: true,
      fileUpload: true,
      defaultText: 'Filerobot.....'
    },
    theme: {
      // colors: customThemeColors,
      fonts: [
        { label: 'Arial', value: 'Arial' },
        { label: 'Tahoma', value: 'Tahoma' },
        { label: 'Times New Roman', value: 'Times New Roman'},
        { label: 'Courier', value: 'Courier' },
        { label: 'Courier New', value: 'Courier New' },
        { label: 'Verdana', value: 'Verdana' }
      ]
    },
    showGoBackBtn: false,
    showInModal: true,
    noCapitalStrs: false, // default: false
    // closeButtonProps: {
    //   label: 'Back',
    //   noLabel: false,
    //   title: 'Back to main',
    //   styles: "color: rgba(255, 255, 255, 0.75);",
    //   hoverStyles: "color: rgba(255, 255, 255, 1); text-decoration: underline;",
    //   beforeStyles: "color: rgba(255, 255, 255, 0.5)"
    // },
    // minCropAreaWidth: 600, //default: undefined
    // minCropAreaHeight: 500, // default: undefined
    //cropPresets: [
    //  { name: 'square', value: 1 },
    //  { name: 'half-page ad', value: 300 / 600 },
    //  { name: 'banner', value: 468 / 60 },
    //  { name: 'leaderboard', value: 728 / 90 }
    //],
    //resizePresets: [
    //  { name: 'square', width: 400, height: 400, ratio: 1 },
    //  { name: 'small square', width: 200, height: 200, ratio: 1 },
    //  { name: 'half-page ad', width: 300, height: 600, ratio: 300 / 600 },
    //  { name: 'banner', width: 468, height: 60, ratio: 468 / 60 },
    //  { name: 'leaderboard', width: 728, height: 90, ratio: 728 / 90 }
    //]
  }
  //{
  //  onComplete: (props) => { console.log(props); },
  //  onBeforeComplete: (props) => {
  //    console.log(props);
  //    return false;
  //  }
  //}
  );

// Image Editor to upload images and get url in response

const configUpload = {
  elementId: 'image-editor-upload',
  filerobot: {
    uploadKey: '7cc1f659309c480cbc8a608dc6ba5f03',
    container: 'scaleflex-tests-v5a',
    uploadParams: {
      dir: '/Github-Image-Editor'
    },
    saveMode: 'duplicate', // default: 'duplicate'; 'new', 'duplicate', 'replace'
    imageName: '',
    imageProperties: {
      description: 'testing',
      tags: ['lorem ipsum', 'test', 'trying'],
      // ...Any additonal properties to be added.
    },
    imageMeta: {
      title: 'testing'
      // ... Any additional image meta to be added.
    }
  },
  isLowQualityPreview: true,
  reduceBeforeEdit: {
    mode: 'manual',
    widthLimit: 2000,
    heightLimit: 2000
  },
  beginCropArea: 0.8,
  cropBeforeEdit: {
    width: 400,
    height: 200
  },
  watermark: {
    url: 'https://cdn.scaleflex.it/demo/filerobot.png',
    urls: [
      'https://cdn.scaleflex.it/demo/filerobot.png',
      'https://cdn.scaleflex.it/demo/superman.png'
    ],
    position: 'right-top', // default: right-top; left-top/center-top/right-top/left-center/center/right-center/left-bottom/center-bottom/right-bottom
    opacity: 0.7,
    applyByDefault: false,
    handleOpacity: true,
    fileUpload: true,
    defaultText: 'Filerobot.....'
  },
  showInModal: true
};
const onCompleteUpload = function (newUrl) {
  const copyText = document.getElementById("copy-text");
  const resultImage = document.getElementById('result-image');
  const url = newUrl.replace('https://fpdlhfjm.airstore.io/', 'https://store.filerobot.com/fpdlhfjm/');

  responseMessage.style.display = 'none';
  responseMessage.innerText = '';
  copyText.value = url;
  resultImage.src = url;
  resultLink.innerText = url;
  resultModal.style.display = 'block';
};

ImageEditorUpload = new FilerobotImageEditor(configUpload, onCompleteUpload);

//ImageEditorUpload = new FilerobotImageEditor(configUpload, {
//  onComplete: onCompleteUpload,
//  onBeforeComplete: (props) => {
//    console.log(props);
//    return false;
//  }
//});

// Image Editor to apply transformation by modifying url

const configModify = {
  elementId: 'image-editor-modify',
  //cloudimage: {
  //  token: 'scaleflex'
  //},
  filerobot: {
    token: 'fumwdnfm', // 'fumwdnfm' - sealing token, 'fusqadtm' - not sealing token
    // doNotPrefixURL: true,
    version: 'v7', // Need to add for sealing. In other cases skip version
  },
  processWithCloudimage: true,
  isLowQualityPreview: true,
  beginCropArea: 0.5,
  reduceBeforeEdit: {
    mode: 'manual',
    widthLimit: 2000,
    heightLimit: 2000
  },
  cropBeforeEdit: {
    width: 400,
    height: 200
  },
  watermark: {
    url: 'https://cdn.scaleflex.it/demo/filerobot.png',
    urls: [
      { url: 'https://cdn.scaleflex.it/demo/filerobot.png', label: 'filerobot logo' },
      'https://cdn.scaleflex.it/demo/superman.png'
    ],
    position: 'right-top', // default: right-top; left-top/center-top/right-top/left-center/center/right-center/left-bottom/center-bottom/right-bottom
    opacity: 0.7,
    applyByDefault: true,
    handleOpacity: true,
    defaultText: 'Filerobot.....'
  },
  imageSealing: {
   enabled: true,
   salt: 'test',
   char_count: 10,
   include_params: ['wat', 'wat_url', 'wat_opacity', 'wat_scale', 'wat_pad', 'wat_gravity', 'wat_pos'], // optional, by default include all
  },
  showInModal: true
};

const onCompleteModify = function (newUrl) {
  const copyText = document.getElementById("copy-text");
  const resultImage = document.getElementById('result-image');

  responseMessage.style.display = 'none';
  responseMessage.innerText = '';
  copyText.value = newUrl;
  resultImage.src = newUrl;
  resultLink.innerText = newUrl;
  resultModal.style.display = 'block';
};

ImageEditorModify = new FilerobotImageEditor(configModify, {
  onComplete: onCompleteModify,
  onOpen: () => { console.log('open'); },
  onClose: () => { console.log('close') }
});

function initImageEditorDownload() {
  initImageEditorAction(ImageEditorDownload);
}

function initImageEditorUpload() {
  initImageEditorAction(ImageEditorUpload);
}

function initImageEditorModify() {
  initImageEditorAction(ImageEditorModify);
}

function initImageEditorAction(action) {
  const image = document.querySelector('.demo-img.active');
  const resultImage = document.getElementById('result-image');

  resultImage.src = '';

  if (image.tagName === 'DIV') {
    const url = image.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
    action.open(url);
  } else if (image.tagName === 'IMG') {
    action.open('https://scaleflex.ultrafast.io/' + image.src.slice(image.src.lastIndexOf('http')));
  }
}

buttonEditDownload.onclick = initImageEditorDownload;
buttonEditUpload.onclick = initImageEditorUpload;
buttonEditModify.onclick = initImageEditorModify;
