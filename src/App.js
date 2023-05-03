import $ from 'jquery';
import Contacts from './Components/Contacts/Contacts';
import TileList from './Components/Contacts/TileList/TileList';
import { useState, useEffect } from 'react';


function App() {
  const jQueryCode = () =>{
    var htmlThemeAttr =  $("html");
    var themeSwitch = $("#flexSwitchCheckChecked");
    
    $(themeSwitch).change(function(){
      if(themeSwitch.is(':checked')){
        htmlThemeAttr.attr("data-bs-theme","dark");
      }else if(themeSwitch.not(':checked')){
        htmlThemeAttr.attr("data-bs-theme","light");
      }
    })

    $(themeSwitch).mouseup(function(){
      $(this).blur();
  })
}

  useEffect(() => {
      jQueryCode();
  });

  return (
    <>
      <header>
      <div className='d-flex p-3'>
          <div class="form-check form-switch mx-1">
            <input class="form-check-input me-0" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
          </div>
      </div>
      </header>
      <main>
        <Contacts/>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
