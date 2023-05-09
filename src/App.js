import $ from 'jquery';
import { ContactsProvider } from './Components/Contacts/ContactsContext';
import { ContactProvider } from './Components/ContactContext';
import Contacts from './Components/Contacts/Contacts';
import { useEffect } from 'react';


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
        <ContactsProvider>
          <ContactProvider>
            <Contacts />
          </ContactProvider>
        </ContactsProvider>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
