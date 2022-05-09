import {makeObservable, computed, action, observable} from "mobx";
import {reqBodyDTO} from "../types/types"

interface Stores{
    themeStore: ThemeStore
    requestDataStore: RequestDataStore
}

class rootStore{        
    stores: Stores;

    constructor(){
        this.stores = {themeStore: new ThemeStore(this), requestDataStore: new RequestDataStore(this)}
    }
}

class ThemeStore{
    isLightMode = false;

    constructor(root: rootStore){
        makeObservable(this, {isLightMode: observable, mode: computed, toggle: action})
    }

    get mode(){
        return this.isLightMode
    }

    toggle(){
        this.isLightMode = !this.isLightMode
    }

}

class RequestDataStore{
    requestBody: reqBodyDTO;
    
    constructor(root: rootStore){
        this.requestBody = {activator: false}
    }
}

export default rootStore;