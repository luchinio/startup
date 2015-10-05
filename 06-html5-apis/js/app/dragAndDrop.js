'use strict';

document.addEventListener('DOMContentLoaded', function(event) { 

    var holder = document.getElementById('holder'),
        status = document.getElementById('status');

    if (typeof window.FileReader === 'undefined') {
        status.className = 'fail';
    } else {
        status.className = 'success';
        status.innerHTML = 'File API & FileReader available';
    }

    holder.ondragover = function() {
        this.className = 'hover';
        return false;
    };

    holder.ondragend = function() {
        this.className = '';
        return false;
    };
    
    holder.ondrop = function(e) {
        this.className = '';
        e.preventDefault();

        var file = e.dataTransfer.files[0],
            reader = new FileReader();
        reader.onload = function(event) {
            console.log(event.target);
            holder.innerText = event.target.result;
        };
        console.log(file);
        reader.readAsText(file);

        return false;
    };

});
