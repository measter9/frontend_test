import styles from './styles.module.css'
import data from './data.json'
import { useState } from 'react'
function Main() {

    var curData = data
    var rand = ""
    const [radio, setRadio] = useState()


    const handleRadioChange = (e)=>{
        setRadio(e.currentTarget.value)
    }

    const add = ()=>{
        console.log(radio)
        const el = document.getElementById("content")
        if(radio == undefined){
            alert("wybierz opcje w bloku pierszym")
            return;
        }
        if(radio == 3){
            
           rand = curData[Math.floor(Math.random()*curData.length)]
           if(rand == undefined){
            alert("wykorzystano wszytkie elemnty")
            return
            }
           console.log(rand)
            el.innerHTML += "<div>"+rand+"</div>"
            curData.splice(curData.indexOf(rand),1)
        }else{
        el.innerHTML += "<div>"+curData.splice(radio-1,1)+"</div>"
        
        }
        console.log(curData)
    }

    const set = ()=>{
        console.log(radio)
        console.log(curData)
        const el = document.getElementById("content")
        if(radio == undefined){
            alert("wybierz opcje w bloku pierszym")
            return;
        }
        if(radio == 3){
            
            rand = curData[Math.floor(Math.random()*curData.length)]
            if(rand == undefined){
                alert("wykorzystano wszytkie elemnty")
                return
            }
            console.log(rand)
             el.innerHTML = "<div>"+rand+"</div>"
             curData.splice(curData.indexOf(rand),1)
         }else{
        el.innerText = data[radio-1]
         }
    }

    return (

        <main className={styles.main}>
            <h1 className={styles.h1}>Nagłówek H1</h1>

            <div className={styles.container}>
                <div className={styles.vertical}>
                    <h2 className={styles.name}>Blok Pierwszy</h2>
                    <div>
                        <input onChange={handleRadioChange} className={styles.radio} type='radio' name='radio' id='1' value="1"></input>
                        <label htmlFor="1">opcja Pierwsza</label>
                    </div>
                    <div>
                        <input onChange={handleRadioChange} className={styles.radio} type='radio' name='radio' id='2' value="2"></input>
                        <label htmlFor='2'>opcja druga</label>
                    </div>
                    <div>
                        <input onChange={handleRadioChange} className={styles.radio} type='radio' name='radio' id='3' value="3"></input>
                        <label htmlFor='3'>opcja trzecia</label>
                    </div>
                </div>
                <div className={styles.vertical}>
                    <h2 className={styles.name}>Blok drugi</h2>
                    <button onClick={add} className={styles.button}>doklej</button>
                    <button onClick={set} className={styles.button}>zastąp</button>
                </div>
                <div className={styles.third}>
                    <h2 className={styles.namelong}>Blok z długą nazwą która sama się przytnie</h2>
                    <div id='content' className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id feugiat purus. Vivamus vel consequat ipsum. Praesent malesuada, nunc at scelerisque mattis, diam elit scelerisque ante, in aliquet nibh purus ac lorem. Sed vehicula massa neque, sit amet lobortis felis faucibus ut. Cras vitae egestas leo. Morbi at egestas est. Nulla facilisi. Mauris facilisis vulputate leo, a iaculis felis mollis nec. Phasellus vestibulum tristique libero vel commodo. Nam mollis ullamcorper sem vel cursus. Curabitur ac est lectus. Vestibulum eros erat, interdum commodo pretium vel, suscipit imperdiet leo. Nunc aliquet lobortis augue sit amet vulputate. Sed sagittis molestie eros, vitae efficitur nisl sagittis in. Pellentesque id neque eget dolor maximus convallis. Nunc ut vulputate risus.Lorem ipsum
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main