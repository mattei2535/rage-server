import './systems/index'
import './systems/apanel/index'
import './utils/interfaces/interfaces'

// CEF CONNECTION

const browser = mp.browsers.new('http://192.168.1.161:5173')
browser.markAsChat();