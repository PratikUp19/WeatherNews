
  let news = {
    newsapi: 'b19e08506420f6fc3ddc25483342c196',
    fetchNews: function (name) {
      fetch(
        `https://gnews.io/api/v4/search?q=${name}&token=${this.newsapi}`
        
      )
      .then((response) => {
        if (!response.ok) {
          alert("No News found.");
          throw new Error("No News found.");
        }
        return response.json();
      })
     //.then((data) => console.log(data));
    .then((data) => this.displayNews(data));
    
  },

  displayNews: function (data) {
   // const { name } = data;
    

    var url1= new Array ();
    var title1=new Array();
    var urlToImage1=new Array();
    var i;
    for(i=1;i<6;i++)
    {
        const {  url,title,image } = data.articles[i];
        url1[i]=url;
        title1[i]=title;
        urlToImage1[i]=image;
      

    }


    function myFunction(x) {
      if (x.matches) { // If media query matches

            
    document.querySelector(".first").innerHTML =`<a href="${url1[1]}" style="text-decoration-line:initial" >${title1[1]} </a>`;
    document.querySelector(".fig1").innerHTML = `<img src="${urlToImage1[1]}" alt="" height= 55rem width=60rem> `;
    document.querySelector(".second").innerHTML =`<a href="${url1[2]}"style="text-decoration-line:initial">${title1[2]} </a>`;
    document.querySelector(".fig2").innerHTML = `<img src="${urlToImage1[2]}" alt="" height= 55rem width=60rem> `;
    document.querySelector(".third").innerHTML =`<a href="${url1[3]}"style="text-decoration-line:initial">${title1[3]} </a>`;
    document.querySelector(".fig3").innerHTML = `<img src="${urlToImage1[3]}" alt="" height= 55rem width=60rem> `;
    document.querySelector(".fourth").innerHTML =`<a href="${url1[4]}"style="text-decoration-line:initial">${title1[4]} </a>`;
    document.querySelector(".fig4").innerHTML = `<img src="${urlToImage1[4]}" alt="" height= 55rem width=60rem> `;
    document.querySelector(".fifth").innerHTML =`<a href="${url1[5]}"style="text-decoration-line:initial">${title1[5]} </a>`;
    document.querySelector(".fig5").innerHTML = `<img src="${urlToImage1[5]}" alt="" height= 55rem width=60rem> `;

    
      } else {
   
        
    document.querySelector(".first").innerHTML =`<a href="${url1[1]}" style="text-decoration-line:initial" >${title1[1]} </a>`;
    document.querySelector(".fig1").innerHTML = `<img src="${urlToImage1[1]}" alt="" height= 250rem width=300rem> `;
    document.querySelector(".second").innerHTML =`<a href="${url1[2]}"style="text-decoration-line:initial">${title1[2]} </a>`;
    document.querySelector(".fig2").innerHTML = `<img src="${urlToImage1[2]}" alt="" height= 250rem width=300rem> `;
    document.querySelector(".third").innerHTML =`<a href="${url1[3]}"style="text-decoration-line:initial">${title1[3]} </a>`;
    document.querySelector(".fig3").innerHTML = `<img src="${urlToImage1[3]}" alt="" height= 250rem width=300rem> `;
    document.querySelector(".fourth").innerHTML =`<a href="${url1[4]}"style="text-decoration-line:initial">${title1[4]} </a>`;
    document.querySelector(".fig4").innerHTML = `<img src="${urlToImage1[4]}" alt="" height= 250rem width=300rem> `;
    document.querySelector(".fifth").innerHTML =`<a href="${url1[5]}"style="text-decoration-line:initial">${title1[5]} </a>`;
    document.querySelector(".fig5").innerHTML = `<img src="${urlToImage1[5]}" alt="" height= 250rem width=300rem> `;
      }
    }
    
    var x = window.matchMedia("(max-width: 380px)")
    myFunction(x);
   


  
  },
  search: function () {
     this.fetchNews(document.querySelector(".search-bar").value);
   },
};

document.querySelector(".search button").addEventListener("click", function () {
  news.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      news.search();
    }
  });

  news.fetchNews("space nasa");

