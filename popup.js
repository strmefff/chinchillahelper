"use strict";
code();
function code() {
  let storage;
  chrome.storage.local.get(null, async (storageF) => {
    storage = storageF;
    init(storageF);
    $("input#turn").prop("checked", settings.isEnabled);
    $(document.createElement("style")).html(`#js-XFUniqueId17::-webkit-scrollbar { width: 0; } body::-webkit-scrollbar-button {background-repeat:no-repeat;width:10px;height:0px}::-webkit-scrollbar-track {background-color:rgb(34,36,43)}::-webkit-scrollbar-thumb {-webkit-border-radius: 0px;border-radius: 0px;background-color:${settings.colorScroll}}::-webkit-scrollbar-thumb:hover{background-color:${settings.colorScroll};}::-webkit-resizer{background-repeat:no-repeat;width:10px;height:0px}::-webkit-scrollbar{width: 10px;}`).attr("scriptStyle", 0).appendTo("head");
  })
  $("#btn-settings").click(menu)
  $("#btn-replaceText").click(replace);
  $("#btn-funcKeyboard").click(keyboardFunc);
  $("#btn-tags").click(tagsSettings);
  $("#btn-colorStr").click(colorSettings);
  function menu() {
    if ($(".window").length === 0) header();
    else $(".window").empty();
    $(`<details>
        <summary>Общее</summary>
        <div class="div-options">
          ${block("Сервер", {tag: "select", id: "server", array: ["Arizona Games [0]", "Phoenix[1]", "Tucson[2]", "Scottdale[3]", "Chandler[4]", "Brainburg[5]", "Saint Rose[6]", "Mesa[7]", "Red-Rock[8]", "Yuma[9]", "Surprise[10]", "Prescott[11]", "Glendale[12]", "Kingman[13]", "Winslow[14]", "Payson[15]", "Gilbert[16]", "Show-Low[17]", "Casa-Grande[18]", "Page[19]", "Sun-City[20]", "Queen-Creek[21]", "Sedona[22]", "Holiday[23]", "Wednesday[24]", "Yava[25]", "Faraway[26]", "Bumble Bee[27]", "Christmas[28]", "Mobile[101]", "Mobile[102]", "Mobile[103]", "Village RP[99]"]})}
          ${block("Группа пользователя", {tag: "select", id: "pokras", array: ["Модератор", "Старший Модератор", "Куратор модерации", "Технический модератор", "Заместитель ГМ", "Главный Модератор", "Руководитель Сервера", "Игровая администрация", "Модератор форума", "Администратор форума", "Руководитель форума"]})}
          ${block("Скрытие личных данных аккаунтов", {tag: "checkbox", id: "hidePR"}, "Скрывает 2 последних раздела IP(123.123.*.*), скрывает почту и вк.")}
        </div>
      </details>
      <details>
        <summary>Форум</summary>
        <div class="div-options">
          ${block("Включить работу на форуме", {tag: "checkbox", id: "isEnabledForum"})}
          ${block("Обновление страницы после ответа", {tag: "checkbox", id: "update"})}
          ${block("Цвет ползунка", {tag: "color", id: "colorScroll"})}
          ${block("Выделять старые темы", {tag: "select", id: "selectionThread", array: ["Выключено", "Выделять время под названием темы", "Выделять время и название темы"]})}
          ${block("Выделять темы если прошло время(в часах)", {tag: "input", id: "selectionThreadTime", atr: {class: "input", type: "number", min: 1, max: 900}})}
          ${block("Цвет выделения тем", {tag: "color", id: "colorSelectionThread"})}
          ${block("Вывод количества жалоб", {tag: "checkbox", id: "outputThreadsQuantity"})}
          ${block("Вывод пунктов меню редактирования, закрытия, закрепления", {tag: "checkbox", id: "isOutputMenus"})}
          ${block("Добавлять текст в текстовое поле на каждой странице", {tag: "textarea", id: "textNewWindow", atr: {style: "width:80%; height:50px;", class: "input"}}, "При заходе в тему автоматически указывается текст в поле.")}
          ${block("Запрашивать подтверждение действия при удалении сообщений", {tag: "checkbox", id: "confirmationDeletePosts"})}
        </div>
      </details>
      <details>
        <summary>Дополнительные настройки</summary>
        <div class="div-options" id="dops">
          ${block("Получить файл своих ответов", {tag: "download", id: "downloadAnswers"})}
          ${block("Получить файл своих функц. кнопок", {tag: "download", id: "downloadFunc"})}
          ${block("Получить файл своих тегов", {tag: "download", id: "downloadTags"})}
          ${block("Получить файл своих замен текста", {tag: "download", id: "downloadReplace"})}
          ${block("Получить файл своих цветов строк", {tag: "download", id: "downloadColorStr"})}
          ${block("Установить список ответов/настроек/тегов/фун.кнопок/замен текста/цветов строк", {tag: "input", id: "install", atr: {style: "cursor: pointer;", type: "file"}})}
          ${block("Сбросить настройки", {tag: "reset", id: "resSettings"})}
          ${block("Сбросить ответы", {tag: "reset", id: "resAnswers"})}
          ${block("Сбросить функц. кнопки", {tag: "reset", id: "resKeyboard"})}
          ${block("Сбросить теги", {tag: "reset", id: "resTags"})}
          ${block("Сбросить замены текста", {tag: "reset", id: "resReplace"})}
          ${block("Сбросить цвета строк", {tag: "reset", id: "resColorStr"})}
        </div>
      </details>
        `).appendTo(".window");
        //${block("Получить файл своих настроек", {tag: "download", id: "downloadSettings"})}
    $('#resSettings, #resAnswers, #resKeyboard, #resTags, #resReplace, #resColorStr').click((e) => {
      let name, value, arr = {};
      switch (e.target.id) {
        case "resSettings":
          arr.settings = JSON.stringify(basic["settings"]);
          break;
        case "resAnswers":
          arr.answers = JSON.stringify(basic["answers"]);
          break;
        case "resKeyboard":
          arr.keyboard = JSON.stringify(basic["keyboardFunc"]);
          break;
        case "resTags":
          arr.tags = JSON.stringify(basic["tags"]);
          break;
        case "resReplace":
          arr.replace = JSON.stringify(basic["replace"]);
          break;
        case "resColorStr":
          arr.colorStr = JSON.stringify(basic["colorStr"]);
          break;
      }
      chrome.storage.local.set(arr);
      menu();
    });
    $("#downloadAnswers, #downloadFunc, #downloadSettings, #downloadTags, #downloadReplace, #downloadColorStr").click((e) => {
      let type, array;
      switch (e.target.id) {
        case "downloadAnswers":
          type = "answers";
          array = answers;
          break;
        case "downloadFunc":
          type = "keyboard";
          array = keyboardFuncArray;
          break;
        case "downloadSettings":
          type = "settings";
          array = settings;
          break;
        case "downloadTags":
          type = "tags";
          array = tags;
          break;
        case "downloadReplace":
          type = "replace";
          array = replaceArray;
          break;
        case "downloadColorStr":
          type = "colorStr";
          array = colorStr;
          break;
      }
      let file = new Blob([JSON.stringify({type: type, array: array, v: chrome.runtime.getManifest()["version"]})], {type: 'application/json'});
      $("#"+e.target.id)[0].href = URL.createObjectURL(file);
      $("#"+e.target.id)[0].download = type+".json";
    })
    $("#install").change(() => {
      let file = $("#install")[0].files[0];
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function() {
        let array = JSON.parse(reader.result);
        if (array.type === "settings") {
          settings = array.array;
          chrome.storage.local.set({"settings": JSON.stringify(settings)});
        } else if (array.type === "answers") {
          if (array.array.active) {
            let dirs = {}, len = array.array.content.length, length=actives(-1).length;
            for (let i=0; i<len; i++) {
              if (array.array.content[i].type == 1) dirs[array.array.content[i].id] = answers.id;
              array.array.content[i].id = answers.id++;
              array.array.content[i].pos = array.array.content[i].dir === -1 ? array.array.content[i].pos+length : array.array.content[i].pos;
            }
            for (let i=0; i<len; i++) {
              if (array.array.content[i].dir === -1) array.array.content[i].dir = -1;
              else array.array.content[i].dir = dirs[array.array.content[i].dir];
              answers.content.push(array.array.content[i]);
            }
            chrome.storage.local.set({"answers": JSON.stringify(answers)});
          } else {
            array.array.sort((a,b) => {return a.id-b.id});
            let dirs = {}, len = array.array.length, catalogs = {}, length=actives(-1).length;
            for (let i=0; i<len; i++) {
              if (array.array[i].dir.random in catalogs) catalogs[array.array[i].dir.random]++;
              else catalogs[array.array[i].dir.random] = 0;
              if (array.array[i].type == 1) dirs[array.array[i].random] = answers.id;
              array.array[i].pos = array.array[i].random === -1 ? catalogs[array.array[i].dir.random]+length : catalogs[array.array[i].dir.random];
              array.array[i].id = answers.id++;
            }
            for (let i=0; i<len; i++) {
              if (array.array[i].dir.random === -1) array.array[i].dir = -1;
              else array.array[i].dir = dirs[array.array[i].dir.random];
              delete array.array[i].random;
              answers.content.push(array.array[i]);
            }
            chrome.storage.local.set({"answers": JSON.stringify(answers)});
          }
        } else if (array.type === "keyboard") {
          array.array.forEach(obj => keyboardFuncArray.push(obj));
          chrome.storage.local.set({"keyboard": JSON.stringify(keyboardFuncArray)});
        } else if (array.type === "replace") {
          array.array.forEach(obj => replaceArray.push(obj));
          chrome.storage.local.set({"replace": JSON.stringify(replaceArray)});
        } else if (array.type === "tags") {
          array.array.forEach(obj => tags.push(obj));
          chrome.storage.local.set({"tags": JSON.stringify(tags)});
        } else if (array.type === "colorStr") {
          array.array.forEach(obj => colorStr.push(obj));
          chrome.storage.local.set({"colorStr": JSON.stringify(colorStr)});
        }
        init(storage);
        menu();
      }
    })
    $("#messUpd").click(updateScript)
   // Выдача значений с настроек
    for (let key in settings) {
      if (key != "install") {
        if (typeof settings[key] == "boolean") $("#"+key).prop("checked", settings[key]);
        else $("#"+key).val(settings[key]);
      }
    }
    $("input, select").change((e) => {
      if ($(e.target).prop("type") == "checkbox") settings[$(e.target).prop("id")] = $(e.target).is(':checked');
      else settings[$(e.target).prop("id")] = !Number.isNaN(Number($(e.target).val())) ? Number($(e.target).val()) : $(e.target).val();
      chrome.storage.local.set({"settings": JSON.stringify(settings)});
    })
    $("#textNewWindow, #backgroundImageForum, #backgroundImageUlog").focusout((e) => {
      settings[$(e.target).prop("id")] = $(e.target).val();
      chrome.storage.local.set({"settings": JSON.stringify(settings)});
    })
  }
  function updateScript() {
    if ($(".window").length === 0) header();
    else $(".window").empty();
    $(`
      <div style="margin-bottom: 20px;" class="div-options">
        <dl><dt style="text-align: center;">Тут вы можете написать предложение по улучшению/исправлению бага.</dt></dl>
        ${block("Тема", {tag: "input", id: "theme", atr: {style: "width:80%", class: "input", type: "text"}})}
        ${block("Описание улучшения/бага", {tag: "textarea", id: "text", atr: {style: "width:80%; height:50px", class: "input"}})}
        ${block("ВК для связи", {tag: "input", id: "vkmes", atr: {style: "width:80%", class: "input", type: "text"}})}
        <dl><dt class="save"><span>Отправить <i class="fa fa-floppy-o" aria-hidden="true"></i></span></dt></dl>
      </div>`).appendTo(".window");
      $(".save").click(()=> {
        if ($("#theme").val() && $("#text").val() && $("#vkmes").val())
          post("https://seraphtech.ru/update/", {"theme": $("#theme").val(), "text": $("#text").val(), "vk": $("#vkmes").val()}, () => updateScript())
      })
  }
  function tagsSettings() {
    if ($(".window").length === 0) {
      header();
    } else $(".window").empty();
    $(`
      <div style="margin-bottom: 20px;" class="div-options">
        <dl><dt style="text-align: center;">Теги для использования в функциях копирования и при ответе в теме. При использовании нескольких регулярных выражений для 1 тега результат тега будет первое сработавшее регулярное выражение.</dt></dl>
        ${block("Название тега(не нужно вписывать фигурные скобки)", {tag: "input", id: "nameTag", atr: {style: "width: 80%", class: "input", type: "text"}})}
        ${block("Регулярное выражение(для помощи с выражением обратитесь к разработчику, либо используйте интернет)", {tag: "textarea", id: "regexp", atr: {style: "width:80%; height:50px", class: "input"}})}
        ${block("Замена, если выражение не найдёт результат", {tag: "textarea", id: "undefined", atr: {style: "width:80%; height:50px", class: "input"}})}
        ${block("Искать только в первом ответе в теме(рекомендуется использовать для предотвращения ошибок)", {tag: "checkbox", id: "searchfirstmsg"})}
        <dl><dt class="save"><span>Добавить <i class="fa fa-floppy-o" aria-hidden="true"></i></span></dt></dl>
      </div>`).appendTo(".window");
      $("#searchfirstmsg").prop("checked", 1)
      let html = $(`<table>
        <caption style="font-size: 16px; margin-bottom:10px">Список замен</caption>
        <tbody>
        <tr><th style="width:10%">Тег</th><th>Рег. выражение</th><th>Не найдено</th><th class="contains">Включено</th><th class="contains">Изменить</th><th class="contains">Удалить</th></tr>
      `)
      for (let i=0; i<tags.length;i++) {
        $(`<tr><td style="width: 10px">${tags[i].type}</td>
          <td>${tags[i].regexp.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
          <td>${tags[i].undefined == "" ? '" "' : tags[i].undefined}</td>
          <td style="display: flex;">
            <label style="text-align:center;margin: 0 auto;" class="checkbox">
              <input replaceid="${i}" ${tags[i].enabled ? "checked":null} type="checkbox">
              <span script="enable" replaceid="${i}" class="checkbox-switch"></span>
            </label>
          </td>
          <td style="text-align:center;margin: 0 auto"><i script="edit" replaceid="${i}" class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
          <td style="text-align:center;margin: 0 auto"><i script="remove" replaceid="${i}" class="fa fa-trash" aria-hidden="true"></i></td>
          </tr></tbody></table>`).appendTo(html);
      }
      html.appendTo(".window")
      $("[script='enable']").click((e)=>{
        tags[e.target.attributes.replaceid.nodeValue].enabled = $(`input[replaceid=${e.target.attributes.replaceid.nodeValue}]`).is(':checked') ? false : true;
        chrome.storage.local.set({"tags": JSON.stringify(tags)});
      })
      $("[script='edit']").click(e => {
        $('.window').animate({scrollTop: 0}, 200);
        $(".div-options").html(`
          ${block("Название тега(не нужно вписывать фигурные скобки)", {tag: "input", id: "nameTag", atr: {style: "width: 80%", class: "input", type: "text"}})}
          ${block("Регулярное выражение(для помощи с выражением обратитесь к разработчику, либо используйте интернет)", {tag: "textarea", id: "nameTag", atr: {style: "width:80%; height:50px", class: "input"}})}
          ${block("Замена, если выражение не найдёт результат", {tag: "textarea", id: "undefined", atr: {style: "width:80%; height:50px", class: "input"}})}
          <dl>
            <dt>Искать только в первом ответе в теме(рекомендуется использовать для предотвращения ошибок). Необязательно</dt>
            <dd>
              <label style="text-align:center;margin: 0 auto;" class="checkbox">
                <input id="searchfirstmsg" type="checkbox">
                <span script="enable" class="checkbox-switch"></span>
              </label>
            </dd>
          </dl>
          <dl><dt class="save"><span replaceid=1>Изменить <i class="fa fa-floppy-o" aria-hidden="true"></i></span></dt></dl>
          `)
        $("#nameTag").val(tags[e.target.attributes.replaceid.nodeValue].type);
        $("#regexp").val(tags[e.target.attributes.replaceid.nodeValue].regexp);
        $("#undefined").val(tags[e.target.attributes.replaceid.nodeValue].undefined);
        if (tags[e.target.attributes.replaceid.nodeValue].searchFirstMsg) $("#searchfirstmsg").prop("checked", true)
        $(".save span").click(tagsSave)
      })
      $("[script='remove']").click((e) => {
        tags.splice(e.target.attributes.replaceid.nodeValue, 1);
        chrome.storage.local.set({"tags": JSON.stringify(tags)});
        tagsSettings();
      })
      $(".save span").click(tagsSave)

  }
  function replace() {
    if ($(".window").length === 0) {
      header();
    } else $(".window").empty();
    replaceArray.sort((a,b) => {return b.time-a.time})
    $(`
      <div style="margin-bottom: 20px;" class="div-options">
        <dl><dt style="text-align: center;">Функция замены текста при вводе нужной комбинации символов в текстовое поле</dt></dl>
        ${block("Текст заменяемого", {tag: "input", id: "replaced", atr: {style: "width: 80%", class: "input", type: "text"}})}
        ${block("Текст замены", {tag: "textarea", id: "replaceText", atr: {style: "width: 80%; height:50px", class: "input"}})}
        <dl><dt class="save"><span>Добавить <i class="fa fa-floppy-o" aria-hidden="true"></i></span></dt></dl>
      </div>`).appendTo(".window");
      let html = $(`<table>
        <caption style="font-size: 16px; margin-bottom:10px">Список замен</caption>
        <tbody>
        <tr><th style="width:25%">Текст заменяемого</th><th>Текст замены</th><th class="contains">Включено</th><th class="contains">Изменить</th><th class="contains">Удалить</th></tr>
      `)
    for (let i=0; i<replaceArray.length;i++) {
      $(`<tr><td>${replaceArray[i].replaced}</td>
        <td>${replaceArray[i].replaceText}</td>
        <td style="display: flex;">
          <label style="text-align:center;margin: 0 auto;" class="checkbox">
            <input replaceid="${i}" ${replaceArray[i].enabled ? "checked":null} type="checkbox">
            <span script="enable" replaceid="${i}" class="checkbox-switch"></span>
          </label>
        </td>
        <td style="text-align:center;margin: 0 auto"><i script="edit" replaceid="${i}" class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
        <td style="text-align:center;margin: 0 auto"><i script="remove" replaceid="${i}" class="fa fa-trash" aria-hidden="true"></i></td>
        </tr></tbody></table>`).appendTo(html);
    }
    html.appendTo(".window")
    $("[script='enable']").click((e)=>{
      replaceArray[e.target.attributes.replaceid.nodeValue].enabled = $(`input[replaceid=${e.target.attributes.replaceid.nodeValue}]`).is(':checked') ? false : true;
      chrome.storage.local.set({"replace": JSON.stringify(replaceArray)});
    })
    $("[script='edit']").click(e => {
      $('.window').animate({scrollTop: 0}, 200);
      $("#replaced").val(replaceArray[e.target.attributes.replaceid.nodeValue].replaced);
      $("#replaceText").val(replaceArray[e.target.attributes.replaceid.nodeValue].replaceText).focus();
      $(".save").html(`<span replaceid="${e.target.attributes.replaceid.nodeValue}">Изменить <i class="fa fa-floppy-o" aria-hidden="true"></i></span>`);
      $(".save span").click(replaceSave)
    })
    $("[script='remove']").click((e) => {
      replaceArray.splice(e.target.attributes.replaceid.nodeValue, 1);
      chrome.storage.local.set({"replace": JSON.stringify(replaceArray)});
      replace();
    })
    $(".save span").click(replaceSave)
  }
  function keyboardFunc() {
    keyboardFuncArray.sort((a,b) => {return b.time-a.time})
    if ($(".window").length === 0) {
      header();
    } else $(".window").empty();
    $(`
      <div style="margin-bottom: 20px;" class="div-options">
        <dl><dt style="text-align: center;">Функция действия при нажатии на кнопки клавиатуры</dt></dl>
        ${block("Клавиши", {tag: "input", atr: {class: "input button-input", value: "Не назначено", type: "button"}})}
        ${block("Действие", {tag: "select", id: "action", array: ["Редактирование темы", "Копирование", "Использование ответа", "Переход по ссылке"]})}
        <div id="action-settings">
          ${block("Префикс. Нужно ввести ID префикса (99 - не изменять префикс темы)", {tag: "input", "id": "prefix_id", atr: {value: 99, class: "input", type: "number", min: 0, max: 99}})}
          ${block("Закрыть тему", {tag: "select", id: "close", array: ["Не изменять", "Закрыть", "Открыть"]})}
          ${block("Закрепить тему", {tag: "select", id: "sticky", array: ["Не изменять", "Закрепить", "Открепить"]})}
        </div>
      <dl><dt class="save"><span>Добавить <i class="fa fa-floppy-o" aria-hidden="true"></i></span></dt></dl>
      </div>`).appendTo(".window");
    let html = `<table>
      <caption style="font-size: 16px; margin-bottom:10px">Список функций</caption>
      <tbody>
      <tr><th style="width: 10%">Клавиши</th><th>Тип функции</th><th>Доп. информация</th><th class="contains">Включено</th><th class="contains">Изменить</th><th class="contains">Удалить</th></tr>`
    for (let i=0; i<keyboardFuncArray.length; i++) {
      let spec="", type="", text="";
      if (keyboardFuncArray[i].specKey == 1) spec = "Alt + ";
      else if (keyboardFuncArray[i].specKey == 2) spec = "Ctrl + ";
      else if (keyboardFuncArray[i].specKey == 3) spec = "Shift + ";
      if (keyboardFuncArray[i].type == 0) {
        type = "Редектирование темы";
        let close, sticky = null;
        if (keyboardFuncArray[i].close == 0) close = "Не изменять";
        else if (keyboardFuncArray[i].close == 1) close = "Закрыть";
        else if (keyboardFuncArray[i].close == 2) close = "Открыть";
        if (keyboardFuncArray[i].sticky == 0) sticky = "Не изменять";
        else if (keyboardFuncArray[i].sticky == 1) sticky = "Закрепить";
        else if (keyboardFuncArray[i].sticky == 2) sticky = "Открепить";
        text = `Закрытие: ${close}<br>Закрепление: ${sticky}<br>ИД префикса: ${keyboardFuncArray[i].prefix}`;
      }
      else if (keyboardFuncArray[i].type == 1) {
        type = "Копирование";
        text = `Текст: ${keyboardFuncArray[i].copy}`;
      }
      else if (keyboardFuncArray[i].type == 2) {
        type = "Использование ответа";
        let awr = null;
        for (let j=0; j<answers.content.length; j++)
          if (answers.content[j].type == 2 && answers.content[j].id == keyboardFuncArray[i].id) awr = answers.content[j].name;
        text = `Ответ: "${awr}"`;
      }
      else if (keyboardFuncArray[i].type == 3) {
        type = "Переход по ссылке";
        text = `Открывать в новом окне: ${keyboardFuncArray[i].newWindow ? "+" : "-"}<br>Ссылка: ${keyboardFuncArray[i].url}`;
      }
      html+= `<tr><td>${spec} ${String.fromCharCode(keyboardFuncArray[i].keyCode)}</td>
      <td>${type}</td>
      <td>${text}</td>
      <td style="display: flex;">
        <label style="text-align:center;margin: 0 auto;" class="checkbox">
          <input replaceid="${i}" ${keyboardFuncArray[i].enabled ? "checked":null} type="checkbox">
          <span script="enable" replaceid="${i}" class="checkbox-switch"></span>
        </label>
      </td>
      <td style="text-align:center;margin: 0 auto"><i script="edit" replaceid="${i}" class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
      <td style="text-align:center;margin: 0 auto"><i script="remove" replaceid="${i}" class="fa fa-trash" aria-hidden="true"></i></td></tr>`;
    }
    html+= "</tbody></table>";
    $(html).appendTo(".window");
    $(".save span").click(keyboardSave)
    $("[script='enable']").click((e)=>{
      keyboardFuncArray[e.target.attributes.replaceid.nodeValue].enabled = $(`input[replaceid=${e.target.attributes.replaceid.nodeValue}]`).is(':checked') ? false : true;
      chrome.storage.local.set({"keyboard": JSON.stringify(keyboardFuncArray)});
    })
    $("[script='edit']").click(e => {
      $('.window').animate({scrollTop: 0}, 200);
      let spec = "";
      if (keyboardFuncArray[e.target.attributes.replaceid.nodeValue].specKey == 1) spec = "Alt + ";
      else if (keyboardFuncArray[e.target.attributes.replaceid.nodeValue].specKey == 2) spec = "Ctrl + ";
      else if (keyboardFuncArray[e.target.attributes.replaceid.nodeValue].specKey == 3) spec = "Shift + ";
      $(".input.button-input").val(spec+String.fromCodePoint(keyboardFuncArray[e.target.attributes.replaceid.nodeValue].keyCode)).attr({"specKey": keyboardFuncArray[e.target.attributes.replaceid.nodeValue].specKey, "keycode": keyboardFuncArray[e.target.attributes.replaceid.nodeValue].keyCode});
      $("#action").val(keyboardFuncArray[e.target.attributes.replaceid.nodeValue].type);
      if (keyboardFuncArray[e.target.attributes.replaceid.nodeValue].type == 0) {
        $("#action-settings").html(`
          ${block("Префикс. Нужно ввести ID префикса (99 - не изменять префикс темы)", {tag: "input", "id": "prefix_id", atr: {value: 99, class: "input", type: "number", min: 0, max: 99}})}
          ${block("Закрыть тему", {tag: "select", id: "close", array: ["Не изменять", "Закрыть", "Открыть"]})}
          ${block("Закрепить тему", {tag: "select", id: "sticky", array: ["Не изменять", "Закрепить", "Открепить"]})}
        `);
        $("#prefix_id").val(keyboardFuncArray[e.target.attributes.replaceid.nodeValue].prefix);
        $("#close").val(keyboardFuncArray[e.target.attributes.replaceid.nodeValue].close);
        $("#sticky").val(keyboardFuncArray[e.target.attributes.replaceid.nodeValue].sticky);
      } else if (keyboardFuncArray[e.target.attributes.replaceid.nodeValue].type == 1) {
        $("#action-settings").html(
            block("Введите текст копирования. Действуют теги: <br>{nick} - Ник игрока.<br>{nick_jb} - Ник, на которого написана жалоба<br>{name_fa} - Имя форумного аккаунта.<br>{thread_id} - ИД темы", {tag: "textarea", id: "copyText", atr: {style: "width: 60%; height: 130px", type: "text", class: "input"}})
        )
        $("#copyText").val(keyboardFuncArray[e.target.attributes.replaceid.nodeValue].copy);
      } else if (keyboardFuncArray[e.target.attributes.replaceid.nodeValue].type == 2) {
        let html = `<dl><dt>Использовать ответ</dt><dd><select class="input" id="Answer">`;
        for (let j=0; j<answers.content.length; j++)
          if (answers.content[j].type == 2)
            html+= `<option value="${answers.content[j].id}">Ответ "${answers.content[j].name}"</option>`;
        html+= `</select></dd></dl>`;
        $("#action-settings").html(html);
        $("#Answer").val(keyboardFuncArray[e.target.attributes.replaceid.nodeValue].random)
      } else if (keyboardFuncArray[e.target.attributes.replaceid.nodeValue].type == 3) {
        $("#action-settings").html(
          `${block("Ссылка", {tag: "input", id: "url", atr: {type: "text", class: "input"}})}
          <dl>
            <dt>Переход в новой вкладке</dt>
            <dd>
              <label class="checkbox">
                <input id="newWindow" ${keyboardFuncArray[e.target.attributes.replaceid.nodeValue].enabled ? "checked":null} type="checkbox">
                <span class="checkbox-switch"></span>
              </label>
            </dd>
          </dl>`
        )
        $("#url").val(keyboardFuncArray[e.target.attributes.replaceid.nodeValue].url)
      }
      $("dl:has(dt:contains('Действие'))").css("display", "none");
      $(".save").html(`<span enabled="${keyboardFuncArray[e.target.attributes.replaceid.nodeValue].enabled}" replaceid="${e.target.attributes.replaceid.nodeValue}">Изменить <i class="fa fa-floppy-o" aria-hidden="true"></i></span>`);
      $(".save span").click(keyboardSave)
    })
    $("[script='remove']").click((e) => {
      keyboardFuncArray.splice(e.target.attributes.replaceid.nodeValue, 1);
      chrome.storage.local.set({"keyboard": JSON.stringify(keyboardFuncArray)});
      keyboardFunc();
    })
    $(".input.button-input").focus(() => {
      $(".input.button-input").val(null);
      $(".input.button-input").keydown((e) => {
        e.preventDefault();
        if ((e.altKey && e.ctrlKey) || (e.ctrlKey && e.shiftKey) || (e.shiftKey && e.altKey)) return;
        let dopKey = '';
        if (e.altKey) dopKey = "Alt + ";
        else if (e.ctrlKey) dopKey = "Ctrl + ";
        else if (e.shiftKey) dopKey = "Shift + ";
        if (e.key == "Alt" || e.key == "Shift" || e.key == "Control") $(".input.button-input").val(dopKey);
        else $(".input.button-input").val(dopKey + e.key);
        if (e.altKey) dopKey = 1;
        else if (e.ctrlKey) dopKey = 2;
        else if (e.shiftKey) dopKey = 3;
        $(".input.button-input").attr("specKey", dopKey);
        if (e.keyCode != 17 && e.keyCode != 16 && e.keyCode != 18) $(".input.button-input").attr("keycode", e.keyCode)
      })
      $(".input.button-input").keyup((e) => {
        if ($(".input.button-input").val() == '' || $(".input.button-input").val() == 'Alt + ' ||  $(".input.button-input").val() == 'Ctrl + ' ||  $(".input.button-input").val() == 'Shift + ') $(".input.button-input").val("Не назначено");
        if ($(".input.button-input").val() == "Не назначено") return;
        $(".input.button-input").blur();
      })
    }).focusout(() => {
      if ($(".input.button-input").val() == '' || $(".input.button-input").val() == 'Alt + ' ||  $(".input.button-input").val() == 'Ctrl + ' ||  $(".input.button-input").val() == 'Shift + ') $(".input.button-input").val("Не назначено").removeAttr("specKey").removeAttr("keycode");
    })
    $("#action").change(() => {
      if ($("#action").val() == 0) {
        $("#action-settings").html(`
          ${block("Префикс. Нужно ввести ID префикса (99 - не изменять префикс темы)", {tag: "input", "id": "prefix_id", atr: {value: 99, class: "input", type: "number", min: 0, max: 99}})}
          ${block("Закрыть тему", {tag: "select", id: "close", array: ["Не изменять", "Закрыть", "Открыть"]})}
          ${block("Закрепить тему", {tag: "select", id: "sticky", array: ["Не изменять", "Закрепить", "Открепить"]})}`
        )
      } else if ($("#action").val() == 1) {
        $("#action-settings").html(
          block("Введите текст копирования. Действуют теги: <br>{nick} - Ник игрока.<br>{nick_jb} - Ник, на которого написана жалоба<br>{name_fa} - Имя форумного аккаунта.<br>{thread_id} - ИД темы", {tag: "textarea", id: "copyText", atr: {style: "width: 60%; height: 130px", type: "text", class: "input"}})
        )
      } else if ($("#action").val() == 2) {
        let html = `<dl><dt>Использовать ответ</dt><dd><select class="input" id="Answer">`;
        for (let j=0; j<answers.content.length; j++)
          if (answers.content[j].type == 2)
            html+= `<option value="${answers.content[j].id}">Ответ "${answers.content[j].name}"</option>`;
        html+= `</select></dd></dl>`;
        $("#action-settings").html(html);
      } else if ($("#action").val() == 3) {
        $("#action-settings").html(
          `${block("Ссылка", {tag: "input", id: "url", atr: {type: "text", class: "input"}})}
          <dl>
            <dt>Переход в новой вкладке</dt>
            <dd>
              <label class="checkbox">
                <input id="newWindow" checked type="checkbox">
                <span class="checkbox-switch"></span>
              </label>
            </dd>
          </dl>`
        )
      }
    })
  }
  function tagsSave(e) {
    if ($("#nameTag").val() == "" || $(".input.button-input").val() == '' || $("#regexp").val() == "") return;
    let array = {
      type: $("#nameTag").val(),
      regexp: $("#regexp").val(),
      undefined: $("#undefined").val(),
      searchFirstMsg: $("#searchfirstmsg").prop("searchfirstmsg"),
      enabled: true,
      time: Math.floor(Date.now()/1000)
    }
    if (e.target.attributes.replaceid == undefined) {
      tags.push(array);
      tags.sort((a,b) => {return b.time-a.time});
      chrome.storage.local.set({"tags": JSON.stringify(tags)});
      tagsSettings();
    } else {
      tags[e.target.attributes.replaceid.nodeValue] = array;
      tags.sort((a,b) => {return b.time-a.time});
      chrome.storage.local.set({"tags": JSON.stringify(tags)});
      tagsSettings();
    }
  }
  function colorSettings() {
    if ($(".window").length === 0) {
      header();
    } else $(".window").empty();
    colorStr.sort((a,b) => {return b.time-a.time});
    $(`
      <div style="margin-bottom: 20px;" class="div-options">
        <dl><dt style="text-align: center;">Цвета строк в логах</dt></dl>
        ${block("Ключевые слова", {tag: "input", id: "keyword", atr: {style: "width: 80%", class: "input", type: "text"}})}
        ${block("Цвет строки", {tag: "color", id: "colorStr"})}
        ${block("Чувствительность к регистру", {tag: "checkbox", id: "caseSensitivity"})}
        <dl><dt class="save"><span>Добавить <i class="fa fa-floppy-o" aria-hidden="true"></i></span></dt></dl>
      </div>`).appendTo(".window");
      $("#caseSensitivity").prop("checked", true)
      let html = $(`<table>
        <caption style="font-size: 16px; margin-bottom:10px">Список цветов строк</caption>
        <tbody>
        <tr><th style="width:20%">Ключевые слова</th><th>Цвет</th><th>Чувствительность к регистру</th><th class="contains">Включено</th><th class="contains">Изменить</th><th class="contains">Удалить</th></tr>
      `)
      for (let i=0; i<colorStr.length;i++) {
        $(`<tr><td style="width: 10px">${colorStr[i].keyword}</td>
          <td>${colorStr[i].color}</td>
          <td>${colorStr[i].caseSensitivity ? '+' : '-'}</td>
          <td style="display: flex;">
            <label style="text-align:center;margin: 0 auto;" class="checkbox">
              <input replaceid="${i}" ${colorStr[i].enabled ? "checked":null} type="checkbox">
              <span script="enable" replaceid="${i}" class="checkbox-switch"></span>
            </label>
          </td>
          <td style="text-align:center;margin: 0 auto"><i script="edit" replaceid="${i}" class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
          <td style="text-align:center;margin: 0 auto"><i script="remove" replaceid="${i}" class="fa fa-trash" aria-hidden="true"></i></td>
          </tr></tbody></table>`).appendTo(html);
      }
      html.appendTo(".window");
      $("[script='enable']").click((e)=>{
        colorStr[e.target.attributes.replaceid.nodeValue].enabled = $(`input[replaceid=${e.target.attributes.replaceid.nodeValue}]`).is(':checked') ? false : true;
        chrome.storage.local.set({"colorStr": JSON.stringify(colorStr)});
      })
      $("[script='edit']").click(e => {
        $('.window').animate({scrollTop: 0}, 200);
        $("#keyword").val(colorStr[e.target.attributes.replaceid.nodeValue].keyword);
        $("#colorStr").val(colorStr[e.target.attributes.replaceid.nodeValue].color);
        if (colorStr[e.target.attributes.replaceid.nodeValue].caseSensitivity) $("#caseSensitivity").prop("checked", true);
        $(".save").html(`<span replaceid="${e.target.attributes.replaceid.nodeValue}">Изменить <i class="fa fa-floppy-o" aria-hidden="true"></i></span>`);
        $(".save span").click(colorStrSave);
      })
      $("[script='remove']").click((e) => {
        colorStr.splice(e.target.attributes.replaceid.nodeValue, 1);
        chrome.storage.local.set({"colorStr": JSON.stringify(colorStr)});
        colorSettings();
      })
      $(".save span").click(colorStrSave)
  }
  function colorStrSave(e) {
    if ($("#keyword").val()) {
      let array = {
        keyword: $("#keyword").val(),
        color: $("#colorStr").val(),
        caseSensitivity: $("#caseSensitivity").is(':checked') ? true : false,
        enabled: true,
      }
      if ($(".save span").attr("replaceid")) {
        array.enabled = colorStr[e.target.attributes.replaceid.nodeValue].enabled;
        array.time = colorStr[e.target.attributes.replaceid.nodeValue].time;
        colorStr[e.target.attributes.replaceid.nodeValue] = array;
        chrome.storage.local.set({"colorStr": JSON.stringify(colorStr)});
        colorSettings();
      } else {
        array.time = Math.floor(Date.now()/1000);
        colorStr.push(array);
        colorStr.sort((a,b) => {return b.time-a.time});
        chrome.storage.local.set({"colorStr": JSON.stringify(colorStr)});
        colorSettings();
      }
    }
  }
  function keyboardSave(e) {
    if ($(".input.button-input").val() == "Не назначено" || $("#regexp").val() == '') return;
    let array = {
      enabled: true,
      specKey: Number($(".input.button-input").attr("speckey")),
      keyCode: Number($(".input.button-input").attr("keycode")),
      time: Math.floor(Date.now()/1000)
    }
    if ($("#action").val() == 0) {
      array.type = 0;
      array.close = Number($("#close").val());
      array.sticky = Number($("#sticky").val());
      array.prefix = Number($("#prefix_id").val())
    } else if ($("#action").val() == 1) {
      array.type = 1;
      array.copy = $("#copyText").val();
    } else if ($("#action").val() == 2) {
      if ($("#Answer").val() == null) return;
      array.type = 2;
      array.id = Number($("#Answer").val());
    }
    else if ($("#action").val() == 3) {
      if ($("#url").val() == "") return;
      array.type = 3;
      array.url = $("#url").val();
      array.newWindow = $("#newWindow").is(':checked') ? true : false;
    }
    if (e.target.attributes.replaceid == undefined) {
      keyboardFuncArray.push(array);
      keyboardFuncArray.sort((a,b) => {return b.time-a.time});
      chrome.storage.local.set({"keyboard": JSON.stringify(keyboardFuncArray)});
      keyboardFunc();
    } else {
      array.enabled = $(".save > span").attr("enabled") == "true" ? true : false;
      keyboardFuncArray[e.target.attributes.replaceid.nodeValue] = array;
      keyboardFuncArray.sort((a,b) => {return b.time-a.time});
      chrome.storage.local.set({"keyboard": JSON.stringify(keyboardFuncArray)});
      keyboardFunc();
    }
  }
  function replaceSave(e) {
    if ($("#replaced").val() && $("#replaceText").val()) {
      let namesReplace = [];
      for (let i=0; i<replaceArray.length; i++) namesReplace.push(replaceArray[i].replaced);
      let array = {
        replaced: $("#replaced").val(),
        replaceText: $("#replaceText").val().replaceAll(/\n/g, "<br>"),
        enabled: true,
      }
      if ($(".save span").attr("replaceid")) {
        array.enabled = replaceArray[e.target.attributes.replaceid.nodeValue].enabled;
        array.time = replaceArray[e.target.attributes.replaceid.nodeValue].time;
        replaceArray[e.target.attributes.replaceid.nodeValue] = array;
        replaceArray.sort((a,b) => {return b.time-a.time});
        chrome.storage.local.set({"replace": JSON.stringify(replaceArray)});
        replace();
      }
      else if (namesReplace.indexOf($("#replaced").val()) == -1) {
        array.time = Math.floor(Date.now()/1000);
        replaceArray.push(array);
        replaceArray.sort((a,b) => {return b.time-a.time});
        chrome.storage.local.set({"replace": JSON.stringify(replaceArray)});
        replace();
      }
    }
  }
  $("input#turn").click(() => {
    if ($("input#turn").is(':checked')) settings.isEnabled = true;
    else settings.isEnabled = false;
    chrome.storage.local.set({"settings": JSON.stringify(settings)});
  })
  function header() {
    $("body").css("width", "600px");
    $('[src="images/logo.png"]').css({"margin-top": "20px", "margin-left": "20px"}).after(document.createElement("hr"))
    $(document.createElement("div")).addClass("window").insertAfter("hr").after("<hr style='margin-top:3px'>");
    $('[href="https://vk.com/kalibr220"]').css({"margin-right": "20px", "right": "0"});
    $(`<span id='btn-settings' class='windowMenu'><i class="fa fa-cogs" aria-hidden="true"></i> Настройки</span>`).insertAfter('[src="images/logo.png"]')
    $(`<span id='btn-replaceText' class='windowMenu'><i class="fa fa-text-width" aria-hidden="true"></i> Замена слов</span>`).insertAfter('#btn-settings')
    $(`<span id='btn-funcKeyboard' class='windowMenu'><i class="fa fa-cubes" aria-hidden="true"></i> Биндер</span>`).insertAfter('#btn-replaceText')
    $("#btn-settings").click(menu)
    $("#btn-replaceText").click(replace);
    $("#btn-funcKeyboard").click(keyboardFunc);
    $("#btn-tags").click(tagsSettings);
    $('.power-switch-wr, center, svg').remove();
    $(document.createElement("style")).html(`#js-XFUniqueId17::-webkit-scrollbar { width: 0; } body::-webkit-scrollbar-button {background-repeat:no-repeat;width:10px;height:0px}::-webkit-scrollbar-track {background-color:rgb(34,36,43)}::-webkit-scrollbar-thumb {-webkit-border-radius: 0px;border-radius: 0px;background-color:${settings.colorScroll}}::-webkit-scrollbar-thumb:hover{background-color:${settings.colorScroll};}::-webkit-resizer{background-repeat:no-repeat;width:10px;height:0px}::-webkit-scrollbar{width: 10px;}`).attr("scriptStyle", 0).appendTo("head");
  }
  function block(dt, dd, tooltip=false) {
    let html = `<dl><dt style="vertical-align: middle;">${dt+(tooltip != false ? ' <div class="tooltip"><i class="fa fa-question-circle-o" aria-hidden="true"></i><span class="tooltiptext">'+tooltip+'</span></div>' : "")}</dt><dd style="vertical-align: middle;">`;
    let atr = "";
    for (let key in dd.atr)
      atr+= key+'="'+dd.atr[key]+'" ';
    if (dd.tag == "select") {
      html+= `<select id="${dd.id}" ${atr} class="input">`;
      for (let i=0; i<dd.array.length; i++)
        html+= `<option value="${i}">${dd.array[i]}</option>`
      html+= `</select>`;
    } else if (dd.tag == "checkbox") html+= `<label class="checkbox"><input id="${dd.id}" type="checkbox"><span class="checkbox-switch"></span></label>`;
    else if (dd.tag == "color") html+= `<input id="${dd.id}" ${atr} type="color">`;
    else if (dd.tag == "download") html+= `<a id="${dd.id}" style="cursor: pointer;">Скачать <i class="fa fa-download" aria-hidden="true"></i></a>`;
    else if (dd.tag == "reset") html+= `<a id="${dd.id}" style="cursor: pointer;">Сброс <i class="fa fa-refresh" aria-hidden="true"></i></a>`;
    else html+= `<${dd.tag} id="${dd.id}" ${atr}>${dd.text ? dd.text : ""}</${dd.tag}>`;
    html+= `</dd></dl>`;
    return html;
  }
}
