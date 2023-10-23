var ListaFilmes = [];

ListaFilmes = ["https://br.web.img3.acsta.net/pictures/17/08/26/00/05/175443.jpg","https://upload.wikimedia.org/wikipedia/pt/thumb/5/59/Superman_Returns_poster.jpg/230px-Superman_Returns_poster.jpg","https://images.justwatch.com/poster/175548841/s718/duro-de-matar-4-0.%7Bformat%7D","https://media.fstatic.com/r2MU1iAFSXZFhXsIiTd_xGB6awU=/322x478/smart/filters:format(webp)/media/movies/covers/2017/08/tt0118615.jpg","https://a-static.mlcdn.com.br/800x560/dvd-o-predador-1/cultmidia/9faf9d54d7c711eb87454201ac18500e/9532c7485ee8bd828f483d8c9cfbc34d.jpeg","https://m.media-amazon.com/images/I/511ZzwT+tsL._AC_.jpg" ,"https://www.cineplayers.com/sites/default/files/posters/5964_poster.jpg","https://m.media-amazon.com/images/M/MV5BMTA5MjI3NTE5NzleQTJeQWpwZ15BbWU4MDc2Mjg5ODAx._V1_FMjpg_UX1000_.jpg","https://m.media-amazon.com/images/I/81vTHovrz+L._AC_SL1500_.jpg","http://s2.glbimg.com/XEBGb0trdAQNLWt3A1h5mobDVFY=/s.glbimg.com/jo/g1/f/original/2015/10/18/star-wars-force-awakens-off.jpg","https://img.elo7.com.br/product/original/269D32B/big-poster-filme-v-de-vinganca-lo02-tamanho-90x60-cm-poster-de-filme.jpg","https://br.web.img2.acsta.net/medias/nmedia/18/89/56/94/20055685.jpg"];



var ListaNomes = [];

ListaNomes= ["THOR","SUPERMAN","DURO DE MATAR","ANACONDA","PREDADOR","BAD BOYS II","VERMES MALDITOS","NINJA ASSASSINO","HOMEN DE FERRRO","GUERRA NAS ESTRELAS","V DE VINGANÇA","TITANIC","HOMEN DE FERRO"];

for(var i = 0; i < ListaFilmes.length ; i++)
 {
    document.write(
    "<names><img src=" + ListaFilmes[i] + ">" + ListaNomes[i] + "</names>");
 }




//document .write ("<img src  = "  +   ListaFilmes[3]  +  ">");