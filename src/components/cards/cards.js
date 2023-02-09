import React from 'react';
import styles from '../cards/cards.scss';

function Cards({ results }) {
  let display;

  if (results) {
    //map fonksiyonu ile resulttan gelecek olan tüm
    //değerleri x değişkenine aktarıp tek tek oluşturdum.
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        // Her karta bir id verdim.
        <div key={id} className="col-4 mb-4   position-relative ">
          <div className="cards mb-3 rounded p-3">
            {/* Karakterlerin img bilgisi için */}
            <img src={image} alt="" className=" img-fluid rounded " />
            {/* Karakterin bilgilerini tutar */}
            <div className="content">
              {/* isim */}
              <div className="name fs-4 fw-bold mb-4 ">{name}</div>
              <div className="">
                <div className="fs-8">Görüldüğü Son yer</div>
                <div className="fs-6  ">{location.name}</div>
              </div>
            </div>
          </div>
          {/* Class name e değişklen atadım sass dosyasında rengini yaşıyor ise yeşil ölü ise kırmızı yapacağım */}
          {(() => {
            if (status === 'Dead') {
              return (
                <div
                  className={`${styles.badge} badge bg-danger position-absolute bg-danger `}
                >
                  {status}
                </div>
              );
            } else if (status === 'Alive') {
              return (
                <div
                  className={`${styles.badge} badge bg-danger position-absolute bg-success `}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} badge bg-danger position-absolute bg-secandary `}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = 'Böyle bir karakter yok';
  }
  return <> {display}</>;
}

export default Cards;
