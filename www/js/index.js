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
var app = {
    // Application Constructor
    var isCelu=false;
    var listaMp3;
    var indexMp3;
    initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
},

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {                
        isCelu=true;        
        //TODO: ACA BUSCO LOS ARCHIVOS DE LA SD Y GENERO UNA LISTA
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, this.addFilesToList, this.notExistFilesistem);        
    },
    addFilesToList: function(fs){
     console.log(fs);
    },
    notExistFilesistem: function(){
    
    },
    playMusic: function(){
    //TODO: Comenzar con la reproduccion (desde indexMp3)
    },
    stopMusic: function(){
    },
    back: function(){
    },
    next: function(){
    },

};
/*
function success(entries) {
    var i;
    for (i=0; i<entries.length; i++) {
        console.log(entries[i].name);
    }
}

function fail(error) {
    alert("Failed to list directory contents: " + error.code);
}

// Get a directory reader
var directoryReader = dirEntry.createReader();

// Get a list of all the entries in the directory
directoryReader.readEntries(success,fail);

*/
