"use strict";
chrome.storage.local.get(null, (storage) => {
  init(storage);
  if (document.head == null)
  {
    let interval = setInterval(() => {
      if (document.head != null)
      {
        preprocessing();
        clearInterval(interval);
      }
    }, 1);
  }
  else
    preprocessing();
});
function init(storage) {
  if (!storage.settings) {
    settings = basic["settings"];
    chrome.storage.local.set({"settings": JSON.stringify(settings)});
  } else settings = JSON.parse(storage.settings);
  if (!storage.replace) {
    replaceArray = basic["replace"];
    chrome.storage.local.set({"replace": JSON.stringify(replaceArray)});
  } else replaceArray = JSON.parse(storage.replace).sort((a,b) => {return b.time-a.time});
  if (!storage.keyboard) {
    keyboardFuncArray = basic["keyboardFunc"];
    chrome.storage.local.set({"keyboard": JSON.stringify(keyboardFuncArray)});
  } else keyboardFuncArray = JSON.parse(storage.keyboard).sort((a,b) => {return b.time-a.time});
  if (!storage.tags) {
    tags = basic["tags"];
    chrome.storage.local.set({"tags": JSON.stringify(tags)});
  } else tags = JSON.parse(storage.tags).sort((a,b) => {return b.time-a.time});
  if (!storage.colorStr) {
    colorStr = basic["colorStr"];
    chrome.storage.local.set({"colorStr": JSON.stringify(colorStr)});
  } else colorStr = JSON.parse(storage.colorStr).sort((a,b) => {return b.time-a.time});
  if (!storage.answers) {
    answers = basic["answers"];
    chrome.storage.local.set({"answers": JSON.stringify(answers)});
  } else answers = JSON.parse(storage.answers);
  if (!storage.token) {
    token = basic["token"];
    chrome.storage.local.set({"token": JSON.stringify(token)});
  } else token = JSON.parse(storage.token);
  if (!storage.admList) {
    admList = basic["admList"];
    chrome.storage.local.set({"admList": JSON.stringify(admList)});
  } else admList = JSON.parse(storage.admList);
  if (admList == null)
    admList = [];
  let upd = false;
  for (let key in basic["settings"])
    if (!(key in settings)) {
      settings[key] = basic["settings"][key];
      upd = true;
    }
  if (upd) chrome.storage.local.set({"settings": JSON.stringify(settings)});
}
chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let key in changes) {
    if (key == "settings")
      settings = JSON.parse(changes[key].newValue);
    else if (key == "answers")
      answers = JSON.parse(changes[key].newValue);
    else if (key == "replace")
      replaceArray = JSON.parse(changes[key].newValue);
    else if (key == "keyboard")
      keyboardFuncArray = JSON.parse(changes[key].newValue);
    else if (key == "tags")
      tags = JSON.parse(changes[key].newValue);
    if (typeof upd == "function")
      upd(key);
  }
})
let replaceArray, answers, keyboardFuncArray, tags, colorStr, settings, token, admList;
let basic = {
  settings: {
    version: "0.8 Beta",
    update: true,
    isEnabled: true,
    isReplace: true,
    colorScroll: "#ABFFF7",
    styleFormButton: 1,
    selectionThread: 0,
    selectionThreadTime: 24,
    colorSelectionThread: "#FF0000",
    outputThreadsQuantity: false,
    viewLog: 0,
    isReplacePrefixNak: true,
    isEnabledLogs: false,
    updateAdmListUrl: false,
    seraphtechToken: null,
    server: 1,
    pokras: 1,
    lastTimeUpdateAdmList: 0,
    isEnabledUlog: true,
    isEnabledIp: true,
    isEnabledPointMoney: true,
    isEnabledKeyboard: true,
    isCasino: true,
    isDeleteTextMoney: false,
    textNewWindow: "",
    highlightMoney: true,
    colorMoney: "#80ffa4",
    isColorStr: true,
    isSearchOnOneServer: true,
    heightWindowLog: 250,
    highlightBotConnects: true,
    isEnabledForum: true,
    isEnabledUlogTools: true,
    isOutputMenus: true,
    backgroundImageForum: "",
    backgroundImageUlog: "",
    isEnabledGPLogs: true,
    hidePanel: true,
    scriptStyleGPLogs: true,
    colorNavbarGP: "#1c1f23",
    colorBackgroundGP: "#121212",
    colorTextGP: "#ffffff",
    colorBorderGP: "#4b4b4b",
    colorAGP: "#d40d0d",
    colorCodeGP: "#d63384",
    colorBtnGP: "#d40d0d",
    colorLastIPGP: "#5c636a",
    colorRegIPGP: "#d40d0d",
    colorHoverGP: "#514e4e",
    colorNameFilterGP: "#6c757d",
    addIconsMoneyGP: false,
    removeIPGP: false,
    hidePR: false,
    confirmationDeletePosts: true,
  },
  tags: [
    {
      type: "nick",
      regexp: "Ваш игровой ник: (.*?)<",
      undefined: "",
      searchFirstMsg: true,
      enabled: true,
      time: Math.floor(Date.now()/1000)
    },
    {
      type: "nick",
      regexp: "<b>Игровой ник:</b> (.*?)<br>",
      undefined: "",
      searchFirstMsg: true,
      enabled: true,
      time: Math.floor(Date.now()/1000)
    },
    {
      type: "nick",
      regexp: "<b>Ваш игровой ник</b> (.*?)<br>",
      undefined: "",
      searchFirstMsg: true,
      enabled: true,
      time: Math.floor(Date.now()/1000)
    },
    {
      type: "nick_jb",
      regexp: "Игровой ник администратора: (.*?)<",
      undefined: "",
      searchFirstMsg: true,
      enabled: true,
      time: Math.floor(Date.now()/1000)
    },
    {
      type: "name_fa",
      regexp: 'data-xf-init="member-tooltip" itemprop="name" id="js-XFUniqueId.*?">(.*?)</a>',
      undefined: "",
      searchFirstMsg: true,
      enabled: true,
      time: Math.floor(Date.now()/1000)
    },
    {
      type: "thread_id",
      regexp: '<a href="/threads/(.*?)/post-.*?" class="u-concealed" rel="nofollow">',
      undefined: "",
      searchFirstMsg: true,
      enabled: true,
      time: Math.floor(Date.now()/1000)
    }
  ],
  colorStr: [
    {
      keyword: "Администратор",
      time: Math.floor(Date.now()/1000),
      caseSensitivity: true,
      color: "#45bfff",
      enabled: true
    }
  ],
  replace: [],
  keyboardFunc: [],
  answers: {
    content: [],
    active: -1,
    id: 0
  },
  token: null,
  admList: [],
}
let forms = [
  `<dl class="formRow formRow--noColon formRow--input">
    <dt><div class="formRow-labelWrapper">
    <label class="formRow-label"><div class="bbWrapper">Название кнопки</div></label>
    <dfn class="formRow-hint">Обязательно</dfn></div>
    </dt><dd>
    <input type="text" class="input" id="titleButton" maxlength="40">
    <div class="formRow-explain">Укажите название кнопки</div>
    </dd></dl>
  `,
  ` <dl class="formRow formRow--noColon formRow--input"><dt>
    <div class="formRow-labelWrapper">
    <label class="formRow-label"><div class="bbWrapper">Текст</div></label>
    <dfn class="formRow-hint">Обязательно. Действуют теги(подробнее в настройках)</dfn></div>
    </dt><dd>
    <textarea class="input input--fitHeight" id="answerText" data-xf-init="textarea-handler" style="overflow: hidden; overflow-wrap: break-word; height: 100px; overflow: auto"></textarea>
    <div class="formRow-explain">Укажите что у вас будет появляться в Текстовом поле</div>
    </dd></dl>
  `,
  ` <dl class="formRow formRow--noColon formRow--input">
    <dt>
		<div class="formRow-labelWrapper">
		<label class="formRow-label">Закрыть тему</label></div>
    <dfn class="formRow-hint">Не обязательно</dfn></div>
		</dt>
		<dd>
		<ul class="listColumns inputChoices" id="threadCloser">
		<li class="inputChoices-choice"><label class="iconic  iconic--radio"><input type="radio" name="threadCloser" value="no" checked="checked"><i aria-hidden="true"></i><span class="iconic-label">Не изменять</span></label></li>
    <li class="inputChoices-choice"><label class="iconic  iconic--radio"><input type="radio" name="threadCloser" value="1"><i aria-hidden="true"></i><span class="iconic-label">Закрыть</span></label></li>
    <li class="inputChoices-choice"><label class="iconic  iconic--radio"><input type="radio" name="threadCloser" value="2"><i aria-hidden="true"></i><span class="iconic-label">Открыть</span></label></li>
    </ul>
    <div class="formRow-explain">Закрывать/Открывать тему после ответа автоматически</div>
		</dd>
    </dl>
  `,
  ` <dl class="formRow formRow--noColon formRow--input">
    <dt>
		<div class="formRow-labelWrapper">
		<label class="formRow-label">Закрепить тему</label></div>
    <dfn class="formRow-hint">Не обязательно</dfn></div>
		</dt>
		<dd>
		<ul class="listColumns inputChoices" id="threadStick">
		<li class="inputChoices-choice"><label class="iconic  iconic--radio"><input type="radio" name="threadStick" value="no" checked="checked"><i aria-hidden="true"></i><span class="iconic-label">Не изменять</span></label></li>
    <li class="inputChoices-choice"><label class="iconic  iconic--radio"><input type="radio" name="threadStick" value="1"><i aria-hidden="true"></i><span class="iconic-label">Закрепить</span></label></li>
    <li class="inputChoices-choice"><label class="iconic  iconic--radio"><input type="radio" name="threadStick" value="2"><i aria-hidden="true"></i><span class="iconic-label">Открепить</span></label></li>
    </ul>
    <div class="formRow-explain">Закреплять/Откреплять тему после ответа автоматически</div>
		</dd>
    </dl>
  `,
  ` <dl class="formRow formRow--noColon formRow--input">
    <dt>
		<div class="formRow-labelWrapper">
		<label class="formRow-label">Изменение префиксов</label></div>
    <dfn class="formRow-hint">Не обязательно</dfn></div>
		</dt>
		<dd>
		<ul class="listColumns inputChoices">
    <li class="inputChoices-choice" id="classDel"><label class="iconic  iconic--radio" id="prefix_forum"></label></li>
    </ul>
    <div class="formRow-explain">Изменять префикс жалобы после ответа автоматически</div>
    </dd>
    </dl>
  `,
  ` <dl class="formRow formRow--noColon formRow--input">
    <dt>
		<div class="formRow-labelWrapper">
		<label class="formRow-label">Авто. отправка ответа</label></div>
    <dfn class="formRow-hint">Не обязательно</dfn></div>
		</dt>
		<dd>
		<ul class="listColumns inputChoices">
		<li class="inputChoices-choice"><label class="iconic  iconic--radio"><input type="radio" name="autoSend" value="no" checked="checked"><i aria-hidden="true"></i><span class="iconic-label">Не отправлять</span></label></li>
    <li class="inputChoices-choice"><label class="iconic  iconic--radio"><input type="radio" name="autoSend" value="1"><i aria-hidden="true"></i><span class="iconic-label">Отправлять</span></label></li>
    </ul>
    <div class="formRow-explain">Отправка ответа и изменение темы нажатием кнопки</div>
		</dd>
    </dl>
  `,
  ` <dl class="formRow formRow--noColon formRow--input">
    <dt>
		<div class="formRow-labelWrapper">
		<label class="formRow-label">Положение</label></div>
    <dfn class="formRow-hint">Не обязательно</dfn></div>
		</dt>
		<dd>
		<ul class="listColumns inputChoices">
    <li><label class="iconic  iconic--radio" id="position"></label></li>
    </ul>
    <div class="formRow-explain">Положение кнопки относительно других кнопок</div>
    </dd>
    </dl>
  `,
  ` <dl class="formRow formRow--noColon formRow--input">
    <dt>
		<div class="formRow-labelWrapper">
		<label class="formRow-label">Настройки быстрого ответа</label></div>
		</dt>
		<dd>
		<ul class="listColumns inputChoices">
    <label class="iconic  iconic--radio" id="asw"><select class="input" title="Ответ"></select></label>
    </ul>
    <div class="formRow-explain">Использовать настройки быстрого ответа</div>
    </dd>
    </dl>
  `,
  ` <dl class="formRow formRow--noColon formRow--input">
    <dt>
		<div class="formRow-labelWrapper">
		<label class="formRow-label">Действие после ответа</label></div>
    <dfn class="formRow-hint">Обязательно</dfn></div>
		</dt>
		<dd>
		<ul class="listColumns inputChoices">
    <label class="iconic  iconic--radio"><select class="input" id="do">
      <option value="0">Перезагрузка страниц</option>
      <option value="1">Закрытие страниц</option>
      <option value="2">Нет действий</option>
    </select></label>
    </ul>
    </dd>
    </dl>
  `,
]
let addFunc = [
  `<div class="formSubmitRow-bar"></div><div class="formSubmitRow-controls"><button id="addanswer" class="button--primary button button--icon button--icon--save"><span class="button-text">Добавить папку</span></button></div>`,
  `<div class="formSubmitRow-bar"></div><div class="formSubmitRow-controls"><button id="addanswer" class="button--primary button button--icon button--icon--save"><span class="button-text">Добавить ответ</span></button></div>`,
  `<div class="formSubmitRow-bar"></div><div class="button-Forum"><button style="left: 50%;" id="addanswer" class="button--primary button button--icon button--icon--save"><span class="button-text">Изменить папку</span></button><button style="float: left;" id="delanswer" class="button--primary button button--icon button--icon--delete"><span class="button-text">Удалить папку</span></button></div>`,
  `<div class="formSubmitRow-bar"></div><div class="button-Forum"><button style="left: 50%;" id="addanswer" class="button--primary button button--icon button--icon--save"><span class="button-text">Изменить ответ</span></button><button style="float: left;" id="delanswer" class="button--primary button button--icon button--icon--delete"><span class="button-text">Удалить ответ</span></button></div>`,
  `<div class="formSubmitRow-bar"></div><div class="formSubmitRow-controls"><button id="addanswer" class="button--primary button button--icon"><span class="button-text">Далее</span></button></div>`,
]
let server = [1,2,3,4,5,8,9,10,12,15,19,20,21,22,23,24,25,26,27,28,30,32,34,35,29,31,33];
function post(url, params, func=null) {
  let boundary = String(Math.random()).slice(2);
  let boundaryMiddle = '--' + boundary + '\r\n';
  let boundaryLast = '--' + boundary + '--\r\n';

  let body = ['\r\n'];
  for (let key in params) {
    body.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + params[key] + '\r\n');
  }

  body = body.join(boundaryMiddle) + boundaryLast;
  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
  xhr.onload = function() {if (func!=null) func(xhr.responseText);}
  xhr.send(body);
}

function bodypost(url, body, func=null)
{
  let boundary = String(Math.random()).slice(2);
  let boundaryMiddle = '--' + boundary + '\r\n';
  let boundaryLast = '--' + boundary + '--\r\n';
  body = body.join(boundaryMiddle) + boundaryLast;

  let xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
  xhr.onload = function() {if (func!=null) func(xhr.responseText);}
  xhr.send(body);
}

function get(url, func) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {return func(xhr.responseText);}
  xhr.setRequestHeader('content-Type', 'application/json; charset=utf-8');
  xhr.send();
}

function actives(dir) {
  let active = [], len = answers.content.length;
  for (let i=0; i<len; i++)
    if (answers.content[i].dir == dir)
      active.push(answers.content[i]);
  active.sort((a,b) => {return a.pos-b.pos});
  return active;
}
// code();
