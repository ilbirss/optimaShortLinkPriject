function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function hasToken() {
    const token = localStorage.getItem('token');
    return token ? true : false;
}

async function request(path, method = 'GET', body = {}) {
    const options = {
        method: method,
        headers: {'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': localStorage.getItem('token') ? localStorage.getItem('token') : ''},
    }
    if (method !== 'GET' && method !== 'HEAD') {
        options.body = JSON.stringify(body);
    }
    const response = await fetch(`http://192.168.20.93:1207/${path}`, options);
    if (response.status === 401) {
        alert('frontEnd error')
    }
    if(response.status === 500) {
        alert('Internal error')
    }
    const data = await response.json();
    return data;
}

function isValidLink(link) {
    const data = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return data.test(String(link).toLowerCase());
}


