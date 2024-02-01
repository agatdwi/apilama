//Yahaaa ngapain dek
const axios = require("axios");
async function openai(_0x278990, _0x2e6283, _0x4768a6 = 0x3) {
  let _0x23dc4c = 0x0;
  let _0x10b6e7;
  while (_0x23dc4c < _0x4768a6) {
    const _0x482160 = {
      'app': {
        'id': "besp15eb87j1695894870720",
        'time': Date.now(),
        'data': {
          'sender': {
            'id': _0x2e6283
          },
          'message': [{
            'id': Date.now(),
            'time': Date.now(),
            'type': "text",
            'value': _0x278990
          }]
        }
      }
    };
    const _0x2b9751 = {
      'Content-Type': "application/json",
      'Authorization': "Bearer 0yqbiu-xz1s-qrnp2fjsj1z8cnav-f1g2rddjl5-x6fqf4b4"
    };
    try {
      const _0x5b719b = await axios.post('https://webhook.botika.online/webhook/', _0x482160, {
        'headers': _0x2b9751
      });
      const {
        data: _0xc5c1f0,
        status: _0xde8f14
      } = _0x5b719b;
      if (_0xde8f14 === 0xc8) {
        const _0x1dca5b = _0xc5c1f0.app.data.message;
        if (Array.isArray(_0x1dca5b)) {
          const _0x1e9e3d = _0x1dca5b.map(_0x50ec60 => _0x50ec60.value);
          let _0xa02d59 = _0x1e9e3d.join("\n");
          if (/(<BR>|<br>)/i.test(_0xa02d59)) {
            let _0x21a1b8 = _0xa02d59.replace(/<BR>|<br>/gi, "\n");
            _0x21a1b8 = _0x21a1b8.replace(/```/g, "\n");
            let _0x575fef = _0x21a1b8.split("\n");
            let _0x9ab63f = '';
            for (const [_0x593eb6, _0x14d4ea] of _0x575fef.entries()) {
              _0x9ab63f += "\n\n" + _0x14d4ea + "\n";
            }
            _0x10b6e7 = _0x9ab63f;
          } else {
            _0x10b6e7 = _0xa02d59;
          }
          if (_0x10b6e7.includes("Maaf, aku belum mengerti dengan pertanyaanmu. Bisa kamu menjelaskannya lagi?")) {
            _0x23dc4c++;
          } else {
            break;
          }
        }
      }
    } catch (_0x524996) {
      console.error("Error:", _0x524996);
      _0x10b6e7 = null;
    }
  }
  return _0x10b6e7;
}
module.exports = {
  'openai': openai
};