import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `ðHai, ${ucapan()}

${user.banned ? 'ð®Maaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi,hubungin pemilik bot agar di buka kembali' : `ð¬ Saya Å¦ðððððð Asisten whatsapps siap membantu anda ^-^`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : 'PENTING: á´á´á´Êá´É´ á´Éª Êá´Êá´É´É¢ á´á´Êê°á´É´ Êá´á´ á´á´á´á´ á´á´ÊÉªá´É´ á´á´á´É´ á´Éª ÊÊá´á´ÉªÊ á´á´á´á´á´á´Éªê±!', [user.banned ? 'á´á´á´ÉªÊÉªá´ Êá´á´' : 'á´á´É´á´', user.banned ? '.owner' : '.menu'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari ð"
    if (time >= 4) {
        res = "Selamat pagi ð"
    }
    if (time > 10) {
        res = "Selamat siang âï¸"
    }
    if (time >= 15) {
        res = "Selamat sore ð"
    }
    if (time >= 18) {
        res = "Selamat malam ð"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)
