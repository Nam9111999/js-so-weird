const a = true
const b = ''
const c = 'Hi'

const d = a && b && c // '' do b la Falsy nên tới b sẽ dừng lại và trả về b

-----------------------
const a = null
const b = 12
const c = 'Hi'

const  = a || b || c //12

-------------------------
// Optional chaining ?.
// Khi cố truy cập thuộc tính undefined hoặc null sẽ xảy rả lỗi.

let user = {}
alert(user.address.street) // error

// Có thể dùng toán tử 3 ngôi
user.address ? alert(user.address.street) : alert(undefined)

let user = {}
alert(user?.address?.street) // user?. (if user null or undefine) return udefine right now

// nullist check it undefined or null
let user
alert(user ?? 'Anonymous')
