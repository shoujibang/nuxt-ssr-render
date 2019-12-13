//这里的方法都是同步的
export function INCREMENT(state){
    console.log(state)
    state.counter++;
}

    export function Remove(state){
        if(state.counter <= 0){
            return;
        }
        state.counter--;
    }
//控制登录状态
    export function isLoginStatus(state){
        state.authenticated = true;
    }
//控制登录退出状态
    export function noLoginStatus(state){
        state.authenticated = false;
    }

//i18n国际化，切换语言用
    export function setLang(state, lang) {
        state.lang = lang
    }
