import { observable, action, computed } from 'mobx'
class Store {
    /**
     * state
     */
    @observable() list = []

    /**
     * actions
     */
    @action getData = (elemet) => {

    }

    constructor () {
        this.list = []
    }
}
export default new Store()