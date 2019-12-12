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
export function isLoginStatus(state){
    state.authenticated = true;
}
export function noLoginStatus(state){
    state.authenticated = false;
}