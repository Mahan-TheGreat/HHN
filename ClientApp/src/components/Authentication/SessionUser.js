var SessionUser = (function () {
    

    function setUserName(name) {
        this.userName = name;
        sessionStorage.setItem('userName', name);
    }
    function getUserName() {
        let name = sessionStorage.getItem('userName')
        return name;
    }
    function setToken(tk) {
        this.token = tk;
        sessionStorage.setItem('token', tk);
    }
    function getToken() {
        let token = sessionStorage.getItem('token');
        return token;
    }
    function setStatus() {
        sessionStorage.setItem('status', 'true');
        this.status = 'true'
    }
    function removeStatus() {
        sessionStorage.setItem('status', 'false')
        this.status = 'false'
    }
    function getStatus() {
         let stat = sessionStorage.getItem('status')
        return stat;
    }
    function setCode(id) {
        let code = sessionStorage.setItem('code',id)
        return code;
    }
    function getCode() {
        return sessionStorage.getItem('code')
       
    }
    return {
        setUserName: setUserName,
        getUserName: getUserName,
        setToken: setToken,
        getToken: getToken,
        setStatus: setStatus,
        removeStatus: removeStatus,
        getStatus: getStatus,
        setCode: setCode,
        getCode:getCode
    };
    
})();
export default SessionUser;