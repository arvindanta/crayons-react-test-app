
import { useRef} from 'react'
 import { FwButton1, TranslationController} from "@freshworks/crayons-datatable-1/react";
 
// import {FwButton, FwDropdownButton, FwModal,
// FwDatepicker,
// FwToastMessage, TranslationController} from "@freshworks/crayons-1/react"
 import { toast,toastCenter  } from './util'
import "./App.css"

//import Child from './Child'
//import {AddContact, Agent, Alert} from '@freshworks/crayons-icons'
function App() {
  // TranslationController.setTranslations({
  //   de: {
  //     add:'sss',
  //     cancel:'ssssasd',
  //     button:'sssswwhjndjsdjj'
  //   }, 
  //   en:{
  //     add:'ss123s',
  //     cancel:'ssssasd',
  //     button:'btbnts'
  //   }
  // })
  
  const el = useRef<any>(null)
  const el1 = useRef<any>(null)

  const pl1 = useRef<any>(null)
  const pl2 = useRef<any>(null)

  return <div><h1>Freshworks widget config</h1>

<FwButton1 onFwClick={() => console.log("asdello")}>Compound Button</FwButton1>
{/* 
    <FwToastMessage type='success' id="custom-temp">
      <div>
        <FwButton>crayons button here</FwButton>
        <p className="cus-style">hello custom style outside of shadow dom</p>
      </div>
    </FwToastMessage>
   


  <FwButton onClick={() => console.log("ello")}>Atomic button</FwButton>   
  <FwButton onClick={() => toast.trigger({content:'toast1', type:'warning', timeout:2000})}>trigger toast1 </FwButton>
  <FwButton onClick={() => toastCenter.trigger({content:'toast ', type:'error', timeout:2000})}>trigger toast </FwButton>
  <FwButton onClick={() => toast.trigger({content:'toast123 ', type:'warning', timeout:2000})}>trigger toast1 </FwButton>
  <FwButton onClick={() => toast.trigger({contentref:'#custom-temp'})}>trigger custom </FwButton>
  */}
  <br/>
  {/* <Child/> */}
 
  {/* <FwIcon color="red" size={30}
  
  icon={AddContact}
  
  /> <br/> */}

  {/* <FwIcon color="pink" size={30}
 name="add-contact"
  /> <br/>

  <FwIcon color="red" size={30}
  
  icon={crayonsIconAddContact}
  
  /> <br/>


<FwIcon color="red" size={30}
  
  icon={crayonsIconAgent}
  
  /> <br/> */}
{/* <FwIcon color="green" size={30}
  
  icon={crayonsIconAlert}
  
  /> <br/> */}

  {/* <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/> */}

{/* 
  <FwIcon name="add-contact" color="red" size={50}/> <br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="add-contact" color="red" size={50}/><br/>
  <FwIcon name="alert" size={50} lazy color="green"/><br/>
  <FwIcon name="agent" size={50} lazy color="green"/><br/>  */}


  <br/>
  <h1>hello</h1>

  {/* {url: ""}


  setUrlConfig({
    base
  }) */}

  {/* <FwIcon  path="assets1" name="aa" size={50} color="green" lazy/>
  <FwIcon path="assets1" name="aa" size={50} color="blue" lazy/> */}

  {/* // build optm for custom icons
  // set base urlconfig at root level
  // script hooks, config hooks
  // build script invoke

build: // crayons-icons/icons - cli command ->
config: // config -> crayons-icons/icons 
group icons :  */}
{/* 
<br/>
<br/>
  <FwProgressLoader show ref={pl1}></FwProgressLoader>
  <FwProgressLoader parent="#container1" ref={pl2}></FwProgressLoader>

  <div id="container1"><p> You can have multiple progress loaders in the page. Pass a `selector` as a `parent` prop to the component. The progress loader will be displayed in the provided selector</p></div>

<br/>
<br/>
<br/>

<div id="container2"><p> Multiple containers can be used for loaders</p></div>

<br/>
<br/>
<br/>

  <FwButton onClick={() => pl1.current.show=true}>Show root loader - comp - via prop</FwButton>
  <FwButton onClick={() => pl1.current.show=false}>Hide root loader - comp - via prop</FwButton>
  <FwButton onClick={() => pl1.current.done()}>Hide root loader - comp - via method</FwButton>

  <FwButton onClick={() => pl2.current.start()}>Start container loader via method</FwButton>
  <FwButton onClick={() => pl2.current.done()}>Hide container loader via method</FwButton>

  <FwButton onClick={() => loaderRoot.start()}>Show root loader - controller - via prop</FwButton>
  <FwButton onClick={() => loaderRoot.done()}>Hide root loader - controller - via method</FwButton>



  <FwButton onClick={() => loaderCustom.start()}>Start container loader  - controller - via method</FwButton>
  <FwButton onClick={() => loaderCustom.done()}>Hide container loader - controller - via method</FwButton> */}

  <br/>
  <br/>
  {/* { <FwDropdownButton searchable label="Click me" split color="danger" placeholder="efwewe">
    <div slot="dropdown-options">
      <option id="1" value="Ullu">Ullu</option>
      <option id="2" value="Hotstar">Hotstar</option>
      <option id="3" value="Amazon">Amazon</option>
      <option id="4" value="Netflix">Netflix</option>
      <option id="5" value="Mx player">Mx Player</option>
      <option id="6" value="Share it">Share it</option>
      <option id="7" value="Prime">Amazon Prime</option>
      <option id="8" value="Watch32">Watch32</option>
      <option id="9" value="YTS Movies">YTS Movies</option>
      <option id="10" value="Telegram">Telegram</option>
      <option id="11" value="Solar Movies">Solar Movies</option>
      <option id="12" value="Yifi torrents">Yifi torrents</option>
    </div> 
  </FwDropdownButton> }  
  <br/>
  <br/>
  <FwButton1 onFwClick={() => console.log("asdello")}>Compound Button</FwButton1>
   */}
  <br/>
  {/* <FwToast id="type_toast" ref={el1}></FwToast> */}

  {/* <FwButton modalTriggerId='welcome-large'> Open Large Modal </FwButton>
<FwButton
onClick={
  () => {
    console.log(el.current.open())
}}
>as</FwButton>

  <FwModal id='welcome-large' title-text="Welcome" size="large" submit-disabled="true" ref={el}>
    Hello, Welcome to Crayons
  </FwModal>

<FwButton onClick={() => el1.current.trigger({type:'success', content: 'Successfullly triggered'})}>Success</FwButton> */}

{/* <FwButton onClick={() => document.querySelector('#type_toast').trigger({type:'success', content: 'Successfullly triggered'})}>Success</FwButton> */}
{/* <FwButton onClick={document.querySelector('#type_toast').trigger({type:'error', content:'something went wrong!'})">Error</FwButton>
<FwButton onClick={document.querySelector('#type_toast').trigger({type:'warning', content:'This is a warning!'})">Warning</FwButton>
<FwButton onClick={document.querySelector('#type_toast').trigger({type:'inprogress', content:'Request is in progress'})">Inprogress</FwButton> */}

{/* <FwRadioGroup name="Profile" value="au" allowEmpty>
          <FwRadio label="Auditory" value="au"></FwRadio>
          <FwRadio label="Visual" value="vi"></FwRadio>
          <FwRadio label="Restless" value="re"></FwRadio>
        </FwRadioGroup> */}

{/* 
<FwDatepicker style={{float:"left"}}></FwDatepicker>
  <FwDatepicker mode="range" style={{float:"left",marginLeft:"250px"}}></FwDatepicker>


        <label>Single date picker</label><br/>
    <FwDatepicker value="22-05-2020" dateFormat="DD-MM-YYYY"></FwDatepicker>
    <label>A date range picker</label><br/>
    <FwDatepicker mode="range" minDate="10-05-2020" maxDate="10-07-2020" fromDate="12-05-2020" toDate="14-05-2020"></FwDatepicker> */}

  </div>;
}

export default App;
