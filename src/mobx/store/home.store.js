import { observable, action } from 'mobx'
class Home {
    @observable homeinfo

    constructor () {
        this.homeinfo = {}
    }

    @action getData () {
        this.homeinfo = {a: 1}
    }

    @action setData () {
        this.homeinfo = {b: 12}
    }
}
export default new Home()