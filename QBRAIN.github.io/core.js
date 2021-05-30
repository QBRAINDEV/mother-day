const __views = {
    splash: document.querySelector(`.splash`),
    one: document.querySelector(`#one`),
    two: document.querySelector(`#two`)
}

const __view_one__ = () => {
    try {

        __views.one.setAttribute(`render`, true);
        return new Promise((_resolve_, _error_) => {
            setTimeout(() => {
                __views.one.setAttribute(`render`, false);
                _resolve_(true);
            }, 5000);
        })

    } catch (_error_) {
        console.log(_error_);
    }
}

const __view_two__ = () => {
    try {

        __views.two.setAttribute(`render`, true);
        return new Promise((_resolve_, _error_) => {
            setTimeout(() => {
                __views.two.setAttribute(`render`, false);
                __views.splash.setAttribute(`render`, true);
                _resolve_(true);
            }, 600000);
        })

    } catch (_error_) {
        console.log(_error_);
    }
}


const __play__ = async () => {
    try {

        setTimeout(async () => {
            __views.splash.setAttribute(`render`, false);
            await __view_one__().then(async () => {
                await __view_two__()
            })

        }, 0)

    } catch (_error_) {
        console.log(_error_);
    }
}

document.querySelector(`.open`).addEventListener(`click`, __play__);