window.onload = () => {

    const write_wrapper = document.getElementById('write-wrapper');
    const text_list = document.getElementById('text-list');
    const insert_text = document.getElementById('insert-text');
    const button = document.getElementsByTagName('button');
    const insert_btn = document.getElementById('insert-btn');
    const text_result = document.getElementById('text-result');
    
    const new_date = new Date();
    // console.log(new_date);

    const year = new_date.getFullYear();
    const month = new_date.getMonth() + 1;
    const date = new_date.getDate();
    const day = new_date.getDay();
    let day_of_the_week = '';

    switch (day) {
        case 0: day_of_the_week = 'sun';
            break;
        case 1: day_of_the_week = 'mon';
            break;
        case 2: day_of_the_week = 'tue';
            break;
        case 3: day_of_the_week = 'wed';
            break;
        case 4: day_of_the_week = 'thu';
            break;
        case 5: day_of_the_week = 'fri';
            break;
        case 6: day_of_the_week = 'sat';
            break;
    };

    const today = document.getElementById('today').innerHTML = `${year}. ${month}. ${date}. (${day_of_the_week})`;

    /* 입력 버튼 눌렀을 때 */
    openMemo = () => {
        write_wrapper.style.display = 'flex';
        insert_text.style.display = 'inline-block';

        for (let i = 0; i < button.length; i++) {
            button[i].style.display = 'inline-block';
        }
        insert_btn.style.display = 'none';
    }

    /* 추가 버튼 눌렀을 때 */
    addMemo = () => {
        if (insert_text.value.trim() == '') {
            alert('할 일을 입력해주세요');
        } else {
            text_list.style.display = 'block';
            text_result.innerHTML = insert_text.value;
            insert_text.value = '';
        }

        
    }

    /* 엔터키 이벤트 */
    enterEvent = () => {
        if (window.event.keyCode == '13') {
            addMemo();
        }
    }


    /* 삭제줄 표시 */
    delLine = () => {
        
        if(text_result.classList.contains('del-line')){
            text_result.classList.remove('del-line');
        }else{
            text_result.classList.add('del-line');
        }
    }









}