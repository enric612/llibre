import "./index.css";
import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

function App() {

  const flipBook = useRef(null);

  let i = 0;
  let pagines = []
  // Ja farem aso mes PRO
  for (i = 2; i < 42; i++) {
    pagines.push(i);
  }
  return (
    <div>
      <h1>
        El planeta Llibri
      </h1>
      <div>
        <HTMLFlipBook
          width={945}
          height={709}
          size="stretch"
          minWidth={315}
          maxWidth={945}
          minHeight={400}
          maxHeight={709}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
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
                    <img src={"/pagines/" + p + ".jpg"} alt={"pagina " + p } />
                  </div>
                </div>
              </div>
            )
          })}

          <div className="page page-cover" data-density="hard">
            <div className="page-content">
            <h2 className="page-header"></h2>
                  <div className="page-image">
                    <img src={"/pagines/" + 42 + ".jpg"} alt={"pagina " + 42 } />
                  </div>
            </div>
          </div>


        </HTMLFlipBook>

      </div>

      <hr />

      <button onClick={() => flipBook.current.pageFlip().flipPrev()}>
        Anterior
      </button>

      <button onClick={() => flipBook.current.pageFlip().flipNext()}>
        Següent
      </button>


    </div>
  );
}

export default App;
