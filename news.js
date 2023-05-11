//http://api.mediastack.com/v1/news?access_key=ef549d2db447a3210d49e19d98eca7e3



// function displayStock() {
//   stock = floatingInput.value
//   fetch(`https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/day/2023-01-09/2023-01-09?apiKey=0XfAefj_LJ4rpSobqL3L2yQ_D3A4THv_`).then(data => data.json()).then(data => stockData(data))
// }

// function stockData(sdata) {
//   snme = sdata.ticker
//   vol = sdata.results[0].v
//   opn = sdata.results[0].o
//   high = sdata.results[0].h
//   low = sdata.results[0].l
//   clos = sdata.results[0].c

//   sinfo.innerHTML = `
//     <div class="me-5 mt-4 w-100">
//     <div class=" card">
//       <div class="card-header">
//         <h2 class="mt-3">Get Stock Market Data</h2>
//       </div>
//       <div class="card-body">
//         <div class="form-floating">
//           <input type="text" class="form-control" id="floatingInput" placeholder="Stock Listed Name">
//           <label for="floatingInput">Serch Listed name eg : AAPL for Apple, NVDA for Nvidia Corp</label>
//           <button onclick="displayStock()" type="button" class="btn btn-bg-dark btn-outline-dark my-2">GET</button>
//         </div>
//         <div>
//         <h3>Stock Name - ${snme}</h3>
//         <div class="d-flex" style="overflow: scroll;">
//           <p class="pe-3">Volume - ${vol}</p>
//           <p class="px-3">Open - ${opn}</p>
//           <p class="px-3">High - ${high}</p>
//           <p class="px-3">Low - ${low}</p>
//           <p class="px-3">Close - ${clos}</p>
//         </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     `
// }


// function displayNews() {
//   country = cntry.value
//   category = ctgry.value
//   fetch(`https://newsdata.io/api/1/news?apikey=pub_214452c235d9215da65ef84ace20e59ca7874&country=${country}&category=${category}`).then(data => data.json()).then(data => newsData(data))
// }

// function newsData(ndata) {

//   console.log(ndata);

//   title1 = ndata.results[0].title
//   desc1 = ndata.results[0].description
//   imgurl = ndata.results[0].image_url
//   ftr = ndata.results[0].creator

//   sec1.innerHTML = `
//     <div class="col-lg-5 card1">
//         <div class="card h-100">
//           <img src="${imgurl}" class="card-img-top card-img-top1" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title1}</h5>
//             <p class="card-text">${desc1}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr}</small>
//           </div>
//         </div>
//     </div>
//     `

//   title1 = ndata.results[1].title
//   desc1 = ndata.results[1].description
//   imgurl1 = ndata.results[1].image_url
//   ftr1 = ndata.results[1].creator

//   sec1.innerHTML += `
//     <div class="col-lg-5 card2">
//         <div class="card h-100">
//           <img src="${imgurl1}" id="card-img-top2" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title1}</h5>
//             <p class="card-text">${desc1}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr1}</small>
//           </div>
//         </div>
//     </div>
//     `

//   title2 = ndata.results[2].title
//   desc2 = ndata.results[2].description
//   imgurl2 = ndata.results[2].image_url
//   ftr2 = ndata.results[2].creator

//   sec2.innerHTML = `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl2}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title2}</h5>
//             <p class="card-text">${desc2}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr2}</small>
//           </div>
//         </div>
//     </div>
//     `

//   title3 = ndata.results[3].title
//   desc3 = ndata.results[3].description
//   imgurl3 = ndata.results[3].image_url
//   ftr3 = ndata.results[3].creator

//   sec2.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl3}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title3}</h5>
//             <p class="card-text">${desc3}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr3}</small>
//           </div>
//         </div>
//     </div>
//   `

//   title4 = ndata.results[4].title
//   desc4 = ndata.results[4].description
//   imgurl4 = ndata.results[4].image_url
//   ftr4 = ndata.results[4].creator

//   sec2.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl4}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title4}</h5>
//             <p class="card-text">${desc4}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr4}</small>
//           </div>
//         </div>
//     </div>
//   `


//   title5 = ndata.results[5].title
//   desc5 = ndata.results[5].description
//   imgurl5 = ndata.results[5].image_url
//   ftr5 = ndata.results[5].creator

//   sec2.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl5}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title5}</h5>
//             <p class="card-text">${desc5}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr5}</small>
//           </div>
//         </div>
//     </div>
//   `


//   title6 = ndata.results[6].title
//   desc6 = ndata.results[6].description
//   imgurl6 = ndata.results[6].image_url
//   ftr6 = ndata.results[6].creator

//   sec2.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl6}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title6}</h5>
//             <p class="card-text">${desc6}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr6}</small>
//           </div>
//         </div>
//     </div>
//   `


//   title7 = ndata.results[7].title
//   desc7 = ndata.results[7].description
//   imgurl7 = ndata.results[7].image_url
//   ftr7 = ndata.results[7].creator

//   sec3.innerHTML = `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl7}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title7}</h5>
//             <p class="card-text">${desc7}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr7}</small>
//           </div>
//         </div>
//     </div>
//   `


//   title8 = ndata.results[8].title
//   desc8 = ndata.results[8].description
//   imgurl8 = ndata.results[8].image_url
//   ftr8 = ndata.results[8].creator

//   sec3.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl8}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title8}</h5>
//             <p class="card-text">${desc8}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr8}</small>
//           </div>
//         </div>
//     </div>
//   `

//   title9 = ndata.results[9].title
//   desc9 = ndata.results[9].description
//   imgurl9 = ndata.results[9].image_url
//   ftr9 = ndata.results[9].creator

//   sec3.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl9}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title9}</h5>
//             <p class="card-text">${desc9}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr9}</small>
//           </div>
//         </div>
//     </div>
//   `

//   title10 = ndata.results[10].title
//   desc10 = ndata.results[10].description
//   imgurl10 = ndata.results[10].image_url
//   ftr10 = ndata.results[10].creator

//   sec3.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl10}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title10}</h5>
//             <p class="card-text">${desc10}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr10}</small>
//           </div>
//         </div>
//     </div>
//   `

//   title11 = ndata.results[11].title
//   desc11 = ndata.results[11].description
//   imgurl11 = ndata.results[11].image_url
//   ftr11 = ndata.results[11].creator

//   sec3.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl11}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title11}</h5>
//             <p class="card-text">${desc11}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr11}</small>
//           </div>
//         </div>
//     </div>
//   `


//   title12 = ndata.results[12].title
//   desc12 = ndata.results[12].description
//   imgurl12 = ndata.results[12].image_url
//   ftr12 = ndata.results[12].creator

//   sec4.innerHTML = `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl12}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title12}</h5>
//             <p class="card-text">${desc12}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr12}</small>
//           </div>
//         </div>
//     </div>
//   `


//   title13 = ndata.results[13].title
//   desc13 = ndata.results[13].description
//   imgurl13 = ndata.results[13].image_url
//   ftr13 = ndata.results[13].creator

//   sec4.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl13}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title13}</h5>
//             <p class="card-text">${desc13}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr13}</small>
//           </div>
//         </div>
//     </div>
//   `

//   title14 = ndata.results[14].title
//   desc14 = ndata.results[14].description
//   imgurl14 = ndata.results[14].image_url
//   ftr14 = ndata.results[14].creator

//   sec4.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl14}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title14}</h5>
//             <p class="card-text">${desc14}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr14}</small>
//           </div>
//         </div>
//     </div>
//   `

//   title15 = ndata.results[15].title
//   desc15 = ndata.results[15].description
//   imgurl15 = ndata.results[15].image_url
//   ftr15 = ndata.results[15].creator

//   sec4.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl15}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title15}</h5>
//             <p class="card-text">${desc15}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr15}</small>
//           </div>
//         </div>
//     </div>
//   `

//   title16 = ndata.results[16].title
//   desc16 = ndata.results[16].description
//   imgurl16 = ndata.results[16].image_url
//   ftr16 = ndata.results[16].creator

//   sec4.innerHTML += `
//     <div class="col">
//         <div class="card h-100">
//           <img src="${imgurl16}" class="card-img-top" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${title16}</h5>
//             <p class="card-text">${desc16}</p>
//           </div>
//           <div class="card-footer">
//             <small class="text-body-secondary">Author - ${ftr16}</small>
//           </div>
//         </div>
//     </div>
//   `

// }

