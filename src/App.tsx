import Header from 'components/Header/Header';
import ProductsList from 'components/ProductsList/ProductsList';
import Filters from 'components/Filters/Filters';
import Popup from 'components/Popup/Popup';
import Footer from 'components/Footer/Footer';

import './styles/reset.scss';
import './styles/styles.scss';
import { useCallback, useState } from 'react';

function App() {
  const [isLimitPopupOpen, setLimitPopupOpen] = useState(false);

  const openLimitPopup = useCallback(() => {
    setLimitPopupOpen(true);
  }, []);

  const closeLimitPopup = useCallback(() => {
    setLimitPopupOpen(false);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Filters />
        <ProductsList openPopup={openLimitPopup} />
      </main>
      <Footer />
      <Popup
        isPopupOpen={isLimitPopupOpen}
        closePopup={closeLimitPopup}
        text="Извините, все слоты заполнены"
      />
    </>
  );
}

export default App;
