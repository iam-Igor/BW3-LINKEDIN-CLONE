const Pagenotfound = () => {
    return (
        <div className='text-center mt-5'>
        <img src='https://cdn.discordapp.com/attachments/1153233631746211870/1174276464082944021/Screenshot_2023-11-15_alle_10.14.45.png?ex=6567012e&is=65548c2e&hm=16d9f1f4530fbcf6846597b33f8a57991452e8062ea8f05e9f1284ceb92eb442&'
        alt='img not found'
        className='img-fluid'
        style={{ width: "40%" }} />
        <h4>Questa pagina non esiste</h4>
        <p className='text-secondary'>Controlla l'URL o torna nella home page di <br></br>Linkedln.</p>
        <button type="button" className="btn rounded-pill mt-2" id="button" disabled>Vai al tuo Feed</button>
       <div className="mt-5">
  <ul className="d-flex text-center list-unstyled ms-5">
    <li>
      <div className="row">
        <div className="col-6">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"
            alt="Immagine copy"
            className="img-fluid"
          />
        </div>
        <div className="col-6 d-flex align-items-center">
          <div className="text-secondary ">
            &copy; {new Date().getFullYear()} 
          </div>
        </div>
      </div>
    </li>
    <li>
    <p className="text-secondary ms-3 ">Contratti di licenza</p>
    </li>
     <li>
    <p className="text-secondary ms-3 ">Informazioni sulla privacy</p>
    </li>
     <li>
    <p className="text-secondary ms-3 ">Linee guida dalla comunity</p>
    </li>
     <li>
    <p className="text-secondary ms-3 ">Informativa sui cookie</p>
    </li>
     <li>
    <p className="text-secondary ms-3 ">Informativa sui copyright</p>
    </li>
     <li>
    <p className="text-secondary ms-3 ">Controlli ospite</p>
    </li>
    
  </ul>
</div>
</div>

        
    )
}

export default Pagenotfound;