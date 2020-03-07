function response(room, msg, sender, isGroupChat, replier, ImageDB) {
  var Data = msg.split(" ");
  if (Data[0] == "!길드") {
      var u = Utils.getWebText("https://maple.gg/guild/union/"+msg.substr(4));//유니온서버 전용임 왜냐면 내가 유니온이거든
      var a=u.split("<div class=\"row mb-4\">");
     var b=a[1].split("<div class=\"col-lg-4\">");
     b = b[0].replace(/(<([^>]+)>)/g, "").trim().replace(/^ +/gm,"").replace(/-/g,"").replace(/ /g,"").replace(/\n/g,"").replace(/길드마스터/g, "길드마스터: ").replace(/월드랭킹/g, "\n월드랭킹: ").replace(/전체랭킹/g, "\n전체랭킹: ").replace(/길드원수/g, "\n길드원수: ").replace(/길드포인트/g, "\n길드포인트: ");
    replier.reply("[" + Data[1] + "길드정보]" + "\n" + b);
    }
}
//제작자 엔테클로
//문의는 언제나 환영 entekorea@naver.com
//복붙해도 상관은 없는데 팔다가 걸리면 손모가지
