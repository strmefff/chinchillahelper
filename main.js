"use strict";
let nak = null, threadInfo = {}, prefix_id, edit, c = 0, upd, firstload=false, styleUpdate=false;
document.addEventListener('DOMContentLoaded', code);
function preprocessing()
{
  if (document.location.origin == "http://ulog.union-u.net" && settings.isEnabledUlog)
  {
    console.log(settings.hidePR);
    if (settings.hidePR)
      $("body").css("visibility", "hidden")
  }
  if (document.location.origin == "https://forum.robo-hamster.com" && settings.isEnabledGPLogs)
  {
    $(document.createElement("style")).prop("id", "styleForumScript").html(css()).appendTo("head");
  }
  else if ((document.location.origin == "https://arizonarp.logsparser.info" || document.location.origin == "https://rodina.logsparser.info") && settings.isEnabledGPLogs)
  {
    $("#styleForumScript, #styleForumScriptX").remove();
    if (settings.scriptStyleGPLogs && settings.isEnabledGPLogs)
      $(document.createElement("style")).prop("id", "styleForumScript").html(`
        .nav-link.dropdown-toggle, .dropdown-item, .badge {
          color: ${settings.colorTextGP} !important;
        }
        .badge-secondary {
          background-color: ${settings.colorLastIPGP}
        }
        .badge-primary {
          background-color: ${settings.colorRegIPGP}
        }
        .table-hover > tbody > tr:hover > *, .modal-content, .card, .app, body, .modal-content, .table, .select2-selection__rendered, .select2-search__field, .app-content-body-title, .select2-results__options, .select2-search {
          color: ${settings.colorTextGP} !important;
          background-color: ${settings.colorBackgroundGP} !important
        }
        .copy {
          cursor: pointer
        }
        .form-control, .select2-selection--single, input.select2-search__field, .select2-selection--multiple, .select2-container--default .select2-results__option--selected, .page-link {
          background:${settings.colorBackgroundGP};
          background-color: ${settings.colorBackgroundGP} !important;
          border:1px solid ${settings.colorBorderGP} !important;
          color: ${settings.colorTextGP}
        }
        .form-control:focus {
          color: ${settings.colorTextGP};
          border-color: ${settings.colorTextGP};
          background-color:${settings.colorBackgroundGP};
          box-shadow: 0 0 5px rgba(0,0,0,0.8)
        }
        nav.navbar.navbar-expand-md.navbar-light.bg-white.shadow-sm, .dropdown-menu, .select2-selection__choice__display, .select2-selection__choice, .modal-content {
          background-color: ${settings.colorNavbarGP} !important;
        }

        .dropdown-menu.dropdown-menu-end.show > a.dropdown-item:hover, .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable {
          background-color: ${settings.colorHoverGP} !important;
        }
        .text-muted {
          color: ${settings.colorNameFilterGP} !important
        }

        .js_component_select_multiple, .js_component_select_single {
          width: 1px !important;
          postiton: absolute !important;
          border: 0 !important;
          clip: rect(0 0 0 0) !important;
          -webkit-clip-path: inset(50%) !important;
          clip-path: inset(50%) !important;
          height: 1px !important;
          overflow: hidden !important;
          padding: 0 !important;
          white-space: nowrap !important
        }

        a {
          color: ${settings.colorAGP}
        }

        code {
          color: ${settings.colorCodeGP}
        }

        .btn-primary {
          background-color: ${settings.colorBtnGP};
          border: ${settings.colorBtnGP}
        }

        ::-webkit-scrollbar-button {
          background-repeat:no-repeat;
          width:10px;
          height:0px
        }
        ::-webkit-scrollbar-track {
          background-color:rgb(34,36,43)
        }
        ::-webkit-scrollbar-thumb {
          -webkit-border-radius: 0px;
          border-radius: 0px;
          background-color:${settings.colorScroll}
        }
        ::-webkit-scrollbar-thumb:hover{
          background-color:${settings.colorScroll};
        }
        ::-webkit-resizer {
          background-repeat:no-repeat;
          width:10px;
          height:0px
        }
        .app-nav .navbar-brand {
          position: inherit;
          background: none;
        }
        ::-webkit-scrollbar{width: 10px;}
        `).appendTo("head");

    if (settings.hidePanel)
    {
      $(document.createElement("style")).prop("id", "styleForumScriptX").html(`
        .app-sidebar.bg-dark
        {
          visibility: hidden
        }
        .app-content--sidebar {
          margin-left: 0px
        }
        .app-nav .navbar-brand {
          position: inherit;
          background: none;
        }
        `).appendTo("head");
    }
    if (settings.hidePR && !firstload)
      $("body").css("visibility", "hidden");
    firstload = false;
  }
  else if (document.location.origin == "https://forum.robo-hamster.com" && settings.isEnabledForum)
  {
    $(document.createElement("style")).prop("id", "styleForumScript").html(`
      .structItemContainer-group--sticky {
        border-bottom: 3px solid var(--basecolor);
      }

      .block-filterBar {
        border-bottom: 5px solid var(--basecolor);
      }

      .structItem-status--sticky::before {
        color: #d28b00;
      }
      .structItem-status--locked::before {
        color: #ca0000;
      }
      .filterBar {
        color: white;
        font-size: 17px;
      }
      .scriptMessage {
        position: fixed;
        top: 15%;
        right: 1%;
        text-align: center;
        font: 1.1vw BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
        padding: 1vw;
        z-index: 999;
        opacity: 0;
        border-radius: .7vw;
        background: rgba(226,226,226,0.3);
        transition: .3s;
      }
      .scriptMessage-active {
        opacity: 1;
      }
      .setPos {
        -moz-user-select: -moz-none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
      .Folder {
        color: #fff;
        box-shadow: 0 4px 15px 0 rgb(0 0 0 / 20%);
        border: none;
        border-color: #d15656;
        margin: 10px 15px;
        height: 100px;
        width: 29.5%;
      }

      .Answer {
        color: #fff;
        background-color: #000; /* Черный цвет фона */
        box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 80px #00ffff; /* Голубой неоновый эффект */
        border: none;
        margin: 10px 15px;
        height: 100px;
        width: 29.5%;
        transition: box-shadow 0.5s; /* Плавное изменение эффекта при наведении */
      }
    
      .Answer:hover {
        box-shadow: none; /* Удаление эффекта при наведении */
      }

      .button-Forum {
        position: relative;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-left: 16px;
        margin-right: 16px;
        text-align: center
      }

      .buttonGroup {
        margin-right:15px;
      }

      .winUlog {
        position: fixed;
        width: 400px;
        height: 200px;
        z-index: 10;
        background-image: url("http://seraphtech.ru/img/logo.png");
        background-color: #444444;
        border-radius: 15px;
      }

      #positionWin {
        cursor: move
      }
      .log {
        height: ${settings.heightWindowLog}px;
        display: flex;
        border-top: 1px solid white;
        font-size: 18px;
      }
      .logMenu {
        width: 15%;
        height: 100%;
        border-right: 1px solid white;
        text-align: center;
        padding-top: 10px;
      }
      .menu-link {
        display: flex;
        text-decoration: none;
        margin-left: 20px;
        cursor: pointer;
        padding: 8px;
        color: rgba(255, 255, 255, 0.5);
      }
      .menu-link:hover {
        text-decoration: none;
        color: white;
      }
      .logContent {
        margin-top: .5%;
        margin-left: .5%;
        width: 100%;
        height: 95%;
        font-size: 14px;
      }
      .logNick {
        display: flex;
        text-decoration: none;
        margin-left: 5px;
      }
      .logNick:hover {
        text-decoration: none;
      }

      `).appendTo("head");
  }
}
function code()
{
  if (document.location.origin == "http://ulog.union-u.net" && settings.isEnabledUlog) ulog();
  else if (document.location.origin == "https://forum.robo-hamster.com" && settings.isEnabledForum) rodinaForum();
  else if (document.location.origin == "https://admin-tools.ru" && settings.isEnabledUlog && settings.isEnabledUlogTools && /Log7Day/.test(document.location.search)) tools();
  else if (document.location.origin == "https://forum.robo-hamster.com" && settings.isEnabledForum) {
    $(".menu-linkRow:contains('Переместить тему')").click(() => {
      let interval = setInterval(() => {
        if ($("[name='target_node_id']").length > 0)
        {
          clearInterval(interval);
          $(`<dl class="formRow formRow--noColon formRow--input">
            <dt><div class="formRow-labelWrapper">
            <label class="formRow-label"><div class="bbWrapper">Поиск</div></label>
            </dt><dd>
            <input type="text" class="input" id="titleForum" maxlength="40">
            </dd></dl>`).insertAfter("dl.formRow.formRow--input:contains('Заголовок')");
          $("#titleForum").change(() => {
            $("[name='target_node_id'] option").show();
            $("[name='target_node_id'] option:not(:contains('"+$("#titleForum").val()+"'))").hide();
          });
        }
      }, 200);
    });
    let author = $(".username.u-concealed").attr("data-user-id");
    $(".message--post .avatar--m[data-user-id!='"+author+"']").parents("article").find(".actionBar-action--delete").after(
      $(document.createElement("span")).css("cursor", "pointer").addClass("actionBar-action actionBar-action--menuItem").text("Удалить все ответы пользователя на странице").click((e) => {
        let name = $(".message--post .avatar--m[data-user-id='"+$($(e.target).parents("article")).find(".avatar--m").attr("data-user-id")+"']:eq(0)").parents("article").find(".username--style74").text();
        let arr  = $(".message--post .avatar--m[data-user-id='"+$($(e.target).parents("article")).find(".avatar--m").attr("data-user-id")+"']").parents("article").find(".actionBar-action--delete");
        if (settings.confirmationDeletePosts)
        {
          overlay("Подтверждение", `Будут удалено ${arr.length} тем пользователя ${name}`);
          $("#scriptOK").click(() => deletaposts(arr));
          $("#scriptNo").click(() => $('.overlay-container.is-active').remove());
        }
        else
          deletaposts(arr);
      })
    );
    if (window.location.pathname.match(/\/threads\/\d+/))
    {
      let nick = $("b:contains('ник администратора')");
      if (settings.isReplacePrefixNak && $("b:contains('ник администратора')").length > 0 && nick.length > 0 && nick[0].innerText.match(/ник администратора:?\s+(.+?)(\n|$)/) != null)
      {
        nick = nick[0].innerText.match(/ник администратора:?\s+(.+?)(\n|$)/)[1];
        for (let i=0, br=true; i<admList.length && br; i++)
          if (nick == admList[i].nick || nick == admList[i].prefix)
          {
            br = false;
            $("b:contains('ник администратора')")[0].innerHTML =
              $("b:contains('ник администратора')")[0].innerHTML.replace(new RegExp(nick), `<a href='https://vk.com/id${admList[i].vk}'>$&[${admList[i].lvl}]</a>`);
          }
      }
      get("edit", (xhr) => {
        var regexp = RegExp('<option value="(\\d+)" selected="selected"');
        prefix_id = xhr.replace("\&quot;", "").match('<option value="(\\d+)" selected="selected"') ? xhr.replace("\&quot;", "").match(regexp)[1] : "no";
        edit = xhr;
      })
    }
    if ((settings.lastTimeUpdateAdmList + 3600 < new Date().getTime()/1000) && (settings.server == 15 || settings.server == 20 || settings.server == 25 || settings.server == 24)) {
      if (settings.server == 15 || settings.server == 20 || settings.server == 25 || settings.server == 24)
        post("https://seraphtech.ru/api/v2/forum.getAdmins", {"server": settings.server+1, "token": settings.seraphtechToken, "fid": $(".avatar.avatar--xxs").attr("data-user-id")}, (response) => {
          settings.lastTimeUpdateAdmList = new Date().getTime()/1000;
          chrome.storage.local.set({"settings": JSON.stringify(settings)});
          if (IsJsonString(response))
          {
            let res = JSON.parse(response);
            if (res["success"] == "ok")
            {
              admList = JSON.parse(response)["response"];
              chrome.storage.local.set({"admList": JSON.stringify(admList)});
            }
          }
        });
      else if (settings.updateAdmListUrl != "") {
        post(settings.updateAdmListUrl, null, (response) => {
          admList = JSON.parse(response)[0];
          if (admList == null)
            admList = [];
          settings.lastTimeUpdateAdmList = new Date().getTime()/1000;
          chrome.storage.local.set({"admList": JSON.stringify(admList), "settings": JSON.stringify(settings)});
        });
      }
    }
    turn();
    upd = function update(key) {
      console.log(key);
      if (key === "settings" && (document.location.origin === "https://forum.robo-hamster.com" || document.location.origin === "https://forum.robo-hamster.com")) {
        console.log(1);
        turn();
        if (nak != null && settings.isEnabledLogs)
        {
          if (settings.viewLog === 0) nak7day(nak);
          else if (settings.viewLog === 1) nak30day(nak);
        }
      } else if (key === "answers" && $(".overlay-content").length !== 0) {
        $('div.overlay-container').remove();
        menu();
      } else if (key === "replace") {
        if ($(".fr-element.fr-view[replace='on']").length !== 0)
          $(".fr-element.fr-view").off("keyup").removeAttr("replace");
        replaceText();
      } else if (key === "keyboard")
        keyboardFunc();
      else if (key === "tags")
        initThreadInfo();
    }
  }
  else if (document.location.origin == "https://arizonarp.logsparser.info" || document.location.origin == "https://rodina.logsparser.info")
    GPlogs();
}
function hideIPNumbers() {
  // Получаем состояние чекбокса
  var hidePRCheckbox = document.getElementById('hidePR');
  var isChecked = hidePRCheckbox.checked;

  // Если чекбокс отмечен, скрываем цифры в IP-адресах
  if (isChecked) {
      // Получаем все элементы с классом "ip"
      var ipElements = document.querySelectorAll('.ip');

      // Проходимся по каждому элементу и скрываем цифры
      ipElements.forEach(function(element) {
          // Получаем текстовое содержимое элемента
          var text = element.textContent;

          // Заменяем все цифры на плейсхолдер "*"
          var hiddenText = text.replace(/\d/g, '*');

          // Присваиваем скрытый текст обратно элементу
          element.textContent = hiddenText;
      });
  }
}

// Добавляем обработчик события изменения состояния чекбокса
document.getElementById('hidePR').addEventListener('change', hideIPNumbers);

// Вызываем функцию hideIPNumbers, чтобы применить скрытие цифр при загрузке страницы
hideIPNumbers();
function deletaposts(arr)
{
  let posts = [];
  for (var i = 0; i < arr.length; i++)
    posts.push($(arr[i]).attr("href").match(/\/(\d+)\//)[1]);

  let post = {
    reason: "",
    hard_delete: 0,
    type: "post",
    action: "delete",
    confirmed: 1,
    _xfToken: $("input[name='_xfToken']").val(),
    _xfResponseType: "json",
    _xfRedirect: document.location.origin+document.location.pathname,
    _xfRequestUri: document.location.pathname
  };
  let body = ['\r\n'];
  for (let key in post)
    body.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n' + post[key] + '\r\n');

  posts.forEach((item, i) => body.push('Content-Disposition: form-data; name="ids[]"\r\n\r\n' + item + '\r\n'));
  bodypost("https://" + location.host + "/inline-mod/", body, () => location.reload());
}
function log(turn)
{
  if (settings.isEnabledLogs && settings.isEnabled) {
    if (!document.location.pathname.match(/\/threads\/\d+\//) || $(".log").length > 0) return;
    $(document.createElement("div")).addClass("log").appendTo('.message.message--quickReply.block-topRadiusContent.block-bottomRadiusContent');
    $(document.createElement("div")).addClass("logMenu").appendTo('.log');
    $(document.createElement("div")).addClass("logContent").appendTo(".log").css("overflow", "auto");
    $(document.createElement("input")).attr({"type": "text", "id": "searchNickLog", "class":"input"}).appendTo(".logMenu");
    $(document.createElement("span")).attr({"type": "button", "id": "searchNickLogButton", "class":"button--primary button button--icon button--icon--reply rippleButton", "style":"margin-top:10px; margin-bottom: 5px"}).text("Поиск").appendTo(".logMenu");
    $(document.createElement("span")).text("Не найден ник в теме").addClass("logNick").appendTo(".logMenu");
    // $(document.createElement("a")).text("7 дней").prop("id", "7days").appendTo(".logMenu").addClass("menu-link").css("margin-top", "10px");
    // $(document.createElement("a")).text("30 дней").prop("id", "30days").appendTo(".logMenu").addClass("menu-link");
    $("#searchNickLogButton").click(()=>{
      if ($("#searchNickLog").val()) {
        $(".logContent").empty();
        loadLog($("#searchNickLog").val());
      }
    })
    // $("#7days").click(() => {
    //   if (settings.viewLog !== 0) {
    //     settings.viewLog = 0;
    //     chrome.storage.local.set({"settings": JSON.stringify(settings)});
    //     nak7day(nak);
    //   }
    // });
    // $("#30days").click(() => {
    //   if (settings.viewLog !== 1) {
    //     settings.viewLog = 1;
    //     chrome.storage.local.set({"settings": JSON.stringify(settings)});
    //     nak30day(nak);
    //   }
    // })
    if (threadInfo.nick && !nak)
      loadLog(threadInfo.nick);
    // else if (nak)
    //   if (settings.viewLog === 0) nak7day(nak);
    //   else if (settings.viewLog === 1) nak30day(nak);
  } else $(".log").remove();
}
function loadLog(nick)
{
  if (settings.seraphtechToken)
  {
    $("#searchNickLog").val(nick);
    $(".logNick").text("Поиск");
    post("https://seraphtech.ru/api/v3/log.nak", {"token": settings.seraphtechToken, "player": nick}, (html) => {
      if (IsJsonString(html))
      {
        let res = JSON.parse(html);
        if (res["success"] == "ok")
        {
          $(".logContent").empty();
          res = res["response"]["nak"];
          let text = `<div class="bbTable"><table width="100%" style="width: 100%;"><tbody>`;
          for (let i=0; i<res.length; i++)
          {
            if (/[^\|x@\/\\\s]+$/.test(res[i]["log"]))
            {
              let pref = res[i]["log"].match(/[^\|x@\/\\\s]+$/)[0];
              for (let key in admList)
                if (admList[key].prefix === pref)
                  res[i]["log"] = res[i]["log"].replace(pref, `<a href='https://vk.com/id${admList[key].vk}' target='_blank'>${pref}[${admList[key].lvl}]</a>`);
            }
            if (/Администратор \w+ /.test(res[i]["log"]))
            {
              let pref = res[i]["log"].match(/Администратор (\w+) /)[1];
              for (let key in admList)
                if (admList[key].nick === pref)
                  res[i]["log"] = res[i]["log"].replace(pref, `<a href='https://vk.com/id${admList[key].vk}' target='_blank'>${pref}[${admList[key].lvl}]</a>`);
            }
            text+= `<tr><td valign='top' width='150px'><b style="cursor: pointer" txt="[QUOTE]${res[i]["date"]} ${res[i]["log"]}[/QUOTE]">${res[i]["date"]}</b></td><td>${res[i]["log"]}</td></tr>`;
          }
          text+= "</tbody></table></div>";
          $(text).appendTo(".logContent");
          $(".logContent b").click((e) => navigator.clipboard.writeText(e.target.attributes["txt"].nodeValue.replaceAll(/<.*?>/g, "")));
        }
        else
          $(".logNick").text("Ошибка");
      }
      else
          $(".logNick").text("Ошибка");
    });
    // post('https://seraphtech.site/api/v2/shinoa.punish', {"token": settings.seraphtechToken, "nick": nick, "fid": $(".avatar.avatar--xxs").attr("data-user-id")}, (html) => {
      // if (IsJsonString(html)) {
      //   let res = JSON.parse(html);
      //   if (res["success"] == "ok")
      //   {
      //     nak = res["response"]["punish"];
      //     if (nak == null && res["response"]["ban"] != null)
      //       nak = [res["response"]["ban"]];
      //     else if (res["response"]["ban"] != null)
      //       nak.unshift(res["response"]["ban"])
      //     if (settings.viewLog === 0) nak7day(nak);
      //     else if (settings.viewLog === 1) nak30day(nak);
      //   }
      //   else if (res["success"] == "error")
      //   {
      //     if (res["error"] == "no access #2")
      //       $(".logNick").text("Нет доступа");
      //     else
      //       $(".logNick").text("Ошибка");
      //   }
      //   else
      //     $(".logNick").text("Ошибка");
      // } else
      //     $(".logNick").text("Ошибка");
    // });
  } else $(".logNick").text("Отсутствует токен");
}
function rodinaForum()
{
  $(".menu-linkRow:contains('Переместить тему')").click(() => {
    let interval = setInterval(() => {
      if ($("[name='target_node_id']").length > 0)
      {
        clearInterval(interval);
        $(`<dl class="formRow formRow--noColon formRow--input">
          <dt><div class="formRow-labelWrapper">
          <label class="formRow-label"><div class="bbWrapper">Поиск</div></label>
          </dt><dd>
          <input type="text" class="input" id="titleForum" maxlength="40">
          </dd></dl>`).insertAfter("dl.formRow.formRow--input:contains('Заголовок')");
        $("#titleForum").change(() => {
          $("[name='target_node_id'] option").show();
          $("[name='target_node_id'] option:not(:contains('"+$("#titleForum").val()+"'))").hide();
        });
      }
    }, 200);
  });
  let author = $(".username.u-concealed").attr("data-user-id");
  $(".message--post .avatar--m[data-user-id!='"+author+"']").parents("article").find(".actionBar-action--delete").after(
    $(document.createElement("span")).css("cursor", "pointer").addClass("actionBar-action actionBar-action--menuItem").text("Удалить все ответы пользователя на странице").click((e) => {
      let name = $(".message--post .avatar--m[data-user-id='"+$($(e.target).parents("article")).find(".avatar--m").attr("data-user-id")+"']:eq(0)").parents("article").find(".username--style74").text();
      let arr  = $(".message--post .avatar--m[data-user-id='"+$($(e.target).parents("article")).find(".avatar--m").attr("data-user-id")+"']").parents("article").find(".actionBar-action--delete");
      if (settings.confirmationDeletePosts)
      {
        overlay("Подтверждение", `Будут удалено ${arr.length} тем пользователя ${name}`);
        $("#scriptOK").click(() => deletaposts(arr));
        $("#scriptNo").click(() => $('.overlay-container.is-active').remove());
      }
      else
        deletaposts(arr);
    })
  );
  if (window.location.pathname.match(/\/threads\/\d+/))
  {
    let nick = $("b:contains('ник администратора')");
    if (settings.isReplacePrefixNak && $("b:contains('ник администратора')").length > 0 && nick.length > 0 && nick[0].innerText.match(/ник администратора:?\s+(.+?)(\n|$)/) != null)
    {
      nick = nick[0].innerText.match(/ник администратора:?\s+(.+?)(\n|$)/)[1];
      for (let i=0, br=true; i<admList.length && br; i++)
        if (nick == admList[i].nick || nick == admList[i].prefix)
        {
          br = false;
          $("b:contains('ник администратора')")[0].innerHTML =
            $("b:contains('ник администратора')")[0].innerHTML.replace(new RegExp(nick), `<a href='https://vk.com/id${admList[i].vk}'>$&[${admList[i].lvl}]</a>`);
        }
    }
    get("edit", (xhr) => {
      var regexp = RegExp('<option value="(\\d+)" selected="selected"');
      prefix_id = xhr.replace("\&quot;", "").match('<option value="(\\d+)" selected="selected"') ? xhr.replace("\&quot;", "").match(regexp)[1] : "no";
      edit = xhr;
    })
  }
  if ((settings.lastTimeUpdateAdmList + 3600 < new Date().getTime()/1000) && (settings.server == 15 || settings.server == 20)) {
    if (settings.server == 15 || settings.server == 20)
      post("https://seraphtech.ru/api/v2/forum.getAdmins", {"server": settings.server+1, "token": settings.seraphtechToken, "fid": $(".avatar.avatar--xxs").attr("data-user-id")}, (response) => {
        settings.lastTimeUpdateAdmList = new Date().getTime()/1000;
        chrome.storage.local.set({"settings": JSON.stringify(settings)});
        if (IsJsonString(response))
        {
          let res = JSON.parse(response);
          if (res["success"] == "ok")
          {
            admList = JSON.parse(response)["response"];
            chrome.storage.local.set({"admList": JSON.stringify(admList)});
          }
        }
      });
    else if (settings.updateAdmListUrl != "") {
      post(settings.updateAdmListUrl, null, (response) => {
        admList = JSON.parse(response)[0];
        if (admList == null)
          admList = [];
        settings.lastTimeUpdateAdmList = new Date().getTime()/1000;
        chrome.storage.local.set({"admList": JSON.stringify(admList), "settings": JSON.stringify(settings)});
      });
    }
  }
  turn();
  upd = function update(key) {
    if (key === "settings" && (document.location.origin === "https://forum.robo-hamster.com" || document.location.origin === "https://forum.robo-hamster.com")) {
      turn();
      if (nak != null && settings.isEnabledLogs)
      {
        if (settings.viewLog === 0) nak7day(nak);
        else if (settings.viewLog === 1) nak30day(nak);
      }
    } else if (key === "answers" && $(".overlay-content").length !== 0) {
      $('div.overlay-container').remove();
      menu();
    } else if (key === "replace") {
      if ($(".fr-element.fr-view[replace='on']").length !== 0)
        $(".fr-element.fr-view").off("keyup").removeAttr("replace");
      replaceText();
    } else if (key === "keyboard")
      keyboardFunc();
    else if (key === "tags")
      initThreadInfo();
  }
}
function nak7day()
{
  let time = new Date();
  time.setHours(0, 0, 0, 0);
  time.setDate(time.getDate() - 7);
  outputnak(time.getTime()/1000);
}
function nak30day()
{
  let time = new Date();
  time.setHours(0, 0, 0, 0);
  time.setDate(time.getDate() - 30);
  outputnak(time.getTime()/1000);
}
function outputnak(time)
{
  $(".logContent").empty();
  let text = `<div class="bbTable"><table width="100%" style="width: 100%;"><tbody>`, str, k=0, banoff = "";
  if (nak != null)
  {
    if (nak[0] != null && nak[0].bandate != null)
      banoff = nak[0]["bandate"];
    for (let i=0; i<nak.length && new Date(nak[i]["date"] == undefined ? nak[i]["bandate"] : nak[i]["date"]).getTime()/1000>time; i++)
    {
      if ((/Администратор/.test(nak[i]["reason"]) || nak[i].admin != undefined) && banoff != nak[i]["date"])
      {
        str = (nak[i].admin == undefined ? "" : ` Администратор ${nak[i].admin} выдал бан ${nak[i].nickname} на ${Math.round((new Date(nak[i].unbandate)-new Date(nak[i].bandate))/864e5)} дней. Причина: `)+nak[i]["reason"].replace(/\[A\]/, "").replace(/(Администратор .+?)\[\d+\]/, "$1").replace(/(игрока|игроку) (.+?)\[\d+\]/, "$1 $2");
        if (settings.isReplacePrefixNak && (/Администратор \w+ /.test(str) || /(Причина|причина):/.test(str)))
        {
          if (/[^\|x@\/\\\s]+$/.test(str))
          {
            let pref = str.match(/[^\|x@\/\\\s]+$/)[0];
            for (let key in admList)
              if (admList[key].prefix === pref)
                str = str.replace(pref, `<a href='https://vk.com/id${admList[key].vk}' target='_blank'>${pref}[${admList[key].lvl}]</a>`);
          }
          if (/Администратор \w+ /.test(str))
          {
            let pref = str.match(/Администратор (\w+) /)[1];
            for (let key in admList)
              if (admList[key].nick === pref)
                str = str.replace(pref, `<a href='https://vk.com/id${admList[key].vk}' target='_blank'>${pref}[${admList[key].lvl}]</a>`);
          }
        }
        k++;
        text+= `<tr><td valign='top' width='150px'><b style="cursor: pointer" txt="[QUOTE]${(nak[i]["date"] == undefined ? nak[i]["bandate"] : nak[i]["date"])+str}[/QUOTE]">${(nak[i]["date"] == undefined ? nak[i]["bandate"] : nak[i]["date"])}</b></td><td>${str}</td></tr>`;
      }
    }
  }
  text+= "</tbody></table></div>";
  $(text).appendTo(".logContent");
  $(".logNick").text("Наказаний: "+k);
  $(".logContent b").click((e) => navigator.clipboard.writeText(e.target.attributes["txt"].nodeValue.replaceAll(/<.*?>/g, "")));
}
function turn()
{
  selectionThread();
  outputThreadsQuantity();
  if (styleUpdate)
  {
    $("#styleForumScript").remove();
    styleUpdate = true;
  }
  if (settings.isEnabled) {
    if ($("#styleForumScript").length == 0)
      $(document.createElement("style")).prop("id", "styleForumScript").html().appendTo("head");
    $(".buttonForumScript").remove();
    $(document.createElement("style")).html(`#js-XFUniqueId17::-webkit-scrollbar { width: 0; } body::-webkit-scrollbar-button {background-repeat:no-repeat;width:10px;height:0px}::-webkit-scrollbar-track {background-color:rgb(34,36,43)}::-webkit-scrollbar-thumb {-webkit-border-radius: 0px;border-radius: 0px;background-color:${settings.colorScroll}}::-webkit-scrollbar-thumb:hover{background-color:${settings.colorScroll};}::-webkit-resizer{background-repeat:no-repeat;width:10px;height:0px}::-webkit-scrollbar{width: 10px;}`).attr("scriptStyle", 0).appendTo("head");
    if (!document.location.pathname.match(/\/threads\/\d+\//))
      return;
    keyboardFunc();
    initThreadInfo();
    log(true);
    let interval = setInterval(() => {
      if ($(".fr-element.fr-view").length > 0)
      {
        clearInterval(interval);
        replaceText();
        if (settings.textNewWindow !== "" && $(".fr-element.fr-view").children().length < 2 && $(".fr-element.fr-view>p").first().children("br").length === 1) {
          let text = settings.textNewWindow;
          let rep = [...text.matchAll(/{(.*?)}/g)];
          for (let i=0; i<rep.length; i++)
            if (threadInfo[rep[i][1]] != undefined) text = text.replace(rep[i][0], threadInfo[rep[i][1]]);
            else for (let j=0; j<tags.length; j++)
                  if (tags[j].type == rep[i][0]) text = text.replace(rep[i][0], tags[j].undefined);
          $("div.fr-element.fr-view").empty();
          $(text.replace(/^/g, "<p>").replace(/\n/g, "</p><p>").replace(/$/, "</p>").replaceAll(/<p><\/p>/g, "<p><br></p>")).appendTo("div.fr-element.fr-view")
          $("div.show-placeholder").removeClass("show-placeholder");
        }
      }
    }, 50);
    if (settings.styleFormButton == 0) var formButton = "button--primary button button--icon button--icon--reply rippleButton buttonGroup buttonForumScript";
    else if (settings.styleFormButton == 1) var formButton = "button--primary button button--icon button--icon--reply rippleButton buttonGroup buttonForumScript";
    if (settings.isOutputMenus) {
      if (document.body.innerHTML.match('Редактировать тему'))
        $(document.createElement("a")).prop("href", window.location.pathname+"edit").attr("data-xf-click", "overlay")
                                      .addClass(formButton).appendTo(".formButtonGroup").append("Редактировать");
      $("a[href='"+window.location.pathname+"quick-close']").clone().appendTo(".formButtonGroup").addClass(formButton);
      $("a[href='"+window.location.pathname+"quick-stick']").clone().appendTo(".formButtonGroup").addClass(formButton);
    }
    $(document.createElement("span")).addClass(formButton == "menu-linkRow buttonForumScript" ? "button--primary button button--icon button--icon--reply rippleButton buttonForumScript" : formButton).prependTo('.formButtonGroup').attr("id", "buttonAnswers")
      .append("Быстрые ответы")
    $("#buttonAnswers").click(menu);
  } else {
    $(".mainb, #buttonAnswers, .overlay-container").remove();
    document.body.className = '';
    $("style[scriptStyle='0']").remove();
  }
}
function menu()
{
  $('div.overlay-container').remove();
  let active = actives(getAnswer(answers.active).answer.id), len = active.length, name;
  document.body.className = 'is-modalOpen is-modalOverlayOpen';
  $(`<div class="overlay-container is-active">
      <div class="overlay"><div class="overlay-title">
        <span id="titleOverlay">Выбор быстрых ответов</span>
        <a class="overlay-titleCloser"></a>
        <div class="button button--icon rippleButton" id="addDir" style="float: right;">
          <span class="button-text">Создать папку</span>
        </div>
        <div class="button button--icon rippleButton" id="addAnswer" style="float: right;">
          <span class="button-text">Создать ответ</span>
        </div>
      </div>
      <div class="overlay-content"></div>
    </div>`).appendTo('body');
  $("#addAnswer").click(() => {
    if (!$("div").is(".formSubmitRow-main")) {
      $(".overlay-content").empty();
      $("#titleOverlay").text("Создание ответа");
      $(document.createElement("legend")).addClass("addin").css('width','100%').append(forms[0], forms[1], forms[2], forms[3], forms[4], forms[5], forms[6]).appendTo("div.overlay-content");
      $(document.createElement("div")).addClass("formSubmitRow-main").append(addFunc[1]).appendTo(".overlay");
      if (edit.replace("\&quot;", "").match(/<select name="prefix_id.*?".*?<\/select>/gs)) {
        $(edit.replace("\&quot;", "").match(/<select name="prefix_id.*?".*?<\/select>/gs)[0]).appendTo("#prefix_forum");
        $('#prefix_forum select').removeClass("u-noJsOnly").removeAttr("multiple").attr("name", "prefix_id");
        $('<option value="-1" selected="selected">(Не изменять)</option>').prependTo('#prefix_forum select');
      } else $("#prefix_forum").text("У вас нет доступа к этой функции в этом разделе").val('no');
      $("#classDel").removeClass("inputChoices-choice");
      if (!document.body.innerHTML.match('/quick-close')) $("#threadCloser").text("У вас нет доступа к этой функции в этом разделе").val('no');
      if (!document.body.innerHTML.match('/quick-stick')) $("#threadStick").text("У вас нет доступа к этой функции в этом разделе").val('no');
      $(document.createElement("select")).addClass("input").prop("title", "Положение").appendTo("#position");
      $(document.createElement("option")).val(0).text("В начале").appendTo("#position select");
      for (let i=0; i<len; i++)
        $(document.createElement("option")).val(active[i].pos+1).text("После кнопки: "+active[i].name).appendTo("#position select");
      if (active[len-1]) $("#position select").val(active[len-1].pos+1);
      $("#addanswer").click(() => {
        if ($("#titleButton").val() && $("#answerText").val() && Number($("#position select").val()) >= 0 && Number($("#position select").val()) <= active.length && $("[name='autoSend']:checked").val()) {
          for (let i=0; i < answers.content.length; i++)
            if (answers.content[i].dir === answers.active && Number($("#position select").val()) < answers.content[i].pos)
              answers.content[i].pos++;
          let array = {
            type: 2,
            name: $("#titleButton").val(),
            id: answers.id++,
            pos: Number($("#position select").val()),
            text: $("#answerText").val(),
            prefix: $("select[name='prefix_id']").val() === "no" || Number($("select[name='prefix_id']").val()) === -1 ? false : Number($("select[name='prefix_id']").val()),
            close: $("[name='threadCloser']:checked").val() !== "no" ? Number($("[name='threadCloser']:checked").val()) : false,
            stick: $("[name='threadStick']:checked").val() !== "no" ? Number($("[name='threadStick']:checked").val()) : false,
            auto: $("[name='autoSend']:checked").val() !== "no" ? Number($("[name='autoSend']:checked").val()) : false,
            dir: answers.active
          };
          answers.content.push(array);
          chrome.storage.local.set({"answers": JSON.stringify(answers)});
        }
      })
    }
  })
  $("#addDir").click(()=>{
    if (!$("div").is(".formSubmitRow-main")) {
      $(".overlay-content").empty();
      $("#titleOverlay").text("Создание папки");
      $(document.createElement("legend")).css('width','100%').append(forms[0], forms[6]).appendTo("div.overlay-content");
      $(document.createElement("div")).addClass("formSubmitRow-main").append(addFunc[0]).appendTo(".overlay");
      $(document.createElement("select")).addClass("input").prop("title", "Положение").appendTo("#position");
      $(document.createElement("option")).val(0).text("В начале").appendTo("#position select");
      for (let i=0; i<len; i++)
        $(document.createElement("option")).val(active[i].pos+1).text("После кнопки: "+active[i].name).appendTo("#position select");
      if (active[len-1]) $("#position select").val(active[len-1].pos+1);
      $("#addanswer").click(() => {
        if ($("#titleButton").val() && Number($("#position select").val()) >= 0 && Number($("#position select").val()) <= active.length) {
          for (let i=0; i < answers.content.length; i++)
            if (answers.content[i].dir === answers.active && Number($("#position select").val()) < answers.content[i].pos)
              answers.content[i].pos++;
          answers.content.push({
            type: 1,
            name: $("#titleButton").val(),
            id: answers.id++,
            pos: Number($("#position select").val()),
            dir: answers.active
          });
          chrome.storage.local.set({"answers": JSON.stringify(answers)});
        }
      })
    }
  })
  $("#titleOverlay").text(answers.active == -1 ? "Main" : getAnswer(answers.active).answer.name).css("margin-right", "10px");
  if (answers.active !== -1) $('<a><i class="far fa-undo" aria-hidden="true"></i></a>').appendTo("div.overlay-title").click(() => {
    for (let i=0; i<answers.content.length; i++)
      if (answers.content[i].id == answers.active) {
        answers.active = answers.content[i].dir,
        chrome.storage.local.set({"answers": JSON.stringify(answers)});
      }
  });
  for (let i = 0; i < len; i++) {
    if (active[i].type == 1) {
      $('<div class="button button--icon rippleButton rippleButton Folder"><span class="button-text">'+active[i].name+'</span><div class="ripple-container"></div></div>').appendTo(".overlay-content").click((e) => {
        answers.active = active[i].id;
        chrome.storage.local.set({"answers": JSON.stringify(answers)});
      }).on('contextmenu', (event) => {
          event.preventDefault();
          $(".overlay-content").empty();
          $(document.createElement("legend")).addClass("addin").css('width','100%').append(forms[0], forms[6]).appendTo("div.overlay-content");
          $(document.createElement("div")).addClass("formSubmitRow-main").append(addFunc[2]).appendTo(".overlay");
          $(document.createElement("select")).addClass("input").prop("title", "Положение").prop("id", "select-Forum").appendTo("#position");
          $("#titleButton").val(active[i].name);
          $(document.createElement("option")).val(0).text("В начале").appendTo("#position select");
          let el = 0;
          for (let j=0; j<len; j++)
            if (active[i].id === active[j].id) el++;
            else $(document.createElement("option")).val(active[j].pos+1-el).text("После кнопки: "+active[j].name).appendTo("#position select");
          if (active[i].pos !== 0) {
            $(`#position option[value='${active[i].pos}']`).text("Не изменять");
            $("#position select").val(active[i].pos);
          } else $("#position select").val(active[i].pos);
          $("#addanswer").click(() => {
            if ($("#titleButton").val() && Number($("#position select").val()) >= 0 && Number($("#position select").val()) <= active.length) {
              for (let j=0; j<answers.content.length; j++)
                if (answers.active === answers.content[j].dir) {
                  if (active[i].pos > Number($("#position select").val())) {
                    if (answers.content[j].pos >= Number($("#position select").val()) && answers.content[j].pos < active[i].pos)
                      answers.content[j].pos++;
                  } else if (answers.content[j].pos <= Number($("#position select").val()) && answers.content[j].pos > active[i].pos)
                    answers.content[j].pos--;
                }
              for (let j=0; j<answers.content.length; j++)
                if (answers.content[j].id === active[i].id) {
                  answers.content[j] = {
                    type: 1,
                    name: $("#titleButton").val(),
                    id: active[i].id,
                    pos: Number($("#position select").val()),
                    dir: answers.active
                  }
                  break;
                }
              answers.content.sort((a,b) => {return a.id-b.id});
              chrome.storage.local.set({"answers": JSON.stringify(answers)});
            }
          })
          $("#delanswer").click(() => {
            function deleteDir(dir) {
              let array = [], arr = actives(dir), a = [];
              for (let i = 0; i < arr.length; i++) {
                if (arr[i].type == 1) a = deleteDir(arr[i].id);
                for (let j=0; j<a.length; j++) array.push(a[j]);
                array.push(arr[i]);
              }
              return array;
            }
            for (let j=answers.content.length; j--;)
              if (answers.content[j].dir === answers.active && answers.content[j].pos > active[i].pos)
                answers.content[j].pos--;
            let array = deleteDir(active[i].id);
            array.push(active[i]);
            for (let i=array.length; i--;)
              for (let j=answers.content.length; j--;)
                if (array[i].id === answers.content[j].id) {
                  answers.content.splice(j, 1);
                  break;
                }
            chrome.storage.local.set({"answers": JSON.stringify(answers)});
          })
        })
     } else if (active[i].type == 2) {
      $('<div class="button button--icon rippleButton rippleButton Answer"><span class="button-text">'+active[i].name+'</span><div class="ripple-container"></div></div>')
        .appendTo(".overlay-content")
        .click(() => {
          let text = active[i].text;
          let rep = [...text.matchAll(/{(.*?)}/g)];
          for (let i=0; i<rep.length; i++)
            if (threadInfo[rep[i][1]] != undefined) text = text.replace(rep[i][0], threadInfo[rep[i][1]]);
            else for (let j=0; j<tags.length; j++)
                  if (tags[j].type == rep[i][0]) text = text.replace(rep[i][0], tags[j].undefined);
          let params = {
            "title": $("meta[property='og:title']").prop('content').match(/ - (.*)/) ? $("meta[property='og:title']").prop('content').match(/ - (.*)/)[1] : $("meta[property='og:title']").prop('content'),
            "_xfSet[discussion_open]":1,
            "_xfSet[sticky]":1,
            "_xfToken":$("input[name='_xfToken']").val(),
            "_xfRequestUri0": window.location.pathname,
            "_xfWithData":1,
            "_xfToken":$("input[name='_xfToken']").val(),
            "_xfResponseType":"json",
          }
          let edit = {
            "_xfRequestUri": window.location.pathname,
            "_xfToken":$("input[name='_xfToken']").val(),
            "_xfResponseType":"json",
          }
          let message = {
            "message_html": text.replace(/^/g, "<p>").replace(/\n/g, "</p><p>").replace(/$/, "</p>"),
            "_xfToken":$("input[name='_xfToken']").val(),
            "_xfResponseType":"json"
          }
          if (active[i].prefix === false) {
            if (document.body.innerHTML.match('Редактировать тему'))
            {
              if (location.host == 'forum.arizona-rp.com')
                params["prefix_id"] = prefix_id;
              else
                params["prefix_id[]"] = prefix_id;
            }
          }
          else if (location.host == 'forum.arizona-rp.com')
            params["prefix_id"] = active[i].prefix;
          else
            params["prefix_id[]"] = active[i].prefix;

          if ((active[i].close === false && document.body.innerHTML.match(/Закрыть тему/)) || active[i].close === 2) params.discussion_open = 1;
          if ((active[i].stick === false && document.body.innerHTML.match(/Открепить тему/)) || active[i].stick === 1) params.sticky = 1
          $(".overlay-container.is-active").remove();
          document.body.className = '';
          if (active[i].auto === 1) {
            post("add-reply", message);
            if (document.body.innerHTML.match('Редактировать тему')) post("edit", params, () => {if (settings.update) location.reload()});
            else {
              if ((document.body.innerHTML.match(/Закрыть тему/) && active[i].close === 1)||(document.body.innerHTML.match(/Открыть тему/) && active[i].close == 2)) post("quick-close", edit);
              if ((document.body.innerHTML.match(/Закрепить тему/) && active[i].stick === 1)||(document.body.innerHTML.match(/Открепить тему/) && active[i].stick === 2)) post("quick-stick", edit, () => {if (settings.update) location.reload()});
            }
          } else {
            $("div.fr-element.fr-view").empty();
            $(message.message_html.replaceAll(/<p><\/p>/g, "<p><br></p>")).appendTo("div.fr-element.fr-view")
            $("div.show-placeholder").removeClass("show-placeholder");
            $(".formButtonGroup-primary button[type='submit']").click(function() {
              if (document.body.innerHTML.match('Редактировать тему')) post("edit", params, () => {if (settings.update) location.reload()});
              else {
                if ((document.body.innerHTML.match(/Закрыть тему/) && active[i].close === 1)||(document.body.innerHTML.match(/Открыть тему/) && active[i].close == 2)) post("quick-close", edit);
                if ((document.body.innerHTML.match(/Закрепить тему/) && active[i].stick === 1)||(document.body.innerHTML.match(/Открепить тему/) && active[i].stick === 2)) post("quick-stick", edit, () => {if (settings.update) location.reload()});
              }
            })
          }
       })
      .on('contextmenu', (event) => {
        event.preventDefault();
        if (event.button == 2) {
          if (!$("div").is(".formSubmitRow-main")) {
            $(".overlay-content").empty();
            $("#titleOverlay").text("Создание ответа");
            $(document.createElement("legend")).addClass("addin").css('width','100%').append(forms[0], forms[1], forms[2], forms[3], forms[4], forms[5], forms[6]).appendTo("div.overlay-content");
            $(document.createElement("div")).addClass("formSubmitRow-main").append(addFunc[3]).appendTo(".overlay");
            if (edit.replace("\&quot;", "").match(/<select name="prefix_id.*?".*?<\/select>/gs)) {
              $(edit.replace("\&quot;", "").match(/<select name="prefix_id.*?".*?<\/select>/gs)[0]).appendTo("#prefix_forum");
              $('#prefix_forum select').removeClass("u-noJsOnly").removeAttr("multiple").attr("name", "prefix_id");
              $('<option value="-1" selected="selected">(Не изменять)</option>').prependTo('#prefix_forum select');
            } else $("#prefix_forum").text("У вас нет доступа к этой функции в этом разделе").val('no');
            $("#classDel").removeClass("inputChoices-choice");
            $("#titleButton").val(active[i].name);
            $("#answerText").val(active[i].text);
            if (active[i].close!==false) $("[name='threadCloser'][value="+active[i].close+"]").prop("checked", true);
            if (active[i].stick!==false) $("[name='threadStick'][value="+active[i].stick+"]").prop("checked", true);
            if (active[i].prefix!==false) $("[name='prefix_id']").val(active[i].prefix);
            if (active[i].auto===1) $("input[name='autoSend'][value=1]").prop("checked", true);
            if (!document.body.innerHTML.match('/quick-close')) $("#threadCloser").text("У вас нет доступа к этой функции в этом разделе").val('no');
            if (!document.body.innerHTML.match('/quick-stick')) $("#threadStick").text("У вас нет доступа к этой функции в этом разделе").val('no');
            $(document.createElement("select")).addClass("input").prop("title", "Положение").appendTo("#position");
            $(document.createElement("option")).val(0).text("В начале").appendTo("#position select");
            let el = 0;
            for (let j=0; j<len; j++)
              if (active[i].id === active[j].id) el++;
              else $(document.createElement("option")).val(active[j].pos+1-el).text("После кнопки: "+active[j].name).appendTo("#position select");
            if (active[i].pos !== 0) {
              $(`#position option[value='${active[i].pos}']`).text("Не изменять");
              $("#position select").val(active[i].pos);
            } else $("#position select").val(active[i].pos);
            $("#addanswer").click(()=>{
              if ($("#titleButton").val() && $("#answerText").val() && Number($("#position select").val()) >= 0 && Number($("#position select").val()) <= active.length) {
                for (let j=0; j<answers.content.length; j++)
                  if (answers.active === answers.content[j].dir) {
                    if (active[i].pos > Number($("#position select").val())) {
                      if (answers.content[j].pos >= Number($("#position select").val()) && answers.content[j].pos < active[i].pos)
                        answers.content[j].pos++;
                    } else if (answers.content[j].pos <= Number($("#position select").val()) && answers.content[j].pos > active[i].pos)
                      answers.content[j].pos--;
                  }
                for (let j=0; j<answers.content.length; j++)
                  if (answers.content[j].id === active[i].id) {
                    answers.content[j] = {
                      type: 2,
                      name: $("#titleButton").val(),
                      id: active[i].id,
                      pos: Number($("#position select").val()),
                      text: $("#answerText").val(),
                      prefix: $("select[name='prefix_id']").val() === "no" || Number($("select[name='prefix_id']").val()) === -1 ? false : Number($("select[name='prefix_id']").val()),
                      close: $("[name='threadCloser']:checked").val() !== "no" ? Number($("[name='threadCloser']:checked").val()) : false,
                      stick: $("[name='threadStick']:checked").val() !== "no" ? Number($("[name='threadStick']:checked").val()) : false,
                      auto: $("[name='autoSend']:checked").val() !== "no" ? Number($("[name='autoSend']:checked").val()) : false,
                      dir: answers.active
                    }
                    break;
                  }
                answers.content.sort((a,b) => {return a.id-b.id});
                chrome.storage.local.set({"answers": JSON.stringify(answers)});
              }
            })
            $("#delanswer").click(function() {
              for (let j=answers.content.length; j--;)
                if (answers.content[j].dir === answers.active && answers.content[j].pos > active[i].pos)
                  answers.content[j].pos--;
                else if (active[i].id === answers.content[j].id)
                  answers.content.splice(j, 1);
              chrome.storage.local.set({"answers": JSON.stringify(answers)});
            })
          }
        }
      })
  }}

  $("a.overlay-titleCloser").click(function() {$('div.overlay-container').remove();document.body.className = '';})

  $('body').keyup(function(e) {
    if (e.which==27 && $("div.overlay-container")[0]) {
      $('div.overlay-container').remove();
      document.body.className = '';
    }
  })
}
function keyboardFunc()
{
  $(document).off("keydown");
  if (settings.isEnabledKeyboard && settings.isEnabled)
    $(document).on("keydown", (e) => {
      for (let i=0; i<keyboardFuncArray.length; i++)
        if (keyboardFuncArray[i].enabled && e.keyCode === keyboardFuncArray[i].keyCode && ((keyboardFuncArray[i].specKey == 1 && e.altKey) || (keyboardFuncArray[i].specKey == 2 && e.ctrlKey) || (keyboardFuncArray[i].specKey == 3 && e.shiftKey)))
          if (document.location.pathname.match(/\/threads\/\d+\//) || keyboardFuncArray[i].type == 3) keyboardFuncs[keyboardFuncArray[i].type](keyboardFuncArray[i]);
    })
}
let keyboardFuncs =
[
  (keyparams) => {
    let params = {
      "title": $("meta[property='og:title']").prop('content').match(/ - (.*)/) ? $("meta[property='og:title']").prop('content').match(/ - (.*)/)[1]:$("meta[property='og:title']").prop('content'),
      "_xfSet[discussion_open]":1,
      "_xfSet[sticky]":1,
      "_xfToken":$("input[name='_xfToken']").val(),
      "_xfRequestUri0":window.location.pathname,
      "_xfWithData":1,
      "prefix_id": keyparams.prefix,
      "_xfToken":$("input[name='_xfToken']").val(),
      "_xfResponseType":"json",
    }
    if (keyparams.prefix == 99) params.prefix_id = prefix_id;
    if (location.host == 'forum.rodina-rp.com')
    {
      params["prefix_id[]"] = keyparams.prefix
      if (keyparams.prefix == 99)
        params["prefix_id[]"] = prefix_id;
    }
    if ((keyparams.close === 0 && document.body.innerHTML.match(/Закрыть тему/)) || keyparams.close === 2) params.discussion_open = 1;
    if ((keyparams.sticky === 0 && document.body.innerHTML.match(/Открепить тему/)) || keyparams.sticky === 1) params.sticky = 1;
    if (document.body.innerHTML.match('Редактировать тему')) post("edit", params);
    else {
      if ((document.body.innerHTML.match(/Закрыть тему/) && keyparams.close === 1)||(document.body.innerHTML.match(/Открыть тему/) && keyparams.close === 2)) post("quick-close", edit);
      if ((document.body.innerHTML.match(/Закрепить тему/) && keyparams.sticky === 1)||(document.body.innerHTML.match(/Открепить тему/) && keyparams.sticky === 2)) post("quick-stick", edit);
    }
    message("Тема редактирована");
  },
  (keyparams) => {
    let text = keyparams.copy;
    let rep = [...keyparams.copy.matchAll(/{(.*?)}/g)];
    for (let i=0; i<rep.length; i++)
      if (threadInfo[rep[i][1]] != undefined) text = text.replace(rep[i][0], threadInfo[rep[i][1]]);
      else for (let j=0; j<tags.length; j++)
            if (tags[j].type == rep[i][0]) text = text.replace(rep[i][0], tags[j].undefined);
    navigator.clipboard.writeText(text);
    message("Скопировано");
  },
  (keyparams) => {
    var awr = null;
    for (let i=0; i<answers.content.length && !awr; i++)
      if (answers.content[i].id == keyparams.id)
        awr = answers.content[i];
    let text = awr.text;
    let rep = [...text.matchAll(/{(.*?)}/g)];
    for (let i=0; i<rep.length; i++)
      if (threadInfo[rep[i][1]] != undefined) text = text.replace(rep[i][0], threadInfo[rep[i][1]]);
      else for (let j=0; j<tags.length; j++)
            if (tags[j].type == rep[i][0]) text = text.replace(rep[i][0], tags[j].undefined);
    let params = {
      "title": $("meta[property='og:title']").prop('content').match(/ - (.*)/) ? $("meta[property='og:title']").prop('content').match(/ - (.*)/)[1]:$("meta[property='og:title']").prop('content'),
      "_xfSet[discussion_open]":1,
      "_xfSet[sticky]":1,
      "_xfToken":$("input[name='_xfToken']").val(),
      "_xfRequestUri0": window.location.pathname,
      "_xfWithData":1,
      "_xfToken":$("input[name='_xfToken']").val(),
      "_xfResponseType":"json",
    }
    let edit = {
      "_xfRequestUri": window.location.pathname,
      "_xfToken":$("input[name='_xfToken']").val(),
      "_xfResponseType":"json",
    }
    let message = {
      "message_html": text.replace(/^/g, "<p>").replace(/\n/g, "</p><p>").replace(/$/, "</p>"),
      "_xfToken":$("input[name='_xfToken']").val(),
      "_xfResponseType":"json"
    }
    if (awr.prefix === false) {
      if (document.body.innerHTML.match('Редактировать тему')) params.prefix_id = prefix_id
    } else params.prefix_id = awr.prefix;
    if ((awr.close === false && document.body.innerHTML.match(/Закрыть тему/)) || awr.close === 2) params.discussion_open = 1;
    if ((awr.stick === false && document.body.innerHTML.match(/Открепить тему/)) || awr.stick === 1) params.sticky = 1
    $(".is-active").remove();
    document.body.className = '';
    if (awr.auto === 1) {
      post("add-reply", message);
      if (document.body.innerHTML.match('Редактировать тему')) post("edit", params, () => {if (settings.update) location.reload()});
      else {
        if ((document.body.innerHTML.match(/Закрыть тему/) && awr.close === 1)||(document.body.innerHTML.match(/Открыть тему/) && awr.close == 2)) post("quick-close", edit);
        if ((document.body.innerHTML.match(/Закрепить тему/) && awr.stick === 1)||(document.body.innerHTML.match(/Открепить тему/) && awr.stick === 2)) post("quick-stick", edit, () => {if (settings.update) location.reload()});
      }
    } else {
      $("div.fr-element.fr-view").empty();
      $(message.message_html.replaceAll(/<p><\/p>/g, "<p><br></p>")).appendTo("div.fr-element.fr-view")
      $("div.show-placeholder").removeClass("show-placeholder");
      $(".formButtonGroup-primary button[type='submit']").click(function() {
        if (document.body.innerHTML.match('Редактировать тему')) post("edit", params, () => {if (settings.update) location.reload()});
        else {
          if ((document.body.innerHTML.match(/Закрыть тему/) && awr.close === 1)||(document.body.innerHTML.match(/Открыть тему/) && awr.close == 2)) post("quick-close", edit);
          if ((document.body.innerHTML.match(/Закрепить тему/) && awr.stick === 1)||(document.body.innerHTML.match(/Открепить тему/) && awr.stick === 2)) post("quick-stick", edit, () => {if (settings.update) location.reload()});
        }
      })
    }
    message("Ответ использован");
  },
  (keyparams) => {
    window.open(keyparams.url, keyparams.newWindow ? "_blank" : "_self");
  }
]
function getAnswer(id)
{
  for (let i=0; i<answers.content.length; i++)
    if (answers.content[i].id === id)
      return {
        answer: answers.content[i],
        index: i+1
      }
  return {
    answer: {id: -1},
    index: -1
  }
}
function outputThreadsQuantity()
{
  settings.outputThreadsQuantity = true;
  if (settings.outputThreadsQuantity)
  {
    if ($(".threadSeparator").text().indexOf("|") != -1)
      return;
    if (document.location.origin != "https://forum.robo-hamster.com")
    {
      $(".threadSeparator").append(" | ");
    }
    else
      $(".structItemContainer-group.js-threadList").prepend("<h3 class='block-minorHeader uix_threadListSeparator threadSeparator'>ТЕМЫ | </h3>");
    if ($(".p-title-value").text() === "Жалобы на администрацию" && document.location.origin != "https://forum.robo-hamster.com")
    {
      $(".threadSeparator.sticky").append(` ГА: ${$('.structItemContainer.sticky span.label:contains("На рассмотрение ГА")').length} АДМ: ${$('.structItemContainer.sticky span.label:contains("На рассмотрении")').length} ХЕЛП: ${$('.structItemContainer.sticky .structItem.structItem--thread').length-$('.structItemContainer.sticky span.label').length} | ВСЕГО: ${$('.structItemContainer.sticky span.label:contains("На рассмотрение ГА")').length + $('.structItemContainer.sticky span.label:contains("На рассмотрении")').length + $('.structItemContainer.sticky .structItem.structItem--thread').length-$('.structItemContainer.sticky span.label').length}`);
    }
    else
    {
      var labels = {};
      $(".structItemContainer-group--sticky .structItem .label").each((index, element) => {
        let text = $(element).text();
        if (text != "Информация" && text != "Правила" && text != "Важно")
        {
          if (text in labels) labels[text]++;
          else labels[text] = 1;
        }
      });
      if (document.location.origin == "https://forum.robo-hamster.com")
      {
        $(".filterBar-menuTrigger").before("ЗАКРЕПЛЕННЫЕ ТЕМЫ | ");
        for (let key in labels)
          $(".filterBar-menuTrigger").before(key+": "+labels[key]+" ");
      }
      for (let key in labels)
        $(".threadSeparator.sticky").append(key+": "+labels[key]+" ");
      if ($(".structItemContainer-group--sticky .structItem-title:not(:has(span.label))").length > 0)
        (document.location.origin == "https://forum.robo-hamster.com" ? $(".filterBar-menuTrigger") : $(".threadSeparator.sticky")).append(" Без префикса: "+$(".structItemContainer-group--sticky .structItem-title:not(:has(span.label))").length);
    }
    if ($(".threadSeparator:not(.sticky)").length > 0)
      $(".threadSeparator:not(.sticky)")[0].innerText += ` Не закрытых: ${$(".structItemContainer-group:not(.structItemContainer-group--sticky) .structItem").length-$(".structItemContainer-group:not(.structItemContainer-group--sticky) .structItem-status.structItem-status--locked").length}`;
  }
  else
  {
    let s = $(".uix_threadCollapseTrigger.is-active")[0];
    $(".block-minorHeader.uix_threadListSeparator").eq(0).text(" Закрепленные темы ");
    $(".block-minorHeader.uix_threadListSeparator").eq(1).text(" Темы ");
    $(".block-minorHeader.uix_threadListSeparator").append(s);
  }
}
function replaceText()
{
  if ((settings.isReplace && settings.isEnabled) && $(".fr-element.fr-view[replace='on']").length == 0) {
    $(".fr-element.fr-view").attr("replace", "on")
    $(".fr-element.fr-view").on("keyup", function(e) {
      let textOld = $(".fr-element.fr-view")[0].innerHTML;
      for (let i=0; i<replaceArray.length; i++)
        if (replaceArray[i].enabled && $(".fr-element.fr-view")[0].innerHTML.includes(replaceArray[i].replaced)) $(".fr-element.fr-view")[0].innerHTML = $(".fr-element.fr-view")[0].innerHTML.replace(replaceArray[i].replaced, replaceArray[i].replaceText.replaceAll(/<br>/g, "</p><p>"));
      if (textOld != $(".fr-element.fr-view")[0].innerHTML) {
        const range = document.createRange();
        range.selectNodeContents(document.querySelector("#top > div.p-body > div > div.uix_contentWrapper > div > div > div > form > div > div > div > div > div.message-cell.message-cell--main > div > div.fr-box.bbWrapper.fr-ltr.fr-basic.fr-top > div.fr-wrapper > div"));
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      };
    });
  } else if ((!settings.isReplace || !settings.isEnabled) && $(".fr-element.fr-view[replace='on']").length != 0) $(".fr-element.fr-view").off("keyup").removeAttr("replace");
}
function selectionThread()
{
  $(".colorSelectionThread").css("color", "inherit");
  if (settings.selectionThread == 1)
    $(".structItem.structItem--thread.js-inlineModContainer").each((index, element) => {
      if (Number(element.innerHTML.match(RegExp('data-time="(\\d+)"'))[1])<Date.now()/1000-(60*60*settings.selectionThreadTime) && $(element).is(":not(:has(.label)), :contains('На рассмотрении'), :contains('На рассмотрение ГА'), :contains('Ожидается'), :contains('Обрабатывается'), :contains('На обработке')"))
        $("a[href='/threads/"+$(element).attr('class').match(RegExp('js-threadListItem-(\\d+)'))[1]+"/'][rel='nofollow']").css("color", settings.colorSelectionThread).addClass("colorSelectionThread");
    })
  else if (settings.selectionThread == 2) {
    $(".structItem.structItem--thread.js-inlineModContainer").each((index, element) => {
      if (Number(element.innerHTML.match(RegExp('data-time="(\\d+)"'))[1])<Date.now()/1000-(60*60*settings.selectionThreadTime) && $(element).is(":not(:has(.label)), :contains('На рассмотрении'), :contains('На рассмотрение ГА'), :contains('Ожидается'), :contains('Обрабатывается'), :contains('На обработке')")) {
        $("a[href='/threads/"+$(element).attr('class').match(RegExp('js-threadListItem-(\\d+)'))[1]+"/'][rel='nofollow']").css("color", settings.colorSelectionThread).addClass("colorSelectionThread");;
        $("a[href='/threads/"+$(element).attr('class').match(RegExp('js-threadListItem-(\\d+)'))[1]+"/unread'][data-tp-primary='on']").css("color", settings.colorSelectionThread).addClass("colorSelectionThread");;
        $("a[href='/threads/"+$(element).attr('class').match(RegExp('js-threadListItem-(\\d+)'))[1]+"/'][data-tp-primary='on']").css("color", settings.colorSelectionThread).addClass("colorSelectionThread");;
      }
    })
  }
}

function initThreadInfo()
{
  for (let i=0;i<tags.length; i++)
    if (tags[i].enabled && $(".message--post:eq(0)").html() != undefined) {
      let search = tags[i].searchFirstMsg ? $(".message--post:eq(0)") : $("body");
      if (search.html().match(new RegExp(tags[i].regexp)))
        threadInfo[tags[i].type] = search.html().match(new RegExp(tags[i].regexp))[1];
      else if (!threadInfo[tags[i].type])
        threadInfo[tags[i].type] = tags[i].undefined;
    }
}

function message(text)
{
  let mess = $(document.createElement("span"))
  mess.addClass("scriptMessage").appendTo("body").text(text);
  setTimeout(() => mess.addClass("scriptMessage-active"), 100);
  setTimeout(() => mess.removeClass("scriptMessage-active"), 2500);
  setTimeout(() => mess.remove(), 3000);
}

function css()
{
  return `
  .scriptMessage {
    position: fixed;
    top: 15%;
    right: 1%;
    text-align: center;
    font: 1.1vw BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    padding: 1vw;
    z-index: 999;
    opacity: 0;
    border-radius: .7vw;
    background: rgba(226,226,226,0.3);
    transition: .3s;
  }
  .scriptMessage-active {
    opacity: 1;
  }
  .setPos {
    -moz-user-select: -moz-none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  .Folder {
    color: #fff;
    background: #46597f;
    box-shadow: 0 4px 15px 0 rgb(0 0 0 / 20%);
    border: none;
    border-color: #d15656;
    margin: 10px 15px;
    height: 100px;
    width: 29%;
  }

  .Answer {
    color: #fff;
    background-color: #1e1e2d; /* Тёмно-синий цвет фона */
    box-shadow: none; /* Голубой неоновый эффект */
    border: none;
    margin: 10px 15px;
    height: 100px;
    width: 29.5%;
    transition: box-shadow 0.5s; /* Плавное изменение эффекта при наведении */
}

  .Answer:hover {
    box-shadow: 0 0 12px #00cbfe; /* Удаление эффекта при наведении */
  }

  .button-Forum {
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 16px;
    margin-right: 16px;
    text-align: center
  }

  .buttonGroup {
    margin-right:15px;
  }

  .winUlog {
    position: fixed;
    width: 400px;
    height: 200px;
    z-index: 10;
    background-image: url("http://seraphtech.ru/img/logo.png");
    background-color: #444444;
    border-radius: 15px;
  }

  #positionWin {
    cursor: move
  }
  .log {
    height: ${settings.heightWindowLog}px;
    display: flex;
    border-top: 1px solid white;
    font-size: 18px;
  }
  .logMenu {
    width: 15%;
    height: 100%;
    border-right: 1px solid white;
    text-align: center;
    padding-top: 10px;
  }
  .menu-link {
    display: flex;
    text-decoration: none;
    margin-left: 20px;
    cursor: pointer;
    padding: 8px;
    color: rgba(255, 255, 255, 0.5);
  }
  .menu-link:hover {
    text-decoration: none;
    color: white;
  }
  .logContent {
    margin-top: .5%;
    margin-left: .5%;
    width: 100%;
    height: 95%;
    font-size: 14px;
  }
  .logNick {
    display: flex;
    text-decoration: none;
    margin-left: 5px;
  }
  .logNick:hover {
    text-decoration: none;
  }
  ${settings.backgroundImageForum ? `body {background: url(${settings.backgroundImageForum}) no-repeat; background-size: 100%;background-attachment: fixed;}` : ""}
  `
}

function IsJsonString(str)
{
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function overlay(title="No title", text="No text", buttons=[{"text": "Да", "id": "scriptOK"}, {"text": "Нет", "id": "scriptNo"}])
{
  $(document.createElement("div")).addClass("overlay-container is-active").appendTo("body");
  $(document.createElement("div")).addClass("overlay").appendTo(".overlay-container");
  $(document.createElement("div")).addClass("overlay-title").text(title).appendTo(".overlay");
  $(document.createElement("a")).addClass("overlay-titleCloser js-overlayClose").prop({"role": "button", "aria-label": "Закрыть"}).appendTo(".overlay-title").click((e) => {$(".overlay-container.is-active").remove()});
  $(document.createElement("div")).addClass("overlay-content").appendTo(".overlay");
  $(document.createElement("div")).addClass("blockMessage").css("margin", 0).text(text).appendTo(".overlay-content");
  $(document.createElement("dl")).addClass("formRow formSubmitRow formSubmitRow--sticky").appendTo(".overlay-content");
  $(document.createElement("dt")).appendTo(".overlay-content dl");
  $(document.createElement("dd")).appendTo(".overlay-content dl");
  $(document.createElement("div")).addClass("formSubmitRow-bar").appendTo(".overlay-content dd");
  $(document.createElement("div")).addClass("formSubmitRow-controls").appendTo(".overlay-content dd");

  for (let i=0; i<buttons.length; i++)
  {
    $(document.createElement("button")).addClass("button--primary button button--icon button--icon--save").css("margin-right", "20px").text(buttons[i].text).prop("id", buttons[i].id).appendTo(".formSubmitRow-controls");
  }

  $('body').keyup((e) => {
    if (e.which==27 && $("div.overlay-container")[0])
      $('.overlay-container.is-active').remove();
  });
}