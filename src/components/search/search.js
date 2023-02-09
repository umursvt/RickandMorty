import React from 'react';
import '../search/search.scss';

function Search({ setSearch }) {
  return (
    // Search buton ve form bölümü
    <form className=" d-flex justify-content-center my-5 gap-2 ">
      <input
        onChange={(e) => {
          //Bu satır apideki name değişkenine eklenecek ve hook(UseEffect) ile o değişken fonksiyon tarafından döndürülecek
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Karakter Ara"
        className="input"
      />
      <button className=" btn btn-primary fs-4 ">Search</button>
    </form>
  );
}

export default Search;
