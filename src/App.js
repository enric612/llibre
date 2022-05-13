import { useCallback, useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

function App() {

  const flipBook = useRef(null);

  const [ultima, setUltima] = useState(false);
  const [primera, setPrimera] = useState(true);

  let i = 0;
  let pagines = []
  // Ja farem aso mes PRO
  for (i = 2; i < 42; i++) {
    pagines.push(i);
  }

  const onFlip = useCallback((e) => {

    if (flipBook.current.pageFlip().getPageCount() === e.data + 1) {
      setUltima(true)
    } else {
      setUltima(false)
    }
    if (e.data === 0) {
      setPrimera(true)
    } else {
      setPrimera(false)
    }
  }, []);

  useEffect(() => {
    document.title = "Els Viatgers del planeta Llibri";
  }, []);

  return (
    <div>
      <h1 className='text-violet-900'>
        Els Viatgers del planeta Llibri
      </h1>
      <div className="my-4 border-double border-4 border-violet-700 bg-violet-100">
        <HTMLFlipBook
          width={945}
          height={709}
          size="stretch"
          minWidth={310}
          maxWidth={945}
          minHeight={230}
          maxHeight={709}
          maxShadowOpacity={0.5}
          showCover={true}
          drawShadow={true}
          flippingTime={1500}
          mobileScrollSupport={true}
          onFlip={onFlip}
          ref={flipBook}
        >
          <div className="page page-cover" data-density="hard">
            <div className="page-content">
              <img src="/pagines/1.jpg" alt="pagina 1" />
            </div>
          </div>

          {pagines.map(p => {
            return (
              <div key={p} className="page">
                <div className="page-content">
                  <h2 className="page-header"></h2>
                  <div className="page-image">
                    <img src={"/pagines/" + p + ".jpg"} alt={"pagina " + p} />
                  </div>
                </div>
              </div>
            )
          })}

          <div className="page page-cover" data-density="hard">
            <div className="page-content">
              <h2 className="page-header"></h2>
              <div className="page-image">
                <img src={"/pagines/" + 42 + ".jpg"} alt={"pagina " + 42} />
              </div>
            </div>
          </div>


        </HTMLFlipBook>

      </div>

      <hr className="m-4" />

      <div className="relative h-32 w-full">
        <button className="absolute left-2 btn-red"
          disabled={primera}
          onClick={primera ? (() => { }) : (() => flipBook.current.pageFlip().flipPrev())}>
          Anterior
        </button>

        <button className="absolute right-2 btn-blue"
          disabled={ultima}
          onClick={ultima ? (() => { }) : (() => flipBook.current.pageFlip().flipNext())}>
          Següent
        </button>
      </div>



    </div>
  );
}

export default App;
