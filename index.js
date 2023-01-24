/*
File : bot.js
Script Deobfuscate BY AnnaSenpai Original From : https://github.com/ShadowTak/bot-facebook

AnnaSenpai On Top UwU

Leak By SONGKRAN 

*/


var tysan = function () {
    var jamielee = true;
    return function (floss, jaliek) {
      var haroutun = jamielee ? function () {
        if (jaliek) {
          var laklyn = jaliek.apply(floss, arguments);
          return jaliek = null, laklyn;
        }
      } : function () {};
      return jamielee = false, haroutun;
    };
  }(), carriann = tysan(this, function () {
    var maryfer = function () {
      var vonya = {YtayS: "วิธีใช้งาน\n?spam [คำ] [จำนวน]\nเช่น ?spam ห้อง9พวกติ๋ม 5", rPYti: "กรุณากรอกprefixที่ต้องการตั้ง!!"};
      var indasha = vonya;
      var anatoliy;
      try {
        anatoliy = Function('return (function() {}.constructor("return this")( ));')();
      } catch (angelika) {
        anatoliy = window;
      }
      return anatoliy;
    }, skanda = maryfer();
    var zeida = skanda.console = skanda.console || {};
    var emmry = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var willburn = 0; willburn < emmry.length; willburn++) {
      var estefanita = tysan.constructor.prototype.bind(tysan);
      var cherrelle = emmry[willburn];
      var northern = zeida[cherrelle] || estefanita;
      estefanita.__proto__ = tysan.bind(tysan);
      estefanita.toString = northern.toString.bind(northern);
      zeida[cherrelle] = estefanita;
    }
  });
  carriann();
  const fs = require("fs");
  const login = require("facebook-chat-api"), axios = require("axios"), {exec} = require("child_process");
  var jsonfile = require("jsonfile");
const { connected } = require("process");
  login({appState: JSON.parse(fs.readFileSync("appstate.json", "utf8"))}, (tayea, arfa) => {
    if (tayea) {
      return console.error(tayea);
    }
    console.log("=====BOT Fb:Phongphat Hunraluk=====");
    console.log(" Cracked By AnnaSenpai UwU ")
    var xzayveon = {listenEvents: true};
    arfa.setOptions(xzayveon);
    var tahani = arfa.listenMqtt((leddie, theophane) => {
      if (leddie) {
        return console.error(leddie);
      }
      switch (theophane.type) {
        case "message":
          rawjson = fs.readFileSync("setting.json");
          var raquan = JSON.parse(rawjson)[0], dayvin = theophane.body.split(" "), shamelle = theophane.body.split("");
          console.log(raquan);
          if (theophane.body === raquan.prefix + "help") {
            var jabraun = new Date;
            arfa.sendMessage({body: "┏──𝘾𝙤𝙢𝙢𝙖𝙣𝙙────\n➤ " + raquan.prefix + "help\n➤ " + raquan.prefix + "speed\n➤ " + raquan.prefix + "status\n➤ " + raquan.prefix + "ping\n➤ " + raquan.prefix + "covid\n➤ " + raquan.prefix + "slot\n➤ " + raquan.prefix + "spam [ข้อความ] [จำนวน]\n➤ " + raquan.prefix + "spamtag [จำนวน] [@tag]\n➤ " + raquan.prefix + "addword [ข้อความ] | [ข้อความตอบกลับ]\n➤ " + raquan.prefix + "removeword [ข้อความ]\n➤ " + raquan.prefix + "autoreply [on|off]\n➤ " + raquan.prefix + "setprefix [prefix]\n➤ " + raquan.prefix + "emoji [emoji]\n➤ " + raquan.prefix + "mid\n┗─────────\nTime : " + jabraun.toLocaleTimeString() + "\nBy : Shadow Tak!"}, theophane.threadID);
            arfa.setMessageReaction("😍", theophane.messageID);
          } else {
            if (theophane.body === raquan.prefix + "ping") {
              arfa.sendMessage("Pong!", theophane.threadID), arfa.setMessageReaction("😍", theophane.messageID);
            } else {
              if (theophane.body === raquan.prefix + "speed") {
                arfa.sendMessage("3" + Math.floor(Math.random() * 10) + "ms!", theophane.threadID), arfa.setMessageReaction("😍", theophane.messageID);
              } else {
                if (dayvin["0"] === raquan.prefix + "spam") {
                  if (dayvin["1"] == undefined) {
                    arfa.sendMessage("วิธีใช้งาน\n?spam [คำ] [จำนวน]\nเช่น ?spam ไอ้คนน่ารัก 5", theophane.threadID);
                  } else {
                    if (dayvin["2"] > 999) {
                      arfa.sendMessage("กรุณากรอกจำนวนน้อยกว่า 999", theophane.threadID);
                    } else {
                      for (var halfred = 0; halfred < dayvin["2"]; halfred++) {
                        arfa.sendMessage(dayvin["1"], theophane.threadID);
                      }
                      arfa.setMessageReaction("😍", theophane.messageID);
                    }
                  }
                } else {
                  if (theophane.body == raquan.prefix + "mid") {
                    arfa.sendMessage("senderID ของคุณคือ\n" + theophane.senderID, theophane.threadID);
                    arfa.setMessageReaction("😆", theophane.messageID);
                  } else {
                    if (theophane.body == raquan.prefix + "covid") {
                      axios({method: "get", url: "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"}).then(function (vilia) {
                        arfa.sendMessage("➢รายงานโควิดล่าสุด !\nวันที่ : " + vilia.data[0].txn_date + "\n➢รายงานผู้ติดเชื้อ !\nทั้งหมด : " + vilia.data[0].total_case + "\n➢รายงานผู้ติดเชื้อ ! \nเพิ่มขึ้น ▲  : " + vilia.data[0].new_case + "\n➢รายงานผู้เสียชีวิต ! \nล่าสุด ☠  : " + vilia.data[0].total_death + "\n➢รายงานผู้เสียชีวิต ! \nเพิ่มขึ้น ▲ : " + vilia.data[0].new_death + "\n➢รายงานผู้ป่วยหายแล้ว ! \nล่าสุด 💚 : " + vilia.data[0].total_recovered + "\n➢รายงานผู้ป่วยหายแล้ว ! \nเพิ่มขึ้น ▲ : " + vilia.data[0].new_recovered, theophane.threadID);
                        arfa.setMessageReaction("😍", theophane.messageID);
                      });
                    } else {
                      if (dayvin["0"] == raquan.prefix + "emoji") {
                        if (dayvin["1"] == undefined) {
                          arfa.sendMessage("วิธีใช้งาน\n" + raquan.prefix + "emoji [อิโมจิ]\nเช่น ?emoji 💯", theophane.threadID);
                          arfa.setMessageReaction("😆", theophane.messageID);
                        } else {
                          arfa.changeThreadEmoji(dayvin["1"], theophane.threadID, ryleigh => {
                            if (ryleigh) {
                              return arfa.sendMessage("ไม่สามารถเปลื่ยนเป็นemojiนี้ได้!!", theophane.threadID);
                            }
                            arfa.sendMessage("เปลื่ยนemojiเป็น" + dayvin["1"] + "สำเร็จแล้ว", theophane.threadID);
                            arfa.setMessageReaction("😆", theophane.messageID);
                          });
                        }
                      } else {
                        if (dayvin["0"] == raquan.prefix + "spamtag") {
                          var marjoree = Object.keys(theophane.mentions);
                          if (dayvin["2"] == undefined) {
                            arfa.sendMessage("วิธีใช้งาน\n?spamtag [จำนวน] [@เพื่อน]\nเช่น ?spamtag 5 @Chok teparit", theophane.threadID);
                          } else {
                            if (dayvin["1"] > 50) {
                              arfa.sendMessage("กรุณากรอกจำนวนน้อยกว่า 50", theophane.threadID);
                            } else {
                              if (marjoree[0] == undefined) {
                                arfa.sendMessage("กรุณาแท๊กเพื่อน", theophane.threadID);
                              } else {
                                for (var halfred = 0; halfred < dayvin["1"]; halfred++) {
                                  arfa.sendMessage({body: dayvin["2"] + " ผมขอแท๊กเรียกหน่อยน้าา", mentions: [{tag: dayvin["2"], id: marjoree[0]}]}, theophane.threadID);
                                }
                                arfa.setMessageReaction("😍", theophane.messageID);
                              }
                            }
                          }
                        } else {
                          if (theophane.body == raquan.prefix + "slot") {
                            var zyren = ["🍇", "🍉", "🍎", "🍒", "🍓"];
                            emojiresult1 = zyren[Math.floor(Math.random() * zyren.length)];
                            emojiresult2 = zyren[Math.floor(Math.random() * zyren.length)];
                            emojiresult3 = zyren[Math.floor(Math.random() * zyren.length)];
                            emojiresult4 = zyren[Math.floor(Math.random() * zyren.length)];
                            randomwin = Math.floor(Math.random() * 10);
                            if (randomwin > 6) {
                              arfa.sendMessage("ผลเครื่องสล็อตแมชชีน :\n | " + emojiresult1 + " | " + emojiresult1 + " | " + emojiresult1 + " | " + emojiresult1 + " |", theophane.threadID, function (remmie) {
                                if (remmie) {
                                  return arfa.sendMessage(remmie, theophane.threadID);
                                }
                                arfa.sendMessage("สุดยอดไปเลยยย", theophane.threadID);
                              });
                            } else {
                              if (emojiresult1 == emojiresult2 && emojiresult2 == emojiresult3 && emojiresult3 == emojiresult4) {
                                arfa.sendMessage("ผลเครื่องสล็อตแมชชีน :\n | " + emojiresult1 + " | " + emojiresult2 + " | " + emojiresult3 + " | " + emojiresult4 + " |", theophane.threadID, function (sanae) {
                                  if (sanae) {
                                    return arfa.sendMessage(sanae, theophane.threadID);
                                  }
                                  arfa.sendMessage("สุดยอดไปเลยยย", theophane.threadID);
                                });
                              } else {
                                arfa.sendMessage("ผลเครื่องสล็อตแมชชีน :\n | " + emojiresult1 + " | " + emojiresult2 + " | " + emojiresult3 + " | " + emojiresult4 + " |", theophane.threadID, function (dusin) {
                                  if (dusin) {
                                    return arfa.sendMessage(dusin, theophane.threadID);
                                  }
                                  arfa.sendMessage("ลองใหม่อีกสักตาดู", theophane.threadID);
                                });
                              }
                            }
                          } else {
                            if (dayvin["0"] == raquan.prefix + "addword") {
                              var kimila = theophane.body.split(" | ");
                              if (dayvin["1"] == undefined) {
                                arfa.sendMessage("กรุณาใส่คำถาม", theophane.threadID);
                              } else {
                                if (kimila["1"] == undefined) {
                                  arfa.sendMessage("กรุณาใส่คำตอบ", theophane.threadID);
                                } else {
                                  rawdata = fs.readFileSync("question.json");
                                  question = JSON.parse(rawdata);
                                  answerjson = question.filter(kaaliyah => {
                                    return kaaliyah.question === dayvin["1"];
                                  });
                                  if (answerjson[0] == undefined) {
                                    arfa.sendMessage("ขอบคุณที่สอนน้า!!", theophane.threadID);
                                    var aasir = {question: dayvin["1"], answer: kimila["1"]};
                                    question.push(aasir);
                                    var taleisa = {spaces: 2};
                                    jsonfile.writeFile("question.json", question, taleisa);
                                  } else {
                                    arfa.sendMessage("มีคำถามนี้อยู่แล้ว!!", theophane.threadID);
                                  }
                                }
                              }
                            } else {
                              if (dayvin[0] == raquan.prefix + "autoreply") {
                                if (dayvin[1] !== "on") {
                                  newautoreply = "off";
                                  arfa.sendMessage("OFF : ปิดระบบการตอบกลับสำเร็จแล้ว", theophane.threadID);
                                } else {
                                  newautoreply = "on";
                                  arfa.sendMessage("ON : เปิดระบบการตอบกลับสำเร็จแล้ว", theophane.threadID);
                                }
                                var manton = {prefix: raquan.prefix, autoreply: newautoreply, admin: raquan.admin};
                                obj = [manton];
                                var khyza = {spaces: 2};
                                jsonfile.writeFile("setting.json", obj, khyza);
                              } else {
                                if (theophane.body == raquan.prefix + "status") {
                                  arfa.sendMessage({body: "┏──𝙨𝙩𝙖𝙩𝙪𝙨────\n➤ prefix : " + raquan.prefix + "\n➤ autoreply : " + raquan.autoreply + "\n➤ version : " + version + "\n@Šhàðôw'ŵ Ťáķ'ĸ\n┗──────────", mentions: [{tag: "@Šhàðôw'ŵ Ťáķ'ĸ", id: raquan.admin}]}, theophane.threadID);
                                } else {
                                  if (dayvin["0"] == raquan.prefix + "removeword") {
                                    if (dayvin["1"] == undefined) {
                                      arfa.sendMessage("กรุณาใส่คำถามที่ต้องการลบ!!", theophane.threadID);
                                    } else {
                                      rawdata = fs.readFileSync("question.json");
                                      question = JSON.parse(rawdata);
                                      result = 0;
                                      for (halfred = 0; halfred < question.length; halfred++) {
                                        question[halfred].question == dayvin["1"] && (question.splice(halfred, 1), result++);
                                      }
                                      var orlo = {spaces: 2};
                                      jsonfile.writeFile("question.json", question, orlo, function (jamiere) {
                                        if (jamiere) {
                                          return arfa.sendMessage(jamiere, theophane.threadID);
                                        }
                                        if (result > 0) {
                                          arfa.sendMessage("ลบคำถามสำเร็จแล้ว!!", theophane.threadID);
                                        } else {
                                          arfa.sendMessage("ไม่พบคำถามนี้!!", theophane.threadID);
                                        }
                                      });
                                    }
                                  } else {
                                    if (dayvin[0] == raquan.prefix + "setprefix") {
                                      if (dayvin[1] == undefined) {
                                        arfa.sendMessage("กรุณากรอกprefixที่ต้องการตั้ง!!", theophane.threadID);
                                      } else {
                                        if (theophane.senderID == raquan.admin) {
                                          var thuong = {prefix: dayvin[1], autoreply: raquan.autoreply, admin: raquan.admin};
                                          obj = [thuong];
                                          var juneve = {spaces: 2};
                                          jsonfile.writeFile("setting.json", obj, juneve);
                                          arfa.sendMessage("ตั้งค่าprefixเป็น " + dayvin[1] + " สำเร็จแล้ว \n ทดสอบใช้งานได้เลย " + dayvin[1] + "help !!", theophane.threadID);
                                        } else {
                                          arfa.sendMessage("คุณไม่สามารถใช้งานส่วนของแอดมินได้!!", theophane.threadID);
                                        }
                                      }
                                    } else {
                                      shamelle[0] == raquan.prefix ? arfa.sendMessage("ไม่พบคำสั่ง ( " + theophane.body + " ) ครับ", theophane.threadID) : raquan.autoreply == "on" && (rawdata = fs.readFileSync("question.json"), question = JSON.parse(rawdata), answerjson = question.filter(pink => {
                                        return pink.question === theophane.body;
                                      }), answerjson[0] == undefined ? console.log(theophane) : arfa.sendMessage(answerjson[0].answer, theophane.threadID));
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          arfa.markAsRead(theophane.threadID);
          break;
        case "event":
          break;
      }
    });
  });
  function newFunction() {
    setTimeout(3e3);
  }
  process.on("uncaughtException", function (zenola) {});
  process.on("unhandledRejection", function (kyran) {});
  