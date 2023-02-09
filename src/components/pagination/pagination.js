import React from 'react';

// Sayfa numarasını ayarlayacak
function Paginagiton({ PageNumber, setPageNumber }) {
  //Next butonunu çalıştırır
  let next = () => {
    setPageNumber((x) => x + 1);
  };

  //Prev butonunu Çalıştırır
  let prev = () => {
    setPageNumber((x) => x - 1);
  };
  return (
    <div className=" container d-flex justify-content-center gap-5 my-5 ">
      {/* Onclick metodu ile prev fonksiyonunu atadım */}
      <button onClick={prev} className=" btn btn-primary ">
        Prev
      </button>
      {/* Onclick ile next fonksiyonunu atadım */}
      <button onClick={next} className=" btn btn-primary ">
        Next
      </button>
    </div>
  );
}

export default Paginagiton;
