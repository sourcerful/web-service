import {makeObservable, computed, action, observable, makeAutoObservable} from "mobx";
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
    rootStore: rootStore
    isLightMode = false;

    constructor(root: rootStore){
        this.rootStore = root
        makeAutoObservable(this, {rootStore: false, isLightMode: observable, mode: computed, toggle: action})
    }

    get mode(){
        return this.isLightMode
    }

    toggle(){
        this.isLightMode = !this.isLightMode
    }

}

class RequestDataStore{
    rootStore: rootStore
    requestBody: reqBodyDTO = {activator: false};
    
    constructor(root: rootStore){
        this.rootStore = root
        makeAutoObservable(this, {rootStore: false, requestBody: observable, data: computed})
    }
    get data(){
        return this.requestBody
    }
}

export default rootStore;