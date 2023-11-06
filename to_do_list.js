window.onload = () => {

    const content = document.getElementById('content');
    const text_list = document.createElement('li');

    openMemo = () => {
        document.getElementById('text-list').style.display = 'block';
        document.getElementById('text').style.display = 'block';

        const button = document.getElementsByTagName('button');
        for(let i=0; i<button.length; i++){
            button[i].style.display = 'inline-block';
        }
        document.getElementById('insert-btn').style.display = 'none';
    }
    
    
    

   


}