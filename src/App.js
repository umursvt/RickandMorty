import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { useEffect, useState } from 'react';
import Cards from './components/cards/cards';
import Paginagiton from './components/pagination/pagination';
import Search from './components/search/search';

function App() {
  //Arama çubuğu için hook
  //Burada useState içini boş bırakıyorum çünkü searchbardan gelen arama sonucu atayacağım
  let [search, setSearch] = useState('');

  // Sayfa numaraları için hook kullandım
  let [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber);
  //Apiden gelen data için hook kullandım
  let [fetchData, updateFetchData] = useState([]);
  //Apiden gelen datayı ayıkladım. (Results datasında tüm karakter bilgileri mevcut)(info değişkeni sayfalandırma için var)
  let { info, results } = fetchData;

  //Api linki
  let api = ` https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  // Hook ile Apiden geleni Fetch'ledim.
  //Sayfa değişince asenkron kod çalışıp o sayfaya ait bilgileri getirecek.
  useEffect(() => {
    (async function () {
      //Asenkron kod
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      {/* Başlık */}
      <h1 className=" text-center ubuntu my-4 ">
        Rick and Moprty <span className=" text-primary "> Karakterler!!!</span>
      </h1>
      <Search setSearch={setSearch} />
      <Paginagiton setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-8">
            <div className="row">
              {/* Cards komponentine Apiden gelen sonuçları ekledim. */}
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      {/* Sayfa numarasını ayarlayacak */}
    </div>
  );
}

export default App;
