window.onload = () => {

    const write_wrapper = document.getElementById('write-wrapper');
    const insert_text = document.getElementById('insert-text');
    const button = document.getElementsByTagName('button');
    const insert_btn = document.getElementById('insert-btn');

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
    addText = () => {

        if (insert_text.value.trim() == '') {
            alert('할 일을 입력해주세요');
        } else {
            const li = document.createElement('li');
            li.setAttribute('id', 'li');

            const text_list = document.createElement('div');
            text_list.setAttribute('class', 'text-list');

            /* 체크박스 */
            const chkBox = document.createElement('input');
            chkBox.setAttribute('type', 'checkbox');
            chkBox.setAttribute('class', 'chkBox');

            /* 입력한 문장 */
            const text_result = document.createElement('p');
            text_result.setAttribute('class', 'text-result');
            text_result.setAttribute('id', 'text-result');
            text_result.addEventListener('dblclick', changeText);

            /* 완료버튼 */
            const complete_btn = document.createElement('button');
            complete_btn.innerHTML = '완료';
            complete_btn.setAttribute('class', 'complete-btn');
            complete_btn.addEventListener('click', completeText);


            text_list.appendChild(chkBox);
            text_list.appendChild(text_result);
            text_list.appendChild(complete_btn);


            li.appendChild(text_list);
            const content = document.getElementById('content');
            content.appendChild(li);

            text_list.style.display = 'block';
            text_result.innerHTML = insert_text.value;
            insert_text.value = '';

        }

    }

    /* 완료 문장 삭제줄 표시 */
    completeText = (e) => {
        const text_result = e.target.previousSibling;

        if (text_result.classList.contains('del-line')) {
            text_result.classList.remove('del-line');
        } else {
            text_result.classList.add('del-line');
        }
    }

    /* 문장 수정 */
    changeText = (e) => {
        const text_list = document.getElementsByClassName('text-list');
        insert_text.value = e.target.innerHTML;


        insert_text.addEventListener('change', (event) => {
           e.target.innerHTML = event.target.value;
           
        })
        
    }

    /* 체크된 문장 삭제 */
    checkDelete = () => {
        const checkBox = document.querySelectorAll('.chkBox');
        const text_list = document.getElementsByClassName('text-list');
        const text_result = document.querySelectorAll('.text-result');

        if (text_list.length == 0) {
            confirm('삭제할 리스트가 없습니다.');
        }

        checkBox.forEach((el) => {
            if (el.checked == true) {
                el.parentElement.remove();
            }
        })
    }

    /* 체크박스 전부 체크 or 해제 */
    allChecked = () => {
        const checkBox = document.querySelectorAll('.chkBox');
        let allChecked = Array.from(checkBox).every(el => el.checked);
        const checkedCount = document.querySelectorAll('input[type=checkbox]:checked').length;

        checkBox.forEach(el => el.checked = !allChecked);
    }

    /* 엔터키 이벤트 */
    enterEvent = () => {
        if (window.event.keyCode == '13') {
            addText();
        }

    }



}