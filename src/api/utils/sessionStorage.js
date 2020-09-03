const ConsortiumId = 'consortiumId'
const ClusterId = 'clusterId'
const ChannelId = 'channelId'
const MenuInfo = 'menuinfo'
const Event = 'event'
const MyBlockchain = 'myBlockchain'

const sessionStorageObj = {
  getMenuInfo() {
    return JSON.parse(sessionStorage.getItem(MenuInfo))
  },

  setMenuInfo(menuinfo) {
    return sessionStorage.setItem(MenuInfo, JSON.stringify(menuinfo))
  },

  getConsortiumId() {
    return JSON.parse(sessionStorage.getItem(ConsortiumId))
  },

  setConsortiumId(consortiumId) {
    return sessionStorage.setItem(ConsortiumId, JSON.stringify(consortiumId))
  },

  getClusterId() {
    return JSON.parse(sessionStorage.getItem(ClusterId))
  },

  setClusterId(clusterId) {
    return sessionStorage.setItem(ClusterId, JSON.stringify(clusterId))
  },

  getChannelId() {
    return JSON.parse(sessionStorage.getItem(ChannelId))
  },

  setChannelId(channelId) {
    return sessionStorage.setItem(ChannelId, JSON.stringify(channelId))
  },

  getEvent(){
    return JSON.parse(sessionStorage.getItem(Event))
  },

  setEvent(event) {
    return sessionStorage.setItem(Event, JSON.stringify(event))
  },

  getMyBlockchain(){
    return JSON.parse(sessionStorage.getItem(MyBlockchain))
  },

  setMyBlockchain(myBlockchain) {
    return sessionStorage.setItem(MyBlockchain, JSON.stringify(myBlockchain))
  },
}
export { sessionStorageObj };
