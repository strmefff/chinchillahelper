"use strict";
let vehicles = JSON.parse('{"629":"Acura NSX","687":"Aston Martin DB5","701":"Aston Martin Genesis G90","696":"Aston Martin One-77","725":"Audi A6","726":"Audi Q7","627":"Audi Q8","675":"Audi R8","750":"Audi RS5","614":"Audi RS6","760":"Audi S4","758":"Audi TT RS","761":"BMW 4-Series","656":"BMW 530i","664":"BMW 750i","695":"BMW 760li","688":"BMW M3 GTR","703":"BMW M3","699":"BMW M4 Competition 2021","678":"BMW M5 E60","679":"BMW M5 F90","728":"BMW M6 1990","727":"BMW M6 2020","622":"BMW M8","640":"BMW X5 E53","615":"BMW X5","638":"BMW Z4 40i","700":"BMW i8","697":"Bentley Balacar","698":"Bentley Bentayga","621":"Bentley","670":"Buckingham","650":"Bugatti Chrion","649":"Bugatti Divo","762":"Cadillac Escalade 2007","751":"Cadillac Escalade 2020","689":"Chevrolet Camaro","616":"Chevrolet Corvette","684":"Chevrolet Corvette","617":"Chevrolet Cruze","777":"Christma","769":"Coca-Cola Trailer","768":"Coca-Cola Truck","752":"Cyber Truck","764":"Dacia 1300","735":"Daewoo Matiz","721":"Deltaplane","628":"Dodge Challenger","718":"Dodge Charger","717":"Dodge Grand Caravan","685":"Dodge Ram","755":"Dodge Viper","642":"Ducati Diavel","644":"Ducati Ducnaked","643":"Ducati Panigale","724":"Ferrari 812 Superfast","706":"Ferrari J50","711":"Ferrari Spider","651":"Fiat 500","719":"Ford Explorer","720":"Ford F150","754":"Ford GT","693":"Ford Mustang 289","771":"Ford Mustang Mach 1","686":"Ford Mustang Shelby GT500","634":"Ford Mustang","705":"Ford Raptor","731":"Haval H6 2.0 GDIT","632":"Honda Civic Type-R","702":"Honda Integra Type-R","663":"Hyundai Sonata","766":"Impala 64","767":"Impala 67","671":"Infiniti FX 50","667":"Jackson Storm","636":"Jaguar F-pace","715":"Jaguar XF","645":"Kawasaki Ninja ZX-10RR","637":"Kia Optima","673":"Kia Sportage","709":"Lada Vesta SW Cross","654":"Lamborghini Aventador","723":"Lamborghini Cantenario","626":"Lamborghini Urus","618":"Lexus LX","672":"Lexus RX 450h","641":"Lexus RX450H","633":"Lexus Sport-S","668":"Lightning McQueen","733":"Lincoln Continental","690":"Mazda RX7","691":"Mazda RX8","770":"McLaren MP4","729":"Mercedes CLA 45 AMG","730":"Mercedes CLS 63 AMG","737":"Mercedes E-63 AMG","623":"Mercedes E63s AMG","613":"Mercedes G63 AMG","653":"Mercedes G65 AMG","612":"Mercedes GT63s AMG","680":"Mercedes Maybach S 650","624":"Mercedes S63 Coupe AMG","736":"Mercedes-AMG G63 6x6","681":"Mercedes-Benz AMG GT","759":"Mercedes-Benz Actros","749":"Mercedes-Benz CLS 53","665":"Mercedes-Benz E 55 AMG","666":"Mercedes-Benz E500","747":"Mercedes-Benz GLE 63","652":"Mercedes-Benz GLS 2020","704":"Mercedes-Benz S500 4Matic","639":"Mercedes-Benz S600","657":"Mercedes-Benz S600","707":"Mercedes-Benz SLR McLaren","714":"Mercedes-Benz X Class","692":"Mitsubishi Eclipse","757":"Mitsubishi Lancer Old","765":"Mitsubishi Lancer","740":"Monster El Toro","741":"Monster Grave Digger","739":"Monster Indonesia","738":"Monster Mutt","694":"Nissan 350Z","659":"Nissan LEAF","660":"Nissan Silvia","773":"Pickup truck","619":"Porsche 911","620":"Porsche Cayenne","734":"Porsche Macan Turbo","682":"Porsche Panamera Turbo","710":"Porsche Taycan","655":"Range Rover SVA","631":"Range Rover","748":"Renault Laguna","647":"Rolls-Royce Cullinan","772":"Rolls-Royce Phantom","722":"Sea Shark","776":"Sherp","669":"Sir Tow Mater","708":"Subaru BRZ","661":"Subaru Forester XT","662":"Subaru Legacy","775":"Subaru WRX","753":"Tesla Model C","658":"Tesla Model X","676":"Toyota Camry XV40","677":"Toyota Camry XV70","763":"Toyota Chaser","742":"Toyota Land Cruiser Prado","732":"Toyota Land Cruiser VXR V8 4","743":"Toyota RAV4","744":"Toyota Supra A90","712":"UAZ Patriot","745":"UAZ","713":"Volga","648":"Volkswagen Beetle","674":"Volkswagen Golf R","683":"Volkswagen Passat","756":"Volkswagen Polo","625":"Volkswagen Touareg","774":"Volvo Truck","630":"Volvo V60","635":"Volvo XC90","746":"Volvo XC90","646":"Western","778":"Audi A6 (delimobil)","779":"Toyota Camry (delimobil)","780":"Kia Sportage (delimobil)","781":"Tesla Model X (delimobil)","782":"Toyota RAV4 (delimobil)","783":"Nissan GTR 2017","784":"Mercedes-AMG Project One R50","785":"Aston Martin Valhalla","786":"Chevrolet Aveo","787":"BUGATTI Bolide","788":"Yacota K5","789":"Renault DUSTER","790":"Ferrari Monza SP2","791":"Mercedes-AMG G63","792":"Hotwheels","793":"Hummer HX","794":"Ferrari F70","795":"BMW M5 CS","796":"LADA Priora","797":"Quadra Turbo-R V-Tech","798":"Renault TREZOR","799":"Mercedes-Benz VISION AVTR","800":"Specialized Stumpjumper","801":"Santa Cruz Tallboy","802":"Spooky Metalhead","803":"Turner Burner","804":"Holding Bus Company","805":"Los-Santos Inter Bus C.","807":"BMW M1","808":"Lamborghini Countach","809":"Nagasaki","810":"Koenigsegg Gemera","811":"KIA K7","812":"Lampadati Toro","813":"Lexus LX600","814":"Nissan Qashqai","815":"Predator","816":"Volkswagen Scirocco","817":"Longfin","818":"Toyota GR","819":"Wellcraft","820":"Yacht","821":"Boates"}');
function ulog() {
  if (settings.backgroundImageUlog) {
    $(document.createElement("style")).prop("id", "styleForumScript").html(`
      body {background: url(${settings.backgroundImageUlog}) no-repeat; background-size: 100%;background-attachment: fixed;}`).appendTo("head");
  }
  if (settings.hidePR)
  {
    console.log($(".middel")[0].innerHTML.split('?searchtext='));
    // $(".middel")[0].innerHTML = $(".middel")[0].innerHTML.replaceAll(/(\d{1,3})\.(\d{1,3})\.\d{1,3}\.\d{1,3}/g, "$1.$2.*.*").replaceAll(/.+?@(\w+)\.(\w+)/g, "*@$1.$2").replaceAll(/ВК [\d\.]{1,13}</g, "ВК ***<");
    $("body").removeAttr('style');
  }
  if (document.location.pathname === "/search_in.php" || document.location.pathname === "/tasks_access.php") return;
  if (settings.isSearchOnOneServer)
    $(document.createElement("input")).prop({"type": "hidden", "name": "server", "value": server[settings.server]}).appendTo("td[align='right'] > form > center");
  if (settings.isCasino && $('form[method="POST"] > [name="go"]').length>0)
    $("div.box:first").append("Получено фишек в этом логе: "+casino());
  let date = new Date(), lastconnect = $(".box > table[width='100%']:contains('Укажите дату') li:eq(1)").length > 0 ? $(".box > table[width='100%']:contains('Укажите дату') li:eq(0)")[0].innerText.match(/\d+-\d+-\d+/)[0] : (date.getFullYear()+"-")+(date.getMonth() < 9 ? "0"+(date.getMonth()+1) : date.getMonth()+1)+"-"+(date.getDate() < 10 ? "0"+date.getDate() : date.getDate())
  date = new Date(lastconnect);
  date.setMonth(date.getMonth()-1);
  let afterconnect = (date.getFullYear()+"-")+(date.getMonth() < 9 ? "0"+(date.getMonth()+1) : date.getMonth()+1)+"-"+(date.getDate() < 10 ? "0"+date.getDate() : date.getDate());
  if ($("input[value='Отправить']").length > 0)
    $("#from, #to").attr("type", "date");
  let doc = $(".middel")[0].innerHTML, array = doc.match(/<img src="images\/vehicles\/Vehicle_\d+\.jpg"><br>.*?<\/li>/g), length, ips = doc.match(/\d+\.\d+\.\d+\.\d+/g), time;
  if (doc.match(/Всего результатов:(.*?)<br>/))
  {
    let listen = Math.floor(Number.isInteger(doc.match(/Всего результатов:(.*?)<a/)[1]/20) ? (doc.match(/Всего результатов:(.*?)<br/)[1]/20)-1 : doc.match(/Всего результатов:(.*?)<br/)[1]/20);
    let href = /listen=\d+/.test(window.location.search) ? window.location.search.replace(/listen=\d+/, "&listen="+listen) : window.location.search+"&listen="+listen;
    doc = doc.replace(/Всего результатов:(.*?)<a/, `Всего результатов:<a href='${href}'>$1</a><a`);
  }
  if (array)
  {
    time = Date.now();
    length = array.length;
    for (let i=length; i--;) {
      let id = array[i].match(/Vehicle_(\d+)/)[1];
      if (id > 611)
        doc = doc.replaceAll(array[i], `<img style="width:204px; height:125px" src="https://seraphtech.site/img/vehicles/${id}.jpg"><br>${vehicles[id]}</li>`);
    }
    console.log("Машины: "+ (Date.now()-time));
  }
  if (settings.highlightBotConnects)
  {
    time = Date.now();
    array = doc.match(/<tr><td width="150px" valign="top">\d+-\d+-\d+ \d+:\d+:\d+<\/td><td>Игрок <a href="nickname\.php\?iddb=\d+&amp;server=\d+">\w+<\/a> вышел с сервера\. IP: <a href="search\.php\?searchtext=\d+\.\d+\.\d+\.\d+&amp;search=Поиск">\d+\.\d+\.\d+\.\d+<\/a> Выход.<\/td><\/tr><tr><td width="150px" valign="top">\d+-\d+-\d+ \d+:\d+:\d+<\/td><td>Игрок <a href="nickname\.php\?iddb=\d+&amp;server=\d+">\w+<\/a> вошел на сервер\. IP: <a href="search\.php\?searchtext=\d+\.\d+\.\d+\.\d+&amp;search=Поиск">\d+\.\d+\.\d+\.\d+<\/a> \.<\/td><\/tr>/g);
    if (array) {
      length = array.length;
      for (let i=length; i--;) {
        let date = array[i].match(/\d+-\d+-\d+ \d+:\d+:\d+/g);
        if (new Date(date[0]).getTime() - new Date(date[1]).getTime() < 60000) doc = doc.replace(array[i], array[i].replaceAll(/<td>(.*?)<\/td>/g, "<td><span style='color: red'>$1</span></td>"));
      }
    }
    console.log("Входы ботов: "+ (Date.now()-time));
  }
  if (settings.isEnabledPointMoney)
  {
    time = Date.now();
    doc = doc.replaceAll(/(\d)(?=(\d\d\d)+(?=(?!([\d&$-]|<\/opt|"| \(\$\)|<\/a>|<\/div| дней|(\s*?)[/x|х@XХ\]]| минут))|$))/g, `$1.`);
    console.log("Точки в деньгах: "+ (Date.now()-time));
  }
  if (settings.highlightMoney) {
    time = Date.now();
    doc = doc.replaceAll(/((\$|Евро в кол-ве )[^)]+?)(\s|<)/g, `<span style='color: ${settings.colorMoney}'>$1</span>$3`);
    doc = doc.replaceAll(/(Money|Bank|Depozit|Donat|VC\$):(.*?)\)/g, `<span style='color: ${settings.colorMoney}'>$1: $2</span>)`);
    doc = doc.replaceAll(/<td>(Деньги|Деньги\(БАНК\)|Депозит|Донат)<\/td><td>(.*?)<\/td>/g, `<td>$1</td><td><span style='color: ${settings.colorMoney}'>$2</span></td>`);
    console.log("Выделение денег: "+ (Date.now()-time));
  }
  if (settings.isDeleteTextMoney) {
    time = Date.now();
    doc = doc.replaceAll(/(Money|Bank|Depozit|Donat|VC\$):(\s+)?/g, "");
    console.log("Удаление Money: "+ (Date.now()-time));
  }
  if (settings.isColorStr) {
    time = Date.now();
    for (let i=0; i<colorStr.length; i++)
      doc = doc.replaceAll(RegExp(`<td>(((?!tr>).)*${colorStr[i].keyword.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&")}.*?)<\/td>`, `g${colorStr[i].caseSensitivity ? "" : "i"}`), `<td><span style='color: ${colorStr[i].color}'>$1</span></td>`);
    console.log("Выделение строк: "+ (Date.now()-time));
  }
  $(".middel")[0].innerHTML = doc;
  if (settings.isEnabledIp) {
    let ipsR = [];
    if (ips) {
      length = ips.length;
      for (let i=0; i<length; i++)
        if (ipsR.indexOf(ips[i]) === -1) {
          ipsR.push(ips[i]);
          get(`http://ip-api.com/json/${ips[i]}?fields=status,country,regionName,city,isp,org,mobile,proxy,query,hosting&lang=ru`, (res) => {
            if (!isJson(res)) return;
            res = JSON.parse(res);
            if (res.status === "success") doc = doc.replaceAll(RegExp(`>${ips[i]}</a>`, "g"), `>${ips[i]}</a> <span style='font-family: Arial, Helvetica, sans-serif'>(${res.country}, ${res.regionName}, ${res.city} | VPN: ${res.proxy ? "<span style='color:red'>+</span>" : "-"} Mobile: ${res.mobile ? "<span style='color:red'>+</span>" : "-"} Host: ${res.hosting ? "<span style='color:red'>+</span>" : "-"} )</span>`);
            $(".middel")[0].innerHTML = doc;
            $("#to").val(lastconnect);
            $("#from").val(afterconnect);
          })
        }
    }
  }
  $("#to").val(lastconnect);
  $("#from").val(afterconnect);
}
function GPlogs()
{
  $("body").css("visibility", "inherit");
  iconsmoney();
  removeIP();
  if (settings.hidePR && $("table.table.table-hover > tbody").length > 0)
  {
    let html = $("table.table.table-hover > tbody")[0].innerHTML;
    $("body")[0].innerHTML = $("body")[0].innerHTML.replaceAll(/(\d+)\.(\d+)\.\d+\.\d+/g, "$1.$2.*.*").replaceAll(/.+@(\w+)\.(\w+)/g, "*@$1.$2").replaceAll(/ВКонтакте (.+?)\(id: \d+\)/g, "ВКонтакте ***");
    $("body").removeAttr('style');
    html = html.replaceAll(/<td>\s+(\d+-\d+-\d+ \d+:\d+:\d+)\s+<\/td>\s+<td>\s+(.+?)\s+<\/td>/g, "<td><b class='copy' copy='$1 $2'>$1</b></td><td>$2</td>");

    $("table.table.table-hover > tbody")[0].innerHTML = html;
    $("b.copy").click((e) => navigator.clipboard.writeText(e.target.attributes["copy"].nodeValue.replaceAll(/<.*?>/g, "")));

    let ips = html.match(/\d+\.\d+\.\d+\.\d+/g);
    let ipsR = [];
    if (settings.isEnabledIp) {
      let ipsR = [];
      if (ips) {
        length = ips.length;
        for (let i=0; i<length; i++)
        {
          if (ips[i] != "255.255.255.255" && ipsR.indexOf(ips[i]) === -1) {
            ipsR.push(ips[i]);
            get(`https://ip-api.com/json/${ips[i]}?fields=status,country,regionName,city,isp,org,mobile,proxy,query,hosting&lang=ru`, (res) => {
              if (!isJson(res))
                return;
              res = JSON.parse(res);
              if (res.status === "success")
              html = doc.replaceAll(RegExp(`>${ips[i]}</a>`, "g"), `>${ips[i]}</a> <span style='font-family: Arial, Helvetica, sans-serif'>(${res.country}, ${res.regionName}, ${res.city} | VPN: ${res.proxy ? "<span style='color:red'>+</span>" : "-"} Mobile: ${res.mobile ? "<span style='color:red'>+</span>" : "-"} Host: ${res.hosting ? "<span style='color:red'>+</span>" : "-"} )</span>`);
              $("table.table.table-hover > tbody")[0].innerHTML = html;
              $("#to").val(lastconnect);
              $("#from").val(afterconnect);
            })
          }
          console.log(ipsR);
        }
      }
    }
  }
  upd = function update(key) {
    if (key == "settings")
    {
      iconsmoney();
      removeIP();
      if (settings.isEnabledGPLogs)
      {
        preprocessing();
      }
      else
      {
        $("#styleForumScript, #styleForumScriptX").remove();
      }
    }
  }
}

function iconsmoney()
{
  let table = $("table.table.table-hover > tbody");
  if (settings.addIconsMoneyGP && table.length != undefined)
    $("table.table.table-hover > tbody")[0].innerHTML = table[0].innerHTML.replaceAll(/<code>([\d,]+)<\/code> \/ <code>(.+?)<\/code> \/ <code>(.+?)<\/code>(\n\s+)<div class="btn/g, "<code>💵 $1<\/code> \/ <code>💰 $2<\/code> \/ <code>💲 $3<\/code>$4<div class=\"btn")
  else if (table.length > 0)
    $("table.table.table-hover > tbody")[0].innerHTML = table[0].innerHTML.replaceAll(/(💵|💰|💲) /g, "");
}

function removeIP()
{
  let table = $("table.table.table-hover > tbody");

  if (settings.removeIPGP && table.length != undefined)
  {
    $("table.table.table-hover > tbody")[0].innerHTML = table[0].innerHTML.replaceAll(/<td>\n\s+<div class="table-ip">.+<\/td>/g, "");
    $("th:eq(3)").remove();
  }
}

function tools() {
  let ips = [];
  $("hr").eq(0).before("Получено фишек в этом логе: "+casino());
  let doc = document.body.innerHTML;
  let array, length, time;
  if (settings.highlightBotConnects) {
    array = doc.match(/\d+-\d+-\d+ \d+:\d+:\d+ Игрок .*? вышел с сервера\. IP:/g);
    if (array) {
      length = array.length;
      for (let i=0; i<length; i++) {
        let date = array[i].match(/\d+-\d+-\d+ \d+:\d+:\d+/g);
        if (new Date(date[0]).getTime() - new Date(date[1]).getTime() < 60000) doc = doc.replace(array[i], array[i].replaceAll(/<td>(.*?)<\/td>/g, "<td><span style='color: red'>$1</span></td>"))
      }
    }
  }
  if (settings.isEnabledPointMoney) {
    time = Date.now();
    doc = doc.replaceAll(/(\d)(?=(\d\d\d)+(?=[^\d&$-]|$))/g, `$1.`);
    console.log("Точки в деньгах: "+ (Date.now()-time));
  }
  if (settings.highlightMoney) {
    time = Date.now();
    doc = doc.replaceAll(/\$([^\)]+?)(\s|<)/g, `<span style='color: ${settings.colorMoney}'>$$$1</span>$2`);
    doc = doc.replaceAll(/(Money|Bank|Depozit|Donat):(.*?)\)/g, `<span style='color: ${settings.colorMoney}'>$1: $2</span>)`);
    doc = doc.replaceAll(/(Донат|Деньги[^(]|Деньги\(БАНК\)|Депозит)\s?(.*?)\n/g, `$1 <span style='color: ${settings.colorMoney}'>$2</span>`);
    console.log("Выделение денег: "+ (Date.now()-time));
  }
  if (settings.isDeleteTextMoney) {
    time = Date.now();
    doc = doc.replaceAll(/(Money:|Bank:|Depozit:|Donat:)( )?/g, "$");
    console.log("Удаление Money: "+ (Date.now()-time));
  }
  if (settings.isColorStr) {
    time = Date.now();
    for (let i=0; i<colorStr.length; i++)
      doc = doc.replaceAll(RegExp(`(br>\\d+-\\d+-\\d+ \\d+:\\d+:\\d+)(.*?${colorStr[i].keyword.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&")}.*)`, `g${colorStr[i].caseSensitivity ? "" : "i"}`), `$1<span style='color: ${colorStr[i].color}'>$2</span>`);
    console.log("Выделение строк: "+ (Date.now()-time));
  }
  if (settings.isEnabledIp) {
    array = document.body.innerText.match(/\d+\.\d+\.\d+\.\d+/g);
    if (array) {
      length = array.length;
      for (let i=0; i<length; i++)
        if (ips.indexOf(array[i])==-1) {
          ips.push(array[i]);
          post(`https://seraphtech.site/api/v2/forum.ip`, {"ip": array[i]}, (res) => {
            if (!isJson(res)) return;
            res = JSON.parse(JSON.parse(res)["response"]);
            if (res.status == "success")
              doc = doc.replaceAll(new RegExp(array[i], "g"), `${array[i]} <span style='font-family: Arial, Helvetica, sans-serif'>(${res.country}, ${res.regionName}, ${res.city} | VPN: ${res.proxy ? "<span style='color:red'>+</span>" : "-"} Mobile: ${res.mobile ? "<span style='color:red'>+</span>" : "-"} Host: ${res.hosting ? "<span style='color:red'>+</span>" : "-"} )</span>`);
            document.body.innerHTML = doc;
          })
        }
    }
  }
  document.body.innerHTML = doc;
}
function casino() {
  let nick = $(".top h1").text();
  let html = document.body.innerText;
  let money = 0;

  if (html.match(/Игрок .*? передал деньги (.*?) \$\d+ Назначение: (выиграл|проиграл) в кости/g)) {
    let arr = html.match(/Игрок (.*?) передал деньги (.*?) \$(\d+) Назначение: (выиграл|проиграл) в кости/g)
    arr.forEach((item, i) => {
      if (item.match(/выиграл/)) {
        if (item.match(/Игрок (.*) передал деньги .*?/)[1] === nick)
          money += Number(item.match(/\$(\d+) Назначение:/)[1]);
        else
          money -= Number(arr[i].match(/\$(\d+) Назначение:/)[1]);
      } else {
        if (item.match(/Игрок (.*) передал деньги .*?/)[1] === nick)
          money -= Number(item.match(/\$(\d+) Назначение:/)[1]);
        else
          money += Number(item.match(/\$(\d+) Назначение:/)[1]);
      }
    });
  }
  if (html.match(/получил деньги .\d+ за Обмен фишек на деньги/)) {
    let arr = html.match(/получил деньги .\d+ за Обмен фишек на деньги/g);
    for (let i=0; i<arr.length; i++)
      money -= arr[i].match(/получил деньги .(\d+) за Обмен фишек на деньги/)[1]/85;
  }
  if (html.match(/потерял деньги \$\d+ по причине Покупка фишек для казино/)) {
    let arr = html.match(/потерял деньги \$\d+ по причине Покупка фишек для казино/g);
    for (let i=0; i<arr.length; i++)
      money += arr[i].match(/потерял деньги \$(\d+) по причине Покупка фишек для казино/)[1]/90;
  }
  return money;
}
function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
