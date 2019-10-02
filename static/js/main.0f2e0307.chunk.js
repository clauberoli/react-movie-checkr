(window["webpackJsonpmovie-checker"]=window["webpackJsonpmovie-checker"]||[]).push([[0],{47:function(e,t,a){e.exports=a(91)},52:function(e,t,a){},69:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(32),o=a.n(i),r=(a(52),a(42)),s=a(33),l=a(34),m=a(43),u=a(35),v=a(44),h=a(6),d=a.n(h),p=(a(69),function(e){var t=e.placeholder,a=e.onChange,n=e.value;return c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"Search",placeholder:t,onChange:a,value:n,className:"search"}))}),g=a(10),f=a(36),E=a.n(f),w=function(e){var t=e.item;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:"Movie Poster"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t.original_title," (",t.release_date.substring(0,4),")"),c.a.createElement("p",{className:"card-text"},"".concat(t.overview).length>90?"".concat(t.overview).substring(0,87)+"...":"".concat(t.overview)),c.a.createElement("a",{href:"/movie/".concat(t.id),className:"btn btn-primary"},"Read More")))},y=function(e){var t=e.items,a=c.a.useState(0),n=Object(g.a)(a,2),i=n[0],o=n[1];return void 0!==t?c.a.createElement(E.a,{gutter:12,activePosition:"center",chevronWidth:50,disableSwipe:!1,alwaysShowChevrons:!0,numberOfCards:4,slidesToScroll:2,outsideChevron:!0,showSlither:!1,firstAndLastGutter:!1,activeItemIndex:i,requestToChangeActive:function(e){return o(e)},rightChevron:">",leftChevron:"<"},t.map((function(e){return c.a.createElement(w,{item:e})}))):null},b=(a(87),a(88),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={popularMovies:{},upcomingMovies:{},nowPlaying:{},searchValue:"",searchedMovies:{},activeItemIndex:0},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getPopularMovies(),this.getUpcomingMovies(),this.getNowPlaying()}},{key:"getPopularMovies",value:function(){var e=this;d.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("f55b3dc8fcc438ec2915a5da84a0cd8d","&page=1")).then((function(t){e.setState({popularMovies:t.data})}))}},{key:"getUpcomingMovies",value:function(){var e=this;d.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("f55b3dc8fcc438ec2915a5da84a0cd8d","&page=1")).then((function(t){e.setState({upcomingMovies:t.data})}))}},{key:"getNowPlaying",value:function(){var e=this;d.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("f55b3dc8fcc438ec2915a5da84a0cd8d","&page=1")).then((function(t){e.setState({nowPlaying:t.data})}))}},{key:"onSearchChange",value:function(e){var t=this;this.setState({searchValue:e.target.value}),this.state.searchValue.length>4&&d.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("f55b3dc8fcc438ec2915a5da84a0cd8d","&query=").concat(this.state.searchValue,"&page=1")).then((function(e){t.setState({searchedMovies:e.data})}))}},{key:"render",value:function(){var e=this,t=null;return this.state.searchValue.length<5?t=c.a.createElement("div",{className:"movies"},c.a.createElement("div",{className:"container movie-container"},c.a.createElement("div",{id:"popular-movies"},c.a.createElement("h3",null,"Popular Movies"),c.a.createElement(y,{items:this.state.popularMovies.results}))),c.a.createElement("div",{className:"container movie-container"},c.a.createElement("div",{id:"upcoming-movies"},c.a.createElement("h3",null,"Upcoming Movies"),c.a.createElement(y,{items:this.state.upcomingMovies.results}))),c.a.createElement("div",{className:"container movie-container"},c.a.createElement("div",{id:"upcoming-movies"},c.a.createElement("h3",null,"Now Playing"),c.a.createElement(y,{items:this.state.nowPlaying.results})))):void 0!==this.state.searchedMovies&&(t=c.a.createElement("div",{className:"movies"},c.a.createElement("div",{className:"container movie-container"},c.a.createElement("div",{className:"searched-movies"},c.a.createElement("h3",null,"Results for: ",this.state.searchValue),c.a.createElement(y,{items:this.state.searchedMovies.results}))))),c.a.createElement("div",{id:"movie-checkr"},c.a.createElement(p,{placeholder:"Search for a movie/actor/producer",value:this.state.searchValue,onChange:function(t){return e.onSearchChange(t)}}),t)}}]),t}(c.a.Component));a(89);var M=function(){return c.a.createElement(r.a,null,c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.0f2e0307.chunk.js.map