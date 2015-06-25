/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var isCelu=false;
var listaMp3=[];
var indexMp3;
var media=null;
var filesystem;
var directoryReader;
var playing=false;


document.addEventListener("deviceready", onDeviceReady, false); 
document.addEventListener("menubutton", menuKeyDown, true);

function menuKeyDown() {
    alert('Menu button pressed.');
}

function onDeviceReady() {
    isCelu=true;    
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function gotFS(fileSystem) {
    directoryReader = fileSystem.root.createReader();
    directoryReader.readEntries(getFiles)    
}

function getFiles(entries){           
    alert("Cargando archivos:");
    var i;
    for (i=0; i<entries.length; i++) {
        if (entries[i].name.substr(-3,3)==='mp3'){            
            listaMp3.push(entries[i].toURL());
        }
    }

}

function fail(error) {
    alert(error.code);
} 

function play(){

    if (media == null){
        media = new Media(listaMp3[0], onSuccess, onError);
    }
    if (playing){
        media.pause();
        $("#playpause").attr('src','img/play.png');
        playing = false;
    }else{
        media.play();
        $("#playpause").attr('src','img/stop.png');
        playing = true;
    }

}


// onSuccess Callback
//
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback 
//
function onError(error) {
    alert('code: '    + error.code    + '\n' + 
          'message: ' + error.message + '\n');
}




