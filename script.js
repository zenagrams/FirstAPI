
document.getElementById('button').addEventListener('click', function(){
    const clientId = f828b27668134d588822dbbe38099b35;
    const redirect_uri = encodeURIComponent('http://127.0.0.1:5500/index.html');
    const scopes= encodeURIComponent('streaming user-read-private user-read-email');
    const authUrl =`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes}`;
    
    window.location.href = authUrl;
});



